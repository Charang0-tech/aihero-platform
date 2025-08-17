'use client'

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { ArrowLeft, CheckCircle2, Clock, Target, Code, BookOpen, Zap, Trophy, Terminal, Lightbulb, MessageCircle, CheckCircle, ExternalLink, Star, Calendar, Play, ChevronRight, Award, AlertCircle, FileText } from 'lucide-react'
import Link from 'next/link'
import { useProgressStore } from '@/stores/useProgressStore'
import { getLessonById } from '@/lib/curriculum'
import { useAnalytics } from '@/lib/analytics'

// Educational content for each lesson
const getLessonContent = (lessonId: string) => {
  const content = {
    'w1-mon': {
      theory: {
        introduction: "Welcome to Python! Python is a powerful, easy-to-learn programming language that's used everywhere from web development to artificial intelligence. Let's start your coding journey!",
        sections: [
          {
            title: "What is Python?",
            content: "Python is a high-level programming language created by Guido van Rossum in 1991. It's designed to be readable and simple, making it perfect for beginners. Python is used by companies like Google, Netflix, and Instagram.",
            codeExample: `# This is your first Python program!
print("Hello, World!")
print("Welcome to AI Bootcamp 2025!")

# Python is case-sensitive
name = "Alex"
age = 25
print(f"Hi, I'm {name} and I'm {age} years old")`
          },
          {
            title: "Python Syntax Basics",
            content: "Python uses indentation (spaces) to define code blocks, unlike other languages that use curly braces {}. This makes Python code very readable.",
            codeExample: `# Variables - no need to declare types!
message = "Python is awesome"
number = 42
pi = 3.14159
is_learning = True

# Comments start with #
print(message)  # This prints our message`
          },
          {
            title: "The print() Function",
            content: "The print() function displays output on the screen. It's your primary tool for seeing what your program does.",
            codeExample: `# Different ways to use print()
print("Simple text")
print(42)
print("Number:", 42)
print("Hello", "World", "!")

# Print multiple lines
print("Line 1")
print("Line 2")
print("Line 3")`
          }
        ]
      },
      exercises: [
        {
          title: "Exercise 1: Your First Print",
          description: "Create a program that prints your name and favorite programming language.",
          starterCode: `# Write your code below
# Print your name
# Print your favorite programming language

`,
          solution: `# Solution
print("My name is John")
print("My favorite programming language is Python")`,
          hints: ["Use the print() function", "Remember to put text in quotes", "You can use multiple print statements"]
        },
        {
          title: "Exercise 2: Variable Practice",
          description: "Create variables for your name, age, and city, then print them in a sentence.",
          starterCode: `# Create variables
name = 
age = 
city = 

# Print them in a sentence
`,
          solution: `# Solution
name = "Sarah"
age = 28
city = "San Francisco"

print(f"Hi, I'm {name}, I'm {age} years old, and I live in {city}")`,
          hints: ["Use quotes for text (strings)", "Numbers don't need quotes", "Try using f-strings for formatting"]
        },
        {
          title: "Exercise 3: Math with Variables",
          description: "Create a simple calculator that adds two numbers and prints the result.",
          starterCode: `# Create two number variables
num1 = 
num2 = 

# Add them and print the result
`,
          solution: `# Solution
num1 = 15
num2 = 27

result = num1 + num2
print(f"{num1} + {num2} = {result}")`,
          hints: ["Use numbers without quotes", "Store the result in a variable", "Use f-strings to format the output nicely"]
        }
      ],
      quiz: [
        {
          question: "Which of these is the correct way to print 'Hello' in Python?",
          options: ["print(Hello)", "print('Hello')", "Print('Hello')", "PRINT('Hello')"],
          correct: 1,
          explanation: "Python is case-sensitive, so 'print' must be lowercase, and strings must be in quotes."
        },
        {
          question: "What will this code print? print('Python', 'is', 'fun')",
          options: ["Pytho is fun", "Python is fun", "Python,is,fun", "Error"],
          correct: 1,
          explanation: "The print() function automatically adds spaces between multiple arguments."
        },
        {
          question: "Which variable name is valid in Python?",
          options: ["2name", "my-name", "my_name", "my name"],
          correct: 2,
          explanation: "Variable names can't start with numbers or contain spaces/hyphens. Underscores are allowed."
        }
      ]
    },
    'w1-tue': {
      theory: {
        introduction: "Today we'll master Python's data types - the building blocks of all programs. Understanding data types is crucial for storing and manipulating information effectively.",
        sections: [
          {
            title: "What are Data Types?",
            content: "Data types tell Python what kind of information you're working with. Python has several built-in data types that handle different kinds of data automatically.",
            codeExample: `# Python automatically detects data types
name = "Alice"          # String (text)
age = 25               # Integer (whole number)
height = 5.6           # Float (decimal number)
is_student = True      # Boolean (True/False)

print(type(name))      # <class 'str'>
print(type(age))       # <class 'int'>
print(type(height))    # <class 'float'>
print(type(is_student)) # <class 'bool'>`
          },
          {
            title: "Strings: Working with Text",
            content: "Strings are sequences of characters. You can use single quotes, double quotes, or triple quotes for multi-line strings.",
            codeExample: `# Creating strings
single = 'Hello World'
double = "Python Programming"
multiline = """This is a
multi-line
string"""

# String operations
name = "Python"
print(len(name))           # Length: 6
print(name.upper())        # PYTHON
print(name.lower())        # python
print(name[0])             # First character: P
print(name[-1])            # Last character: n`
          },
          {
            title: "Numbers: Integers and Floats",
            content: "Python has two main number types: integers (whole numbers) and floats (decimal numbers). You can perform math operations on both.",
            codeExample: `# Integers
count = 10
year = 2025
negative = -5

# Floats  
price = 19.99
temperature = 98.6
pi = 3.14159

# Math operations
a = 10
b = 3
print(a + b)    # Addition: 13
print(a - b)    # Subtraction: 7
print(a * b)    # Multiplication: 30
print(a / b)    # Division: 3.333...
print(a // b)   # Integer division: 3
print(a % b)    # Remainder: 1
print(a ** b)   # Power: 1000`
          },
          {
            title: "Booleans: True or False",
            content: "Booleans represent truth values - either True or False. They're essential for making decisions in your programs.",
            codeExample: `# Boolean values
is_sunny = True
is_raining = False

# Boolean from comparisons
age = 18
is_adult = age >= 18        # True
is_minor = age < 18         # False

# Boolean operations
print(True and False)       # False
print(True or False)        # True
print(not True)            # False

# Practical example
has_license = True
is_over_16 = True
can_drive = has_license and is_over_16
print(f"Can drive: {can_drive}")  # True`
          },
          {
            title: "Type Conversion",
            content: "Sometimes you need to convert between data types. Python provides functions to do this safely.",
            codeExample: `# Converting between types
number_str = "42"
number_int = int(number_str)    # String to integer
number_float = float(number_str) # String to float

age = 25
age_str = str(age)              # Integer to string

# Be careful with conversions
# int("hello")  # This would cause an error!

# Safe conversion with error handling
user_input = "25"
if user_input.isdigit():
    age = int(user_input)
    print(f"You are {age} years old")
else:
    print("Please enter a valid number")`
          }
        ]
      },
      exercises: [
        {
          title: "Exercise 1: Data Type Explorer",
          description: "Create variables of different types and explore their properties.",
          starterCode: `# Create one variable of each type
my_string = 
my_integer = 
my_float = 
my_boolean = 

# Print the type and value of each
`,
          solution: `# Solution
my_string = "Hello, Python!"
my_integer = 42
my_float = 3.14159
my_boolean = True

print(f"String: {my_string} (type: {type(my_string)})")
print(f"Integer: {my_integer} (type: {type(my_integer)})")
print(f"Float: {my_float} (type: {type(my_float)})")
print(f"Boolean: {my_boolean} (type: {type(my_boolean)})")`,
          hints: ["Use quotes for strings", "Whole numbers are integers", "Decimal numbers are floats", "Booleans are True or False (capitalized)"]
        },
        {
          title: "Exercise 2: String Manipulation",
          description: "Practice string operations and methods.",
          starterCode: `# Start with this string
message = "  python programming is awesome  "

# Clean it up and transform it
# Remove extra spaces, make it title case, and get its length
`,
          solution: `# Solution
message = "  python programming is awesome  "

cleaned = message.strip()           # Remove leading/trailing spaces
title_case = cleaned.title()        # Make Title Case
length = len(title_case)           # Get length

print(f"Original: '{message}'")
print(f"Cleaned: '{cleaned}'")
print(f"Title case: '{title_case}'")
print(f"Length: {length}")`,
          hints: ["Use .strip() to remove spaces", "Use .title() for title case", "Use len() for length"]
        },
        {
          title: "Exercise 3: Type Conversion Calculator",
          description: "Create a program that converts between different number representations.",
          starterCode: `# User provides a number as a string
number_str = "42.7"

# Convert to different types and perform calculations
`,
          solution: `# Solution
number_str = "42.7"

# Convert to different types
as_float = float(number_str)
as_int = int(as_float)  # This truncates the decimal

print(f"Original string: {number_str}")
print(f"As float: {as_float}")
print(f"As integer: {as_int}")
print(f"Doubled: {as_float * 2}")
print(f"Is positive: {as_float > 0}")`,
          hints: ["Use float() to convert to decimal", "Use int() to convert to whole number", "int() truncates decimals"]
        }
      ],
      quiz: [
        {
          question: "What data type is the value 3.14?",
          options: ["String", "Integer", "Float", "Boolean"],
          correct: 2,
          explanation: "3.14 has a decimal point, making it a float (floating-point number)."
        },
        {
          question: "What will len('Python') return?",
          options: ["5", "6", "7", "Error"],
          correct: 1,
          explanation: "len() counts the characters in a string. 'Python' has 6 characters: P-y-t-h-o-n."
        },
        {
          question: "What's the result of int('42.7')?",
          options: ["42", "42.7", "43", "Error"],
          correct: 3,
          explanation: "int() can't directly convert strings with decimals. You'd need int(float('42.7')) to get 42."
        }
      ]
    }
  }

  return content[lessonId as keyof typeof content] || {
    theory: { introduction: "Content coming soon!", sections: [] },
    exercises: [],
    quiz: []
  }
}

// Replit project configurations
const getReplitProject = (lessonId: string) => {
  const projects = {
    'w1-mon': {
      url: 'https://replit.com/@YourUsername/Python-Fundamentals-Day1?embed=true&theme=dark',
      title: 'Python Setup & First Programs',
      description: 'Practice the concepts you just learned with hands-on coding.'
    },
    'w1-tue': {
      url: 'https://replit.com/@YourUsername/Variables-DataTypes?embed=true&theme=dark',
      title: 'Variables & Data Types',
      description: 'Experiment with different data types and practice type conversion.'
    }
  }
  
  return projects[lessonId as keyof typeof projects] || {
    url: 'https://replit.com/@YourUsername/Default-Python-Lab?embed=true&theme=dark',
    title: 'Python Lab Environment',
    description: 'Interactive Python environment for hands-on coding practice.'
  }
}

export default function LessonPage() {
  const params = useParams()
  const lessonId = params.id as string
  
  const {
    lessonProgress,
    markLessonCompleted,
    markDeliverableSubmitted,
    updateLessonNotes,
    updateTimeSpent,
    addXP,
    userStats,
    hasAccessToLesson
  } = useProgressStore()

  const analytics = useAnalytics()

  const [activeTab, setActiveTab] = useState('learn')
  const [timeSpent, setTimeSpent] = useState(0)
  const [notes, setNotes] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)
  const [currentExercise, setCurrentExercise] = useState(0)
  const [exerciseCode, setExerciseCode] = useState('')
  const [showSolution, setShowSolution] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState<number[]>([])
  const [quizSubmitted, setQuizSubmitted] = useState(false)
  const [quizScore, setQuizScore] = useState(0)

  const lesson = getLessonById(lessonId)
  const progress = lessonProgress[lessonId]
  const replitProject = getReplitProject(lessonId)
  const hasAccess = hasAccessToLesson(lessonId)
  const content = getLessonContent(lessonId)

  // Initialize exercise code
  useEffect(() => {
    if (content.exercises.length > 0) {
      setExerciseCode(content.exercises[currentExercise]?.starterCode || '')
    }
  }, [currentExercise, content.exercises])

  // Track when lesson starts
  useEffect(() => {
    if (lesson) {
      analytics.trackLessonStart(lessonId, lesson.week, lesson.difficulty)
    }
  }, [lesson, lessonId, analytics])

  // Timer for tracking time spent
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSpent(prev => prev + 1)
    }, 60000) // Every minute

    return () => clearInterval(interval)
  }, [])

  // Load existing notes
  useEffect(() => {
    if (progress?.notes) {
      setNotes(progress.notes)
    }
  }, [progress])

  if (!lesson) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-400 mb-4">Lesson Not Found</h1>
          <p className="text-gray-400 mb-6">The lesson you're looking for doesn't exist.</p>
          <Link href="/" className="text-blue-400 hover:text-blue-300">
            ← Return to Dashboard
          </Link>
        </div>
      </div>
    )
  }

  if (!hasAccess) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <div className="text-center max-w-md">
          <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-4">Upgrade Required</h1>
          <p className="text-gray-400 mb-6">
            This lesson is part of our premium content. Upgrade your subscription to unlock advanced AI and machine learning lessons.
          </p>
          <Link 
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all"
          >
            Upgrade Now
          </Link>
        </div>
      </div>
    )
  }

  const handleCompleteLesson = () => {
    markLessonCompleted(lessonId, quizScore > 0 ? quizScore : 100, timeSpent)
    
    if (lesson) {
      analytics.trackLessonComplete(lessonId, lesson.week, lesson.difficulty, timeSpent)
    }
    
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  const handleSubmitQuiz = () => {
    let correct = 0
    content.quiz.forEach((question, index) => {
      if (quizAnswers[index] === question.correct) {
        correct++
      }
    })
    
    const score = Math.round((correct / content.quiz.length) * 100)
    setQuizScore(score)
    setQuizSubmitted(true)
    
    if (score >= 70) {
      addXP(25)
    }
  }

  const handleExerciseCodeChange = (code: string) => {
    setExerciseCode(code)
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                <ArrowLeft className="w-6 h-6" />
              </Link>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-2xl font-bold text-white">{lesson.title}</h1>
                  {progress?.completed && (
                    <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                  )}
                </div>
                <p className="text-gray-400">Week {lesson.week} • {lesson.day} • {lesson.duration} minutes</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-lg font-bold text-white">{timeSpent}m</div>
                <div className="text-xs text-gray-400">Time Spent</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-emerald-400">{userStats.xpPoints}</div>
                <div className="text-xs text-gray-400">Total XP</div>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-400">Lesson Progress</span>
              <span className="text-gray-300">
                {progress?.completed ? 'Completed' : 'In Progress'}
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-500 ${
                  progress?.completed 
                    ? 'bg-gradient-to-r from-emerald-400 to-green-400 w-full' 
                    : 'bg-gradient-to-r from-blue-400 to-purple-400 w-1/3'
                }`}
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="col-span-8">
            {/* Tab Navigation */}
            <div className="flex gap-1 mb-6 bg-gray-800 rounded-lg p-1">
              {[
                { id: 'learn', label: 'Learn', icon: BookOpen },
                { id: 'practice', label: 'Practice', icon: Code },
                { id: 'lab', label: 'Python Lab', icon: Terminal },
                { id: 'quiz', label: 'Quiz', icon: Award },
                { id: 'discussion', label: 'Discussion', icon: MessageCircle }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all
                    ${activeTab === id 
                      ? 'bg-blue-500 text-white' 
                      : 'text-gray-400 hover:text-white hover:bg-gray-700'
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-gray-800/50 rounded-xl border border-gray-700">
              {/* Learn Tab - Theory and Explanations */}
              {activeTab === 'learn' && (
                <div className="p-8">
                  <div className="max-w-4xl">
                    {/* Introduction */}
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-white mb-4">📚 Today's Learning</h2>
                      <p className="text-gray-300 text-lg leading-relaxed">{content.theory.introduction}</p>
                    </div>

                    {/* Theory Sections */}
                    {content.theory.sections.map((section, index) => (
                      <div key={index} className="mb-10">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                          <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </span>
                          {section.title}
                        </h3>
                        
                        <div className="mb-6">
                          <p className="text-gray-300 leading-relaxed mb-4">{section.content}</p>
                        </div>

                        {/* Code Example */}
                        {section.codeExample && (
                          <div className="bg-gray-900 rounded-lg border border-gray-600 overflow-hidden">
                            <div className="bg-gray-800 px-4 py-2 border-b border-gray-600">
                              <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                <span className="text-gray-400 text-sm ml-2">example.py</span>
                              </div>
                            </div>
                            <pre className="p-4 text-green-400 text-sm overflow-x-auto">
                              <code>{section.codeExample}</code>
                            </pre>
                          </div>
                        )}
                      </div>
                    ))}

                    {/* Learning Objectives */}
                    <div className="bg-blue-900/30 border border-blue-500/50 rounded-lg p-6 mt-8">
                      <h3 className="text-blue-300 font-semibold mb-3 flex items-center gap-2">
                        <Target className="w-5 h-5" />
                        Learning Objectives
                      </h3>
                      <p className="text-blue-100 text-lg mb-2">{lesson.target}</p>
                      <p className="text-blue-200 text-sm">
                        <strong>Deliverable:</strong> {lesson.deliverable}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Practice Tab - Interactive Exercises */}
              {activeTab === 'practice' && (
                <div className="p-8">
                  <div className="max-w-4xl">
                    <h2 className="text-2xl font-bold text-white mb-6">💻 Practice Exercises</h2>
                    
                    {content.exercises.length > 0 ? (
                      <>
                        {/* Exercise Navigation */}
                        <div className="flex gap-2 mb-6">
                          {content.exercises.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => {
                                setCurrentExercise(index)
                                setShowSolution(false)
                              }}
                              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                                currentExercise === index
                                  ? 'bg-blue-500 text-white'
                                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                              }`}
                            >
                              Exercise {index + 1}
                            </button>
                          ))}
                        </div>

                        {/* Current Exercise */}
                        {content.exercises[currentExercise] && (
                          <div>
                            <div className="mb-6">
                              <h3 className="text-xl font-bold text-white mb-3">
                                {content.exercises[currentExercise].title}
                              </h3>
                              <p className="text-gray-300 mb-4">
                                {content.exercises[currentExercise].description}
                              </p>
                            </div>

                            {/* Code Editor */}
                            <div className="bg-gray-900 rounded-lg border border-gray-600 overflow-hidden mb-4">
                              <div className="bg-gray-800 px-4 py-2 border-b border-gray-600">
                                <span className="text-gray-400 text-sm">exercise.py</span>
                              </div>
                              <textarea
                                value={exerciseCode}
                                onChange={(e) => handleExerciseCodeChange(e.target.value)}
                                className="w-full bg-gray-900 text-green-400 p-4 font-mono text-sm resize-none"
                                rows={12}
                                placeholder="Write your Python code here..."
                              />
                            </div>

                            {/* Exercise Controls */}
                            <div className="flex gap-4 mb-6">
                              <button
                                onClick={() => setShowSolution(!showSolution)}
                                className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg transition-colors"
                              >
                                {showSolution ? 'Hide Solution' : 'Show Solution'}
                              </button>
                              
                              <button
                                onClick={() => setExerciseCode(content.exercises[currentExercise].starterCode)}
                                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
                              >
                                Reset Code
                              </button>
                            </div>

                            {/* Solution */}
                            {showSolution && (
                              <div className="bg-green-900/30 border border-green-500/50 rounded-lg p-4 mb-6">
                                <h4 className="text-green-300 font-semibold mb-3">💡 Solution</h4>
                                <pre className="bg-gray-900 p-4 rounded-lg text-green-400 text-sm overflow-x-auto">
                                  <code>{content.exercises[currentExercise].solution}</code>
                                </pre>
                              </div>
                            )}

                            {/* Hints */}
                            <div className="bg-purple-900/30 border border-purple-500/50 rounded-lg p-4">
                              <h4 className="text-purple-300 font-semibold mb-3">💡 Hints</h4>
                              <ul className="text-purple-100 text-sm space-y-1">
                                {content.exercises[currentExercise].hints.map((hint, index) => (
                                  <li key={index}>• {hint}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="text-center py-12">
                        <Code className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                        <p className="text-gray-400">Practice exercises coming soon!</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Python Lab Tab */}
              {activeTab === 'lab' && (
                <div className="p-6">
                  <div className="mb-4">
                    <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                      <Terminal className="w-6 h-6 text-emerald-400" />
                      Interactive Python Lab
                    </h2>
                    <p className="text-gray-400">{replitProject.description}</p>
                  </div>
                  
                  <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
                    <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Code className="w-4 h-4 text-emerald-400" />
                          <span className="text-white font-medium">{replitProject.title}</span>
                        </div>
                        <a 
                          href={replitProject.url.replace('?embed=true&theme=dark', '')}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Open in New Tab
                        </a>
                      </div>
                    </div>
                    
                    <iframe
                      src={replitProject.url}
                      width="100%"
                      height="600"
                      frameBorder="0"
                      className="bg-gray-900"
                      title={`Python Lab: ${replitProject.title}`}
                    />
                  </div>

                  <div className="mt-4 bg-blue-900/30 border border-blue-500/50 rounded-lg p-4">
                    <h3 className="text-blue-300 font-semibold mb-2">💡 Lab Tips</h3>
                    <ul className="text-blue-100 text-sm space-y-1">
                      <li>• Click "Run" to execute your Python code</li>
                      <li>• Use the console to test individual commands</li>
                      <li>• Save your work regularly with Ctrl+S (Cmd+S on Mac)</li>
                      <li>• Try the exercises from the Practice tab here</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Quiz Tab */}
              {activeTab === 'quiz' && (
                <div className="p-8">
                  <div className="max-w-4xl">
                    <h2 className="text-2xl font-bold text-white mb-6">🎯 Knowledge Check</h2>
                    
                    {content.quiz.length > 0 ? (
                      <>
                        <div className="space-y-8">
                          {content.quiz.map((question, qIndex) => (
                            <div key={qIndex} className="bg-gray-700/50 rounded-lg p-6">
                              <h3 className="text-lg font-semibold text-white mb-4">
                                Question {qIndex + 1}: {question.question}
                              </h3>
                              
                              <div className="space-y-2">
                                {question.options.map((option, oIndex) => (
                                  <label
                                    key={oIndex}
                                    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                                      quizAnswers[qIndex] === oIndex
                                        ? 'bg-blue-500/20 border border-blue-500'
                                        : 'bg-gray-800 hover:bg-gray-700 border border-gray-600'
                                    } ${quizSubmitted && oIndex === question.correct ? 'bg-green-500/20 border-green-500' : ''}
                                    ${quizSubmitted && quizAnswers[qIndex] === oIndex && oIndex !== question.correct ? 'bg-red-500/20 border-red-500' : ''}`}
                                  >
                                    <input
                                      type="radio"
                                      name={`question-${qIndex}`}
                                      value={oIndex}
                                      checked={quizAnswers[qIndex] === oIndex}
                                      onChange={() => {
                                        if (!quizSubmitted) {
                                          const newAnswers = [...quizAnswers]
                                          newAnswers[qIndex] = oIndex
                                          setQuizAnswers(newAnswers)
                                        }
                                      }}
                                      disabled={quizSubmitted}
                                      className="text-blue-500"
                                    />
                                    <span className="text-gray-300">{option}</span>
                                    {quizSubmitted && oIndex === question.correct && (
                                      <CheckCircle className="w-5 h-5 text-green-400 ml-auto" />
                                    )}
                                  </label>
                                ))}
                              </div>

                              {quizSubmitted && (
                                <div className="mt-4 p-4 bg-blue-900/30 border border-blue-500/50 rounded-lg">
                                  <p className="text-blue-100 text-sm">
                                    <strong>Explanation:</strong> {question.explanation}
                                  </p>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>

                        <div className="mt-8 flex items-center justify-between">
                          {!quizSubmitted ? (
                            <button
                              onClick={handleSubmitQuiz}
                              disabled={quizAnswers.length !== content.quiz.length}
                              className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                            >
                              Submit Quiz
                            </button>
                          ) : (
                            <div className="flex items-center gap-4">
                              <div className={`text-lg font-bold ${
                                quizScore >= 70 ? 'text-green-400' : 'text-red-400'
                              }`}>
                                Score: {quizScore}%
                              </div>
                              {quizScore >= 70 ? (
                                <div className="text-green-400 flex items-center gap-2">
                                  <CheckCircle className="w-5 h-5" />
                                  <span>Passed! +25 XP</span>
                                </div>
                              ) : (
                                <div className="text-red-400 flex items-center gap-2">
                                  <AlertCircle className="w-5 h-5" />
                                  <span>Review the material and try again</span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </>
                    ) : (
                      <div className="text-center py-12">
                        <Award className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                        <p className="text-gray-400">Quiz coming soon!</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Discussion Tab */}
              {activeTab === 'discussion' && (
                <div className="p-6">
                  <h2 className="text-xl font-bold text-white mb-4">Discussion & Q&A</h2>
                  
                  <div className="bg-gray-700/50 rounded-lg p-4 mb-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Ask a Question</h3>
                    <textarea 
                      placeholder="Type your question here..."
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg p-3 text-white placeholder-gray-400 resize-none"
                      rows={3}
                    />
                    <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
                      Post Question
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gray-700/30 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                          JS
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-white">John Smith</span>
                            <span className="text-gray-400 text-sm">2 hours ago</span>
                          </div>
                          <p className="text-gray-300 mb-2">
                            I'm having trouble understanding the difference between strings and integers. Can someone explain?
                          </p>
                          <button className="text-blue-400 hover:text-blue-300 text-sm">Reply</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-span-4">
            <div className="space-y-6">
              {/* Progress Card */}
              <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-6">
                <h3 className="text-lg font-bold text-white mb-4">Your Progress</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Theory</span>
                    <span className="text-blue-400 font-semibold">
                      {activeTab === 'learn' ? 'In Progress' : 'Review'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Practice</span>
                    <span className="text-yellow-400 font-semibold">
                      {content.exercises.length > 0 ? 'Available' : 'Coming Soon'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Quiz</span>
                    <div className="flex items-center gap-2">
                      {quizSubmitted ? (
                        <>
                          <CheckCircle className="w-5 h-5 text-emerald-400" />
                          <span className="text-emerald-400 font-semibold">{quizScore}%</span>
                        </>
                      ) : (
                        <span className="text-gray-400">Pending</span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Time Spent</span>
                    <span className="text-white font-semibold">
                      {(progress?.timeSpent || 0) + timeSpent} minutes
                    </span>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {!progress?.completed && quizSubmitted && quizScore >= 70 && (
                    <button
                      onClick={handleCompleteLesson}
                      className="w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-green-600 transition-all"
                    >
                      Complete Lesson
                    </button>
                  )}

                  {!quizSubmitted && (
                    <div className="bg-yellow-900/50 border border-yellow-500/50 rounded-lg p-3">
                      <p className="text-yellow-200 text-sm">
                        Complete the quiz to finish this lesson and earn XP!
                      </p>
                    </div>
                  )}
                </div>

                {showSuccess && (
                  <div className="mt-4 bg-emerald-900/50 border border-emerald-500/50 rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      <span className="text-emerald-200 font-semibold">Lesson completed!</span>
                    </div>
                    <p className="text-emerald-100 text-sm mt-1">
                      You've earned {lesson.isPortfolioWorthy ? 50 : 25} XP points!
                    </p>
                  </div>
                )}
              </div>

              {/* Key Concepts */}
              <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-6">
                <h3 className="text-lg font-bold text-white mb-4">Key Concepts</h3>
                <div className="flex flex-wrap gap-2">
                  {lesson.concepts.map((concept, index) => (
                    <button
                      key={index}
                      onClick={() => analytics.trackConceptStruggle(lessonId, concept, 1)}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm hover:bg-purple-500/30 transition-colors"
                      title="Click if you're struggling with this concept"
                    >
                      {concept}
                    </button>
                  ))}
                </div>
                <p className="text-gray-400 text-xs mt-2">💡 Click a concept if you find it difficult</p>
              </div>

              {/* Notes */}
              <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-6">
                <h3 className="text-lg font-bold text-white mb-4">Personal Notes</h3>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Take notes about this lesson..."
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white placeholder-gray-400 resize-none h-32"
                />
                <button
                  onClick={() => updateLessonNotes(lessonId, notes)}
                  className="mt-3 w-full bg-gray-600 hover:bg-gray-700 text-white py-2 rounded-lg transition-colors"
                >
                  Save Notes
                </button>
              </div>

              {/* Portfolio Badge */}
              {lesson.isPortfolioWorthy && (
                <div className="bg-yellow-900/50 border border-yellow-500/50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Star className="w-6 h-6 text-yellow-400" />
                    <h3 className="text-lg font-bold text-yellow-200">Portfolio Project</h3>
                  </div>
                  <p className="text-yellow-100 text-sm">
                    This project will enhance your job application portfolio! Complete all exercises and quiz to earn the badge.
                  </p>
                </div>
              )}

              {/* Navigation */}
              <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-6">
                <h3 className="text-lg font-bold text-white mb-4">Navigation</h3>
                <div className="space-y-3">
                  <Link 
                    href="/"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Dashboard
                  </Link>
                  <Link 
                    href={`/week/${lesson.week}`}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Calendar className="w-4 h-4" />
                    Week {lesson.week} Overview
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Success Toast */}
      {showSuccess && (
        <div className="fixed top-4 right-4 bg-emerald-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            <span className="font-semibold">Lesson completed successfully!</span>
          </div>
        </div>
      )}
    </div>
  )
}