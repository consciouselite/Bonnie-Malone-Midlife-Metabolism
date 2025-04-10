import { AnimatePresence } from 'framer-motion';
import { QuizProgress } from './components/QuizProgress';
import { KillerQuizQuestion } from './components/KillerQuizQuestion';
import { LeadForm } from './components/LeadForm';
import { KillerQuizResult } from './components/results/KillerQuizResult';
import { NameInput } from './components/onboarding/NameInput';
import { GenderSelect } from './components/onboarding/GenderSelect';
import { AgeSelect } from './components/onboarding/AgeSelect';
import { WelcomeScreen } from './components/onboarding/WelcomeScreen';
import { killerQuestions, quizTitle, quizSubtitle } from './data/killerQuizData';
import { useKillerQuiz } from './hooks/useKillerQuiz';
import { UserData } from './types';
import './styles/index.css';

function App() {
  const {
    state,
    userData,
    result,
    secondaryResult,
    mistakeCounts,
    mistakeIntensity,
    isBlended,
    handleAnswer,
    handleFormSubmit,
    setUserData,
    updateOnboarding,
    nextStep
  } = useKillerQuiz();

  const handleFormChange = (field: keyof UserData, value: string) => {
    setUserData((prev: UserData) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-secondary-100 py-12 px-4">
      <div className="quiz-container fade-in">
        {state.step !== 'welcome' && (
          <img
            src="https://nrojbwxcqochzwhmmkql.supabase.co/storage/v1/object/sign/coaches-profile-images/Bonnie%20Malone%20PP.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjb2FjaGVzLXByb2ZpbGUtaW1hZ2VzL0Jvbm5pZSBNYWxvbmUgUFAucG5nIiwiaWF0IjoxNzQzNTE2MTYyLCJleHAiOjE3NzUwNTIxNjJ9.4xCbUb8CxLU-OmOC6q8BeUwWe4d0kr1bLQ0XXg0sfY4"
            alt="Bonnie Malone"
            className="coach-image"
          />
        )}

        <AnimatePresence mode="wait">
          {state.step === 'welcome' && (
            <WelcomeScreen key="welcome" onStart={nextStep} />
          )}

          {state.step === 'form' && (
            <h2 key="form-title" className="h2 mb-4">Where should we send you your results?</h2>
          )}

          {state.step !== 'result' && state.step !== 'questions' && state.step !== 'gender' && state.step !== 'age' && state.step !== 'welcome' && state.step !== 'name' && state.step !== 'form' && (
            <h1 key="quiz-title" className="quiz-title">{quizTitle}</h1>
          )}

          {state.step !== 'result' && state.step !== 'questions' && state.step !== 'form' && state.step !== 'gender' && state.step !== 'age' && state.step !== 'welcome' && state.step !== 'name' && (
            <p key="quiz-subtitle" className="quiz-subtitle">
              {quizSubtitle}
            </p>
          )}

          {state.step === 'name' && (
            <NameInput
              key="name-input"
              value={state.onboardingData.firstName}
              onChange={(name) => updateOnboarding({ firstName: name })}
              onNext={nextStep}
            />
          )}

          {state.step === 'gender' && (
            <GenderSelect
              key="gender-select"
              value={state.onboardingData.gender}
              onChange={(gender) => updateOnboarding({ gender })}
              onNext={nextStep}
            />
          )}

          {state.step === 'age' && (
            <AgeSelect
              key="age-select"
              value={state.onboardingData.ageGroup}
              onChange={(ageGroup) => updateOnboarding({ ageGroup })}
              onNext={nextStep}
              gender={state.onboardingData.gender}
            />
          )}

          {state.step === 'questions' && (
            <div key="questions-container" className="fade-in">
              <QuizProgress
                currentQuestion={state.currentQuestion + 1}
                totalQuestions={killerQuestions.length}
              />
              <KillerQuizQuestion
                key={`question-${state.currentQuestion}`}
                question={{
                  ...killerQuestions[state.currentQuestion],
                  text: killerQuestions[state.currentQuestion].text
                    .replace('{firstName}', state.onboardingData.firstName || '')
                    .replace('[Name]', state.onboardingData.firstName || '')
                }}
                selectedAnswer={null}
                onSelectAnswer={handleAnswer}
              />
            </div>
          )}

          {state.step === 'form' && (
            <LeadForm
              key="lead-form"
              userData={userData}
              onSubmit={handleFormSubmit}
              onChange={handleFormChange}
            />
          )}

          {state.step === 'result' && result && (
            <KillerQuizResult
              key="quiz-result"
              result={result}
              userData={userData}
              secondaryProfile={secondaryResult}
              isBlended={isBlended}
              mistakeIntensity={mistakeIntensity}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;