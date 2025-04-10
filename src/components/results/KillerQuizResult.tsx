import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { PersonalityType, UserData } from '../../types';
import { Share2, MessageCircle, Loader } from 'lucide-react';

interface KillerQuizResultProps {
  result: PersonalityType;
  userData: UserData;
  secondaryProfile: PersonalityType | null;
  isBlended: boolean;
  mistakeIntensity: number;
}

export const KillerQuizResult: React.FC<KillerQuizResultProps> = ({
  result,
  userData,
  secondaryProfile,
  isBlended,
  mistakeIntensity,
}) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'nextSteps'>('profile');
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Reset image loaded state when result changes
  useEffect(() => {
    setImageLoaded(false);
  }, [result]);
  
  // Get face emoji based on metabolism type
  const getTypeEmoji = (type: string) => {
    if (type.includes('Stress Spiral')) return '😓';
    if (type.includes('Hormone Havoc')) return '🤔';
    if (type.includes('Outdated Operating System')) return '🙄';
    if (type.includes('Disconnection Dilemma')) return '😕';
    return '🤗';
  };
  
  // Create share text with the user's name and result
  const emoji = getTypeEmoji(result.type);
  const shareMessage = `${emoji} I just discovered my primary metabolism blocker is "${result.type}"! Take this 3-minute quiz to find what's slowing YOUR midlife metabolism: `;
  const shareUrl = window.location.href;
  
  // Share functions
  const shareOnWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareMessage + shareUrl)}`, '_blank');
  };
  
  const shareOnMessenger = () => {
    window.open(`https://www.facebook.com/dialog/send?link=${encodeURIComponent(shareUrl)}&app_id=181374745748345&redirect_uri=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="result-container max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 sm:p-8"
    >
      <div className="text-center mb-6">
        <h2 className="result-title text-xl text-gray-900 mb-2">
          {userData.firstName}, your primary metabolism blocker is:
        </h2>
        <h3 className="mistake-name text-3xl sm:text-4xl font-extrabold text-primary-700 uppercase tracking-wide mb-4">{result.type}</h3>
      </div>

      <div className="tabs-container flex border-b border-secondary-200 mb-6">
        <button
          className={`tab flex-1 py-3 px-4 font-bold text-center transition-colors uppercase tracking-wide ${
            activeTab === 'profile' 
              ? 'text-primary-700 border-b-3 border-primary-600' 
              : 'text-secondary-500 hover:text-secondary-700'
          }`}
          onClick={() => setActiveTab('profile')}
        >
          Understanding Your Blocker
        </button>
        <button
          className={`tab flex-1 py-3 px-4 font-bold text-center transition-colors uppercase tracking-wide ${
            activeTab === 'nextSteps' 
              ? 'text-primary-700 border-b-3 border-primary-600' 
              : 'text-secondary-500 hover:text-secondary-700'
          }`}
          onClick={() => setActiveTab('nextSteps')}
        >
          Transformation Strategy
        </button>
      </div>

      {activeTab === 'profile' ? (
        <div className="profile-content fade-in">
          {result.image && (
            <div className="relative image-container mb-8 overflow-hidden rounded-xl shadow-lg">
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <Loader className="w-8 h-8 text-primary-500 animate-spin" />
                </div>
              )}
              <img
                src={result.image}
                alt={result.type}
                className={`result-image w-full h-72 object-cover transition-transform duration-500 hover:scale-105 ${
                  !imageLoaded ? 'opacity-0' : 'opacity-100'
                }`}
                onLoad={() => setImageLoaded(true)}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-5">
                <h3 className="text-2xl font-extrabold text-white drop-shadow-md uppercase tracking-wide">{result.type}</h3>
              </div>
            </div>
          )}

          <p className="mistake-description text-gray-900 leading-relaxed mb-6">{result.description}</p>

          {/* Visual mistake intensity indicator */}
          <div className="mistake-intensity bg-secondary-100 p-4 rounded-lg mb-6">
            <h3 className="text-lg font-extrabold text-primary-700 uppercase tracking-wide mb-2 flex justify-between items-center">
              Blocker Intensity
              <span className="text-sm font-semibold text-white bg-primary-600 px-2 py-1 rounded">
                {Number(mistakeIntensity).toFixed(1)}%
              </span>
            </h3>
            <div className="intensity-meter h-2 bg-secondary-200 rounded-full overflow-hidden mb-2">
              <div
                className="intensity-fill h-full bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"
                style={{ width: `${mistakeIntensity}%` }}
              />
            </div>
            <p className="intensity-description text-sm text-gray-900">
              This indicates how strongly this metabolism blocker influences your weight management journey
            </p>
          </div>

          {/* Mistake mechanism explanation */}
          <div className="mistake-mechanism mb-6">
            <h3 className="text-xl font-extrabold text-primary-700 uppercase tracking-wide mb-3">How This Metabolism Blocker Works:</h3>
            <p className="text-gray-900 leading-relaxed bg-secondary-100 p-4 rounded-lg">{result.mechanism}</p>
          </div>

          {/* Impact explanation */}
          <div className="mistake-impact mb-6">
            <h3 className="text-xl font-extrabold text-primary-700 uppercase tracking-wide mb-3">The Real Impact:</h3>
            <p className="text-gray-900 leading-relaxed bg-secondary-100 p-4 rounded-lg">{result.impact}</p>
          </div>

          {/* Timeline section */}
          <div className="mistake-timeline mb-6">
            <h3 className="text-xl font-extrabold text-primary-700 uppercase tracking-wide mb-3">Recovery Timeline:</h3>
            <p className="text-gray-900 leading-relaxed bg-secondary-100 p-4 rounded-lg">{result.timeline}</p>
          </div>

          {/* Solution overview */}
          <div className="mistake-solution mb-6">
            <h3 className="text-xl font-extrabold text-primary-700 uppercase tracking-wide mb-3">Your Solution Path:</h3>
            <p className="text-gray-900 leading-relaxed bg-secondary-100 p-4 rounded-lg">{result.solution}</p>
          </div>

          {/* Blended mistake section - unique to Killer Framework */}
          {isBlended && secondaryProfile && (
            <div className="secondary-mistake border-t border-secondary-200 pt-5 mt-6">
              <h3 className="text-xl font-extrabold text-primary-700 uppercase tracking-wide mb-2">Secondary Metabolism Blocker:</h3>
              <p className="font-medium text-gray-900">{secondaryProfile.type}</p>
              <p className="text-sm text-gray-700 mt-2">{secondaryProfile.description}</p>
            </div>
          )}
        </div>
      ) : (
        <div className="transformation-content fade-in">
          <h3 className="text-2xl font-extrabold text-primary-700 uppercase tracking-wide mb-4">Metabolism Blocker Transformation Strategies:</h3>
          
          <div className="solution-highlight bg-primary-50 border-l-4 border-primary-500 p-5 rounded-r-lg mb-8">
            <p className="text-xl font-extrabold text-primary-700 uppercase tracking-wide mb-2">Your Personalized Solution Path:</p>
            <p className="text-gray-900 leading-relaxed">{result.solution}</p>
          </div>
          
          <p className="transformation-intro text-gray-900 mb-6">
            {userData.firstName}, here are personalized strategies to overcome this blocker:
          </p>

          <ul className="transformation-tips space-y-5">
            {result.tips.map((tip, index) => (
              <li key={index} className="tip-item flex bg-secondary-100 p-4 rounded-lg hover:shadow-sm transition-shadow">
                <div className="tip-number flex-shrink-0 w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-extrabold mr-4">
                  {index + 1}
                </div>
                <div className="tip-content text-gray-900 leading-relaxed">{tip}</div>
              </li>
            ))}
          </ul>
          
          <div className="share-section mt-10 pt-6 border-t border-secondary-200">
            <h3 className="text-center text-2xl font-extrabold text-primary-700 uppercase tracking-wide mb-4">
              {emoji} Know someone struggling with their midlife metabolism? {emoji}
            </h3>
            <p className="text-center text-gray-900 mb-6">
              Share this quiz to help them identify what's really holding them back.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={shareOnWhatsApp}
                className="btn-primary flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors font-bold uppercase tracking-wide"
              >
                <Share2 size={18} />
                <span>Share on WhatsApp</span>
              </button>
              
              <button 
                onClick={shareOnMessenger}
                className="btn-secondary flex items-center justify-center gap-2 px-6 py-3 bg-secondary-100 text-gray-900 hover:bg-secondary-200 border border-secondary-300 rounded-lg transition-colors font-bold uppercase tracking-wide"
              >
                <MessageCircle size={18} />
                <span>Share on Messenger</span>
              </button>
            </div>
            
            <p className="mt-4 text-sm text-center text-gray-700 italic">
              "Sharing wisdom is the first step to overcoming challenges together." — Bonnie Malone
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
}; 