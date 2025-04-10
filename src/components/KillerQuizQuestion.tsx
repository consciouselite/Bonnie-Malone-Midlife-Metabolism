import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Define interface that matches the actual data structure
interface QuizOption {
  text: string;
  type: string;
  icon: string;
}

interface QuizQuestion {
  id: number;
  text: string;
  options: QuizOption[];
  includesName?: boolean;
}

interface Props {
  question: QuizQuestion;
  selectedAnswer: string | null;
  onSelectAnswer: (answer: string) => void;
}

export const KillerQuizQuestion: React.FC<Props> = ({
  question,
  selectedAnswer,
  onSelectAnswer,
}) => {
  // Randomize options order
  const [randomizedOptions, setRandomizedOptions] = useState(question.options);

  useEffect(() => {
    // Fisher-Yates shuffle algorithm for randomizing options
    const shuffleOptions = () => {
      const shuffled = [...question.options];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      setRandomizedOptions(shuffled);
    };

    shuffleOptions();
  }, [question]);

  const handleSelectOption = (type: string) => {
    onSelectAnswer(type);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="question-container mb-6 fade-in"
    >
      <h2 className="text-xl sm:text-2xl font-extrabold text-primary-700 uppercase tracking-wide mb-6 text-center">{question.text}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {randomizedOptions.map((option, index) => (
          <button
            key={index}
            className={`question-option flex flex-col items-center justify-center p-4 sm:p-6 border-2 rounded-lg ${
              selectedAnswer === option.type 
                ? 'border-primary-500 bg-primary-50' 
                : 'border-secondary-200 hover:border-primary-400 hover:bg-primary-50'
            } transition-all duration-200`}
            onClick={() => handleSelectOption(option.type)}
          >
            <span className="text-2xl sm:text-3xl mb-2">{option.icon}</span>
            <span className="text-sm sm:text-base text-center text-gray-900">{option.text}</span>
          </button>
        ))}
      </div>
    </motion.div>
  );
}; 