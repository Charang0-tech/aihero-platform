import React from 'react';

interface AchievementBadgeProps {
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  rarity?: 'common' | 'rare' | 'epic' | 'legendary';
}

export default function AchievementBadge({
  title,
  description,
  icon,
  unlocked,
  rarity = 'common'
}: AchievementBadgeProps) {
  const rarityColors = {
    common: 'bg-gray-500',
    rare: 'bg-blue-500',
    epic: 'bg-purple-500',
    legendary: 'bg-yellow-500'
  };

  return (
    <div className={`
      relative p-4 rounded-lg border-2 transition-all duration-300
      ${unlocked 
        ? `${rarityColors[rarity]} bg-opacity-20 border-opacity-50` 
        : 'bg-gray-800 border-gray-600'
      }
    `}>
      <div className="text-center">
        <div className={`text-4xl mb-2 ${unlocked ? '' : 'grayscale opacity-50'}`}>
          {icon}
        </div>
        <h3 className={`font-bold ${unlocked ? 'text-white' : 'text-gray-400'}`}>
          {title}
        </h3>
        <p className={`text-sm ${unlocked ? 'text-gray-200' : 'text-gray-500'}`}>
          {description}
        </p>
      </div>
      
      {!unlocked && (
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
          <span className="text-gray-400 text-sm">🔒 Locked</span>
        </div>
      )}
    </div>
  );
}
