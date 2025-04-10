import React from 'react';
import { UserData } from '../../types';
import { PersonalityType } from '../../types/quizTypes';
import { Share2, MessageCircle, Send } from 'lucide-react';

interface TypeQuizResultProps {
  result: PersonalityType;
  userData: UserData;
  typeCounts: Record<string, number>;
}

export const TypeQuizResult: React.FC<TypeQuizResultProps> = ({
  result,
  userData,
  typeCounts
}) => {
  // Calculate percentages for visualization
  const totalAnswers = Object.values(typeCounts).reduce((sum, count) => sum + count, 0);
  const typePercentages = Object.entries(typeCounts).map(([type, count]) => ({
    type,
    percentage: Math.round((count / totalAnswers) * 100)
  }));

  // Get emoji based on type
  const getTypeEmoji = (type: string) => {
    if (type.includes('Fluid')) return '🌊';
    if (type.includes('Grounded')) return '🌳';
    if (type.includes('Rhythmic')) return '🎵';
    if (type.includes('Intuitive')) return '✨';
    return '🧘‍♀️';
  };

  // Create personalized sharing messages
  const emoji = getTypeEmoji(result.type);
  const shareMessage = `${emoji} I just took Coach Pamela's Movement Meditation quiz and discovered I'm a "${result.type}"! Curious about your movement style? Take this 3-minute quiz: `;
  const shareUrl = window.location.href;
  
  // Share functions
  const shareOnWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareMessage + shareUrl)}`, '_blank');
  };
  
  const shareOnMessenger = () => {
    window.open(`https://www.facebook.com/dialog/send?link=${encodeURIComponent(shareUrl)}&app_id=181374745748345&redirect_uri=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  return (
    <div className="quiz-result">
      <h1 className="result-title">
        {userData.firstName}, you are a <span className="highlight">{result.type}</span>
      </h1>
      
      <div className="result-description">
        <p>{result.description}</p>
      </div>
      
      <div className="type-distribution my-8">
        <h3 className="text-lg font-semibold mb-2">Your Movement Meditation Archetype Breakdown:</h3>
        <div className="type-bars">
          {typePercentages.map(({ type, percentage }) => (
            <div key={type} className="type-bar-container mb-3">
              <div className="flex items-center mb-1">
                <span className="type-label font-medium">{type}:</span>
                <span className="ml-2">{percentage}%</span>
              </div>
              <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary-500 rounded-full"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="type-details grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="strengths bg-green-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Your Natural Strengths:</h3>
          <ul className="list-disc pl-5 space-y-2">
            {result.strengths.map((strength, index) => (
              <li key={index}>{strength}</li>
            ))}
          </ul>
        </div>

        <div className="challenges bg-amber-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Growth Opportunities:</h3>
          <ul className="list-disc pl-5 space-y-2">
            {result.challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="recommendations bg-blue-50 p-6 rounded-lg my-8">
        <h3 className="text-lg font-semibold mb-4">Personalized Strategies:</h3>
        <ul className="list-disc pl-5 space-y-2">
          {result.tips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>

      <div className="cta-section text-center mt-10 bg-indigo-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">✨ Know someone who'd love to discover their type? ✨</h3>
        <p className="mb-6">
          Who in your life would benefit from understanding their movement meditation style? Share this quiz with them!
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={shareOnWhatsApp}
            className="share-button flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-md"
          >
            <Share2 size={18} />
            <span>Share on WhatsApp</span>
          </button>
          
          <button 
            onClick={shareOnMessenger}
            className="share-button flex items-center justify-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-600 transition shadow-md"
          >
            <MessageCircle size={18} />
            <span>Share on Messenger</span>
          </button>
        </div>
        
        <p className="mt-4 text-sm text-gray-600 italic">
          "Sharing wisdom is one of the most powerful ways to deepen your own practice." - Coach Pamela
        </p>
      </div>
    </div>
  );
}; 