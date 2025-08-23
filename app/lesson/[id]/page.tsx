'use client'

import { notFound } from 'next/navigation'
import { getLessonById } from '@/lib/curriculum/index'
import { week01Content } from '@/lib/curriculum/weeks/week01'
import EnhancedLessonPage from '@/components/EnhancedLessonPage'
import { useGamificationStore } from '@/stores/gamificationStore'
import { useSubscriptionStore } from '@/stores/subscriptionStore'
import { useAnalyticsStore } from '@/stores/analyticsStore'
import { useEffect } from 'react'

// Import fallback components for basic lessons
import { useState } from 'react'
import { 
  BookOpen, 
  Code, 
  Play, 
  MessageSquare, 
  CheckCircle, 
  Clock, 
  ArrowLeft,
  Star,
  Lightbulb,
  Target,
  Trophy,
  Calendar,
  Lock
} from 'lucide-react'
import Link from 'next/link'
import PythonLab from '@/components/PythonLab'
import { SUBSCRIPTION_TIERS } from '@/lib/curriculum/index'

// Upgrade Prompt Component
function UpgradePrompt({ lesson, reason }: { lesson: any; reason?: string }) {
  const [showPlans, setShowPlans] = useState(false)
  const subscription = useSubscriptionStore()
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 text-center">
          <div className="mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Premium Content</h1>
            <p className="text-gray-400 mb-4">{reason || 'This lesson requires a premium subscription.'}</p>
          </div>
          
          <div className="bg-gray-900/50 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="text-left">
                <h3 className="text-xl font-bold text-white">{lesson.title}</h3>
                <p className="text-gray-400">{lesson.target}</p>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-400">Week {lesson.week}</div>
                <div className="text-sm text-gray-400">{lesson.duration} min</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-300">
              <div className="flex items-center space-x-1">
                <Target className="w-4 h-4" />
                <span>Difficulty {lesson.difficulty}/5</span>
              </div>
              {lesson.isPortfolioWorthy && (
                <div className="flex items-center space-x-1">
                  <Trophy className="w-4 h-4 text-yellow-400" />
                  <span>Portfolio Project</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="space-y-4">
            <button
              onClick={() => setShowPlans(true)}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-lg transition-all"
            >
              Unlock This Content
            </button>
            
            <Link
              href="/dashboard"
              className="block w-full bg-gray-700 text-gray-300 py-3 px-6 rounded-xl font-medium hover:bg-gray-600 transition-colors"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>
        
        {showPlans && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-4 border-b border-gray-700 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">Choose Your Plan</h2>
                <button
                  onClick={() => setShowPlans(false)}
                  className="text-gray-400 hover:text-white p-2"
                >
                  ✕
                </button>
              </div>
              <div className="p-6">
                {/* This would render the subscription plans component */}
                <div className="text-center py-12">
                  <h3 className="text-xl font-bold text-white mb-4">Subscription Plans Coming Soon!</h3>
                  <p className="text-gray-400">We're working on the perfect pricing for you.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function LessonPage({ params }: { params: { id: string } }) {
  const lesson = getLessonById(params.id)
  
  // Store hooks
  const gamification = useGamificationStore()
  const subscription = useSubscriptionStore()
  const analytics = useAnalyticsStore()
  
  // Track lesson start
  useEffect(() => {
    if (lesson) {
      analytics.trackLessonStart(lesson.id, lesson.difficulty)
    }
  }, [lesson?.id])
  
  // Check access
  const accessCheck = subscription.canAccessLesson(params.id)
  
  if (!lesson) {
    notFound()
  }
  
  if (!accessCheck.allowed) {
    return <UpgradePrompt lesson={lesson} reason={accessCheck.reason} />
  }

  // Check if we have enhanced content for this lesson
  const enhancedContent = week01Content[params.id as keyof typeof week01Content]
  
  if (enhancedContent) {
    // Use the enhanced lesson component for rich, interactive content
    return (
      <EnhancedLessonPage 
        lesson={lesson} 
        content={enhancedContent}
        onLessonComplete={(timeSpent) => {
          gamification.completeLesson(lesson.id, timeSpent)
          analytics.trackLessonComplete(lesson.id, timeSpent, undefined)
        }}
        onAssessmentSubmit={(score) => {
          gamification.submitAssessment(lesson.id, score)
          analytics.trackAssessment(lesson.id, score, 1, 0)
        }}
        onDiscussionPost={(response) => {
          gamification.addDiscussionPost(lesson.id, response)
        }}
        onCodeExecution={(success, error) => {
          analytics.trackCodeExecution(lesson.id, success, error)
        }}
      />
    )
  }
  
  // Fall back to basic lesson display for lessons without enhanced content
  return <BasicLessonPage lesson={lesson} />
}

// Basic lesson component for lessons that don't have enhanced content yet
function BasicLessonPage({ lesson }: { lesson: any }) {
  const [activeTab, setActiveTab] = useState('learn')
  
  const tabs = [
    { id: 'learn', label: 'Learn', icon: BookOpen },
    { id: 'practice', label: 'Practice', icon: Lightbulb },
    { id: 'lab', label: 'Python Lab', icon: Code },
    { id: 'assessment', label: 'Assessment', icon: CheckCircle },
    { id: 'discussion', label: 'Discussion', icon: MessageSquare },
  ]

  // Get tier colors and info
  const getTierInfo = (tier: string) => {
    switch (tier) {
      case 'free': return { color: 'emerald', name: 'Free Explorer', icon: '🌟' }
      case 'intermediate': return { color: 'blue', name: 'AI Developer', icon: '🚀' }
      case 'advanced': return { color: 'purple', name: 'AI Engineer Pro', icon: '👑' }
      default: return { color: 'gray', name: 'Unknown', icon: '❓' }
    }
  }

  const tierInfo = getTierInfo(lesson.tier)
  const subscriptionInfo = SUBSCRIPTION_TIERS[lesson.tier as keyof typeof SUBSCRIPTION_TIERS]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      {/* Header */}
      <div className="bg-gray-800/50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                href="/dashboard" 
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Dashboard</span>
              </Link>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>Week {lesson.week}, {lesson.day}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Clock className="w-4 h-4" />
                <span>{lesson.duration} minutes</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Lesson Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">{lesson.title}</h1>
          <p className="text-lg text-gray-400 mb-6">{lesson.target}</p>

          {/* Enhanced Content Notice */}
          <div className="bg-blue-900/20 rounded-lg p-6 border border-blue-800/50 mb-6">
            <div className="flex items-center space-x-3 mb-3">
              <Star className="w-6 h-6 text-blue-400" />
              <h3 className="text-lg font-semibold text-blue-300">Enhanced Content Coming Soon!</h3>
            </div>
            <p className="text-gray-300 mb-4">
              This lesson will soon feature comprehensive content with interactive exercises, 
              assessments, and hands-on coding projects. For now, enjoy the basic lesson structure.
            </p>
            <div className="text-sm text-gray-400">
              <p><strong>Goal:</strong> {lesson.target}</p>
              <p><strong>Build:</strong> {lesson.deliverable}</p>
              <p><strong>Key Concepts:</strong> {lesson.concepts.join(', ')}</p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="border-b border-gray-700">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => {
                const Icon = tab.icon
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
                )
              })}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-gray-800/50 rounded-xl border border-gray-700">
          {/* Learn Tab */}
          {activeTab === 'learn' && (
            <div className="p-8">
              <div className="max-w-4xl">
                <h2 className="text-2xl font-semibold text-white mb-4">Learning Objectives</h2>
                <div className="bg-blue-900/20 rounded-lg p-6 border border-blue-800/50 mb-6">
                  <p className="text-blue-200 text-lg mb-4">
                    <strong>Today's Goal:</strong> {lesson.target}
                  </p>
                  <p className="text-gray-300">
                    By the end of this lesson, you'll have built: <strong>{lesson.deliverable}</strong>
                  </p>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4">Key Concepts</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {lesson.concepts.map((concept: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-gray-900/50 rounded-lg border border-gray-600">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{concept}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-yellow-900/20 rounded-lg p-6 border border-yellow-800/50">
                  <h4 className="text-yellow-300 font-semibold mb-2">📚 Enhanced Content Preview</h4>
                  <p className="text-gray-300 text-sm">
                    When enhanced content is added for this lesson, you'll see:
                  </p>
                  <ul className="text-gray-400 text-sm mt-2 space-y-1">
                    <li>• 4+ comprehensive learning sections with code examples</li>
                    <li>• Interactive practice exercises with hints and solutions</li>
                    <li>• Portfolio-worthy mini projects</li>
                    <li>• Hands-on lab tasks with working code</li>
                    <li>• Knowledge assessments with explanations</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Other tabs with placeholders */}
          {activeTab === 'practice' && (
            <div className="p-8">
              <div className="text-center py-12">
                <Lightbulb className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Practice Exercises Coming Soon</h3>
                <p className="text-gray-400">Interactive coding exercises will be available here.</p>
              </div>
            </div>
          )}

          {activeTab === 'lab' && (
            <div className="p-8">
              <PythonLab 
                lessonId={lesson.id}
                initialCode={`# ${lesson.title} - Week ${lesson.week}, ${lesson.day}
# 🎯 TARGET: ${lesson.target}
# 🏆 DELIVERABLE: ${lesson.deliverable}

print("Welcome to ${lesson.title}!")
print("Let's build: ${lesson.deliverable}")

# Key concepts for this lesson:
${lesson.concepts.map((concept: string) => `# • ${concept}`).join('\n')}

# Start building your deliverable here:

`}
              />
            </div>
          )}

          {activeTab === 'assessment' && (
            <div className="p-8">
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Interactive Assessment Coming Soon</h3>
                <p className="text-gray-400">Knowledge checks and quizzes will be available here.</p>
              </div>
            </div>
          )}

          {activeTab === 'discussion' && (
            <div className="p-8">
              <div className="text-center py-12">
                <MessageSquare className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Discussion Forum Coming Soon</h3>
                <p className="text-gray-400">Community discussions will be available here.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
