// app/dashboard/page.tsx
// Beautiful, gamified dashboard with comprehensive analytics and engagement features

'use client'

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Trophy, 
  Flame, 
  Star, 
  Target, 
  Calendar,
  BarChart3,
  Crown,
  Zap,
  Award,
  TrendingUp,
  Clock,
  Code,
  Users,
  ArrowRight,
  Play,
  Lock,
  Sparkles,
  Gift,
  CheckCircle
} from 'lucide-react';
import Link from 'next/link';
import { useGamificationStore, getLevelColor } from '@/stores/gamificationStore';
import { useSubscriptionStore, SUBSCRIPTION_TIERS } from '@/stores/subscriptionStore';
import { useAnalyticsStore } from '@/stores/analyticsStore';
import ProgressDashboard from '@/components/gamification/ProgressDashboard';
import SubscriptionPlans from '@/components/subscription/SubscriptionPlans';
import { getLessonById, getLessonsByWeek } from '@/lib/curriculum/index';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [currentWeek, setCurrentWeek] = useState(1);
  
  // Store hooks
  const gamification = useGamificationStore();
  const subscription = useSubscriptionStore();
  const analytics = useAnalyticsStore();

  // Initialize user session on load
  useEffect(() => {
    const deviceInfo = {
      type: 'desktop' as const,
      browser: navigator.userAgent,
      os: navigator.platform,
      screenResolution: `${screen.width}x${screen.height}`
    };
    
    analytics.startSession('demo_user', deviceInfo);
    
    return () => {
      analytics.endSession();
    };
  }, []);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'lessons', label: 'Lessons', icon: BookOpen },
    { id: 'progress', label: 'Progress', icon: TrendingUp },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'analytics', label: 'Analytics', icon: Target }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      {/* Header */}
      <DashboardHeader 
        gamification={gamification}
        subscription={subscription}
        onUpgrade={() => setShowUpgradeModal(true)}
      />

      {/* Navigation */}
      <div className="border-b border-gray-700 bg-gray-800/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-400'
                      : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <OverviewTab 
              key="overview"
              gamification={gamification}
              subscription={subscription}
              analytics={analytics}
              currentWeek={currentWeek}
              onWeekChange={setCurrentWeek}
            />
          )}
          
          {activeTab === 'lessons' && (
            <LessonsTab
              key="lessons" 
              subscription={subscription}
              gamification={gamification}
              currentWeek={currentWeek}
              onWeekChange={setCurrentWeek}
            />
          )}
          
          {activeTab === 'progress' && (
            <motion.div
              key="progress"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ProgressDashboard />
            </motion.div>
          )}
          
          {activeTab === 'achievements' && (
            <AchievementsTab key="achievements" gamification={gamification} />
          )}
          
          {activeTab === 'analytics' && (
            <AnalyticsTab key="analytics" analytics={analytics} />
          )}
        </AnimatePresence>
      </div>

      {/* Upgrade Modal */}
      <SubscriptionPlans
        showModal={showUpgradeModal}
        currentTier={subscription.currentSubscription.currentTier}
        onClose={() => setShowUpgradeModal(false)}
        onUpgrade={(tier) => {
          // Handle upgrade logic
          console.log('Upgrade to:', tier);
          setShowUpgradeModal(false);
        }}
      />
    </div>
  );
}

// Dashboard Header Component
function DashboardHeader({ 
  gamification, 
  subscription, 
  onUpgrade 
}: {
  gamification: any;
  subscription: any;
  onUpgrade: () => void;
}) {
  const levelColor = getLevelColor(gamification.learningStats.level);
  const currentTier = SUBSCRIPTION_TIERS.find(t => t.id === subscription.currentSubscription.currentTier);

  return (
    <div className="bg-gray-800/80 backdrop-blur-sm border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Welcome Section */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                AI
              </div>
              {gamification.streakData.current > 0 && (
                <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                  {gamification.streakData.current}
                </div>
              )}
            </div>
            
            <div>
              <h1 className="text-2xl font-bold text-white">Welcome back, AI Hero! 👋</h1>
              <p className="text-gray-400">Ready to continue your journey to AI mastery?</p>
            </div>
          </div>

          {/* Stats & Actions */}
          <div className="flex items-center space-x-6">
            {/* Level Display */}
            <div className="text-center">
              <div className={`inline-flex items-center px-4 py-2 rounded-xl bg-gradient-to-r ${levelColor} text-white font-semibold`}>
                <Crown className="w-5 h-5 mr-2" />
                Level {gamification.learningStats.level}
              </div>
              <div className="text-xs text-gray-400 mt-1">
                {gamification.learningStats.xpToNextLevel} XP to next level
              </div>
            </div>

            {/* Streak Display */}
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold">
                <Flame className="w-5 h-5 mr-2" />
                {gamification.streakData.current} day streak
              </div>
              <div className="text-xs text-gray-400 mt-1">
                Best: {gamification.streakData.longest} days
              </div>
            </div>

            {/* Subscription Tier */}
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-xl bg-gray-700 border border-gray-600 text-white">
                <span className="text-2xl mr-2">{currentTier?.icon}</span>
                <span className="font-medium">{currentTier?.name}</span>
              </div>
              {subscription.currentSubscription.currentTier === 'free' && (
                <button
                  onClick={onUpgrade}
                  className="text-xs text-blue-400 hover:text-blue-300 mt-1 block"
                >
                  Upgrade for more content
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Overview Tab Component
function OverviewTab({ 
  gamification, 
  subscription, 
  analytics, 
  currentWeek, 
  onWeekChange 
}: {
  gamification: any;
  subscription: any;
  analytics: any;
  currentWeek: number;
  onWeekChange: (week: number) => void;
}) {
  const insights = analytics.generateInsights() || {};
  const recommendations = analytics.getPersonalizedRecommendations() || [];
  const currentTier = SUBSCRIPTION_TIERS.find(t => t.id === subscription.currentSubscription.currentTier);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Lessons Completed"
          value={gamification.learningStats.lessonsCompleted}
          icon={BookOpen}
          color="blue"
          trend="+2 this week"
        />
        
        <StatCard
          title="Projects Built"
          value={gamification.learningStats.projectsBuilt}
          icon={Code}
          color="green"
          trend="+1 this week"
        />
        
        <StatCard
          title="Study Time"
          value={`${Math.floor(gamification.learningStats.studyTimeMinutes / 60)}h`}
          icon={Clock}
          color="purple"
          trend="+4h this week"
        />
        
        <StatCard
          title="Achievements"
          value={gamification.achievements.filter(a => a.unlocked).length}
          icon={Trophy}
          color="yellow"
          trend="2 unlocked recently"
        />
      </div>

      {/* Current Learning Path */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <CurrentWeekProgress currentWeek={currentWeek} />
        <RecommendationsPanel recommendations={recommendations} />
      </div>

      {/* Recent Activity & Achievements */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <RecentActivity />
        <RecentAchievements achievements={gamification.achievements.filter(a => a.unlocked).slice(-4)} />
      </div>
    </motion.div>
  );
}

// Stat Card Component
function StatCard({ 
  title, 
  value, 
  icon: Icon, 
  color, 
  trend 
}: {
  title: string;
  value: number | string;
  icon: any;
  color: string;
  trend?: string;
}) {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    yellow: 'from-yellow-500 to-yellow-600'
  };

  return (
    <motion.div
      className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all"
      whileHover={{ scale: 1.02, y: -2 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl bg-gradient-to-r ${colorClasses[color as keyof typeof colorClasses]}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        {trend && (
          <div className="text-xs text-green-400 bg-green-900/20 px-2 py-1 rounded-full">
            {trend}
          </div>
        )}
      </div>
      
      <div className="text-3xl font-bold text-white mb-1">{value}</div>
      <div className="text-gray-400 text-sm">{title}</div>
    </motion.div>
  );
}

// Current Week Progress Component
function CurrentWeekProgress({ currentWeek }: { currentWeek: number }) {
  const weekLessons = getLessonsByWeek(currentWeek);
  const completedLessons = 2; // This would come from user progress
  const progress = (completedLessons / weekLessons.length) * 100;

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">Week {currentWeek} Progress</h3>
        <div className="text-sm text-gray-400">
          {completedLessons} of {weekLessons.length} lessons
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-400 mb-2">
          <span>Progress</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Lesson List */}
      <div className="space-y-3">
        {weekLessons.slice(0, 4).map((lesson: any, index: number) => (
          <div key={lesson.id} className="flex items-center space-x-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              index < completedLessons 
                ? 'bg-green-600' 
                : index === completedLessons 
                ? 'bg-blue-600' 
                : 'bg-gray-700'
            }`}>
              {index < completedLessons ? (
                <CheckCircle className="w-4 h-4 text-white" />
              ) : index === completedLessons ? (
                <Play className="w-4 h-4 text-white" />
              ) : (
                <Lock className="w-4 h-4 text-gray-400" />
              )}
            </div>
            <div className="flex-1">
              <div className={`font-medium ${
                index < completedLessons ? 'text-green-400' : 'text-white'
              }`}>
                {lesson.day}
              </div>
              <div className="text-sm text-gray-400">{lesson.target}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Continue Button */}
      <Link
        href={`/lesson/${weekLessons[completedLessons]?.id || weekLessons[0]?.id}`}
        className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2"
      >
        <Play className="w-5 h-5" />
        <span>Continue Learning</span>
      </Link>
    </div>
  );
}

// Recommendations Panel Component
function RecommendationsPanel({ recommendations }: { recommendations: any[] }) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
      <h3 className="text-xl font-bold text-white mb-6 flex items-center">
        <Sparkles className="w-6 h-6 mr-2 text-yellow-400" />
        Personalized Recommendations
      </h3>

      {recommendations.length > 0 ? (
        <div className="space-y-4">
          {recommendations.slice(0, 3).map((rec, index) => (
            <div key={index} className={`p-4 rounded-xl border-l-4 ${
              rec.priority === 'high' ? 'border-red-500 bg-red-900/20' :
              rec.priority === 'medium' ? 'border-yellow-500 bg-yellow-900/20' :
              'border-blue-500 bg-blue-900/20'
            }`}>
              <h4 className="font-semibold text-white mb-2">{rec.title}</h4>
              <p className="text-gray-300 text-sm mb-2">{rec.description}</p>
              <div className="text-xs text-gray-400">{rec.action}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <Target className="w-12 h-12 text-gray-500 mx-auto mb-4" />
          <p className="text-gray-400">Complete more lessons to get personalized recommendations!</p>
        </div>
      )}
    </div>
  );
}

// Recent Activity Component
function RecentActivity() {
  const activities = [
    { type: 'lesson', title: 'Completed Python Data Types', time: '2 hours ago', icon: BookOpen },
    { type: 'achievement', title: 'Unlocked "Week Warrior" badge', time: '1 day ago', icon: Trophy },
    { type: 'project', title: 'Submitted AI Calculator project', time: '2 days ago', icon: Code },
    { type: 'streak', title: 'Reached 5-day learning streak', time: '3 days ago', icon: Flame }
  ];

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
      <h3 className="text-xl font-bold text-white mb-6">Recent Activity</h3>
      
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-gray-700">
              <activity.icon className="w-4 h-4 text-gray-300" />
            </div>
            <div className="flex-1">
              <div className="text-white font-medium">{activity.title}</div>
              <div className="text-gray-400 text-sm">{activity.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Recent Achievements Component
function RecentAchievements({ achievements }: { achievements: any[] }) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
      <h3 className="text-xl font-bold text-white mb-6 flex items-center">
        <Trophy className="w-6 h-6 mr-2 text-yellow-400" />
        Recent Achievements
      </h3>
      
      <div className="grid grid-cols-2 gap-4">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            className="p-4 rounded-xl bg-gray-700/50 border border-gray-600 text-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-2xl mb-2">{achievement.icon}</div>
            <div className="font-semibold text-white text-sm">{achievement.title}</div>
            <div className="text-yellow-400 text-xs font-medium">+{achievement.points} XP</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Lessons Tab Component
function LessonsTab({ 
  subscription, 
  gamification, 
  currentWeek, 
  onWeekChange 
}: {
  subscription: any;
  gamification: any;
  currentWeek: number;
  onWeekChange: (week: number) => void;
}) {
  const accessibleWeeks = subscription.getAccessibleWeeks();
  const completedLessons = gamification.userProgress?.completedLessons || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      {/* Week Selector */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-6">Your Learning Path</h2>
        
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-3">
          {Array.from({length: 12}, (_, i) => i + 1).map(week => (
            <WeekCard
              key={week}
              week={week}
              isAccessible={accessibleWeeks.includes(week)}
              isActive={currentWeek === week}
              isCompleted={false} // This would come from user progress
              onClick={() => onWeekChange(week)}
            />
          ))}
        </div>
      </div>

      {/* Current Week Lessons */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-6">Week {currentWeek} Lessons</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getLessonsByWeek(currentWeek).map((lesson: any) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              isCompleted={completedLessons.includes(lesson.id)}
              isAccessible={subscription.canAccessLesson(lesson.id).allowed}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Week Card Component
function WeekCard({ 
  week, 
  isAccessible, 
  isActive, 
  isCompleted, 
  onClick 
}: {
  week: number;
  isAccessible: boolean;
  isActive: boolean;
  isCompleted: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      disabled={!isAccessible}
      className={`p-4 rounded-xl border-2 transition-all ${
        isActive
          ? 'border-blue-500 bg-blue-900/50'
          : isCompleted
          ? 'border-green-500 bg-green-900/50'
          : isAccessible
          ? 'border-gray-600 bg-gray-700/50 hover:border-gray-500'
          : 'border-gray-700 bg-gray-800/50 opacity-50 cursor-not-allowed'
      }`}
      whileHover={isAccessible ? { scale: 1.05 } : {}}
      whileTap={isAccessible ? { scale: 0.95 } : {}}
    >
      <div className="text-center">
        <div className={`font-bold mb-1 ${
          isActive ? 'text-blue-400' : 
          isCompleted ? 'text-green-400' : 
          isAccessible ? 'text-white' : 'text-gray-500'
        }`}>
          W{week}
        </div>
        <div className="text-xs text-gray-400">Week {week}</div>
        {!isAccessible && <Lock className="w-4 h-4 mx-auto mt-2 text-gray-500" />}
        {isCompleted && <CheckCircle className="w-4 h-4 mx-auto mt-2 text-green-400" />}
      </div>
    </motion.button>
  );
}

// Lesson Card Component
function LessonCard({ 
  lesson, 
  isCompleted, 
  isAccessible 
}: {
  lesson: any;
  isCompleted: boolean;
  isAccessible: boolean;
}) {
  return (
    <Link href={`/lesson/${lesson.id}`}>
      <motion.div
        className={`p-6 rounded-xl border-2 transition-all ${
          isCompleted
            ? 'border-green-500 bg-green-900/20'
            : isAccessible
            ? 'border-gray-600 bg-gray-700/50 hover:border-gray-500'
            : 'border-gray-700 bg-gray-800/50 opacity-50'
        }`}
        whileHover={isAccessible ? { scale: 1.02, y: -2 } : {}}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h4 className="font-bold text-white mb-2">{lesson.day}</h4>
            <p className="text-gray-400 text-sm">{lesson.target}</p>
          </div>
          
          <div className="ml-4">
            {isCompleted ? (
              <CheckCircle className="w-6 h-6 text-green-400" />
            ) : isAccessible ? (
              <Play className="w-6 h-6 text-blue-400" />
            ) : (
              <Lock className="w-6 h-6 text-gray-500" />
            )}
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="text-gray-400">
            {lesson.duration} min • Difficulty {lesson.difficulty}/5
          </div>
          {lesson.isPortfolioWorthy && (
            <div className="bg-yellow-900/50 text-yellow-400 px-2 py-1 rounded text-xs">
              Portfolio
            </div>
          )}
        </div>
      </motion.div>
    </Link>
  );
}

// Achievements Tab Component
function AchievementsTab({ gamification }: { gamification: any }) {
  const { achievements } = gamification;
  const categories = ['learning', 'streak', 'project', 'milestone', 'social'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      {categories.map(category => (
        <div key={category} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-6 capitalize">{category} Achievements</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements
              .filter((a: any) => a.category === category)
              .map((achievement: any) => (
                <AchievementCard key={achievement.id} achievement={achievement} />
              ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
}

// Achievement Card Component
function AchievementCard({ achievement }: { achievement: any }) {
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'border-gray-400 text-gray-400';
      case 'rare': return 'border-blue-400 text-blue-400';
      case 'epic': return 'border-purple-400 text-purple-400';
      case 'legendary': return 'border-yellow-400 text-yellow-400';
      default: return 'border-gray-400 text-gray-400';
    }
  };

  return (
    <motion.div
      className={`p-6 rounded-xl border-2 relative overflow-hidden ${
        achievement.unlocked 
          ? `${getRarityColor(achievement.rarity)} bg-gray-700/50` 
          : 'border-gray-700 bg-gray-800/50 opacity-60'
      }`}
      whileHover={achievement.unlocked ? { scale: 1.05 } : {}}
    >
      {achievement.unlocked && (
        <div className="absolute top-2 right-2">
          <Sparkles className="w-4 h-4 text-yellow-400" />
        </div>
      )}
      
      <div className="text-center">
        <div className="text-4xl mb-4">{achievement.icon}</div>
        <h4 className="font-bold text-white mb-2">{achievement.title}</h4>
        <p className="text-gray-400 text-sm mb-4">{achievement.description}</p>
        
        <div className="flex items-center justify-between text-xs">
          <span className={`px-2 py-1 rounded-full ${getRarityColor(achievement.rarity)} bg-opacity-20`}>
            {achievement.rarity}
          </span>
          <span className="text-yellow-400 font-semibold">+{achievement.points} XP</span>
        </div>
        
        {achievement.unlocked && achievement.unlockedAt && (
          <div className="text-xs text-gray-500 mt-2">
            Unlocked {new Date(achievement.unlockedAt).toLocaleDateString()}
          </div>
        )}
      </div>
    </motion.div>
  );
}

// Analytics Tab Component
function AnalyticsTab({ analytics }: { analytics: any }) {
  const insights = analytics.generateInsights() || {};
  const userData = analytics.exportUserData();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      {/* Learning Insights */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-6">Learning Analytics</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">{insights.completedLessons || 0}</div>
            <div className="text-gray-400">Lessons Completed</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">{insights.avgScore?.toFixed(1) || '0.0'}</div>
            <div className="text-gray-400">Average Score</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">{insights.totalStudyTime || 0}m</div>
            <div className="text-gray-400">Study Time</div>
          </div>
        </div>
      </div>

      {/* Data Export */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-6">Data Management</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-xl">
            <div>
              <h4 className="font-semibold text-white">Export Learning Data</h4>
              <p className="text-gray-400 text-sm">Download your complete learning history and analytics</p>
            </div>
            <button
              onClick={() => {
                const dataStr = JSON.stringify(userData, null, 2);
                const dataBlob = new Blob([dataStr], { type: 'application/json' });
                const url = URL.createObjectURL(dataBlob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'aihero-learning-data.json';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Export Data
            </button>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-xl">
            <div>
              <h4 className="font-semibold text-white">Privacy Settings</h4>
              <p className="text-gray-400 text-sm">Manage your data collection preferences</p>
            </div>
            <button
              onClick={() => analytics.toggleTracking(!analytics.trackingEnabled)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                analytics.trackingEnabled 
                  ? 'bg-green-600 text-white hover:bg-green-700' 
                  : 'bg-red-600 text-white hover:bg-red-700'
              }`}
            >
              {analytics.trackingEnabled ? 'Tracking On' : 'Tracking Off'}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}