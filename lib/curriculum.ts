// lib/curriculum.ts - Updated for Freemium Model

export interface Lesson {
  id: string
  week: number
  day: string
  title: string
  duration: number // minutes
  target: string
  deliverable: string
  passCriteria?: string
  difficulty: number // 1-5
  isPortfolioWorthy: boolean
  locked: boolean
  tier: 'free' | 'intermediate' | 'advanced'
  concepts: string[]
  replitProject?: string
}

export interface Week {
  week: number
  title: string
  focus: string
  tier: 'free' | 'intermediate' | 'advanced'
  lessons: Lesson[]
}

export const SUBSCRIPTION_TIERS = {
  free: {
    name: "Free Explorer",
    price: 0,
    duration: "Forever",
    features: [
      "Weeks 1-8: Python & Web Fundamentals",
      "Basic portfolio projects",
      "Community support",
      "Progress tracking"
    ],
    color: "emerald",
    maxWeek: 8
  },
  intermediate: {
    name: "AI Developer",
    price: 47,
    duration: "per month", 
    features: [
      "Everything in Free",
      "Weeks 9-16: Machine Learning & AI",
      "Advanced portfolio projects",
      "1-on-1 mentorship sessions",
      "Job placement assistance"
    ],
    color: "blue",
    maxWeek: 16
  },
  advanced: {
    name: "AI Engineer Pro",
    price: 97,
    duration: "per month",
    features: [
      "Everything in AI Developer", 
      "Weeks 17-24: Advanced AI & Deployment",
      "Enterprise-level projects",
      "Weekly live coding sessions",
      "Direct industry connections",
      "Lifetime access & updates"
    ],
    color: "purple",
    maxWeek: 24
  }
}

export const curriculum: Week[] = [
  // FREE TIER - Weeks 1-8
  {
    week: 1,
    title: "Python Fundamentals",
    focus: "Core programming concepts and syntax",
    tier: 'free',
    lessons: [
      {
        id: 'w1-mon',
        week: 1,
        day: 'Monday',
        title: 'Python Setup & First Programs',
        duration: 120,
        target: 'Write and run your first Python programs',
        deliverable: 'Personal introduction script with variables',
        difficulty: 1,
        isPortfolioWorthy: false,
        locked: false,
        tier: 'free',
        concepts: ['Variables', 'Print statements', 'Basic input/output'],
        replitProject: 'Python-Fundamentals-Day1'
      },
      {
        id: 'w1-tue',
        week: 1,
        day: 'Tuesday', 
        title: 'Variables & Data Types',
        duration: 90,
        target: 'Master Python data types and variable manipulation',
        deliverable: 'Data type converter program',
        difficulty: 1,
        isPortfolioWorthy: false,
        locked: false,
        tier: 'free',
        concepts: ['Strings', 'Integers', 'Floats', 'Booleans', 'Type conversion'],
        replitProject: 'Variables-DataTypes'
      },
      {
        id: 'w1-wed',
        week: 1,
        day: 'Wednesday',
        title: 'Control Flow: Conditionals',
        duration: 100,
        target: 'Implement decision-making logic in programs', 
        deliverable: 'Interactive decision tree program',
        difficulty: 2,
        isPortfolioWorthy: false,
        locked: false,
        tier: 'free',
        concepts: ['If statements', 'Elif chains', 'Boolean logic', 'Comparison operators'],
        replitProject: 'Control-Flow'
      },
      {
        id: 'w1-thu',
        week: 1,
        day: 'Thursday',
        title: 'Loops & Iteration',
        duration: 110,
        target: 'Automate repetitive tasks with loops',
        deliverable: 'Pattern generator using loops',
        difficulty: 2,
        isPortfolioWorthy: false,
        locked: false,
        tier: 'free',
        concepts: ['For loops', 'While loops', 'Range function', 'Loop control'],
        replitProject: 'Loops-Iteration'
      },
      {
        id: 'w1-fri',
        week: 1,
        day: 'Friday',
        title: 'Functions & Code Organization',
        duration: 130,
        target: 'Create reusable code with functions',
        deliverable: 'Mini calculator with custom functions',
        difficulty: 2,
        isPortfolioWorthy: true,
        locked: false,
        tier: 'free',
        concepts: ['Function definition', 'Parameters', 'Return values', 'Scope'],
        replitProject: 'Functions-CodeOrg'
      }
    ]
  },
  {
    week: 2,
    title: "Data Structures & File Handling", 
    focus: "Working with collections and external data",
    tier: 'free',
    lessons: [
      {
        id: 'w2-mon',
        week: 2,
        day: 'Monday',
        title: 'Lists & List Operations',
        duration: 100,
        target: 'Master dynamic data collections',
        deliverable: 'To-do list manager',
        difficulty: 2,
        isPortfolioWorthy: false,
        locked: false,
        tier: 'free',
        concepts: ['List creation', 'Indexing', 'Slicing', 'List methods'],
        replitProject: 'Lists-Operations'
      },
      {
        id: 'w2-tue',
        week: 2,
        day: 'Tuesday',
        title: 'Dictionaries & Data Mapping',
        duration: 110,
        target: 'Organize data with key-value pairs',
        deliverable: 'Student grade book system',
        difficulty: 2,
        isPortfolioWorthy: false,
        locked: false,
        tier: 'free',
        concepts: ['Dictionary creation', 'Key access', 'Dictionary methods', 'Nested structures'],
        replitProject: 'Dictionaries-Mapping'
      },
      {
        id: 'w2-wed',
        week: 2,
        day: 'Wednesday',
        title: 'File Operations & Data Persistence',
        duration: 120,
        target: 'Read and write data to external files',
        deliverable: 'Personal journal with file storage',
        difficulty: 3,
        isPortfolioWorthy: true,
        locked: false,
        tier: 'free',
        concepts: ['File reading', 'File writing', 'CSV handling', 'Data persistence'],
        replitProject: 'File-Operations'
      },
      {
        id: 'w2-thu',
        week: 2,
        day: 'Thursday',
        title: 'Error Handling & Debugging',
        duration: 90,
        target: 'Write robust code that handles errors gracefully',
        deliverable: 'Error-proof input validator',
        difficulty: 3,
        isPortfolioWorthy: false,
        locked: false,
        tier: 'free',
        concepts: ['Try-except blocks', 'Exception types', 'Debugging techniques', 'Code testing'],
        replitProject: 'Error-Handling'
      },
      {
        id: 'w2-fri',
        week: 2,
        day: 'Friday',
        title: 'Project: Personal Expense Tracker',
        duration: 180,
        target: 'Build a complete application using week\'s concepts',
        deliverable: 'Functional expense tracking application',
        difficulty: 4,
        isPortfolioWorthy: true,
        locked: false,
        tier: 'free',
        concepts: ['Project integration', 'User interface', 'Data persistence', 'Application flow'],
        replitProject: 'Expense-Tracker-Project'
      }
    ]
  },
  {
    week: 3,
    title: "Object-Oriented Programming",
    focus: "Classes, objects, and code structure",
    tier: 'free',
    lessons: [
      {
        id: 'w3-mon',
        week: 3,
        day: 'Monday',
        title: 'Classes & Objects Fundamentals',
        duration: 120,
        target: 'Understand object-oriented programming concepts',
        deliverable: 'Simple bank account class',
        difficulty: 3,
        isPortfolioWorthy: false,
        locked: false,
        tier: 'free',
        concepts: ['Class definition', 'Object instantiation', 'Attributes', 'Methods'],
        replitProject: 'Classes-Objects'
      },
      {
        id: 'w3-tue',
        week: 3,
        day: 'Tuesday',
        title: 'Inheritance & Polymorphism',
        duration: 130,
        target: 'Create class hierarchies and code reuse',
        deliverable: 'Animal class hierarchy',
        difficulty: 3,
        isPortfolioWorthy: false,
        locked: false,
        tier: 'free',
        concepts: ['Inheritance', 'Method overriding', 'Super keyword', 'Polymorphism'],
        replitProject: 'Inheritance-Polymorphism'
      },
      {
        id: 'w3-wed',
        week: 3,
        day: 'Wednesday',
        title: 'Encapsulation & Data Protection',
        duration: 100,
        target: 'Protect and validate object data',
        deliverable: 'Secure user account system',
        difficulty: 3,
        isPortfolioWorthy: false,
        locked: false,
        tier: 'free',
        concepts: ['Private attributes', 'Property decorators', 'Getters/setters', 'Data validation'],
        replitProject: 'Encapsulation-Protection'
      },
      {
        id: 'w3-thu',
        week: 3,
        day: 'Thursday',
        title: 'Special Methods & Operator Overloading',
        duration: 110,
        target: 'Make custom objects behave like built-in types',
        deliverable: 'Custom vector class with operations',
        difficulty: 4,
        isPortfolioWorthy: false,
        locked: false,
        tier: 'free',
        concepts: ['Magic methods', 'String representation', 'Arithmetic operators', 'Comparison operators'],
        replitProject: 'Special-Methods'
      },
      {
        id: 'w3-fri',
        week: 3,
        day: 'Friday',
        title: 'Project: Library Management System',
        duration: 200,
        target: 'Build a complete OOP application',
        deliverable: 'Full library management system',
        difficulty: 4,
        isPortfolioWorthy: true,
        locked: false,
        tier: 'free',
        concepts: ['Multi-class design', 'Object relationships', 'System architecture', 'User interface'],
        replitProject: 'Library-Management'
      }
    ]
  },
  {
    week: 4,
    title: "Web Development with Flask",
    focus: "Building web applications and APIs",
    tier: 'free',
    lessons: [
      {
        id: 'w4-mon',
        week: 4,
        day: 'Monday',
        title: 'Flask Setup & First Web App',
        duration: 120,
        target: 'Create and run your first web application',
        deliverable: 'Personal portfolio website',
        difficulty: 2,
        isPortfolioWorthy: false,
        locked: false,
        tier: 'free',
        concepts: ['Flask installation', 'Routes', 'Templates', 'Static files'],
        replitProject: 'Flask-First-App'
      },
      {
        id: 'w4-tue',
        week: 4,
        day: 'Tuesday',
        title: 'HTML Templates & Dynamic Content',
        duration: 130,
        target: 'Create dynamic web pages with templates',
        deliverable: 'Dynamic blog website',
        difficulty: 3,
        isPortfolioWorthy: false,
        locked: false,
        tier: 'free',
        concepts: ['Jinja2 templates', 'Template inheritance', 'Dynamic content', 'Form handling'],
        replitProject: 'Flask-Templates'
      },
      {
        id: 'w4-wed',
        week: 4,
        day: 'Wednesday',
        title: 'Forms & User Input',
        duration: 110,
        target: 'Handle user input and form submissions',
        deliverable: 'Contact form with validation',
        difficulty: 3,
        isPortfolioWorthy: false,
        locked: false,
        tier: 'free',
        concepts: ['HTML forms', 'Form validation', 'POST requests', 'Flash messages'],
        replitProject: 'Flask-Forms'
      },
      {
        id: 'w4-thu',
        week: 4,
        day: 'Thursday',
        title: 'Database Integration with SQLite',
        duration: 140,
        target: 'Store and retrieve data from databases',
        deliverable: 'User registration system',
        difficulty: 4,
        isPortfolioWorthy: false,
        locked: false,
        tier: 'free',
        concepts: ['SQLite basics', 'Database connections', 'CRUD operations', 'User sessions'],
        replitProject: 'Flask-Database'
      },
      {
        id: 'w4-fri',
        week: 4,
        day: 'Friday',
        title: 'Project: Social Media Platform',
        duration: 240,
        target: 'Build a complete social media application',
        deliverable: 'Mini social media platform',
        difficulty: 5,
        isPortfolioWorthy: true,
        locked: false,
        tier: 'free',
        concepts: ['User authentication', 'Post creation', 'Database design', 'Web security'],
        replitProject: 'Social-Media-Project'
      }
    ]
  },
  {
    week: 5,
    title: "API Development & Integration",
    focus: "Building and consuming web APIs",
    tier: 'free',
    lessons: [
      {
        id: 'w5-mon',
        week: 5,
        day: 'Monday',
        title: 'REST API Fundamentals',
        duration: 120,
        target: 'Understand and build REST APIs',
        deliverable: 'Simple task API',
        difficulty: 3,
        isPortfolioWorthy: false,
        locked: false,
        tier: 'free',
        concepts: ['REST principles', 'HTTP methods', 'JSON responses', 'API endpoints'],
        replitProject: 'REST-API-Basics'
      },
      {
        id: 'w5-tue',
        week: 5,
        day: 'Tuesday',
        title: 'API Authentication & Security',
        duration: 130,
        target: 'Secure your APIs with authentication',
        deliverable: 'Secure user API',
        difficulty: 4,
        isPortfolioWorthy: false,
        locked: false,
        tier: 'free',
        concepts: ['API keys', 'JWT tokens', 'Authentication middleware', 'CORS'],
        replitProject: 'API-Authentication'
      },
      {
        id: 'w5-wed',
        week: 5,
        day: 'Wednesday',
        title: 'Consuming External APIs',
        duration: 110,
        target: 'Integrate third-party APIs into your applications',
        deliverable: 'Weather dashboard app',
        difficulty: 3,
        isPortfolioWorthy: false,
        locked: false,
        tier: 'free',
        concepts: ['HTTP requests', 'API documentation', 'Error handling', 'Rate limiting'],
        replitProject: 'External-APIs'
      },
      {
        id: 'w5-thu',
        week: 5,
        day: 'Thursday',
        title: 'API Testing & Documentation',
        duration: 100,
        target: 'Test and document your APIs professionally',
        deliverable: 'Fully documented API',
        difficulty: 3,
        isPortfolioWorthy: false,
        locked: false,
        tier: 'free',
        concepts: ['Postman testing', 'API documentation', 'Error codes', 'Testing strategies'],
        replitProject: 'API-Testing'
      },
      {
        id: 'w5-fri',
        week: 5,
        day: 'Friday',
        title: 'Project: Recipe Sharing API',
        duration: 200,
        target: 'Build a complete API-driven application',
        deliverable: 'Recipe sharing platform with API',
        difficulty: 5,
        isPortfolioWorthy: true,
        locked: false,
        tier: 'free',
        concepts: ['Full API design', 'Database integration', 'User management', 'Recipe CRUD'],
        replitProject: 'Recipe-API-Project'
      }
    ]
  },
  {
    week: 6,
    title: "Data Science Foundations",
    focus: "Data analysis and visualization",
    tier: 'free',
    lessons: [
      {
        id: 'w6-mon',
        week: 6,
        day: 'Monday',
        title: 'NumPy for Numerical Computing',
        duration: 120,
        target: 'Master numerical operations with NumPy',
        deliverable: 'Statistical analysis tool',
        difficulty: 3,
        isPortfolioWorthy: false,
        locked: false,
        tier: 'free',
        concepts: ['NumPy arrays', 'Mathematical operations', 'Array manipulation', 'Statistical functions'],
        replitProject: 'NumPy-Basics'
      },
      {
        id: 'w6-tue',
        week: 6,
        day: 'Tuesday',
        title: 'Pandas for Data Manipulation',
        duration: 140,
        target: 'Analyze and clean data with Pandas',
        deliverable: 'Sales data analyzer',
        difficulty: 3,
        isPortfolioWorthy: false,
        locked: false,
        tier: 'free',
        concepts: ['DataFrames', 'Data cleaning', 'Filtering', 'Grouping operations'],
        replitProject: 'Pandas-DataManip'
      },
      {
        id: 'w6-wed',
        week: 6,
        day: 'Wednesday',
        title: 'Data Visualization with Matplotlib',
        duration: 130,
        target: 'Create compelling data visualizations',
        deliverable: 'Interactive dashboard',
        difficulty: 3,
        isPortfolioWorthy: false,
        locked: false,
        tier: 'free',
        concepts: ['Charts and plots', 'Customization', 'Subplots', 'Interactive features'],
        replitProject: 'Data-Visualization'
      },
      {
        id: 'w6-thu',
        week: 6,
        day: 'Thursday',
        title: 'Web Scraping & Data Collection',
        duration: 120,
        target: 'Collect data from websites automatically',
        deliverable: 'News scraper application',
        difficulty: 4,
        isPortfolioWorthy: false,
        locked: false,
        tier: 'free',
        concepts: ['BeautifulSoup', 'Web scraping ethics', 'Data extraction', 'Automated collection'],
        replitProject: 'Web-Scraping'
      },
      {
        id: 'w6-fri',
        week: 6,
        day: 'Friday',
        title: 'Project: Stock Market Analyzer',
        duration: 220,
        target: 'Build a complete data analysis application',
        deliverable: 'Stock market analysis dashboard',
        difficulty: 5,
        isPortfolioWorthy: true,
        locked: false,
        tier: 'free',
        concepts: ['Real-time data', 'Technical analysis', 'Data visualization', 'Financial metrics'],
        replitProject: 'Stock-Analyzer-Project'
      }
    ]
  },
  {
    week: 7,
    title: "Database Design & Management",
    focus: "Advanced database concepts and optimization",
    tier: 'free',
    lessons: [
      {
        id: 'w7-mon',
        week: 7,
        day: 'Monday',
        title: 'SQL Fundamentals & Database Design',
        duration: 130,
        target: 'Design efficient database schemas',
        deliverable: 'E-commerce database design',
        difficulty: 3,
        isPortfolioWorthy: false,
        locked: false,
        tier: 'free',
        concepts: ['SQL syntax', 'Database normalization', 'Relationships', 'Primary/foreign keys'],
        replitProject: 'SQL-Fundamentals'
      },
      {
        id: 'w7-tue',
        week: 7,
        day: 'Tuesday',
        title: 'Advanced SQL Queries',
        duration: 120,
        target: 'Write complex database queries',
        deliverable: 'Business intelligence queries',
        difficulty: 4,
        isPortfolioWorthy: false,
        locked: false,
        tier: 'free',
        concepts: ['Joins', 'Subqueries', 'Aggregations', 'Window functions'],
        replitProject: 'Advanced-SQL'
      },
      {
        id: 'w7-wed',
        week: 7,
        day: 'Wednesday',
        title: 'SQLAlchemy ORM',
        duration: 140,
        target: 'Use Object-Relational Mapping for databases',
        deliverable: 'ORM-based application',
        difficulty: 4,
        isPortfolioWorthy: false,
        locked: false,
        tier: 'free',
        concepts: ['ORM concepts', 'Model definitions', 'Relationships', 'Query building'],
        replitProject: 'SQLAlchemy-ORM'
      },
      {
        id: 'w7-thu',
        week: 7,
        day: 'Thursday',
        title: 'Database Optimization & Performance',
        duration: 110,
        target: 'Optimize database performance',
        deliverable: 'Performance optimization report',
        difficulty: 4,
        isPortfolioWorthy: false,
        locked: false,
        tier: 'free',
        concepts: ['Indexing', 'Query optimization', 'Performance monitoring', 'Caching strategies'],
        replitProject: 'DB-Optimization'
      },
      {
        id: 'w7-fri',
        week: 7,
        day: 'Friday',
        title: 'Project: Content Management System',
        duration: 240,
        target: 'Build a database-driven CMS',
        deliverable: 'Full-featured content management system',
        difficulty: 5,
        isPortfolioWorthy: true,
        locked: false,
        tier: 'free',
        concepts: ['Complex schema design', 'User roles', 'Content workflows', 'Database migrations'],
        replitProject: 'CMS-Project'
      }
    ]
  },
  {
    week: 8,
    title: "Deployment & DevOps Basics",
    focus: "Getting applications live and managing deployments",
    tier: 'free',
    lessons: [
      {
        id: 'w8-mon',
        week: 8,
        day: 'Monday',
        title: 'Version Control with Git',
        duration: 120,
        target: 'Master Git for code collaboration',
        deliverable: 'Open source contribution',
        difficulty: 3,
        isPortfolioWorthy: false,
        locked: false,
        tier: 'free',
        concepts: ['Git basics', 'Branching', 'Merging', 'Collaboration workflows'],
        replitProject: 'Git-Version-Control'
      },
      {
        id: 'w8-tue',
        week: 8,
        day: 'Tuesday',
        title: 'Docker Containerization',
        duration: 140,
        target: 'Package applications with Docker',
        deliverable: 'Containerized web application',
        difficulty: 4,
        isPortfolioWorthy: false,
        locked: false,
        tier: 'free',
        concepts: ['Docker basics', 'Dockerfile creation', 'Container management', 'Docker Compose'],
        replitProject: 'Docker-Containers'
      },
      {
        id: 'w8-wed',
        week: 8,
        day: 'Wednesday',
        title: 'Cloud Deployment with Heroku',
        duration: 130,
        target: 'Deploy applications to the cloud',
        deliverable: 'Live web application',
        difficulty: 3,
        isPortfolioWorthy: false,
        locked: false,
        tier: 'free',
        concepts: ['Cloud platforms', 'Deployment pipelines', 'Environment variables', 'Monitoring'],
        replitProject: 'Cloud-Deployment'
      },
      {
        id: 'w8-thu',
        week: 8,
        day: 'Thursday',
        title: 'CI/CD & Automated Testing',
        duration: 120,
        target: 'Implement continuous integration',
        deliverable: 'Automated deployment pipeline',
        difficulty: 4,
        isPortfolioWorthy: false,
        locked: false,
        tier: 'free',
        concepts: ['GitHub Actions', 'Automated testing', 'Deployment automation', 'Quality gates'],
        replitProject: 'CICD-Pipeline'
      },
      {
        id: 'w8-fri',
        week: 8,
        day: 'Friday',
        title: 'Portfolio Capstone Project',
        duration: 300,
        target: 'Complete a full-stack portfolio project',
        deliverable: 'Professional portfolio application',
        difficulty: 5,
        isPortfolioWorthy: true,
        locked: false,
        tier: 'free',
        concepts: ['Full-stack integration', 'Professional deployment', 'Code documentation', 'Portfolio presentation'],
        replitProject: 'Portfolio-Capstone'
      }
    ]
  },
  
  // INTERMEDIATE TIER - Weeks 9-16
  {
    week: 9,
    title: "Introduction to Machine Learning",
    focus: "Data science foundations and ML concepts",
    tier: 'intermediate',
    lessons: [
      {
        id: 'w9-mon',
        week: 9,
        day: 'Monday',
        title: 'ML Fundamentals & Scikit-learn',
        duration: 150,
        target: 'Understand machine learning concepts',
        deliverable: 'First ML prediction model',
        difficulty: 3,
        isPortfolioWorthy: false,
        locked: true,
        tier: 'intermediate',
        concepts: ['ML concepts', 'Scikit-learn', 'Model training', 'Predictions'],
        replitProject: 'ML-Fundamentals'
      },
      {
        id: 'w9-tue',
        week: 9,
        day: 'Tuesday',
        title: 'Supervised Learning: Classification',
        duration: 160,
        target: 'Build classification models',
        deliverable: 'Email spam detector',
        difficulty: 4,
        isPortfolioWorthy: false,
        locked: true,
        tier: 'intermediate',
        concepts: ['Classification algorithms', 'Feature engineering', 'Model evaluation', 'Cross-validation'],
        replitProject: 'Classification-Models'
      },
      {
        id: 'w9-wed',
        week: 9,
        day: 'Wednesday',
        title: 'Supervised Learning: Regression',
        duration: 150,
        target: 'Predict continuous values',
        deliverable: 'House price predictor',
        difficulty: 4,
        isPortfolioWorthy: false,
        locked: true,
        tier: 'intermediate',
        concepts: ['Regression algorithms', 'Linear regression', 'Polynomial features', 'Regularization'],
        replitProject: 'Regression-Models'
      },
      {
        id: 'w9-thu',
        week: 9,
        day: 'Thursday',
        title: 'Unsupervised Learning: Clustering',
        duration: 140,
        target: 'Discover patterns in data',
        deliverable: 'Customer segmentation system',
        difficulty: 4,
        isPortfolioWorthy: false,
        locked: true,
        tier: 'intermediate',
        concepts: ['Clustering algorithms', 'K-means', 'Hierarchical clustering', 'Dimensionality reduction'],
        replitProject: 'Clustering-Analysis'
      },
      {
        id: 'w9-fri',
        week: 9,
        day: 'Friday',
        title: 'Project: Recommendation System',
        duration: 200,
        target: 'Build a complete recommendation engine',
        deliverable: 'Movie recommendation system',
        difficulty: 5,
        isPortfolioWorthy: true,
        locked: true,
        tier: 'intermediate',
        concepts: ['Collaborative filtering', 'Content-based filtering', 'Matrix factorization', 'Evaluation metrics'],
        replitProject: 'Recommendation-System'
      }
    ]
  },
  
  // Continue with more intermediate weeks...
  {
    week: 10,
    title: "Deep Learning Foundations",
    focus: "Neural networks and deep learning basics",
    tier: 'intermediate',
    lessons: [
      {
        id: 'w10-mon',
        week: 10,
        day: 'Monday',
        title: 'Neural Network Fundamentals',
        duration: 160,
        target: 'Understand how neural networks work',
        deliverable: 'Simple neural network from scratch',
        difficulty: 4,
        isPortfolioWorthy: false,
        locked: true,
        tier: 'intermediate',
        concepts: ['Perceptrons', 'Backpropagation', 'Activation functions', 'Gradient descent'],
        replitProject: 'Neural-Networks'
      }
      // ... more lessons for week 10
    ]
  },
  
  // ADVANCED TIER - Weeks 17-24
  {
    week: 17,
    title: "Advanced Deep Learning",
    focus: "Complex neural architectures and applications",
    tier: 'advanced',
    lessons: [
      {
        id: 'w17-mon',
        week: 17,
        day: 'Monday',
        title: 'Convolutional Neural Networks',
        duration: 180,
        target: 'Master computer vision with CNNs',
        deliverable: 'Image classification system',
        difficulty: 5,
        isPortfolioWorthy: true,
        locked: true,
        tier: 'advanced',
        concepts: ['CNN architecture', 'Convolution layers', 'Pooling', 'Transfer learning'],
        replitProject: 'CNN-ImageClassifier'
      }
      // ... more advanced lessons
    ]
  }
]

export function getLessonById(id: string): Lesson | undefined {
  for (const week of curriculum) {
    const lesson = week.lessons.find(lesson => lesson.id === id)
    if (lesson) return lesson
  }
  return undefined
}

export function getWeekById(weekNumber: number): Week | undefined {
  return curriculum.find(week => week.week === weekNumber)
}

export function getAccessibleWeeks(userTier: 'free' | 'intermediate' | 'advanced'): Week[] {
  const maxWeek = SUBSCRIPTION_TIERS[userTier].maxWeek
  return curriculum.filter(week => week.week <= maxWeek)
}

// Missing functions for LessonCard compatibility
export function getLessonsByWeek(weekNumber: number): Lesson[] {
  const week = getWeekById(weekNumber)
  return week ? week.lessons : []
}

export function getCurrentLesson(userTier: 'free' | 'intermediate' | 'advanced' = 'free'): Lesson | null {
  const accessibleWeeks = getAccessibleWeeks(userTier)
  
  for (const week of accessibleWeeks) {
    for (const lesson of week.lessons) {
      if (!lesson.locked) {
        return lesson
      }
    }
  }
  
  return null
}

export function getNextLesson(currentLessonId: string, userTier: 'free' | 'intermediate' | 'advanced' = 'free'): Lesson | null {
  const accessibleWeeks = getAccessibleWeeks(userTier)
  let foundCurrent = false
  
  for (const week of accessibleWeeks) {
    for (const lesson of week.lessons) {
      if (foundCurrent && !lesson.locked) {
        return lesson
      }
      if (lesson.id === currentLessonId) {
        foundCurrent = true
      }
    }
  }
  
  return null
}

export function getWeekProgress(weekNumber: number): { completed: number; total: number; percentage: number } {
  const week = getWeekById(weekNumber)
  if (!week) return { completed: 0, total: 0, percentage: 0 }
  
  const total = week.lessons.length
  const completed = 0
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0
  
  return { completed, total, percentage }
}

