import { motion } from 'framer-motion';

interface AgeSelectProps {
  value: string | null;
  onChange: (age: '18-25' | '26-35' | '36-45' | '46+') => void;
  onNext: () => void;
  gender?: 'male' | 'female' | null;
}

// Age group images for male
const maleAgeGroups = [
  {
    range: '18-25',
    icon: '👦',
    image: 'https://images.pexels.com/photos/6679377/pexels-photo-6679377.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: '18-25 years'
  },
  {
    range: '26-35',
    icon: '👨',
    image: 'https://images.pexels.com/photos/804009/pexels-photo-804009.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: '26-35 years'
  },
  {
    range: '36-45',
    icon: '👨‍💼',
    image: 'https://images.pexels.com/photos/3525908/pexels-photo-3525908.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: '36-45 years'
  },
  {
    range: '46+',
    icon: '👴',
    image: 'https://images.pexels.com/photos/262391/pexels-photo-262391.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: '46+ years'
  }
] as const;

// Age group images for female
const femaleAgeGroups = [
  {
    range: '18-25',
    icon: '👧',
    image: 'https://images.pexels.com/photos/1447771/pexels-photo-1447771.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: '18-25 years'
  },
  {
    range: '26-35',
    icon: '👩',
    image: 'https://images.pexels.com/photos/325865/pexels-photo-325865.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: '26-35 years'
  },
  {
    range: '36-45',
    icon: '👩‍💼',
    image: 'https://images.pexels.com/photos/7752788/pexels-photo-7752788.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: '36-45 years'
  },
  {
    range: '46+',
    icon: '👵',
    image: 'https://images.pexels.com/photos/8417210/pexels-photo-8417210.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: '46+ years'
  }
] as const;

export const AgeSelect: React.FC<AgeSelectProps> = ({ value, onChange, onNext, gender }) => {
  // Choose age groups based on selected gender, default to female if not specified
  const ageGroups = gender === 'male' ? maleAgeGroups : femaleAgeGroups;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center w-full fade-in"
    >
      <h2 className="text-xl sm:text-2xl font-bold text-accent-700 mb-4 sm:mb-6">Which age group do you belong to?</h2>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto">
        {ageGroups.map((group) => (
          <button
            key={group.range}
            onClick={() => {
              onChange(group.range);
              onNext();
            }}
            className={`age-option relative rounded-lg border-2 transition-all duration-300 ${
              value === group.range 
                ? 'border-accent-500 bg-accent-50' 
                : 'border-secondary-200 hover:border-accent-300'
            }`}
          >
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src={group.image}
                alt={group.title}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="block py-3 text-sm sm:text-lg font-medium text-secondary-700">
              {group.icon} {group.title}
            </span>
            {value === group.range && (
              <div className="absolute top-2 right-2 w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>
    </motion.div>
  );
};