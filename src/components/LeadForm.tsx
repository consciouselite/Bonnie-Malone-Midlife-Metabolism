import { motion } from 'framer-motion';
import { UserData } from '../types';

interface LeadFormProps {
  userData: UserData;
  onSubmit: (data: UserData) => void;
  onChange: (field: keyof UserData, value: string) => void;
  isSubmitting?: boolean;
  error?: string | null;
}

export const LeadForm: React.FC<LeadFormProps> = ({
  userData,
  onSubmit,
  onChange,
  isSubmitting,
  error
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(userData);
  };

  return (
    <motion.form
      className="space-y-3 sm:space-y-4 w-full"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div>
        <input
          type="text"
          placeholder="First Name"
          className="form-input text-sm sm:text-base text-gray-900"
          value={userData.firstName}
          onChange={(e) => onChange('firstName', e.target.value)}
          required
          disabled={isSubmitting}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Last Name"
          className="form-input text-sm sm:text-base text-gray-900"
          value={userData.lastName}
          onChange={(e) => onChange('lastName', e.target.value)}
          required
          disabled={isSubmitting}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          className="form-input text-sm sm:text-base text-gray-900"
          value={userData.email}
          onChange={(e) => onChange('email', e.target.value)}
          required
          disabled={isSubmitting}
        />
      </div>
      <div>
        <input
          type="tel"
          placeholder="Phone"
          className="form-input text-sm sm:text-base text-gray-900"
          value={userData.phone}
          onChange={(e) => onChange('phone', e.target.value)}
          required
          disabled={isSubmitting}
        />
      </div>
      {error && (
        <div className="text-red-600 text-xs sm:text-sm">{error}</div>
      )}
      <div className="pt-2">
        <button
          type="submit"
          className="w-full py-2 sm:py-3 px-4 sm:px-6 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-all duration-200 font-semibold text-sm sm:text-base"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Saving Results...' : 'See My Results!'}
        </button>
      </div>
    </motion.form>
  );
};