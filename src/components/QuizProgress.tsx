import { motion } from 'framer-motion';

interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
}

export const QuizProgress: React.FC<QuizProgressProps> = ({ currentQuestion, totalQuestions }) => {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-secondary-600">Question {currentQuestion} of {totalQuestions}</span>
        <span className="text-sm text-accent-600 font-medium">{Math.round(progress)}% complete</span>
      </div>
      <div className="h-2 bg-secondary-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-accent-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
};