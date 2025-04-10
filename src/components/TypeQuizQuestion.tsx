import React from 'react';
import { Question } from '../types/quizTypes';
import { motion } from 'framer-motion';

interface QuizQuestionProps {
  question: Question;
  selectedAnswer: string | null;
  onSelectAnswer: (type: string) => void;
}

export const TypeQuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  selectedAnswer,
  onSelectAnswer
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="quiz-question"
    >
      <h2 className="text-xl sm:text-2xl font-semibold text-primary-700 mb-6">
        {question.text}
      </h2>
      
      <div className="options-container grid grid-cols-1 sm:grid-cols-2 gap-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`option-button flex items-center p-4 border rounded-lg transition-all ${
              selectedAnswer === option.type
                ? 'option-button-selected bg-primary-50 border-primary-500'
                : 'border-gray-200 hover:border-primary-300 hover:bg-primary-50'
            }`}
            onClick={() => onSelectAnswer(option.type)}
          >
            <span className="text-xl sm:text-2xl mr-3">{option.icon}</span>
            <span className="text-sm sm:text-base text-left">{option.text}</span>
          </button>
        ))}
      </div>
    </motion.div>
  );
}; 