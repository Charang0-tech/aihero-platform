// lib/curriculum/weeks/week01/lessons/wednesday.ts - COMPLETE THOROUGH VERSION
import { LessonContent } from '../../../types';

export const wednesdayContent: LessonContent = {
  learn: {
    objective: "Master conditional statements and loops to control program flow in AI applications",
    sections: [
      {
        title: "Conditional Statements (if/elif/else)",
        content: `
Control flow allows your programs to make decisions and respond differently based on conditions. This is fundamental in AI for processing data, handling different scenarios, and implementing logic.

## Basic if Statement
The if statement executes code only when a condition is True.

## if/else Statement  
Use else to handle the case when the condition is False.

## if/elif/else Chain
Use elif (else if) to check multiple conditions in sequence.

## Comparison Operators
- **==** : Equal to
- **!=** : Not equal to  
- **<** : Less than
- **>** : Greater than
- **<=** : Less than or equal to
- **>=** : Greater than or equal to
        `,
        codeExample: {
          title: "AI Model Decision Making",
          code: `# AI model confidence decision making
confidence_score = 0.87
threshold_high = 0.9
threshold_medium = 0.7

if confidence_score >= threshold_high:
    prediction_quality = "High confidence - deploy prediction"
elif confidence_score >= threshold_medium:
    prediction_quality = "Medium confidence - flag for review"
else:
    prediction_quality = "Low confidence - require human verification"

print(f"Model confidence: {confidence_score:.2%}")
print(f"Decision: {prediction_quality}")

# Checking data quality
data_completeness = 0.95
missing_threshold = 0.1

if data_completeness > (1 - missing_threshold):
    print("✅ Dataset is ready for training")
else:
    print("❌ Dataset needs cleaning - too much missing data")

# Model performance evaluation
accuracy = 0.89
precision = 0.92
recall = 0.85

if accuracy >= 0.9 and precision >= 0.9 and recall >= 0.9:
    deployment_status = "READY FOR PRODUCTION"
elif accuracy >= 0.8 and precision >= 0.8 and recall >= 0.8:
    deployment_status = "READY FOR STAGING"
else:
    deployment_status = "NEEDS MORE TRAINING"

print(f"Deployment status: {deployment_status}")`,
          explanation: "This shows how AI systems use conditional logic to make decisions about model predictions, data quality, and deployment readiness."
        }
      },
      {
        title: "Logical Operators",
        content: `
Combine multiple conditions using logical operators:

## and Operator
Both conditions must be True

## or Operator  
At least one condition must be True

## not Operator
Reverses the boolean value

These are essential for complex AI decision-making scenarios where multiple criteria must be evaluated.
        `,
        codeExample: {
          title: "Complex AI Conditions",
          code: `# AI training validation
epoch = 45
max_epochs = 100
accuracy = 0.94
target_accuracy = 0.9
loss = 0.15
loss_threshold = 0.2

# Complex training decision
if accuracy >= target_accuracy and loss <= loss_threshold:
    print("✅ Model training successful - ready for deployment")
elif epoch >= max_epochs:
    print("⏰ Maximum epochs reached - evaluate performance")
elif accuracy < target_accuracy and epoch < max_epochs:
    print("🔄 Continue training - target not reached")
else:
    print("🔍 Review model architecture - loss too high")

# Data validation with multiple conditions
age = 25
experience = 2
has_degree = True
portfolio_score = 85

# AI course admission logic
if (age >= 18 and experience >= 1) or has_degree:
    if portfolio_score >= 80 or has_degree:
        admission_status = "ACCEPTED"
    else:
        admission_status = "CONDITIONAL - Portfolio Review Needed"
else:
    admission_status = "NOT QUALIFIED"

print(f"Admission Status: {admission_status}")

# Input validation for AI model
user_input = "95"
if user_input.isdigit() and 0 <= int(user_input) <= 100:
    score = int(user_input)
    print(f"Valid score: {score}")
    
    # Further validation based on score range
    if score >= 90:
        grade = "Excellent"
    elif score >= 80:
        grade = "Good"
    elif score >= 70:
        grade = "Satisfactory"
    else:
        grade = "Needs Improvement"
    
    print(f"Grade: {grade}")
else:
    print("Invalid input - must be number between 0 and 100")

# Model selection logic
model_accuracy = 0.89
model_speed = 0.7  # inference time score
model_size = 0.8   # memory efficiency score

# Use logical operators for model selection
if model_accuracy >= 0.85 and (model_speed >= 0.6 or model_size >= 0.7):
    if model_accuracy >= 0.9:
        model_tier = "PREMIUM"
    else:
        model_tier = "STANDARD"
elif not (model_accuracy < 0.8):  # Using 'not' operator
    model_tier = "BASIC"
else:
    model_tier = "REQUIRES_TRAINING"

print(f"Model Classification: {model_tier}")`,
          explanation: "Logical operators enable sophisticated decision trees essential for AI applications like model selection, admission systems, and training validation."
        }
      },
      {
        title: "Loops: for and while",
        content: `
Loops let you repeat code automatically - essential for processing datasets, training models, and iterating through results.

## for Loops
Best for when you know how many times to repeat or need to process each item in a collection.

## while Loops  
Best for when you need to repeat until a condition is met.

## range() Function
Creates sequences of numbers for loops.

## Loop Control
- **break**: Exit the loop immediately
- **continue**: Skip to next iteration
- **enumerate()**: Get both index and value in for loops
        `,
        codeExample: {
          title: "Processing AI Data with Loops",
          code: `# Processing multiple model predictions
predictions = [0.92, 0.87, 0.95, 0.73, 0.89]
confidence_threshold = 0.8
accepted_predictions = []
rejected_predictions = []

print("Model Prediction Analysis:")
for i, prediction in enumerate(predictions):
    if prediction >= confidence_threshold:
        status = "✅ Accept"
        accepted_predictions.append(prediction)
    else:
        status = "❌ Reject"
        rejected_predictions.append(prediction)
    print(f"Prediction {i+1}: {prediction:.2%} - {status}")

print(f"\\nSummary: {len(accepted_predictions)} accepted, {len(rejected_predictions)} rejected")

# Training epochs simulation with early stopping
epoch = 1
max_epochs = 10
target_loss = 0.1
current_loss = 1.0
loss_history = []

print("\\nTraining Progress:")
while epoch <= max_epochs and current_loss > target_loss:
    # Simulate loss decreasing each epoch with some randomness
    improvement = 0.15 + (epoch * 0.02)  # Better improvement over time
    current_loss = current_loss * (1 - improvement)
    loss_history.append(current_loss)
    
    print(f"Epoch {epoch:2d}: Loss = {current_loss:.4f}")
    
    # Check for convergence
    if current_loss <= target_loss:
        print(f"🎯 Target loss reached at epoch {epoch}!")
        break
    
    # Check for plateau (no improvement)
    if len(loss_history) >= 3:
        recent_losses = loss_history[-3:]
        if max(recent_losses) - min(recent_losses) < 0.001:
            print("📊 Loss plateaued - stopping early")
            break
    
    epoch += 1

if current_loss > target_loss:
    print("⚠️ Training incomplete - consider more epochs or adjust learning rate")

print(f"Final loss: {current_loss:.4f} after {epoch} epochs")

# Data preprocessing loop with filtering
dataset_sizes = [1000, 1500, 800, 2000, 1200, 500, 3000]
processed_datasets = []
total_samples = 0
min_size = 1000

print("\\nDataset Processing:")
for i, size in enumerate(dataset_sizes):
    print(f"Processing dataset {i+1}: {size} samples")
    
    if size < min_size:
        print(f"⚠️  Small dataset: {size} samples - skipping (too small)")
        continue
    
    # Simulate processing time based on size
    processing_time = size / 1000  # seconds
    processed_datasets.append({
        'id': i+1,
        'size': size,
        'processing_time': processing_time
    })
    
    total_samples += size
    print(f"✅ Processed in {processing_time:.1f}s")
    
    # Break if we have enough data
    if total_samples >= 10000:
        print(f"🎯 Reached target of 10,000 samples")
        break

print(f"\\nProcessing complete:")
print(f"Datasets processed: {len(processed_datasets)}")
print(f"Total samples: {total_samples:,}")

# Hyperparameter grid search simulation
learning_rates = [0.001, 0.01, 0.1]
batch_sizes = [32, 64, 128]
best_score = 0
best_params = {}

print("\\nHyperparameter Grid Search:")
experiment_count = 0

for lr in learning_rates:
    for batch_size in batch_sizes:
        experiment_count += 1
        
        # Simulate training score
        # Higher LR and larger batch generally better (simplified)
        simulated_score = min(0.95, 0.7 + (lr * 5) + (batch_size / 1000))
        
        print(f"Exp {experiment_count}: LR={lr}, Batch={batch_size}, Score={simulated_score:.3f}")
        
        if simulated_score > best_score:
            best_score = simulated_score
            best_params = {'lr': lr, 'batch_size': batch_size}
            print(f"  🆕 New best score: {simulated_score:.3f}")

print(f"\nBest hyperparameters:")
print(f"Learning Rate: {best_params['lr']}")
print(f"Batch Size: {best_params['batch_size']}")
print(f"Best Score: {best_score:.3f}")
`,
          explanation: "Grid search is a fundamental technique in AI for finding optimal hyperparameters. This example shows how nested loops systematically test all combinations."
        }
      }
    ]
  },
  practice: {
    exercises: [
      {
        title: "AI Model Confidence Filter",
        description: "Create a system that filters AI predictions based on confidence thresholds",
        initialCode: `# AI Prediction Filtering System
predictions = [
    {'id': 1, 'prediction': 'spam', 'confidence': 0.95},
    {'id': 2, 'prediction': 'not spam', 'confidence': 0.67},
    {'id': 3, 'prediction': 'spam', 'confidence': 0.89},
    {'id': 4, 'prediction': 'not spam', 'confidence': 0.34},
    {'id': 5, 'prediction': 'spam', 'confidence': 0.92}
]

confidence_threshold = 0.8

# Your code here - filter and categorize predictions
`,
        solution: `# AI Prediction Filtering System
predictions = [
    {'id': 1, 'prediction': 'spam', 'confidence': 0.95},
    {'id': 2, 'prediction': 'not spam', 'confidence': 0.67},
    {'id': 3, 'prediction': 'spam', 'confidence': 0.89},
    {'id': 4, 'prediction': 'not spam', 'confidence': 0.34},
    {'id': 5, 'prediction': 'spam', 'confidence': 0.92}
]

confidence_threshold = 0.8
high_confidence = []
low_confidence = []
spam_count = 0

for pred in predictions:
    if pred['confidence'] >= confidence_threshold:
        high_confidence.append(pred)
        if pred['prediction'] == 'spam':
            spam_count += 1
        print(f"✅ ID {pred['id']}: {pred['prediction']} ({pred['confidence']:.1%})")
    else:
        low_confidence.append(pred)
        print(f"⚠️ ID {pred['id']}: {pred['prediction']} ({pred['confidence']:.1%}) - Low confidence")

print(f"\nSummary:")
print(f"High confidence predictions: {len(high_confidence)}")
print(f"Low confidence predictions: {len(low_confidence)}")
print(f"High-confidence spam detected: {spam_count}")
`,
        hints: ["Use a for loop to iterate through predictions", "Use if statements to check confidence levels", "Keep counters for different categories"]
      },
      {
        title: "Training Loop Simulator",
        description: "Simulate a machine learning training loop with early stopping",
        initialCode: `# ML Training Simulator
import random

max_epochs = 20
target_accuracy = 0.92
current_accuracy = 0.60
epoch = 1

# Your code here - create training loop with early stopping
`,
        solution: `# ML Training Simulator
import random

max_epochs = 20
target_accuracy = 0.92
current_accuracy = 0.60
epoch = 1
no_improvement_count = 0
best_accuracy = current_accuracy

print("Starting training...")

while epoch <= max_epochs and current_accuracy < target_accuracy:
    # Simulate training improvement with some randomness
    improvement = random.uniform(0.01, 0.05)
    current_accuracy += improvement
    
    print(f"Epoch {epoch:2d}: Accuracy = {current_accuracy:.3f}")
    
    # Check for improvement
    if current_accuracy > best_accuracy:
        best_accuracy = current_accuracy
        no_improvement_count = 0
        print(f"         New best accuracy!")
    else:
        no_improvement_count += 1
    
    # Early stopping if no improvement for 3 epochs
    if no_improvement_count >= 3:
        print(f"Early stopping: No improvement for 3 epochs")
        break
    
    # Check if target reached
    if current_accuracy >= target_accuracy:
        print(f"🎯 Target accuracy reached!")
        break
        
    epoch += 1

print(f"\nTraining completed:")
print(f"Final accuracy: {current_accuracy:.3f}")
print(f"Best accuracy: {best_accuracy:.3f}")
print(f"Epochs trained: {epoch}")

if current_accuracy >= target_accuracy:
    print("✅ Training successful!")
else:
    print("⚠️ Target not reached - consider more training")
`,
        hints: ["Use a while loop for the training epochs", "Track best accuracy for early stopping", "Use break to exit the loop early"]
      }
    ]
  },
  assessment: {
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "Which operator would you use to check if a model's accuracy is at least 85% AND the training time is less than 60 minutes?",
        options: [
          "accuracy >= 0.85 or training_time < 60",
          "accuracy >= 0.85 and training_time < 60",
          "accuracy == 0.85 and training_time == 60", 
          "not (accuracy < 0.85 or training_time >= 60)"
        ],
        correct: 1,
        explanation: "The 'and' operator ensures both conditions must be true. We need accuracy >= 0.85 AND training_time < 60."
      },
      {
        id: 2,
        type: "multiple_choice", 
        question: "What type of loop is best for processing each item in a list of model predictions?",
        options: [
          "while loop - because we don't know how many predictions there are",
          "for loop - because we want to process each prediction exactly once",
          "if statement - because we need to check each prediction",
          "nested loop - because predictions are complex"
        ],
        correct: 1,
        explanation: "A for loop is ideal when you know you want to process each item in a collection exactly once, which is the case with a list of predictions."
      },
      {
        id: 3,
        type: "code_completion",
        question: "Complete this code to categorize AI model performance:",
        code: `accuracy = 0.87
precision = 0.91
recall = 0.83

if accuracy >= 0.9 ___ precision >= 0.9 ___ recall >= 0.9:
    performance = "Excellent"
___ accuracy >= 0.8 and precision >= 0.8 and recall >= 0.8:
    performance = "Good"  
___:
    performance = "Needs Improvement"
    
print(performance)`,
        solution: `accuracy = 0.87
precision = 0.91
recall = 0.83

if accuracy >= 0.9 and precision >= 0.9 and recall >= 0.9:
    performance = "Excellent"
elif accuracy >= 0.8 and precision >= 0.8 and recall >= 0.8:
    performance = "Good"  
else:
    performance = "Needs Improvement"
    
print(performance)`,
        explanation: "Use 'and' to require all conditions to be true for excellent performance, 'elif' for the next condition, and 'else' for the default case."
      },
      {
        id: 4,
        type: "conceptual",
        question: "Explain when you would use a while loop vs a for loop in AI applications. Give a specific example of each.",
        sampleAnswer: "Use for loops when processing known collections (like iterating through a dataset or list of predictions). Example: for prediction in model_predictions: process(prediction). Use while loops when you need to repeat until a condition is met (like training until target accuracy is reached). Example: while accuracy < target_accuracy and epoch < max_epochs: train_model()."
      }
    ]
  }
};