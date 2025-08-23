// lib/curriculum/weeks/week01/lessons/monday.ts - COMPLETE TEMPLATE IMPLEMENTATION
import { LessonContent } from '../../../types';

export const mondayContent: LessonContent = {
  learn: {
    objective: "Master Python installation, development environment setup, and basic syntax essential for AI development",
    sections: [
      {
        title: "Setting Up Your AI Development Environment",
        content: `
Getting your Python environment right is crucial for AI development success. Unlike web development where you might get away with basic setups, AI requires specific tools, libraries, and configurations that work reliably across different operating systems.

## Why Python for AI?
Python dominates AI development because of its extensive ecosystem of libraries (TensorFlow, PyTorch, scikit-learn), readable syntax, and strong community support. Major tech companies like Google, Facebook, and OpenAI use Python for their AI research and production systems.

## Essential Components
- **Python 3.9+**: The core language (avoid Python 2.7)
- **IDE/Editor**: VS Code with Python extensions (recommended)
- **Package Manager**: pip (included) and virtual environments
- **Version Control**: Git integration for collaboration

## Development Best Practices
From day one, we'll follow professional AI development practices: virtual environments for project isolation, proper code formatting, and version control integration.
        `,
        codeExample: {
          title: "Verifying Your Python Installation",
          code: `# Check Python version (run in terminal/command prompt)
# python --version
# Should show Python 3.9.x or higher

# Check if pip is installed
# pip --version

# Create your first Python file: hello_ai.py
print("Welcome to AI Hero!")
print("Python version check:")

import sys
print(f"Python version: {sys.version}")
print(f"Python executable: {sys.executable}")

# Basic AI-style calculation
training_samples = 1000
validation_samples = 200
total_samples = training_samples + validation_samples

print(f"\\nDataset Summary:")
print(f"Training samples: {training_samples}")
print(f"Validation samples: {validation_samples}")
print(f"Total samples: {total_samples}")

# Calculate training/validation split ratio
train_ratio = training_samples / total_samples
print(f"Training ratio: {train_ratio:.2%}")`,
          explanation: "This script verifies your Python installation and introduces AI-specific vocabulary like training samples, validation sets, and data ratios that you'll use throughout your AI journey."
        }
      },
      {
        title: "Python Syntax Fundamentals",
        content: `
Python's syntax is designed for readability and simplicity, making it perfect for AI development where you need to focus on algorithms rather than complex syntax. Understanding these fundamentals is essential before diving into AI libraries.

## Key Syntax Rules
- **Indentation matters**: Python uses whitespace to define code blocks
- **No semicolons needed**: Each line is a statement
- **Case sensitive**: 'Model' and 'model' are different
- **Comments start with #**: Essential for documenting AI experiments

## Python Philosophy
Python follows the "Zen of Python" principle: "Simple is better than complex." This philosophy is perfect for AI development where complex mathematical concepts need clear, readable implementation.

## AI-Specific Naming Conventions
In AI development, variable names often reflect mathematical concepts: X for features, y for labels, model for trained algorithms, and epoch for training iterations.
        `,
        codeExample: {
          title: "Essential Python Syntax for AI",
          code: `# Python syntax demonstration with AI context
# Comments are crucial in AI for documenting experiments

# Variable assignment (no declaration needed)
model_name = "Neural Network v1"
learning_rate = 0.001
num_epochs = 100
is_training = True

# Print statements with different formats
print("Starting AI model training...")
print("Model:", model_name)
print(f"Learning rate: {learning_rate}")  # f-string formatting
print(f"Training for {num_epochs} epochs")

# Basic arithmetic operations common in AI
batch_size = 32
total_samples = 1600
num_batches = total_samples // batch_size  # Integer division
remaining_samples = total_samples % batch_size  # Modulo

print(f"\\nBatch processing:")
print(f"Total samples: {total_samples}")
print(f"Batch size: {batch_size}")
print(f"Number of batches: {num_batches}")
print(f"Remaining samples: {remaining_samples}")

# Conditional logic (we'll expand on this in Day 3)
if remaining_samples > 0:
    print("Note: Last batch will be smaller")
else:
    print("Perfect batch division!")`,
          explanation: "This example demonstrates core Python syntax using AI terminology and common calculations you'll encounter in machine learning projects."
        }
      },
      {
        title: "Working with Python Data and Operations",
        content: `
Python's built-in data handling capabilities form the foundation for AI data processing. Before you work with complex libraries like NumPy and Pandas, you need to master Python's basic data operations.

## Basic Data Types for AI
- **Numbers**: For calculations, measurements, scores
- **Strings**: For labels, file names, model names
- **Booleans**: For flags, conditions, status indicators
- **Lists**: For datasets, predictions, feature arrays

## Mathematical Operations
AI involves extensive mathematical operations. Python provides intuitive syntax for calculations you'll use constantly: addition for combining datasets, division for calculating averages, and comparison operators for thresholding.

## String Operations for AI
Text processing is crucial in AI, from handling file names to processing natural language data. Python's string methods make text manipulation straightforward.
        `,
        codeExample: {
          title: "Data Operations in AI Context",
          code: `# Working with AI data using Python basics

# Dataset information
dataset_name = "customer_behavior"
file_extension = ".csv"
full_filename = dataset_name + file_extension

print(f"Processing dataset: {full_filename}")

# Model performance metrics
accuracy_scores = [0.85, 0.87, 0.89, 0.91, 0.88]
num_experiments = len(accuracy_scores)
total_accuracy = sum(accuracy_scores)
average_accuracy = total_accuracy / num_experiments

print(f"\\nModel Performance Analysis:")
print(f"Number of experiments: {num_experiments}")
print(f"Individual scores: {accuracy_scores}")
print(f"Average accuracy: {average_accuracy:.3f}")
print(f"Best performance: {max(accuracy_scores):.3f}")
print(f"Worst performance: {min(accuracy_scores):.3f}")

# Data preprocessing indicators
has_missing_data = True
data_is_normalized = False
ready_for_training = has_missing_data == False and data_is_normalized == True

print(f"\\nData Status:")
print(f"Has missing data: {has_missing_data}")
print(f"Data normalized: {data_is_normalized}")
print(f"Ready for training: {ready_for_training}")

# String operations for file handling
model_version = "v2.1"
model_filename = f"ai_model_{model_version}.pkl"
backup_filename = model_filename.replace(".pkl", "_backup.pkl")

print(f"\\nFile Management:")
print(f"Model file: {model_filename}")
print(f"Backup file: {backup_filename}")
print(f"Model version: {model_version}")`,
          explanation: "This demonstrates how Python's basic operations apply to real AI scenarios: calculating performance metrics, managing datasets, and handling model files."
        }
      },
      {
        title: "Interactive Python and Error Handling Basics",
        content: `
AI development involves lots of experimentation and iteration. You'll run code snippets, test hypotheses, and debug algorithms constantly. Understanding how to work interactively with Python and handle basic errors is essential.

## Python Interactive Modes
- **REPL (Read-Eval-Print Loop)**: For quick testing and exploration
- **Jupyter Notebooks**: Popular in AI for data analysis and visualization
- **IDE debugging**: For systematic development and troubleshooting

## Common AI Development Errors
- **Syntax errors**: Missing colons, incorrect indentation
- **Runtime errors**: Division by zero, file not found
- **Logic errors**: Incorrect algorithms, wrong calculations

## Professional Development Habits
Start building habits that will serve you throughout your AI career: writing clear variable names, adding comments, testing small pieces of code, and handling errors gracefully.
        `,
        codeExample: {
          title: "Interactive Development and Basic Error Handling",
          code: `# Interactive Python development for AI
# This is how you'll work during AI experimentation

# Quick calculations and testing
print("=== AI Experiment Setup ===")

# Test different learning rates
learning_rates = [0.1, 0.01, 0.001]
for rate in learning_rates:
    # Quick estimation of training time
    estimated_time = 100 / rate  # Simplified calculation
    print(f"Learning rate {rate}: ~{estimated_time:.0f} minutes")

# Basic error prevention
print("\\n=== Error Prevention Examples ===")

# Avoid division by zero
num_samples = 1000
batch_size = 0  # This could cause problems

if batch_size > 0:
    num_batches = num_samples / batch_size
    print(f"Number of batches: {num_batches}")
else:
    print("Error: Batch size cannot be zero!")

# Check data before processing
accuracy = 0.85
if 0 <= accuracy <= 1:
    percentage = accuracy * 100
    print(f"Model accuracy: {percentage:.1f}%")
else:
    print("Error: Accuracy must be between 0 and 1!")

# Safe string operations
model_name = ""
if model_name:  # Check if string is not empty
    print(f"Working with model: {model_name}")
else:
    print("Warning: Model name is empty!")

# Interactive testing tips
print("\\n=== Development Tips ===")
print("1. Test small pieces of code first")
print("2. Use print() statements to debug")
print("3. Check your data before processing")
print("4. Start simple, then add complexity")`,
          explanation: "This shows how to develop Python code interactively and avoid common errors that can derail AI experiments. These practices will become essential as you work with real datasets and complex models."
        }
      }
    ]
  },
  practice: {
    exercises: [
      {
        title: "AI Environment Validator",
        description: "Create a script that validates your Python setup for AI development",
        difficulty: "beginner",
        codeTemplate: `# AI Environment Validator
# TODO: Check Python version (should be 3.9+)
# TODO: Test basic math operations for AI calculations  
# TODO: Verify string operations for data file handling
# TODO: Display environment summary report

import sys

# Your validation code here
print("AI Development Environment Check")
print("=" * 40)`,
        solution: `# AI Environment Validator
import sys

print("AI Development Environment Check")
print("=" * 40)

# Check Python version
python_version = sys.version_info
print(f"Python Version: {python_version.major}.{python_version.minor}.{python_version.micro}")

if python_version >= (3, 9):
    print("✅ Python version is suitable for AI development")
else:
    print("❌ Python version too old. Upgrade to 3.9+ for AI libraries")

# Test basic math operations for AI
print("\\nTesting Mathematical Operations:")
accuracy1 = 0.85
accuracy2 = 0.92
average_accuracy = (accuracy1 + accuracy2) / 2
print(f"Average accuracy calculation: {average_accuracy:.3f}")

# Test data handling
print("\\nTesting Data Operations:")
dataset_sizes = [1000, 1500, 2000]
total_samples = sum(dataset_sizes)
num_datasets = len(dataset_sizes)
print(f"Total samples across {num_datasets} datasets: {total_samples}")

# Test string operations for file handling
print("\\nTesting File Operations:")
model_name = "neural_network"
version = "v1.0"
filename = f"{model_name}_{version}.pkl"
print(f"Generated filename: {filename}")

# Environment summary
print("\\n" + "=" * 40)
print("Environment Status: ✅ Ready for AI Development!")
print("Next steps: Install AI libraries (numpy, pandas, scikit-learn)")`,
        hints: [
          "Use sys.version_info to check Python version",
          "Test operations you'll use in AI: averages, sums, string formatting",
          "Make your output clear and informative"
        ]
      },
      {
        title: "AI Dataset Calculator",
        description: "Build a calculator for common AI dataset operations",
        difficulty: "beginner",
        codeTemplate: `# AI Dataset Calculator
# TODO: Calculate training/validation split ratios
# TODO: Estimate memory requirements for datasets
# TODO: Calculate training time estimates
# TODO: Display formatted results

# Dataset parameters
total_samples = 10000
train_ratio = 0.8

# Your calculator code here`,
        solution: `# AI Dataset Calculator
print("AI Dataset Calculator")
print("=" * 30)

# Dataset parameters
total_samples = 10000
train_ratio = 0.8
validation_ratio = 0.2
sample_size_bytes = 1024  # Average bytes per sample

# Calculate splits
training_samples = int(total_samples * train_ratio)
validation_samples = int(total_samples * validation_ratio)

print(f"Dataset Split Analysis:")
print(f"Total samples: {total_samples:,}")
print(f"Training samples: {training_samples:,} ({train_ratio:.0%})")
print(f"Validation samples: {validation_samples:,} ({validation_ratio:.0%})")

# Memory calculations
total_memory_bytes = total_samples * sample_size_bytes
total_memory_mb = total_memory_bytes / (1024 * 1024)
training_memory_mb = training_samples * sample_size_bytes / (1024 * 1024)

print(f"\\nMemory Requirements:")
print(f"Total dataset: {total_memory_mb:.1f} MB")
print(f"Training data: {training_memory_mb:.1f} MB")

# Training time estimates
samples_per_second = 100  # Processing speed
training_time_seconds = training_samples / samples_per_second
training_time_minutes = training_time_seconds / 60

print(f"\\nTraining Time Estimates:")
print(f"Processing speed: {samples_per_second} samples/second")
print(f"Estimated training time: {training_time_minutes:.1f} minutes")

# Batch processing
batch_size = 32
num_batches = training_samples // batch_size
remaining_samples = training_samples % batch_size

print(f"\\nBatch Processing:")
print(f"Batch size: {batch_size}")
print(f"Number of full batches: {num_batches}")
if remaining_samples > 0:
    print(f"Final partial batch: {remaining_samples} samples")

print("\\n" + "=" * 30)
print("✅ Dataset analysis complete!")`,
        hints: [
          "Use integer division (//) for batch calculations", 
          "Format large numbers with :, for readability",
          "Calculate percentages by multiplying ratios by 100"
        ]
      },
      {
        title: "Model Performance Reporter",
        description: "Create a script that formats and reports AI model performance metrics",
        difficulty: "intermediate",
        codeTemplate: `# Model Performance Reporter
# TODO: Process multiple model results
# TODO: Calculate summary statistics
# TODO: Format professional report output
# TODO: Include performance rankings

# Sample model results
model_results = [
    ("Neural Network", 0.89, 0.023),  # (name, accuracy, loss)
    ("Random Forest", 0.85, 0.035),
    ("SVM", 0.82, 0.041)
]

# Your reporting code here`,
        solution: `# Model Performance Reporter
print("AI Model Performance Report")
print("=" * 50)

# Sample model results (name, accuracy, loss)
model_results = [
    ("Neural Network", 0.89, 0.023),
    ("Random Forest", 0.85, 0.035), 
    ("SVM", 0.82, 0.041),
    ("Logistic Regression", 0.87, 0.028),
    ("Decision Tree", 0.78, 0.055)
]

# Extract metrics for analysis
model_names = []
accuracies = []
losses = []

for name, accuracy, loss in model_results:
    model_names.append(name)
    accuracies.append(accuracy)
    losses.append(loss)

# Calculate summary statistics
best_accuracy = max(accuracies)
worst_accuracy = min(accuracies)
avg_accuracy = sum(accuracies) / len(accuracies)
best_loss = min(losses)
worst_loss = max(losses)
avg_loss = sum(losses) / len(losses)

# Individual model performance
print("Individual Model Performance:")
print("-" * 50)
for i, (name, accuracy, loss) in enumerate(model_results):
    rank = i + 1
    print(f"{rank}. {name:<20} | Accuracy: {accuracy:.3f} | Loss: {loss:.3f}")

# Summary statistics
print("\\nSummary Statistics:")
print("-" * 30)
print(f"Number of models evaluated: {len(model_results)}")
print(f"Best accuracy: {best_accuracy:.3f}")
print(f"Worst accuracy: {worst_accuracy:.3f}")
print(f"Average accuracy: {avg_accuracy:.3f}")
print(f"Best loss: {best_loss:.3f}")
print(f"Worst loss: {worst_loss:.3f}")
print(f"Average loss: {avg_loss:.3f}")

# Find best performing model
best_model_idx = accuracies.index(best_accuracy)
best_model_name = model_names[best_model_idx]
best_model_loss = losses[best_model_idx]

print(f"\\nRecommendation:")
print(f"🏆 Best model: {best_model_name}")
print(f"   Accuracy: {best_accuracy:.3f} ({best_accuracy:.1%})")
print(f"   Loss: {best_model_loss:.3f}")

# Performance tiers
print(f"\\nPerformance Tiers:")
for name, accuracy, loss in model_results:
    if accuracy >= 0.85:
        tier = "🟢 Production Ready"
    elif accuracy >= 0.80:
        tier = "🟡 Needs Improvement"
    else:
        tier = "🔴 Requires Retraining"
    print(f"{name:<20}: {tier}")

print("\\n" + "=" * 50)
print("Report generated successfully!")`,
        hints: [
          "Use enumerate() to get rankings",
          "Extract data into separate lists for easier calculations",
          "Use string formatting for aligned output"
        ]
      }
    ],
    miniProject: {
      title: "AI Study Progress Tracker",
      description: "Build a comprehensive tracking system for your AI learning journey that calculates progress, estimates completion times, and provides motivational feedback",
      requirements: [
        "Track multiple learning modules with different completion percentages",
        "Calculate overall progress and estimated completion date",
        "Provide personalized feedback based on progress patterns",
        "Generate study recommendations and time management advice",
        "Format output as a professional progress report"
      ],
      starterCode: `# AI Study Progress Tracker
# TODO: Define learning modules and current progress
# TODO: Calculate completion statistics and time estimates
# TODO: Analyze progress patterns and provide feedback
# TODO: Generate personalized study recommendations
# TODO: Format professional progress report

import datetime

def calculate_study_progress(modules, study_hours_per_week):
    """
    Calculate comprehensive study progress and recommendations.
    
    Args:
        modules: List of tuples (module_name, total_lessons, completed_lessons)
        study_hours_per_week: Average hours studied per week
    
    Returns:
        Dictionary containing progress analysis and recommendations
    """
    # TODO: Implement progress tracking logic
    pass

# Test data
learning_modules = [
    ("Python Fundamentals", 20, 15),
    ("Data Science Basics", 25, 8),
    ("Machine Learning", 30, 3),
    ("Deep Learning", 35, 0),
    ("AI Ethics", 10, 0)
]

study_hours_per_week = 10

# Run the tracker
progress_report = calculate_study_progress(learning_modules, study_hours_per_week)
print(progress_report)`,
      expectedOutput: `AI Study Progress Report
========================

📊 OVERALL PROGRESS
Total Modules: 5
Lessons Completed: 26/120 (21.7%)
Lessons Remaining: 94

⏱️ TIME ANALYSIS
Current Pace: 10 hours/week
Estimated Completion: 18.8 weeks
Target Completion Date: June 15, 2024

📈 MODULE BREAKDOWN
1. Python Fundamentals    ████████░░ 75% (15/20) - Nearly Complete!
2. Data Science Basics    ███░░░░░░░ 32% (8/25)  - Making Progress
3. Machine Learning       █░░░░░░░░░ 10% (3/30)  - Just Started
4. Deep Learning          ░░░░░░░░░░ 0%  (0/35)  - Not Started
5. AI Ethics             ░░░░░░░░░░ 0%  (0/10)  - Not Started

🎯 RECOMMENDATIONS
• Focus: Complete Python Fundamentals this week
• Next Priority: Accelerate Data Science Basics
• Study Tip: Aim for 12 hours/week to finish 3 weeks earlier
• Motivation: You're ahead of 68% of learners at this stage!

📅 WEEKLY GOALS
This Week: Finish Python Fundamentals + 3 Data Science lessons
Next Week: Complete Data Science Basics
Month Goal: Begin Machine Learning with solid foundation

Keep up the excellent work! 🚀`
    }
  },
  lab: {
    title: "Python Basics in AI Context",
    description: "Apply Python fundamentals to real AI development scenarios",
    tasks: [
      {
        instruction: "Create an AI experiment logging system",
        code: `# AI Experiment Logger
# Professional practice: Always log your AI experiments

import datetime

def log_experiment(model_type, accuracy, loss, notes=""):
    """Log AI experiment results with timestamp."""
    
    # Get current timestamp
    timestamp = datetime.datetime.now()
    formatted_time = timestamp.strftime("%Y-%m-%d %H:%M:%S")
    
    # Create experiment entry
    experiment_id = f"exp_{timestamp.strftime('%Y%m%d_%H%M%S')}"
    
    # Format the log entry
    log_entry = f"""
Experiment Log
==============
ID: {experiment_id}
Timestamp: {formatted_time}
Model Type: {model_type}
Accuracy: {accuracy:.4f} ({accuracy:.2%})
Loss: {loss:.4f}
Notes: {notes}
Status: {'✅ Good Performance' if accuracy > 0.85 else '⚠️ Needs Improvement'}
"""
    
    print(log_entry)
    
    # In real projects, you'd save this to a file
    return experiment_id

# Example usage - log different experiments
print("AI Experiment Tracking System")
print("=" * 40)

# Log multiple experiments
experiments = [
    ("Neural Network", 0.89, 0.023, "Added dropout layer"),
    ("Random Forest", 0.85, 0.035, "Tuned max_depth parameter"),
    ("SVM", 0.82, 0.041, "Used RBF kernel")
]

experiment_ids = []
for model, acc, loss, note in experiments:
    exp_id = log_experiment(model, acc, loss, note)
    experiment_ids.append(exp_id)
    print("-" * 40)

print(f"\\nLogged {len(experiments)} experiments successfully!")
print("Experiment IDs:", experiment_ids)`
      },
      {
        instruction: "Build a dataset health checker",
        code: `# Dataset Health Checker
# Essential tool for AI: validate your data before training

def check_dataset_health(dataset_info):
    """
    Analyze dataset quality for AI training.
    
    Args:
        dataset_info: Dict with dataset characteristics
    """
    
    print("Dataset Health Check Report")
    print("=" * 35)
    
    # Extract dataset information
    name = dataset_info.get("name", "Unknown Dataset")
    total_samples = dataset_info.get("total_samples", 0)
    missing_values = dataset_info.get("missing_values", 0)
    duplicate_samples = dataset_info.get("duplicates", 0)
    num_features = dataset_info.get("features", 0)
    target_classes = dataset_info.get("target_classes", 0)
    
    print(f"Dataset: {name}")
    print(f"Samples: {total_samples:,}")
    print(f"Features: {num_features}")
    print(f"Target Classes: {target_classes}")
    
    # Calculate health metrics
    missing_percentage = (missing_values / total_samples) * 100 if total_samples > 0 else 0
    duplicate_percentage = (duplicate_samples / total_samples) * 100 if total_samples > 0 else 0
    
    print(f"\\nData Quality Metrics:")
    print(f"Missing values: {missing_values} ({missing_percentage:.1f}%)")
    print(f"Duplicates: {duplicate_samples} ({duplicate_percentage:.1f}%)")
    
    # Health assessment
    health_score = 100
    recommendations = []
    
    if missing_percentage > 10:
        health_score -= 30
        recommendations.append("🔴 High missing data - consider imputation")
    elif missing_percentage > 5:
        health_score -= 15
        recommendations.append("🟡 Moderate missing data - monitor closely")
    
    if duplicate_percentage > 5:
        health_score -= 20
        recommendations.append("🔴 Remove duplicate samples")
    
    if total_samples < 1000:
        health_score -= 25
        recommendations.append("🟡 Small dataset - consider data augmentation")
    
    if target_classes < 2:
        health_score -= 40
        recommendations.append("🔴 Invalid target classes for classification")
    
    # Display health assessment
    print(f"\\nHealth Score: {health_score}/100")
    
    if health_score >= 80:
        status = "✅ Excellent - Ready for training"
    elif health_score >= 60:
        status = "⚠️ Good - Minor improvements needed"
    else:
        status = "❌ Poor - Significant cleaning required"
    
    print(f"Status: {status}")
    
    if recommendations:
        print(f"\\nRecommendations:")
        for rec in recommendations:
            print(f"  {rec}")
    
    return health_score

# Test the health checker
print("Testing Dataset Health Checker\\n")

# Test different dataset scenarios
datasets = [
    {
        "name": "Customer Behavior Dataset",
        "total_samples": 5000,
        "missing_values": 150,
        "duplicates": 25,
        "features": 12,
        "target_classes": 3
    },
    {
        "name": "Small Research Dataset", 
        "total_samples": 500,
        "missing_values": 100,
        "duplicates": 50,
        "features": 8,
        "target_classes": 2
    }
]

for dataset in datasets:
    score = check_dataset_health(dataset)
    print("\\n" + "="*50 + "\\n")`
      },
      {
        instruction: "Develop an AI learning progress calculator",
        code: `# AI Learning Progress Calculator
# Track your journey from beginner to AI expert

def calculate_learning_progress(completed_topics, skill_assessments):
    """
    Calculate comprehensive AI learning progress.
    
    Args:
        completed_topics: List of completed learning topics
        skill_assessments: Dict of skill areas and proficiency levels (1-10)
    """
    
    print("AI Learning Progress Analysis")
    print("=" * 40)
    
    # Define the complete AI curriculum path
    ai_curriculum = [
        "Python Basics", "Data Types", "Control Flow", "Functions",
        "File I/O", "Data Structures", "Object-Oriented Programming",
        "Libraries & Modules", "Data Science Basics", "NumPy",
        "Pandas", "Matplotlib", "Statistics", "Machine Learning Basics",
        "Supervised Learning", "Unsupervised Learning", "Model Evaluation",
        "Deep Learning", "Neural Networks", "Computer Vision", "NLP"
    ]
    
    total_topics = len(ai_curriculum)
    completed_count = len(completed_topics)
    completion_percentage = (completed_count / total_topics) * 100
    
    print(f"Topic Progress: {completed_count}/{total_topics} ({completion_percentage:.1f}%)")
    
    # Progress visualization
    progress_bar_length = 20
    filled_length = int(progress_bar_length * completed_count // total_topics)
    bar = "█" * filled_length + "░" * (progress_bar_length - filled_length)
    print(f"Progress: [{bar}] {completion_percentage:.1f}%")
    
    # Skill assessment analysis
    print(f"\\nSkill Proficiency Analysis:")
    skill_total = 0
    skill_count = 0
    
    for skill, level in skill_assessments.items():
        skill_total += level
        skill_count += 1
        
        # Create skill level bar
        skill_bar = "●" * level + "○" * (10 - level)
        print(f"{skill:<20}: [{skill_bar}] {level}/10")
    
    average_skill = skill_total / skill_count if skill_count > 0 else 0
    
    # Determine learning phase
    if completion_percentage < 25:
        phase = "🌱 Foundation Building"
        next_focus = "Complete Python fundamentals"
    elif completion_percentage < 50:
        phase = "📊 Data Science Explorer" 
        next_focus = "Master data manipulation libraries"
    elif completion_percentage < 75:
        phase = "🤖 Machine Learning Practitioner"
        next_focus = "Build ML models and evaluate performance"
    else:
        phase = "🧠 AI Specialist"
        next_focus = "Specialize in advanced AI topics"
    
    print(f"\\nLearning Phase: {phase}")
    print(f"Average Skill Level: {average_skill:.1f}/10")
    print(f"Next Focus: {next_focus}")
    
    # Recommendations based on progress
    print(f"\\nPersonalized Recommendations:")
    
    if completion_percentage < 30:
        print("• Focus on daily coding practice (30 min minimum)")
        print("• Complete one topic per week")
        print("• Join online AI communities for support")
    elif completion_percentage < 70:
        print("• Start building portfolio projects")
        print("• Practice with real datasets")
        print("• Consider contributing to open source projects")
    else:
        print("• Specialize in your area of interest")
        print("• Mentor other learners")
        print("• Attend AI conferences and workshops")
    
    # Time estimation
    remaining_topics = total_topics - completed_count
    weeks_per_topic = 1.5  # Estimated learning pace
    estimated_weeks = remaining_topics * weeks_per_topic
    
    print(f"\\nTime Estimation:")
    print(f"Remaining topics: {remaining_topics}")
    print(f"Estimated completion: {estimated_weeks:.1f} weeks")
    
    return {
        "completion_percentage": completion_percentage,
        "average_skill": average_skill,
        "phase": phase,
        "estimated_weeks": estimated_weeks
    }

# Example usage
completed = [
    "Python Basics", "Data Types", "Control Flow", 
    "Functions", "File I/O"
]

skills = {
    "Python Programming": 7,
    "Data Analysis": 4,
    "Machine Learning": 2,
    "Problem Solving": 6,
    "Math & Statistics": 5
}

# Calculate and display progress
progress_data = calculate_learning_progress(completed, skills)

print(f"\\n🎯 Keep going! You're {progress_data['completion_percentage']:.1f}% of the way to AI mastery!")`
      }
    ]
  },
  assessment: {
    questions: [
      {
        question: "Which Python version is recommended for AI development in 2024?",
        options: ["Python 2.7", "Python 3.6", "Python 3.9+", "Any version works"],
        correct: 2,
        explanation: "Python 3.9+ is recommended for AI development because it has better performance, latest AI library support, and receives security updates. Python 2.7 is deprecated."
      },
      {
        question: "What will this code output: `print(f'Accuracy: {0.8567:.2%}')`",
        options: ["Accuracy: 0.86", "Accuracy: 85.67%", "Accuracy: 0.8567", "Error"],
        correct: 1,
        explanation: "The :.2% format specifier converts the decimal to a percentage with 2 decimal places: 0.8567 becomes 85.67%."
      },
      {
        question: "In AI development, why is proper variable naming important?",
        options: [
          "It makes code run faster",
          "It helps with debugging and collaboration",
          "It's required by Python syntax", 
          "It reduces memory usage"
        ],
        correct: 1,
        explanation: "Proper variable naming (like 'learning_rate' instead of 'lr') makes AI code more readable, easier to debug, and helps team collaboration, especially important in complex AI projects."
      },
      {
        question: "What's the main advantage of using f-strings for output in AI applications?",
        options: [
          "They are faster than other methods",
          "They allow embedded expressions and formatting",
          "They use less memory",
          "They work with any Python version"
        ],
        correct: 1,
        explanation: "F-strings allow you to embed expressions directly and format numbers (like `f'{accuracy:.2%}'`), which is perfect for displaying AI metrics like accuracy percentages and loss values."
      },
      {
        question: "Which statement about Python indentation in AI code is correct?",
        options: [
          "Indentation is optional in AI libraries",
          "Only tabs should be used for indentation",
          "Consistent indentation is required and defines code structure",
          "Indentation only matters in functions"
        ],
        correct: 2,
        explanation: "Python uses indentation to define code structure (blocks), and this is especially important in AI code where you have nested loops for data processing and complex conditional logic for model training."
      }
    ]
  },
  discussion: {
    prompt: "Setting up a proper development environment is often overlooked by beginners, but it's crucial for AI success. Share your experience with Python setup challenges, and discuss why having a professional development environment matters more in AI than in other types of programming.",
    guidingQuestions: [
      "What challenges did you face when first setting up Python for development?",
      "Why might a proper development environment be more critical for AI projects than simple web development?",
      "How do version conflicts with AI libraries (like TensorFlow, PyTorch) affect projects?",
      "What role do virtual environments play in managing different AI project requirements?",
      "How does proper tooling setup impact your ability to experiment and iterate on AI models?"
    ]
  }
};