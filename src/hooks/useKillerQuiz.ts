import { useState } from 'react';
import { QuizState, UserData, OnboardingData, QuizStep } from '../types';
import { metabolismTypes, calculateResult as getMetabolismType } from '../data/killerQuizData';
import { quizService } from '../services/quiz.service';

export const useKillerQuiz = () => {
  const [state, setState] = useState<QuizState>({
    step: 'welcome',
    currentQuestion: 0,
    answers: [],
    onboardingData: {
      firstName: '',
      gender: null,
      ageGroup: null
    }
  });

  const [userData, setUserData] = useState<UserData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: null,
    ageGroup: null
  });

  const [result, setResult] = useState<any>(null);
  const [secondaryResult, setSecondaryResult] = useState<any>(null);
  const [mistakeCounts, setMistakeCounts] = useState<Record<string, number>>({});
  const [mistakeIntensity, setMistakeIntensity] = useState<number>(0);
  const [isBlended, setIsBlended] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnswer = (typeId: string) => {
    const newAnswers = [...state.answers, typeId];
    setState((prev: QuizState) => ({
      ...prev,
      answers: newAnswers,
      currentQuestion: prev.currentQuestion + 1,
      step: prev.currentQuestion === 10 ? 'form' : 'questions' // We have 11 questions (0-10)
    }));
  };

  const calculateResult = () => {
    // Get the metabolism type using the external calculation function
    const primaryProfile = getMetabolismType(state.answers);
    
    // Count frequency of each type in answers
    const counts: Record<string, number> = state.answers.reduce((acc: Record<string, number>, type: string) => {
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Find the most frequent type
    let maxCount = 0;
    let dominantType = "";
    let secondaryType = "";
    let secondaryCount = 0;

    Object.entries(counts).forEach(([type, count]) => {
      if (count > maxCount) {
        // Move current max to secondary
        secondaryType = dominantType;
        secondaryCount = maxCount;
        // Set new max
        maxCount = count;
        dominantType = type;
      } else if (count > secondaryCount) {
        // Update secondary if greater than current secondary
        secondaryCount = count;
        secondaryType = type;
      }
    });

    // Calculate type intensity and blend
    const totalQuestions = state.answers.length;
    const intensityValue = totalQuestions > 0 ? (maxCount / totalQuestions) * 100 : 0;
    const hasSignificantSecondary = secondaryCount > 0 && secondaryCount / maxCount >= 0.7;

    // Map type identifiers to display names
    const typeMap: Record<string, string> = {
      'StressSpiral': 'The Stress Spiral',
      'HormoneHavoc': 'The Hormone Havoc',
      'OutdatedOS': 'The Outdated Operating System',
      'DisconnectionDilemma': 'The Disconnection Dilemma',
    };

    // Get the secondary profile if applicable
    const secondaryProfile = hasSignificantSecondary 
      ? metabolismTypes.find(p => p.type === typeMap[secondaryType])
      : null;

    return { 
      profile: primaryProfile, 
      secondaryProfile,
      dominantType,
      mistakeIntensity: intensityValue,
      mistakeCounts: counts,
      isBlended: hasSignificantSecondary 
    };
  };

  const updateOnboarding = (data: Partial<OnboardingData>) => {
    setState((prev: QuizState) => ({
      ...prev,
      onboardingData: { ...prev.onboardingData, ...data }
    }));
  };

  const nextStep = () => {
    setState((prev: QuizState) => {
      const steps: QuizStep[] = ['welcome', 'name', 'gender', 'age', 'questions', 'form', 'result'];
      const currentIndex = steps.indexOf(prev.step);
      const nextStep = steps[currentIndex + 1];
      return { ...prev, step: nextStep };
    });
  };

  const handleFormSubmit = async (formData: Partial<UserData>) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const fullUserData = {
        ...userData,
        ...state.onboardingData,
        ...formData,
        ageGroup: formData.ageGroup || userData.ageGroup || state.onboardingData.ageGroup || null
      };

      const { 
        profile, 
        secondaryProfile, 
        dominantType, 
        mistakeIntensity: intensity, 
        mistakeCounts: counts,
        isBlended: hasBlend
      } = calculateResult();
      
      setResult(profile);
      setSecondaryResult(secondaryProfile);
      setMistakeCounts(counts);
      setMistakeIntensity(intensity);
      setIsBlended(hasBlend);

      try {
        // Try to save to server but don't block moving to results if it fails
        await quizService.saveQuizResults(
          fullUserData,
          0, // No score in killer framework
          dominantType,
          state.answers.map((_: string) => 0) // Convert type answers to scores (all 0)
        );
      } catch (serverError) {
        console.error('Error saving quiz results to server:', serverError);
        setError('Failed to save quiz results, but your results are still available.');
        // Continue to results page despite the error
      }

      // Always move to results page, even if saving to server fails
      setState((prev: QuizState) => ({ ...prev, step: 'result' }));
    } catch (err) {
      console.error('Error calculating quiz results:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    state,
    userData,
    result,
    secondaryResult,
    mistakeCounts,
    mistakeIntensity,
    isBlended,
    isSubmitting,
    error,
    handleAnswer,
    handleFormSubmit,
    calculateResult,
    setUserData,
    updateOnboarding,
    nextStep
  };
}; 