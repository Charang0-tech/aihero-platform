// components/gamification/ProgressDashboard.tsx
// Beautiful, engaging progress dashboard with animations

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
  Sparkles
} from 'lucide-react';
import { useGamificationStore, getLevelColor, getRarityColor } from '@/stores/gamificationStore';

export default function ProgressDashboard() {
  const { 
    learningStats, 
    streakData, 
    achievements, 
    badges,
    showLevelUpModal,
    showAchievementModal,
    showStreakCelebration,
    getWeeklyProgress,
    getLearningInsights
  } = useGamificationStore();

  const [insights] = useState(getLearningInsights());
  const [weeklyData] = useState(getWeeklyProgress());

  const levelProgress = (learningStats.totalXp % 100);
  const levelColor = getLevelColor(learningStats.level);

  return (
    <div className="space-y-6">
      {/* Hero Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Level & XP Card */}
        <motion.div
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 relative overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className={`absolute inset-0 bg-gradient-to-r opacity-10 ${levelColor}`}></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Crown className="w-6 h-6 text-yellow-400" />
                <span className="text-white font-semibold">Level</span>
              </div>
              <span className={`text-2xl font-bold bg-gradient-to-r ${levelColor} bg-clip-text text-transparent`}>
                {learningStats.level}
              </span>
            </div>
            
            {/* XP Progress Bar */}
            <div className="mb-2">
              <div className="flex justify-between text-sm text-gray-400 mb-1">
                <span>{learningStats.totalXp % 100} XP</span>
                <span>{100} XP</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${levelColor}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${levelProgress}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </div>
            <p className="text-gray-400 text-sm">{100 - levelProgress} XP to next level</p>
          </div>
        </motion.div>

        {/* Streak Card */}
        <motion.div
          className="bg-gradient-to-br from-orange-900/50 to-red-900/50 rounded-2xl p-6 border border-orange-800/50 relative overflow-hidden"
          whileHover={{ scale: 1.02 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Flame className="w-6 h-6 text-orange-400" />
                <span className="text-white font-semibold">Streak</span>
              </div>
              <span className="text-2xl font-bold text-orange-400">
                {streakData.current}
              </span>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Current</span>
                <span className="text-orange-300">{streakData.current} days</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Best</span>
                <span className="text-orange-300">{streakData.longest} days</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Total Points Card */}
        <motion.div
          className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-2xl p-6 border border-purple-800/50 relative overflow-hidden"
          whileHover={{ scale: 1.02 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Star className="w-6 h-6 text-purple-400" />
                <span className="text-white font-semibold">Points</span>
              </div>
              <span className="text-2xl font-bold text-purple-400">
                {learningStats.totalPoints.toLocaleString()}
              </span>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Lessons</span>
                <span className="text-purple-300">{learningStats.lessonsCompleted}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Projects</span>
                <span className="text-purple-300">{learningStats.projectsBuilt}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievements Card */}
        <motion.div
          className="bg-gradient-to-br from-green-900/50 to-teal-900/50 rounded-2xl p-6 border border-green-800/50 relative overflow-hidden"
          whileHover={{ scale: 1.02 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-teal-500/10"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Trophy className="w-6 h-6 text-green-400" />
                <span className="text-white font-semibold">Achievements</span>
              </div>
              <span className="text-2xl font-bold text-green-400">
                {achievements.filter(a => a.unlocked).length}
              </span>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Unlocked</span>
                <span className="text-green-300">{achievements.filter(a => a.unlocked).length}/{achievements.length}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Progress</span>
                <span className="text-green-300">{Math.round((achievements.filter(a => a.unlocked).length / achievements.length) * 100)}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Weekly Progress Chart */}
      <motion.div
        className="bg-gray-800 rounded-2xl p-6 border border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-xl font-bold text-white mb-6 flex items-center">
          <TrendingUp className="w-6 h-6 mr-2 text-blue-400" />
          Weekly Progress
        </h3>
        
        <div className="grid grid-cols-7 gap-4">
          {weeklyData.map((week, index) => (
            <motion.div
              key={week.week}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <div className="text-sm text-gray-400 mb-2">
                Week {index + 1}
              </div>
              <div className="h-20 bg-gray-700 rounded-lg relative overflow-hidden">
                <motion.div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-500 to-blue-400"
                  initial={{ height: 0 }}
                  animate={{ height: `${Math.min((week.lessonsCompleted / 6) * 100, 100)}%` }}
                  transition={{ delay: 0.5 + (0.1 * index), duration: 0.8 }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    {week.lessonsCompleted}
                  </span>
                </div>
              </div>
              <div className="text-xs text-gray-400 mt-2">
                {week.studyTime}min
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Recent Achievements */}
      <motion.div
        className="bg-gray-800 rounded-2xl p-6 border border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-xl font-bold text-white mb-6 flex items-center">
          <Award className="w-6 h-6 mr-2 text-yellow-400" />
          Recent Achievements
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements
            .filter(a => a.unlocked)
            .slice(-6)
            .map((achievement, index) => (
              <motion.div
                key={achievement.id}
                className={`p-4 rounded-xl border-2 ${getRarityColor(achievement.rarity)} bg-gray-900/50 relative overflow-hidden`}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="absolute top-2 right-2">
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                </div>
                
                <div className="text-3xl mb-2">{achievement.icon}</div>
                <h4 className="font-bold text-white mb-1">{achievement.title}</h4>
                <p className="text-sm text-gray-400 mb-2">{achievement.description}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className={`px-2 py-1 rounded-full ${getRarityColor(achievement.rarity)} bg-opacity-20`}>
                    {achievement.rarity}
                  </span>
                  <span className="text-yellow-400 font-semibold">+{achievement.points} XP</span>
                </div>
              </motion.div>
            ))}
        </div>
      </motion.div>

      {/* Learning Insights */}
      <motion.div
        className="bg-gray-800 rounded-2xl p-6 border border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h3 className="text-xl font-bold text-white mb-6 flex items-center">
          <Target className="w-6 h-6 mr-2 text-purple-400" />
          Learning Insights
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400 mb-1">
              {insights.totalStudyTime}
            </div>
            <div className="text-sm text-gray-400">Total Study Time</div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400 mb-1">
              {insights.averageSessionTime}
            </div>
            <div className="text-sm text-gray-400">Avg Session</div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400 mb-1">
              {insights.completionRate}
            </div>
            <div className="text-sm text-gray-400">Lessons Done</div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400 mb-1">
              {insights.achievements}
            </div>
            <div className="text-sm text-gray-400">Achievements</div>
          </div>
        </div>
        
        {/* Next Milestone */}
        {insights.nextMilestone && (
          <div className="mt-6 p-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-xl border border-purple-800/30">
            <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
              <Medal className="w-5 h-5 mr-2 text-yellow-400" />
              Next Milestone
            </h4>
            <div className="flex items-center space-x-4">
              <div className="text-2xl">{insights.nextMilestone.icon}</div>
              <div className="flex-1">
                <h5 className="font-semibold text-white">{insights.nextMilestone.title}</h5>
                <p className="text-sm text-gray-400">{insights.nextMilestone.description}</p>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-400">Reward</div>
                <div className="text-yellow-400 font-semibold">+{insights.nextMilestone.points} XP</div>
              </div>
            </div>
          </div>
        )}
      </motion.div>

      {/* Modals */}
      <LevelUpModal />
      <AchievementModal />
      <StreakCelebration />
    </div>
  );
}

// Level Up Modal
function LevelUpModal() {
  const { showLevelUpModal, learningStats } = useGamificationStore();
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (showLevelUpModal) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  }, [showLevelUpModal]);

  return (
    <AnimatePresence>
      {showLevelUpModal && (
        <>
          {showConfetti && <ConfettiEffect />}
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gradient-to-br from-purple-900 to-blue-900 rounded-2xl p-8 max-w-md mx-4 text-center border border-purple-500"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <motion.div
                className="text-6xl mb-4"
                animate={{ rotate: [0, -10, 10, -10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 2 }}
              >
                🎉
              </motion.div>
              
              <h2 className="text-3xl font-bold text-white mb-2">Level Up!</h2>
              <p className="text-purple-200 mb-4">
                Congratulations! You've reached level {learningStats.level}!
              </p>
              
              <div className="bg-black/30 rounded-xl p-4 mb-6">
                <div className="text-lg text-white mb-2">New Rewards Unlocked</div>
                <div className="space-y-1 text-sm text-purple-200">
                  <div>✨ +100 Bonus XP</div>
                  <div>🎁 New Achievement Available</div>
                  <div>🚀 Access to Advanced Features</div>
                </div>
              </div>
              
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => useGamificationStore.setState({ showLevelUpModal: false })}
              >
                Continue Learning!
              </motion.button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Achievement Modal
function AchievementModal() {
  const { showAchievementModal } = useGamificationStore();

  return (
    <AnimatePresence>
      {showAchievementModal && (
        <motion.div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={`bg-gray-900 rounded-2xl p-8 max-w-md mx-4 text-center border-2 ${getRarityColor(showAchievementModal.rarity)}`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <motion.div
              className="text-6xl mb-4"
              animate={{ rotateY: [0, 180, 360] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
            >
              {showAchievementModal.icon}
            </motion.div>
            
            <h2 className="text-2xl font-bold text-white mb-2">Achievement Unlocked!</h2>
            <h3 className="text-xl text-yellow-400 mb-2">{showAchievementModal.title}</h3>
            <p className="text-gray-300 mb-4">{showAchievementModal.description}</p>
            
            <div className="bg-black/30 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-sm ${getRarityColor(showAchievementModal.rarity)} bg-opacity-20`}>
                  {showAchievementModal.rarity.toUpperCase()}
                </span>
                <span className="text-yellow-400 font-bold text-lg">
                  +{showAchievementModal.points} XP
                </span>
              </div>
            </div>
            
            <motion.button
              className="px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-xl font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => useGamificationStore.setState({ showAchievementModal: null })}
            >
              Awesome!
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Streak Celebration
function StreakCelebration() {
  const { showStreakCelebration, streakData } = useGamificationStore();

  return (
    <AnimatePresence>
      {showStreakCelebration && (
        <motion.div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gradient-to-br from-orange-900 to-red-900 rounded-2xl p-8 max-w-md mx-4 text-center border border-orange-500"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <motion.div
              className="text-6xl mb-4"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 1 }}
            >
              🔥
            </motion.div>
            
            <h2 className="text-3xl font-bold text-white mb-2">You're On Fire!</h2>
            <p className="text-orange-200 mb-4">
              {streakData.current} days learning streak! Keep it up!
            </p>
            
            <div className="bg-black/30 rounded-xl p-4 mb-6">
              <div className="text-lg text-white mb-2">Streak Bonus</div>
              <div className="text-orange-400 font-bold text-2xl">
                +{streakData.current * 10} XP
              </div>
            </div>
            
            <motion.button
              className="px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => useGamificationStore.setState({ showStreakCelebration: false })}
            >
              Keep the Streak Going!
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Confetti Effect Component
function ConfettiEffect() {
  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-yellow-400"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-10px`,
          }}
          animate={{
            y: window.innerHeight + 100,
            rotate: 360 * 3,
            opacity: [1, 1, 0]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 2,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
}