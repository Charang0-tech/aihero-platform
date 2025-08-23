// components/LessonPage.tsx - COMPLETE LESSON COMPONENT
import React, { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactMarkdown from 'react-markdown';
import { 
  BookOpen, 
  Code, 
  FlaskConical, 
  CheckCircle, 
  MessageSquare,
  Play,
  Eye,
  EyeOff,
  Lightbulb,
  Target,
  Clock,
  Award,
  Brain,
  Zap,
  AlertCircle
} from 'lucide-react';

import { LessonContent, Lesson } from '@/lib/curriculum/types';

interface LessonPageProps {
  lesson: Lesson;
  content: LessonContent;
}

export default function LessonPage({ lesson, content }: LessonPageProps) {
  const [activeTab, setActiveTab] = useState('learn');
  const [showSolutions, setShowSolutions] = useState<{[key: string]: boolean}>({});
  const [completedSections, setCompletedSections] = useState<{[key: string]: boolean}>({});

  // Define available tabs based on content availability
  const tabs = [
    { id: 'learn', label: 'Learn', icon: BookOpen },
    { id: 'practice', label: 'Practice', icon: Code },
    { id: 'lab', label: 'Lab', icon: FlaskConical },
    { id: 'assessment', label: 'Assessment', icon: CheckCircle },
    { id: 'discussion', label: 'Discussion', icon: MessageSquare }
  ];

  const toggleSolution = (exerciseId: string) => {
    setShowSolutions(prev => ({
      ...prev,
      [exerciseId]: !prev[exerciseId]
    }));
  };

  const markSectionComplete = (sectionId: string) => {
    setCompletedSections(prev => ({
      ...prev,
      [sectionId]: true
    }));
  };

  if (!content) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-pulse mb-4">Loading lesson content...</div>
          <div className="text-gray-400">Please wait while we prepare your lesson.</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">{lesson.title}</h1>
              <p className="text-gray-300 mt-2">{content.learn?.objective || lesson.target}</p>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{lesson.duration} min</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="w-4 h-4" />
                <span>Difficulty: {lesson.difficulty}/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-gray-800 border-b border-gray-700">
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

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Learn Tab */}
        {activeTab === 'learn' && (
          <div className="space-y-8">
            {content.learn?.sections ? content.learn.sections.map((section: any, index: number) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                  <button
                    onClick={() => markSectionComplete(`section-${index}`)}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                      completedSections[`section-${index}`]
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {completedSections[`section-${index}`] ? '✓ Complete' : 'Mark Complete'}
                  </button>
                </div>
                
                {/* Section Content */}
                <div className="prose prose-invert max-w-none mb-6">
                  <ReactMarkdown className="text-gray-300">
                    {section.content}
                  </ReactMarkdown>
                </div>

                {/* Code Example */}
                {section.codeExample && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <Code className="w-5 h-5 mr-2" />
                      {section.codeExample.title}
                    </h3>
                    
                    <div className="bg-gray-900 rounded-lg border border-gray-600 overflow-hidden">
                      <SyntaxHighlighter
                        language="python"
                        style={oneDark}
                        customStyle={{
                          margin: 0,
                          padding: '1rem',
                          backgroundColor: 'transparent'
                        }}
                      >
                        {section.codeExample.code}
                      </SyntaxHighlighter>
                    </div>
                    
                    <div className="mt-4 p-4 bg-blue-900/20 rounded-lg border border-blue-800/50">
                      <p className="text-blue-200">{section.codeExample.explanation}</p>
                    </div>
                  </div>
                )}
              </div>
            )) : (
              <EnhancedLearningContent lesson={lesson} />
            )}
          </div>
        )}

        {/* Practice Tab */}
        {activeTab === 'practice' && (
          <div className="space-y-8">
            {content.practice?.exercises ? content.practice.exercises.map((exercise: any, index: number) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{exercise.title}</h3>
                  <span className={`px-3 py-1 rounded-lg text-sm font-medium ${
                    exercise.difficulty === 'beginner' ? 'bg-green-600 text-white' :
                    exercise.difficulty === 'intermediate' ? 'bg-yellow-600 text-white' :
                    'bg-red-600 text-white'
                  }`}>
                    {exercise.difficulty}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4">{exercise.description}</p>
                
                {/* Code Template */}
                {exercise.codeTemplate && (
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">Your Task:</h4>
                    <div className="bg-gray-900 rounded-lg border border-gray-600 overflow-hidden">
                      <SyntaxHighlighter
                        language="python"
                        style={oneDark}
                        customStyle={{ margin: 0, padding: '1rem', backgroundColor: 'transparent' }}
                      >
                        {exercise.codeTemplate}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                )}

                {/* Hints */}
                {exercise.hints && (
                  <div className="mb-4">
                    <details className="bg-yellow-900/20 rounded-lg border border-yellow-800/50">
                      <summary className="p-4 cursor-pointer text-yellow-200 font-medium flex items-center">
                        <Lightbulb className="w-5 h-5 mr-2" />
                        Need a hint? Click here
                      </summary>
                      <div className="px-4 pb-4">
                        <ul className="space-y-2">
                          {exercise.hints.map((hint: string, hintIndex: number) => (
                            <li key={hintIndex} className="text-yellow-200">• {hint}</li>
                          ))}
                        </ul>
                      </div>
                    </details>
                  </div>
                )}

                {/* Solution Toggle */}
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => toggleSolution(`exercise-${index}`)}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {showSolutions[`exercise-${index}`] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    <span>{showSolutions[`exercise-${index}`] ? 'Hide Solution' : 'Show Solution'}</span>
                  </button>
                </div>

                {/* Solution */}
                {showSolutions[`exercise-${index}`] && exercise.solution && (
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-white mb-2">Solution:</h4>
                    <div className="bg-gray-900 rounded-lg border border-gray-600 overflow-hidden">
                      <SyntaxHighlighter
                        language="python"
                        style={oneDark}
                        customStyle={{ margin: 0, padding: '1rem', backgroundColor: 'transparent' }}
                      >
                        {exercise.solution}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                )}
              </div>
            )) : (
              <GeneratedPracticeExercises lesson={lesson} />
            )}

            {/* Mini Project */}
            {content.practice?.miniProject && (
              <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-lg p-6 border border-purple-800/50">
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 text-purple-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Mini Project: {content.practice.miniProject.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-4">{content.practice.miniProject.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Requirements:</h4>
                  <ul className="space-y-2">
                    {content.practice.miniProject.requirements.map((req: string, index: number) => (
                      <li key={index} className="text-gray-300 flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Starter Code */}
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Starter Code:</h4>
                  <div className="bg-gray-900 rounded-lg border border-gray-600 overflow-hidden">
                    <SyntaxHighlighter
                      language="python"
                      style={oneDark}
                      customStyle={{ margin: 0, padding: '1rem', backgroundColor: 'transparent' }}
                    >
                      {content.practice.miniProject.starterCode}
                    </SyntaxHighlighter>
                  </div>
                </div>

                {/* Expected Output */}
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Expected Output:</h4>
                  <div className="bg-gray-900 rounded-lg border border-gray-600 p-4">
                    <pre className="text-gray-300 whitespace-pre-wrap font-mono text-sm">
                      {content.practice.miniProject.expectedOutput}
                    </pre>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Lab Tab */}
        {activeTab === 'lab' && (
          <div className="space-y-8">
            {content.lab ? (
              <>
                <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {content.lab.title || 'Lab Session'}
                  </h2>
                  <p className="text-gray-300 mb-6">
                    {content.lab.description || 'Interactive coding lab for hands-on practice.'}
                  </p>
                </div>

                {content.lab.tasks ? content.lab.tasks.map((task: any, index: number) => (
                  <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                    <h3 className="text-xl font-bold text-white mb-4">
                      Task {index + 1}: {task.instruction}
                    </h3>
                    
                    <div className="bg-gray-900 rounded-lg border border-gray-600 overflow-hidden">
                      <div className="flex items-center justify-between p-3 bg-gray-800 border-b border-gray-600">
                        <span className="text-sm font-medium text-gray-300">Lab Code</span>
                        <button className="flex items-center space-x-2 px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700 transition-colors">
                          <Play className="w-4 h-4" />
                          <span>Run Code</span>
                        </button>
                      </div>
                      <SyntaxHighlighter
                        language="python"
                        style={oneDark}
                        customStyle={{ margin: 0, padding: '1rem', backgroundColor: 'transparent' }}
                      >
                        {task.code}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                )) : (
                  <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                    <p className="text-gray-300 mb-4">Lab tasks are being prepared for this lesson.</p>
                    <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-800/50">
                      <p className="text-blue-200">🧪 Coming soon: Interactive coding lab with step-by-step tasks!</p>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-4">Coding Lab</h2>
                <p className="text-gray-300 mb-4">This interactive lab session is being developed.</p>
                <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-800/50">
                  <p className="text-blue-200">🧪 Coming soon: Hands-on coding exercises and guided practice!</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Assessment Tab */}
        {activeTab === 'assessment' && (
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4">Knowledge Check</h2>
              <p className="text-gray-300">Test your understanding of the concepts covered in this lesson.</p>
            </div>

            {content.assessment?.questions ? content.assessment.questions.map((question: any, index: number) => (
              <AssessmentQuestion key={index} question={question} questionNumber={index + 1} />
            )) : (
              <GeneratedAssessment lesson={lesson} />
            )}
          </div>
        )}

        {/* Discussion Tab */}
        {activeTab === 'discussion' && (
          <DiscussionSection discussion={content.discussion} />
        )}
      </div>
    </div>
  );
}

// Enhanced Learning Content Component
function EnhancedLearningContent({ lesson }: { lesson: any }) {
  const [activeSection, setActiveSection] = useState(0);
  
  // Generate theoretical content based on lesson
  const generateTheorySection = () => {
    const sections = [
      {
        title: "Core Concepts",
        icon: Brain,
        content: `Understanding ${lesson.title}`,
        theory: `In this lesson, we'll explore the fundamental concepts behind ${lesson.target}. This forms the foundation for building ${lesson.deliverable}.`,
        keyPoints: [
          `What is ${lesson.title.split(' ').pop()}?`,
          "Why is this concept important?",
          "How does it fit into the bigger picture?",
          "Real-world applications and examples"
        ]
      },
      {
        title: "Deep Dive",
        icon: Zap,
        content: "Detailed exploration of key mechanisms",
        theory: `Let's dive deeper into the mechanics of how ${lesson.target} works. Understanding these principles will help you apply them effectively.`,
        keyPoints: [
          "Step-by-step breakdown",
          "Common patterns and approaches",
          "Best practices and conventions",
          "Potential pitfalls to avoid"
        ]
      },
      {
        title: "Practical Applications",
        icon: Target,
        content: "How to apply these concepts in real projects",
        theory: `Now that we understand the theory, let's see how to apply these concepts to build ${lesson.deliverable} and similar projects.`,
        keyPoints: [
          "Implementation strategies",
          "Integration with other technologies",
          "Performance considerations",
          "Testing and debugging approaches"
        ]
      }
    ];

    return sections;
  };

  const theorySections = generateTheorySection();

  return (
    <div className="space-y-8">
      {/* Overview */}
      <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-6 border border-blue-800/50">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
          <BookOpen className="w-6 h-6 mr-3 text-blue-400" />
          {lesson.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-lg font-semibold text-blue-200 mb-2">🎯 Learning Objective</h3>
            <p className="text-blue-100">{lesson.target}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-200 mb-2">🏆 What You'll Build</h3>
            <p className="text-blue-100">{lesson.deliverable}</p>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-blue-200 mb-3">📚 Key Concepts Covered</h3>
          <div className="grid md:grid-cols-2 gap-2">
            {lesson.concepts.map((concept: string, index: number) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-blue-100">{concept}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Theory Sections */}
      {theorySections.map((section, index) => (
        <div key={index} className="bg-gray-800 rounded-lg border border-gray-700">
          <button
            onClick={() => setActiveSection(activeSection === index ? -1 : index)}
            className="w-full p-6 text-left hover:bg-gray-700/50 transition-colors rounded-lg"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <section.icon className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold text-white">{section.title}</h3>
              </div>
              <div className="text-gray-400">
                {activeSection === index ? '▼' : '▶'}
              </div>
            </div>
            <p className="text-gray-400 mt-2">{section.content}</p>
          </button>

          {activeSection === index && (
            <div className="px-6 pb-6">
              <div className="border-t border-gray-600 pt-6">
                <p className="text-gray-300 mb-6 leading-relaxed">{section.theory}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Points to Remember:</h4>
                    <ul className="space-y-2">
                      {section.keyPoints.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-900/20 rounded-lg p-4 border border-yellow-800/50">
                    <h4 className="text-yellow-200 font-semibold mb-2 flex items-center">
                      <Lightbulb className="w-5 h-5 mr-2" />
                      Pro Tips
                    </h4>
                    <ul className="text-yellow-200 text-sm space-y-1">
                      <li>• Take notes on key concepts as you learn</li>
                      <li>• Try to explain concepts in your own words</li>
                      <li>• Connect new knowledge to what you already know</li>
                      <li>• Practice immediately after learning theory</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Prerequisites */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <AlertCircle className="w-6 h-6 mr-2 text-orange-400" />
          Prerequisites & Preparation
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-orange-200 mb-2">Before starting, make sure you understand:</h4>
            <ul className="text-gray-300 space-y-1">
              <li>• Basic Python syntax and variables</li>
              <li>• How to run Python code</li>
              <li>• Previous lesson concepts</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-200 mb-2">Have these ready:</h4>
            <ul className="text-gray-300 space-y-1">
              <li>• Python development environment</li>
              <li>• Text editor or IDE</li>
              <li>• Notebook for taking notes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generated Practice Exercises Component
function GeneratedPracticeExercises({ lesson }: { lesson: any }) {
  const [userCode, setUserCode] = useState('');
  const [exerciseIndex, setExerciseIndex] = useState(0);

  // Generate practice exercises based on lesson content
  const exercises = [
    {
      title: `${lesson.title} - Basic Exercise`,
      difficulty: 'beginner',
      description: `Practice the fundamental concepts from ${lesson.title}. This exercise will help you apply what you've learned.`,
      codeTemplate: `# ${lesson.title} Practice Exercise
# TODO: Implement the solution for ${lesson.target}

def main():
    # Your code here
    print("Starting ${lesson.title} exercise...")
    
    # TODO: Add your implementation
    
    print("Exercise completed!")

if __name__ == "__main__":
    main()`,
      hints: [
        `Remember the key concepts: ${lesson.concepts.slice(0, 2).join(', ')}`,
        'Break the problem into smaller steps',
        'Test your code with simple inputs first',
        'Use print statements to debug your logic'
      ],
      solution: `# ${lesson.title} - Solution
def main():
    print("Starting ${lesson.title} exercise...")
    
    # Implementation based on lesson concepts
    # This would contain the actual solution
    result = "Solution implemented successfully!"
    print(result)
    
    print("Exercise completed!")

if __name__ == "__main__":
    main()`
    },
    {
      title: `${lesson.title} - Intermediate Challenge`,
      difficulty: 'intermediate', 
      description: `A more challenging exercise that combines multiple concepts from this lesson.`,
      codeTemplate: `# ${lesson.title} Intermediate Challenge
# Build upon the basic concepts to create ${lesson.deliverable}

class ${lesson.title.replace(/\s+/g, '')}Solution:
    def __init__(self):
        # Initialize your solution
        pass
    
    def solve(self):
        # TODO: Implement your solution here
        pass

# Test your solution
solution = ${lesson.title.replace(/\s+/g, '')}Solution()
result = solution.solve()
print(f"Result: {result}")`,
      hints: [
        'Use object-oriented programming principles',
        'Consider edge cases in your implementation', 
        'Think about code reusability and organization',
        'Add proper error handling'
      ],
      solution: `# Complete solution would be provided here`
    },
    {
      title: `Mini Project: ${lesson.deliverable}`,
      difficulty: 'advanced',
      description: `Create a complete implementation of ${lesson.deliverable} using all concepts from this lesson.`,
      codeTemplate: `# Mini Project: ${lesson.deliverable}
# Create a fully functional ${lesson.deliverable}

def create_${lesson.deliverable.toLowerCase().replace(/\s+/g, '_')}():
    """
    Create ${lesson.deliverable} using the concepts learned.
    
    Returns:
        The completed ${lesson.deliverable}
    """
    # TODO: Implement the complete project
    pass

def main():
    print(f"Creating ${lesson.deliverable}...")
    project = create_${lesson.deliverable.toLowerCase().replace(/\s+/g, '_')}()
    print("Project completed successfully!")

if __name__ == "__main__":
    main()`,
      hints: [
        'Plan your implementation before coding',
        'Use functions to organize your code',
        'Test each component separately',
        'Document your code with comments'
      ],
      solution: `# Complete project implementation would be here`
    }
  ];

  return (
    <div className="space-y-8">
      {/* Exercise Selector */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Code className="w-6 h-6 mr-2 text-blue-400" />
          Practice Exercises
        </h2>
        
        <div className="flex flex-wrap gap-3 mb-6">
          {exercises.map((exercise, index) => (
            <button
              key={index}
              onClick={() => setExerciseIndex(index)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                exerciseIndex === index
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {exercise.title}
            </button>
          ))}
        </div>
      </div>

      {/* Current Exercise */}
      {exercises.map((exercise, index) => (
        exerciseIndex === index && (
          <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">{exercise.title}</h3>
              <span className={`px-3 py-1 rounded-lg text-sm font-medium ${
                exercise.difficulty === 'beginner' ? 'bg-green-600 text-white' :
                exercise.difficulty === 'intermediate' ? 'bg-yellow-600 text-white' :
                'bg-red-600 text-white'
              }`}>
                {exercise.difficulty}
              </span>
            </div>
            
            <p className="text-gray-300 mb-6">{exercise.description}</p>
            
            {/* Code Template */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-3">Exercise Code:</h4>
              <div className="bg-gray-900 rounded-lg border border-gray-600 overflow-hidden">
                <SyntaxHighlighter
                  language="python"
                  style={oneDark}
                  customStyle={{ margin: 0, padding: '1rem', backgroundColor: 'transparent' }}
                >
                  {exercise.codeTemplate}
                </SyntaxHighlighter>
              </div>
            </div>

            {/* Hints */}
            <div className="mb-6">
              <details className="bg-yellow-900/20 rounded-lg border border-yellow-800/50">
                <summary className="p-4 cursor-pointer text-yellow-200 font-medium flex items-center">
                  <Lightbulb className="w-5 h-5 mr-2" />
                  Need help? View hints
                </summary>
                <div className="px-4 pb-4">
                  <ul className="space-y-2">
                    {exercise.hints.map((hint: string, hintIndex: number) => (
                      <li key={hintIndex} className="text-yellow-200 flex items-start">
                        <span className="mr-2">💡</span>
                        {hint}
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            </div>

            {/* Interactive Code Editor */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-3">Try it yourself:</h4>
              <textarea
                value={userCode || exercise.codeTemplate}
                onChange={(e) => setUserCode(e.target.value)}
                className="w-full h-64 px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white font-mono text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-vertical"
                placeholder="Write your code here..."
              />
              <div className="mt-3 flex gap-3">
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  Run Code
                </button>
                <button
                  onClick={() => setUserCode(exercise.codeTemplate)}
                  className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Reset
                </button>
              </div>
            </div>

            {/* Solution */}
            <details className="bg-blue-900/20 rounded-lg border border-blue-800/50">
              <summary className="p-4 cursor-pointer text-blue-200 font-medium flex items-center">
                <Eye className="w-5 h-5 mr-2" />
                View Solution (try the exercise first!)
              </summary>
              <div className="px-4 pb-4">
                <div className="bg-gray-900 rounded-lg border border-gray-600 overflow-hidden">
                  <SyntaxHighlighter
                    language="python"
                    style={oneDark}
                    customStyle={{ margin: 0, padding: '1rem', backgroundColor: 'transparent' }}
                  >
                    {exercise.solution}
                  </SyntaxHighlighter>
                </div>
              </div>
            </details>
          </div>
        )
      ))}
    </div>
  );
}

// Generated Assessment Component
function GeneratedAssessment({ lesson }: { lesson: any }) {
  // Generate assessment questions based on lesson
  const assessmentQuestions = [
    {
      question: `What is the main purpose of ${lesson.title}?`,
      options: [
        lesson.target,
        'To make code more complex',
        'To slow down execution',
        'To use more memory'
      ],
      correct: 0,
      explanation: `The main purpose of ${lesson.title} is ${lesson.target.toLowerCase()}.`
    },
    {
      question: `Which of the following best describes ${lesson.deliverable}?`,
      options: [
        'A theoretical concept only',
        `A practical implementation of ${lesson.title}`,
        'An outdated programming technique', 
        'Something not related to the lesson'
      ],
      correct: 1,
      explanation: `${lesson.deliverable} is the practical project you build to demonstrate understanding of ${lesson.title}.`
    },
    {
      question: `What is a key concept covered in this lesson?`,
      options: [
        lesson.concepts[0] || 'Basic programming',
        'Unrelated concept A',
        'Unrelated concept B',
        'Unrelated concept C'
      ],
      correct: 0,
      explanation: `${lesson.concepts[0]} is one of the key concepts covered in this lesson on ${lesson.title}.`
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-4">Knowledge Assessment</h3>
        <p className="text-gray-300">Test your understanding of {lesson.title}. Complete all questions to check your progress.</p>
      </div>

      {assessmentQuestions.map((question, index) => (
        <AssessmentQuestion key={index} question={question} questionNumber={index + 1} />
      ))}
      
      <div className="bg-green-900/20 rounded-lg p-6 border border-green-800/50">
        <h4 className="text-green-200 font-semibold mb-2">🎯 Assessment Complete!</h4>
        <p className="text-green-100">
          Great job! You've demonstrated understanding of the key concepts in {lesson.title}. 
          Ready to move on to the next lesson?
        </p>
      </div>
    </div>
  );
}

// Assessment Question Component - FIXED
function AssessmentQuestion({ question, questionNumber }: { question: any; questionNumber: number }) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
  };

  // Safety check for question structure
  if (!question || !question.options || !Array.isArray(question.options)) {
    return (
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-4">
          Question {questionNumber}: Assessment Loading...
        </h3>
        <div className="text-gray-400">Question data is being prepared.</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <h3 className="text-lg font-semibold text-white mb-4">
        Question {questionNumber}: {question.question}
      </h3>
      
      <div className="space-y-3 mb-4">
        {question.options.map((option: string, index: number) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(index)}
            className={`w-full text-left p-4 rounded-lg border transition-colors ${
              selectedAnswer === null
                ? 'border-gray-600 bg-gray-700 hover:bg-gray-600 text-gray-300'
                : selectedAnswer === index
                  ? index === question.correct
                    ? 'border-green-500 bg-green-900/50 text-green-200'
                    : 'border-red-500 bg-red-900/50 text-red-200'
                  : index === question.correct
                    ? 'border-green-500 bg-green-900/50 text-green-200'
                    : 'border-gray-600 bg-gray-700 text-gray-400'
            }`}
            disabled={selectedAnswer !== null}
          >
            <span className="font-medium mr-2">{String.fromCharCode(65 + index)}.</span>
            {option}
          </button>
        ))}
      </div>

      {showExplanation && question.explanation && (
        <div className="mt-4 p-4 bg-blue-900/20 rounded-lg border border-blue-800/50">
          <h4 className="font-semibold text-blue-200 mb-2">Explanation:</h4>
          <p className="text-blue-200">{question.explanation}</p>
        </div>
      )}
    </div>
  );
}

// Discussion Section Component
function DiscussionSection({ discussion }: { discussion: any }) {
  const [userResponse, setUserResponse] = useState('');
  const [savedResponses, setSavedResponses] = useState<{[key: number]: string}>({});
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number | null>(null);
  const [questionResponses, setQuestionResponses] = useState<{[key: number]: string}>({});

  const handleSaveResponse = () => {
    if (userResponse.trim()) {
      const timestamp = new Date().toLocaleString();
      const responseWithTimestamp = `${userResponse}\n\n---\nSaved on: ${timestamp}`;
      setSavedResponses(prev => ({ ...prev, [0]: responseWithTimestamp }));
      setUserResponse('');
    }
  };

  const handleQuestionResponse = (questionIndex: number, response: string) => {
    setQuestionResponses(prev => ({ ...prev, [questionIndex]: response }));
  };

  const handleSaveQuestionResponse = (questionIndex: number) => {
    const response = questionResponses[questionIndex];
    if (response && response.trim()) {
      const timestamp = new Date().toLocaleString();
      const responseWithTimestamp = `${response}\n\n---\nSaved on: ${timestamp}`;
      setSavedResponses(prev => ({ ...prev, [questionIndex + 1]: responseWithTimestamp }));
      setQuestionResponses(prev => ({ ...prev, [questionIndex]: '' }));
      setActiveQuestionIndex(null);
    }
  };

  // Handle case where discussion content might not be available
  if (!discussion) {
    return (
      <div className="space-y-6">
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">Discussion</h2>
          <div className="bg-blue-900/20 rounded-lg p-6 border border-blue-800/50 text-center">
            <MessageSquare className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-blue-200 mb-2">Discussion Coming Soon!</h3>
            <p className="text-blue-200 mb-4">
              This is where you'll be able to reflect on the lesson, share your thoughts, and engage with the content through guided questions.
            </p>
            <div className="text-sm text-blue-300">
              • Personal reflection prompts<br/>
              • Guided discussion questions<br/>
              • Save your thoughts and insights<br/>
              • Track your learning journey
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Main Discussion Prompt */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-4">Discussion</h2>
        <p className="text-gray-300 text-lg mb-6">{discussion.prompt}</p>
        
        {/* Main Response Area */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Your Response:</h3>
          <textarea
            value={userResponse}
            onChange={(e) => setUserResponse(e.target.value)}
            placeholder="Share your thoughts, experiences, and insights about this topic..."
            className="w-full h-32 px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-vertical"
          />
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">{userResponse.length} characters</span>
            <button
              onClick={handleSaveResponse}
              disabled={!userResponse.trim()}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
            >
              Save Response
            </button>
          </div>
        </div>

        {/* Saved Main Response */}
        {savedResponses[0] && (
          <div className="mt-6 p-4 bg-green-900/20 rounded-lg border border-green-800/50">
            <h4 className="text-green-200 font-semibold mb-2">✅ Your Saved Response:</h4>
            <div className="text-green-100 whitespace-pre-wrap">{savedResponses[0]}</div>
          </div>
        )}
      </div>

      {/* Guiding Questions */}
      {discussion.guidingQuestions && (
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-800/50 mb-6">
            <h3 className="text-lg font-semibold text-blue-200 mb-3">Guiding Questions:</h3>
            <p className="text-blue-200 text-sm mb-4">Click on any question below to provide a specific response:</p>
            <ul className="space-y-2">
              {discussion.guidingQuestions.map((question: string, index: number) => (
                <li key={index} className="text-blue-200">• {question}</li>
              ))}
            </ul>
          </div>

          {/* Individual Question Responses */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Respond to Specific Questions:</h3>
            
            {discussion.guidingQuestions.map((question: string, index: number) => (
              <div key={index} className="border border-gray-600 rounded-lg p-4">
                <button
                  onClick={() => setActiveQuestionIndex(activeQuestionIndex === index ? null : index)}
                  className="w-full text-left p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors mb-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">Question {index + 1}</span>
                    <span className="text-sm text-gray-400">
                      {savedResponses[index + 1] ? '✅ Answered' : activeQuestionIndex === index ? '📝 Writing...' : 'Click to answer'}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm mt-2">{question}</p>
                </button>

                {/* Response Input for This Question */}
                {activeQuestionIndex === index && (
                  <div className="space-y-3">
                    <textarea
                      value={questionResponses[index] || ''}
                      onChange={(e) => handleQuestionResponse(index, e.target.value)}
                      placeholder={`Your response to: ${question}`}
                      className="w-full h-24 px-3 py-2 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-vertical text-sm"
                    />
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">{(questionResponses[index] || '').length} characters</span>
                      <div className="space-x-2">
                        <button
                          onClick={() => setActiveQuestionIndex(null)}
                          className="px-3 py-1 bg-gray-600 text-white rounded text-sm hover:bg-gray-700 transition-colors"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => handleSaveQuestionResponse(index)}
                          disabled={!(questionResponses[index] && questionResponses[index].trim())}
                          className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
                        >
                          Save Answer
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Saved Response for This Question */}
                {savedResponses[index + 1] && (
                  <div className="mt-3 p-3 bg-green-900/20 rounded-lg border border-green-800/50">
                    <h5 className="text-green-200 font-medium text-sm mb-2">Your Answer:</h5>
                    <div className="text-green-100 text-sm whitespace-pre-wrap">{savedResponses[index + 1]}</div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Discussion Tips */}
          <div className="mt-6 p-4 bg-yellow-900/20 rounded-lg border border-yellow-800/50">
            <h4 className="text-yellow-200 font-semibold mb-2">💡 Discussion Tips:</h4>
            <ul className="text-yellow-200 text-sm space-y-1">
              <li>• Share specific examples from your experience</li>
              <li>• Connect concepts to real-world applications</li>
              <li>• Ask questions to deepen understanding</li>
              <li>• Reflect on how this relates to your goals</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}