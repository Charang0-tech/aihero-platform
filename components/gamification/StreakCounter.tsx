import React from 'react';

interface StreakCounterProps {
  currentStreak: number;
  longestStreak: number;
  lastActiveDate?: string;
}

export default function StreakCounter({
  currentStreak,
  longestStreak,
  lastActiveDate
}: StreakCounterProps) {
  const getStreakEmoji = (streak: number) => {
    if (streak === 0) return '💤';
    if (streak < 3) return '🔥';
    if (streak < 7) return '🚀';
    if (streak < 14) return '⭐';
    return '👑';
  };

  const getStreakMessage = (streak: number) => {
    if (streak === 0) return 'Start your streak today!';
    if (streak === 1) return 'Great start!';
    if (streak < 7) return 'Keep it up!';
    if (streak < 14) return 'You\'re on fire!';
    return 'Legendary streak!';
  };

  return (
    <div className="bg-gradient-to-r from-orange-900/50 to-red-900/50 backdrop-blur-md rounded-2xl p-6 border border-orange-500/20">
      <div className="text-center">
        <div className="text-6xl mb-4">
          {getStreakEmoji(currentStreak)}
        </div>
        
        <div className="mb-4">
          <div className="text-3xl font-bold text-white mb-1">
            {currentStreak}
          </div>
          <div className="text-orange-300 text-sm font-medium">
            Day Streak
          </div>
        </div>

        <div className="text-white/80 text-sm mb-4">
          {getStreakMessage(currentStreak)}
        </div>

        <div className="flex justify-between items-center text-xs text-orange-200/60">
          <span>Best: {longestStreak} days</span>
          {lastActiveDate && (
            <span>Last: {new Date(lastActiveDate).toLocaleDateString()}</span>
          )}
        </div>
      </div>
    </div>
  );
}
