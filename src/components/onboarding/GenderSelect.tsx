import { motion } from 'framer-motion';

interface GenderSelectProps {
  value: 'male' | 'female' | null;
  onChange: (gender: 'male' | 'female') => void;
  onNext: () => void;
}

export const GenderSelect: React.FC<GenderSelectProps> = ({ value, onChange, onNext }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center w-full fade-in"
    >
      <h2 className="text-xl sm:text-2xl font-bold text-accent-700 mb-4 sm:mb-6">Please select your gender</h2>
      <div className="grid grid-cols-2 gap-3 sm:gap-6 max-w-2xl mx-auto">
        <button
          onClick={() => {
            onChange('male');
            onNext();
          }}
          className={`gender-option relative rounded-lg border-2 transition-all duration-300 ${
            value === 'male' 
              ? 'border-accent-500 bg-accent-50' 
              : 'border-secondary-200 hover:border-accent-300'
          }`}
        >
          <div className="aspect-square overflow-hidden rounded-lg">
            <img
              src="https://images.pexels.com/photos/27897903/pexels-photo-27897903.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Male"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="block py-3 text-base sm:text-xl font-medium text-secondary-700">👨 Male</span>
          {value === 'male' && (
            <div className="absolute top-2 right-2 w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          )}
        </button>
        <button
          onClick={() => {
            onChange('female');
            onNext();
          }}
          className={`gender-option relative rounded-lg border-2 transition-all duration-300 ${
            value === 'female' 
              ? 'border-accent-500 bg-accent-50' 
              : 'border-secondary-200 hover:border-accent-300'
          }`}
        >
          <div className="aspect-square overflow-hidden rounded-lg">
            <img
              src="https://images.pexels.com/photos/3021538/pexels-photo-3021538.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Female"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="block py-3 text-base sm:text-xl font-medium text-secondary-700">👩 Female</span>
          {value === 'female' && (
            <div className="absolute top-2 right-2 w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          )}
        </button>
      </div>
    </motion.div>
  );
};