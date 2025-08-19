'use client'

import { useState } from 'react'
import { notFound } from 'next/navigation'
import { 
  BookOpen, 
  Code, 
  Play, 
  MessageSquare, 
  CheckCircle, 
  Clock, 
  Users,
  ArrowLeft,
  Star,
  Lightbulb,
  Target,
  Trophy,
  Calendar,
  Lock,
  Crown
} from 'lucide-react'
import Link from 'next/link'
import PythonLab from '@/components/PythonLab'

// Import your actual curriculum
import { getLessonById, getWeekById, SUBSCRIPTION_TIERS, type Lesson } from '@/lib/curriculum'

export default function LessonPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState('learn')
  const lesson = getLessonById(params.id)

  if (!lesson) {
    notFound()
  }

  const week = getWeekById(lesson.week)
  
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

  // Difficulty stars
  const getDifficultyStars = (difficulty: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < difficulty ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} 
      />
    ))
  }

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
              <div className={`px-3 py-1 rounded-full text-sm font-medium bg-${tierInfo.color}-900/30 text-${tierInfo.color}-300 border border-${tierInfo.color}-800/50 flex items-center space-x-1`}>
                <span>{tierInfo.icon}</span>
                <span>{tierInfo.name}</span>
                {lesson.locked && <Lock className="w-3 h-3 ml-1" />}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Lesson Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-white mb-2">{lesson.title}</h1>
              {week && (
                <p className="text-lg text-gray-400 mb-4">{week.title}: {week.focus}</p>
              )}
            </div>
            {lesson.isPortfolioWorthy && (
              <div className="bg-yellow-900/30 rounded-lg px-4 py-2 border border-yellow-800/50">
                <div className="flex items-center space-x-2 text-yellow-300">
                  <Trophy className="w-5 h-5" />
                  <span className="font-medium">Portfolio Project</span>
                </div>
              </div>
            )}
          </div>
          
          {/* Lesson Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {/* Target */}
            <div className="bg-blue-900/30 rounded-lg p-6 border border-blue-800/50">
              <h2 className="text-lg font-semibold text-blue-300 mb-3 flex items-center">
                <Target className="w-5 h-5 mr-2" />
                Learning Target
              </h2>
              <p className="text-gray-300">{lesson.target}</p>
            </div>

            {/* Deliverable */}
            <div className="bg-green-900/30 rounded-lg p-6 border border-green-800/50">
              <h2 className="text-lg font-semibold text-green-300 mb-3 flex items-center">
                <Trophy className="w-5 h-5 mr-2" />
                Deliverable
              </h2>
              <p className="text-gray-300">{lesson.deliverable}</p>
            </div>

            {/* Difficulty & Concepts */}
            <div className="bg-purple-900/30 rounded-lg p-6 border border-purple-800/50">
              <h2 className="text-lg font-semibold text-purple-300 mb-3 flex items-center">
                <Star className="w-5 h-5 mr-2" />
                Difficulty & Focus
              </h2>
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-gray-300 text-sm">Difficulty:</span>
                <div className="flex space-x-1">
                  {getDifficultyStars(lesson.difficulty)}
                </div>
              </div>
              <div className="flex flex-wrap gap-1">
                {lesson.concepts.slice(0, 3).map((concept, index) => (
                  <span key={index} className="text-xs bg-purple-800/50 text-purple-200 px-2 py-1 rounded">
                    {concept}
                  </span>
                ))}
                {lesson.concepts.length > 3 && (
                  <span className="text-xs text-purple-300">+{lesson.concepts.length - 3} more</span>
                )}
              </div>
            </div>
          </div>

          {/* Pass Criteria (if available) */}
          {lesson.passCriteria && (
            <div className="bg-green-900/20 rounded-lg p-6 border border-green-800/50 mb-6">
              <h2 className="text-lg font-semibold text-green-300 mb-3 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Success Criteria
              </h2>
              <p className="text-gray-300">{lesson.passCriteria}</p>
            </div>
          )}

          {/* All Concepts */}
          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
            <h2 className="text-lg font-semibold text-white mb-3">Key Concepts You'll Learn</h2>
            <div className="flex flex-wrap gap-2">
              {lesson.concepts.map((concept, index) => (
                <span key={index} className="bg-blue-800/50 text-blue-200 px-3 py-1 rounded-full text-sm">
                  {concept}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Access Control for Locked Lessons */}
        {lesson.locked && (
          <div className="bg-red-900/30 rounded-lg p-8 border border-red-800/50 mb-8 text-center">
            <Lock className="w-16 h-16 text-red-400 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-red-300 mb-4">This Lesson is Locked</h2>
            <p className="text-gray-300 mb-6">
              Upgrade to <strong>{tierInfo.name}</strong> to access this lesson and continue your AI journey.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className={`bg-${tierInfo.color}-900/30 rounded-lg p-4 border border-${tierInfo.color}-800/50`}>
                <p className={`text-${tierInfo.color}-300 font-semibold`}>
                  ${subscriptionInfo.price} {subscriptionInfo.duration}
                </p>
                <p className="text-gray-400 text-sm">{subscriptionInfo.features.length} features included</p>
              </div>
              <button className={`px-6 py-3 bg-${tierInfo.color}-600 hover:bg-${tierInfo.color}-700 text-white rounded-lg font-medium transition-colors`}>
                Upgrade Now
              </button>
            </div>
          </div>
        )}

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
                    disabled={lesson.locked && tab.id === 'lab'}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{tab.label}</span>
                    {lesson.locked && tab.id === 'lab' && <Lock className="w-3 h-3" />}
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
                {/* Introduction */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">Welcome to {lesson.title}</h2>
                  <div className="bg-blue-900/20 rounded-lg p-6 border border-blue-800/50 mb-6">
                    <p className="text-blue-200 text-lg mb-4">
                      <strong>Today's Goal:</strong> {lesson.target}
                    </p>
                    <p className="text-gray-300">
                      By the end of this lesson, you'll have built: <strong>{lesson.deliverable}</strong>
                    </p>
                  </div>
                </section>

                {/* Lesson Overview */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">What You'll Learn</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {lesson.concepts.map((concept, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-gray-900/50 rounded-lg border border-gray-600">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{concept}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Time Management */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">Time Breakdown</h2>
                  <div className="bg-yellow-900/20 rounded-lg p-6 border border-yellow-800/50">
                    <div className="flex items-center space-x-4 text-yellow-200">
                      <Clock className="w-5 h-5" />
                      <span className="font-medium">Estimated Time: {lesson.duration} minutes</span>
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <p className="text-gray-400">Learning</p>
                        <p className="text-white font-medium">{Math.round(lesson.duration * 0.4)} min</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-400">Practice</p>
                        <p className="text-white font-medium">{Math.round(lesson.duration * 0.4)} min</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-400">Building</p>
                        <p className="text-white font-medium">{Math.round(lesson.duration * 0.2)} min</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Replit Integration */}
                {lesson.replitProject && (
                  <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-white mb-4">Practice Environment</h2>
                    <div className="bg-green-900/20 rounded-lg p-6 border border-green-800/50">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-green-300 font-medium mb-2">Python Lab - {lesson.replitProject}</h3>
                          <p className="text-gray-300 text-sm">
                            Practice Python concepts directly in your browser with real code execution
                          </p>
                        </div>
                        <button onClick={() => setActiveTab("lab")} className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors">
                          Open Python Lab
                        </button>
                      </div>
                    </div>
                  </section>
                )}

                {/* Portfolio Worth Notice */}
                {lesson.isPortfolioWorthy && (
                  <section>
                    <div className="bg-yellow-900/20 rounded-lg p-6 border border-yellow-800/50">
                      <div className="flex items-center space-x-3 mb-3">
                        <Trophy className="w-6 h-6 text-yellow-400" />
                        <h3 className="text-lg font-semibold text-yellow-300">Portfolio Project</h3>
                      </div>
                      <p className="text-gray-300">
                        This lesson's deliverable is portfolio-worthy! Make sure to polish your work and add it to your GitHub portfolio when complete.
                      </p>
                    </div>
                  </section>
                )}
              </div>
            </div>
          )}

          {/* Practice Tab */}
          {activeTab === 'practice' && (
            <div className="p-8">
              <div className="max-w-4xl">
                <h2 className="text-2xl font-semibold text-white mb-6">Practice Exercises</h2>
                
                {/* Deliverable Focus */}
                <div className="bg-blue-900/30 rounded-lg p-6 border border-blue-800/50 mb-6">
                  <h3 className="text-lg font-semibold text-blue-300 mb-3">Today's Deliverable</h3>
                  <p className="text-gray-300 mb-4">{lesson.deliverable}</p>
                  <div className="text-sm text-gray-400">
                    <p><strong>Time limit:</strong> {lesson.duration} minutes</p>
                    <p><strong>Difficulty:</strong> {lesson.difficulty}/5 stars</p>
                    <p><strong>Key concepts:</strong> {lesson.concepts.slice(0, 3).join(', ')}</p>
                  </div>
                </div>

                {/* Replit Integration */}
                {lesson.replitProject && (
                  <div className="bg-green-900/20 rounded-lg p-6 border border-green-800/50 mb-6">
                    <h3 className="text-lg font-semibold text-green-300 mb-3">Guided Practice</h3>
                    <p className="text-gray-300 mb-4">
                      Work through structured exercises in the Python Lab for this lesson.
                    </p>
                    <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors flex items-center space-x-2">
                      <Play className="w-4 h-4" />
                      <span>Start Coding in Python Lab</span>
                    </button>
                  </div>
                )}

                {/* Practice Steps */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Practice Roadmap</h3>
                  
                  {lesson.concepts.map((concept, index) => (
                    <div key={index} className="bg-gray-900/50 rounded-lg p-4 border border-gray-600">
                      <h4 className="text-white font-medium mb-2">Step {index + 1}: Master {concept}</h4>
                      <p className="text-gray-300 text-sm mb-3">
                        Focus on understanding and implementing {concept.toLowerCase()} concepts.
                      </p>
                      <div className="flex items-center space-x-2 text-xs text-gray-400">
                        <Clock className="w-3 h-3" />
                        <span>~{Math.round(lesson.duration / lesson.concepts.length)} minutes</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Python Lab Tab */}
          {activeTab === 'lab' && (
            <div className="p-8">
              {lesson.locked ? (
                <div className="text-center py-12">
                  <Lock className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-400">Upgrade to access the Python Lab</p>
                </div>
              ) : (
                <PythonLab 
                  lessonId={lesson.id}
                  initialCode={`# ${lesson.title} - Week ${lesson.week}, ${lesson.day}
# 🎯 TARGET: ${lesson.target}
# ⏰ TIME LIMIT: ${lesson.duration} minutes
# 🏆 DELIVERABLE: ${lesson.deliverable}

print("Welcome to ${lesson.title}!")
print("Let's build: ${lesson.deliverable}")

# Key concepts for this lesson:
${lesson.concepts.map(concept => `# • ${concept}`).join('\n')}

# Start building your deliverable here:

`}
                />
              )}
            </div>
          )}

          {/* Assessment Tab */}
          {activeTab === 'assessment' && (
            <div className="p-8">
              <div className="max-w-4xl">
                <h2 className="text-2xl font-semibold text-white mb-6">Assessment</h2>
                
                {/* Completion Checklist */}
                <div className="bg-green-900/30 rounded-lg p-6 border border-green-800/50 mb-6">
                  <h3 className="text-lg font-semibold text-green-300 mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Completion Checklist
                  </h3>
                  <div className="space-y-3">
                    {lesson.concepts.map((concept, index) => (
                      <label key={index} className="flex items-center space-x-3 text-gray-300 cursor-pointer">
                        <input type="checkbox" className="rounded border-gray-600 bg-gray-700" />
                        <span>I can demonstrate {concept.toLowerCase()}</span>
                      </label>
                    ))}
                    <label className="flex items-center space-x-3 text-gray-300 cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-600 bg-gray-700" />
                      <span>I completed the deliverable: {lesson.deliverable}</span>
                    </label>
                    {lesson.isPortfolioWorthy && (
                      <label className="flex items-center space-x-3 text-yellow-300 cursor-pointer">
                        <input type="checkbox" className="rounded border-gray-600 bg-gray-700" />
                        <span>I added this project to my portfolio</span>
                      </label>
                    )}
                  </div>
                </div>

                {/* Self-Assessment */}
                <div className="bg-blue-900/30 rounded-lg p-6 border border-blue-800/50">
                  <h3 className="text-lg font-semibold text-blue-300 mb-4">Self-Assessment</h3>
                  <p className="text-gray-300 mb-4">
                    Rate your confidence with today's concepts (1 = Need more practice, 5 = Confident):
                  </p>
                  <div className="space-y-3">
                    {lesson.concepts.map((concept, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-gray-300">{concept}</span>
                        <div className="flex space-x-1">
                          {[1, 2, 3, 4, 5].map((rating) => (
                            <button
                              key={rating}
                              className="w-8 h-8 rounded border border-gray-600 hover:bg-blue-600 transition-colors text-sm"
                            >
                              {rating}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Discussion Tab */}
          {activeTab === 'discussion' && (
            <div className="p-6">
              <div className="max-w-4xl">
                <h2 className="text-2xl font-semibold text-white mb-6">Discussion & Help</h2>
                <div className="text-center py-12">
                  <MessageSquare className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-400">Discussion forum coming soon!</p>
                  <p className="text-sm text-gray-500 mt-2">
                    For now, complete your {lesson.deliverable} and move to the next lesson
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}