import React from 'react';

interface XPProgressBarProps {
  currentXP: number;
  levelXP: number;
  level: number;
  totalXP?: number;
}

export default function XPProgressBar({
  currentXP,
  levelXP,
  level,
  totalXP
}: XPProgressBarProps) {
  const progressPercentage = Math.min((currentXP / levelXP) * 100, 100);
  const xpNeeded = levelXP - currentXP;

  const getLevelTitle = (level: number) => {
    if (level < 5) return 'Novice';
    if (level < 10) return 'Apprentice';
    if (level < 20) return 'Expert';
    if (level < 30) return 'Master';
    return 'Legend';
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-white">
            Level {level} {getLevelTitle(level)}
          </h3>
          {totalXP && (
            <p className="text-white/60 text-sm">
              {totalXP.toLocaleString()} XP Total
            </p>
          )}
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-white">
            {currentXP.toLocaleString()}
          </div>
          <div className="text-white/60 text-sm">
            / {levelXP.toLocaleString()} XP
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="w-full bg-white/20 rounded-full h-4 mb-2">
          <div 
            className="bg-gradient-to-r from-yellow-400 to-orange-500 h-4 rounded-full transition-all duration-500 relative overflow-hidden"
            style={{ width: `${progressPercentage}%` }}
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
          </div>
        </div>
        
        <div className="flex justify-between text-sm text-white/60">
          <span>{progressPercentage.toFixed(1)}% to next level</span>
          <span>{xpNeeded > 0 ? `${xpNeeded.toLocaleString()} XP needed` : 'Level up!'}</span>
        </div>
      </div>

      {xpNeeded <= 0 && (
        <div className="mt-4 text-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-500 text-white animate-bounce">
            🎉 Ready to Level Up!
          </span>
        </div>
      )}
    </div>
  );
}
