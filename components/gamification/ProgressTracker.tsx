// components/gamification/ProgressTracker.tsx
// Real-time progress tracking with beautiful animations

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, 
  Target, 
  Flame, 
  Star, 
  Award, 
  TrendingUp,
  Calendar,
  Clock,
  Zap,
  Crown,
  Medal,
  Sparkles,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react';
import { useGamificationStore, getLevelColor, getRarityColor } from '@/stores/gamificationStore';

interface ProgressTrackerProps {
  lessonId: string;
  compact?: boolean;
}

export default function ProgressTracker({ lessonId, compact = false }: ProgressTrackerProps) {
  const { 
    learningStats, 
    streakData, 
    achievements, 
    showLevelUpModal,
    showAchievementModal,
    showStreakCelebration 
  } = useGamificationStore();

  const [showMiniCelebration, setShowMiniCelebration] = useState(false);

  const levelProgress = (learningStats.totalXp % 100);
  const levelColor = getLevelColor(learningStats.level);

  // Trigger mini celebrations
  useEffect(() => {
    if (showLevelUpModal || showAchievementModal || showStreakCelebration) {
      setShowMiniCelebration(true);
      setTimeout(() => setShowMiniCelebration(false), 2000);
    }
  }, [showLevelUpModal, showAchievementModal, showStreakCelebration]);

  if (compact) {
    return <CompactProgressTracker levelProgress={levelProgress} levelColor={levelColor} />;
  }

  return (
    <motion.div
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Header with Level */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <motion.div
            className={`w-12 h-12 rounded-full bg-gradient-to-r ${levelColor} flex items-center justify-center`}
            animate={{ scale: showMiniCelebration ? [1, 1.2, 1] : 1 }}
            transition={{ duration: 0.5 }}
          >
            <Crown className="w-6 h-6 text-white" />
          </motion.div>
          <div>
            <div className="text-white font-bold text-lg">Level {learningStats.level}</div>
            <div className="text-gray-400 text-sm">{learningStats.totalPoints.toLocaleString()} XP</div>
          </div>
        </div>
        
        <StreakIndicator streak={streakData.current} />
      </div>

      {/* XP Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-400 mb-2">
          <span>Progress to Level {learningStats.level + 1}</span>
          <span>{100 - levelProgress} XP needed</span>
        </div>
        <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className={`h-full bg-gradient-to-r ${levelColor} rounded-full relative`}
            initial={{ width: 0 }}
            animate={{ width: `${levelProgress}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
          </motion.div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <StatCard
          icon={<BookOpen className="w-4 h-4" />}
          label="Lessons"
          value={learningStats.lessonsCompleted}
          color="text-blue-400"
        />
        <StatCard
          icon={<Trophy className="w-4 h-4" />}
          label="Projects"
          value={learningStats.projectsBuilt}
          color="text-purple-400"
        />
        <StatCard
          icon={<Award className="w-4 h-4" />}
          label="Achievements"
          value={achievements.filter(a => a.unlocked).length}
          color="text-yellow-400"
        />
      </div>

      {/* Recent Achievement Preview */}
      <RecentAchievements achievements={achievements.filter(a => a.unlocked).slice(-2)} />
    </motion.div>
  );
}

// Compact Progress Tracker for lesson pages
function CompactProgressTracker({ levelProgress, levelColor }: { levelProgress: number; levelColor: string }) {
  const { learningStats, streakData } = useGamificationStore();
  
  return (
    <motion.div
      className="flex items-center space-x-4 bg-gray-800/30 backdrop-blur-sm rounded-lg p-3 border border-gray-700/30"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      {/* Level Circle */}
      <div className="relative">
        <motion.div
          className={`w-10 h-10 rounded-full bg-gradient-to-r ${levelColor} flex items-center justify-center`}
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-white font-bold text-sm">{learningStats.level}</span>
        </motion.div>
        <div className="absolute -inset-1">
          <div
            className={`w-full h-full rounded-full bg-gradient-to-r ${levelColor} opacity-20 animate-ping`}
            style={{ animationDuration: '2s' }}
          ></div>
        </div>
      </div>

      {/* XP Progress */}
      <div className="flex-1">
        <div className="text-white text-sm font-medium mb-1">
          {learningStats.totalPoints.toLocaleString()} XP
        </div>
        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className={`h-full bg-gradient-to-r ${levelColor}`}
            initial={{ width: 0 }}
            animate={{ width: `${levelProgress}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Streak */}
      <StreakIndicator streak={streakData.current} compact />
    </motion.div>
  );
}

// Streak Indicator Component
function StreakIndicator({ streak, compact = false }: { streak: number; compact?: boolean }) {
  return (
    <motion.div
      className={`flex items-center space-x-2 ${compact ? 'text-sm' : ''}`}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        animate={{ 
          scale: streak > 0 ? [1, 1.2, 1] : 1,
          rotate: streak > 0 ? [0, 10, -10, 0] : 0 
        }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
      >
        <Flame className={`${compact ? 'w-4 h-4' : 'w-5 h-5'} text-orange-400`} />
      </motion.div>
      <div>
        <div className="text-orange-400 font-bold">{streak}</div>
        {!compact && <div className="text-gray-400 text-xs">day streak</div>}
      </div>
    </motion.div>
  );
}

// Stat Card Component
function StatCard({ 
  icon, 
  label, 
  value, 
  color 
}: { 
  icon: React.ReactNode; 
  label: string; 
  value: number; 
  color: string; 
}) {
  return (
    <motion.div
      className="bg-gray-900/50 rounded-lg p-3 text-center"
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className={`${color} mb-1 flex justify-center`}>{icon}</div>
      <div className="text-white font-bold">{value}</div>
      <div className="text-gray-400 text-xs">{label}</div>
    </motion.div>
  );
}

// Recent Achievements Preview
function RecentAchievements({ achievements }: { achievements: any[] }) {
  if (achievements.length === 0) return null;

  return (
    <div className="border-t border-gray-700 pt-4">
      <div className="text-sm text-gray-400 mb-2">Recent Achievements</div>
      <div className="space-y-2">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            className={`flex items-center space-x-3 p-2 rounded-lg border ${getRarityColor(achievement.rarity)} bg-gray-900/30`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="text-2xl">{achievement.icon}</div>
            <div className="flex-1">
              <div className="text-white font-medium text-sm">{achievement.title}</div>
              <div className="text-gray-400 text-xs">{achievement.description}</div>
            </div>
            <div className="text-yellow-400 font-bold text-sm">
              +{achievement.points}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Floating XP Gain Animation
export function FloatingXP({ 
  amount, 
  show, 
  onComplete 
}: { 
  amount: number; 
  show: boolean; 
  onComplete: () => void; 
}) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
          initial={{ opacity: 0, scale: 0.5, y: 0 }}
          animate={{ opacity: 1, scale: 1.2, y: -100 }}
          exit={{ opacity: 0, scale: 0.8, y: -200 }}
          transition={{ duration: 2, ease: "easeOut" }}
          onAnimationComplete={onComplete}
        >
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-full font-bold text-xl shadow-lg">
            +{amount} XP
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Progress Celebration Component
export function ProgressCelebration({ 
  type, 
  data, 
  show, 
  onClose 
}: { 
  type: 'levelUp' | 'achievement' | 'streak'; 
  data: any; 
  show: boolean; 
  onClose: () => void; 
}) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-gray-900 rounded-2xl p-8 max-w-md mx-4 text-center border-2 border-yellow-500"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              className="text-6xl mb-4"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 1, repeat: 2 }}
            >
              {type === 'levelUp' ? '🎉' : type === 'achievement' ? '🏆' : '🔥'}
            </motion.div>

            <h2 className="text-2xl font-bold text-white mb-2">
              {type === 'levelUp' ? 'Level Up!' : type === 'achievement' ? 'Achievement Unlocked!' : 'Streak Milestone!'}
            </h2>

            <p className="text-gray-300 mb-6">
              {type === 'levelUp' 
                ? `You've reached Level ${data.level}!`
                : type === 'achievement'
                ? data.title
                : `${data.days} day learning streak!`
              }
            </p>

            <motion.button
              className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-xl font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
            >
              Awesome!
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// BookOpen import (missing from previous imports)
import { BookOpen } from 'lucide-react';
