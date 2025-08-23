// AIHero 84-Week Curriculum System
// Generated curriculum structure with systematic content development

export interface Lesson {
  id: string;
  week: number;
  day: string;
  title: string;
  duration: number;
  target: string;
  deliverable: string;
  difficulty: number;
  tier: 'free' | 'intermediate' | 'advanced' | 'professional';
  concepts: string[];
  locked?: boolean;
  isPortfolioWorthy?: boolean;
  replitProject?: string;
  passCriteria?: string;
}

// All 84 weeks × 6 days = 504 lessons
export const allLessons: Lesson[] = [
  {
    "id": "w1-monday",
    "week": 1,
    "day": "Monday",
    "title": "Week 1 Monday: Python Setup & Syntax - Theory & Concepts",
    "duration": 120,
    "target": "Master python setup & syntax through theory & concepts",
    "deliverable": "Theory & Concepts exercise for python setup & syntax",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Python Setup & Syntax fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w1-tuesday",
    "week": 1,
    "day": "Tuesday",
    "title": "Week 1 Tuesday: Python Setup & Syntax - Hands-on Practice",
    "duration": 120,
    "target": "Master python setup & syntax through hands-on practice",
    "deliverable": "Hands-on Practice exercise for python setup & syntax",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Python Setup & Syntax fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w1-wednesday",
    "week": 1,
    "day": "Wednesday",
    "title": "Week 1 Wednesday: Python Setup & Syntax - Real-world Application",
    "duration": 120,
    "target": "Master python setup & syntax through real-world application",
    "deliverable": "Real-world Application exercise for python setup & syntax",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Python Setup & Syntax fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w1-thursday",
    "week": 1,
    "day": "Thursday",
    "title": "Week 1 Thursday: Python Setup & Syntax - Advanced Techniques",
    "duration": 120,
    "target": "Master python setup & syntax through advanced techniques",
    "deliverable": "Advanced Techniques exercise for python setup & syntax",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Python Setup & Syntax fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w1-friday",
    "week": 1,
    "day": "Friday",
    "title": "Week 1 Friday: Python Setup & Syntax - Integration & Testing",
    "duration": 120,
    "target": "Master python setup & syntax through integration & testing",
    "deliverable": "Integration & Testing exercise for python setup & syntax",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Python Setup & Syntax fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w1-saturday",
    "week": 1,
    "day": "Saturday",
    "title": "Week 1 Saturday: Python Setup & Syntax - Project & Portfolio",
    "duration": 180,
    "target": "Master python setup & syntax through project & portfolio",
    "deliverable": "Portfolio project demonstrating python setup & syntax",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Python Setup & Syntax fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w2-monday",
    "week": 2,
    "day": "Monday",
    "title": "Week 2 Monday: Data Types & Variables - Theory & Concepts",
    "duration": 120,
    "target": "Master data types & variables through theory & concepts",
    "deliverable": "Theory & Concepts exercise for data types & variables",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Data Types & Variables fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w2-tuesday",
    "week": 2,
    "day": "Tuesday",
    "title": "Week 2 Tuesday: Data Types & Variables - Hands-on Practice",
    "duration": 120,
    "target": "Master data types & variables through hands-on practice",
    "deliverable": "Hands-on Practice exercise for data types & variables",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Data Types & Variables fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w2-wednesday",
    "week": 2,
    "day": "Wednesday",
    "title": "Week 2 Wednesday: Data Types & Variables - Real-world Application",
    "duration": 120,
    "target": "Master data types & variables through real-world application",
    "deliverable": "Real-world Application exercise for data types & variables",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Data Types & Variables fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w2-thursday",
    "week": 2,
    "day": "Thursday",
    "title": "Week 2 Thursday: Data Types & Variables - Advanced Techniques",
    "duration": 120,
    "target": "Master data types & variables through advanced techniques",
    "deliverable": "Advanced Techniques exercise for data types & variables",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Data Types & Variables fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w2-friday",
    "week": 2,
    "day": "Friday",
    "title": "Week 2 Friday: Data Types & Variables - Integration & Testing",
    "duration": 120,
    "target": "Master data types & variables through integration & testing",
    "deliverable": "Integration & Testing exercise for data types & variables",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Data Types & Variables fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w2-saturday",
    "week": 2,
    "day": "Saturday",
    "title": "Week 2 Saturday: Data Types & Variables - Project & Portfolio",
    "duration": 180,
    "target": "Master data types & variables through project & portfolio",
    "deliverable": "Portfolio project demonstrating data types & variables",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Data Types & Variables fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w3-monday",
    "week": 3,
    "day": "Monday",
    "title": "Week 3 Monday: Control Flow - Theory & Concepts",
    "duration": 120,
    "target": "Master control flow through theory & concepts",
    "deliverable": "Theory & Concepts exercise for control flow",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Control Flow fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w3-tuesday",
    "week": 3,
    "day": "Tuesday",
    "title": "Week 3 Tuesday: Control Flow - Hands-on Practice",
    "duration": 120,
    "target": "Master control flow through hands-on practice",
    "deliverable": "Hands-on Practice exercise for control flow",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Control Flow fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w3-wednesday",
    "week": 3,
    "day": "Wednesday",
    "title": "Week 3 Wednesday: Control Flow - Real-world Application",
    "duration": 120,
    "target": "Master control flow through real-world application",
    "deliverable": "Real-world Application exercise for control flow",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Control Flow fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w3-thursday",
    "week": 3,
    "day": "Thursday",
    "title": "Week 3 Thursday: Control Flow - Advanced Techniques",
    "duration": 120,
    "target": "Master control flow through advanced techniques",
    "deliverable": "Advanced Techniques exercise for control flow",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Control Flow fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w3-friday",
    "week": 3,
    "day": "Friday",
    "title": "Week 3 Friday: Control Flow - Integration & Testing",
    "duration": 120,
    "target": "Master control flow through integration & testing",
    "deliverable": "Integration & Testing exercise for control flow",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Control Flow fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w3-saturday",
    "week": 3,
    "day": "Saturday",
    "title": "Week 3 Saturday: Control Flow - Project & Portfolio",
    "duration": 180,
    "target": "Master control flow through project & portfolio",
    "deliverable": "Portfolio project demonstrating control flow",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Control Flow fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w4-monday",
    "week": 4,
    "day": "Monday",
    "title": "Week 4 Monday: Functions - Theory & Concepts",
    "duration": 120,
    "target": "Master functions through theory & concepts",
    "deliverable": "Theory & Concepts exercise for functions",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Functions fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w4-tuesday",
    "week": 4,
    "day": "Tuesday",
    "title": "Week 4 Tuesday: Functions - Hands-on Practice",
    "duration": 120,
    "target": "Master functions through hands-on practice",
    "deliverable": "Hands-on Practice exercise for functions",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Functions fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w4-wednesday",
    "week": 4,
    "day": "Wednesday",
    "title": "Week 4 Wednesday: Functions - Real-world Application",
    "duration": 120,
    "target": "Master functions through real-world application",
    "deliverable": "Real-world Application exercise for functions",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Functions fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w4-thursday",
    "week": 4,
    "day": "Thursday",
    "title": "Week 4 Thursday: Functions - Advanced Techniques",
    "duration": 120,
    "target": "Master functions through advanced techniques",
    "deliverable": "Advanced Techniques exercise for functions",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Functions fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w4-friday",
    "week": 4,
    "day": "Friday",
    "title": "Week 4 Friday: Functions - Integration & Testing",
    "duration": 120,
    "target": "Master functions through integration & testing",
    "deliverable": "Integration & Testing exercise for functions",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Functions fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w4-saturday",
    "week": 4,
    "day": "Saturday",
    "title": "Week 4 Saturday: Functions - Project & Portfolio",
    "duration": 180,
    "target": "Master functions through project & portfolio",
    "deliverable": "Portfolio project demonstrating functions",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Functions fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w5-monday",
    "week": 5,
    "day": "Monday",
    "title": "Week 5 Monday: Data Structures - Theory & Concepts",
    "duration": 120,
    "target": "Master data structures through theory & concepts",
    "deliverable": "Theory & Concepts exercise for data structures",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Data Structures fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w5-tuesday",
    "week": 5,
    "day": "Tuesday",
    "title": "Week 5 Tuesday: Data Structures - Hands-on Practice",
    "duration": 120,
    "target": "Master data structures through hands-on practice",
    "deliverable": "Hands-on Practice exercise for data structures",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Data Structures fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w5-wednesday",
    "week": 5,
    "day": "Wednesday",
    "title": "Week 5 Wednesday: Data Structures - Real-world Application",
    "duration": 120,
    "target": "Master data structures through real-world application",
    "deliverable": "Real-world Application exercise for data structures",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Data Structures fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w5-thursday",
    "week": 5,
    "day": "Thursday",
    "title": "Week 5 Thursday: Data Structures - Advanced Techniques",
    "duration": 120,
    "target": "Master data structures through advanced techniques",
    "deliverable": "Advanced Techniques exercise for data structures",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Data Structures fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w5-friday",
    "week": 5,
    "day": "Friday",
    "title": "Week 5 Friday: Data Structures - Integration & Testing",
    "duration": 120,
    "target": "Master data structures through integration & testing",
    "deliverable": "Integration & Testing exercise for data structures",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Data Structures fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w5-saturday",
    "week": 5,
    "day": "Saturday",
    "title": "Week 5 Saturday: Data Structures - Project & Portfolio",
    "duration": 180,
    "target": "Master data structures through project & portfolio",
    "deliverable": "Portfolio project demonstrating data structures",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Data Structures fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w6-monday",
    "week": 6,
    "day": "Monday",
    "title": "Week 6 Monday: File I/O - Theory & Concepts",
    "duration": 120,
    "target": "Master file i/o through theory & concepts",
    "deliverable": "Theory & Concepts exercise for file i/o",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "File I/O fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w6-tuesday",
    "week": 6,
    "day": "Tuesday",
    "title": "Week 6 Tuesday: File I/O - Hands-on Practice",
    "duration": 120,
    "target": "Master file i/o through hands-on practice",
    "deliverable": "Hands-on Practice exercise for file i/o",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "File I/O fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w6-wednesday",
    "week": 6,
    "day": "Wednesday",
    "title": "Week 6 Wednesday: File I/O - Real-world Application",
    "duration": 120,
    "target": "Master file i/o through real-world application",
    "deliverable": "Real-world Application exercise for file i/o",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "File I/O fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w6-thursday",
    "week": 6,
    "day": "Thursday",
    "title": "Week 6 Thursday: File I/O - Advanced Techniques",
    "duration": 120,
    "target": "Master file i/o through advanced techniques",
    "deliverable": "Advanced Techniques exercise for file i/o",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "File I/O fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w6-friday",
    "week": 6,
    "day": "Friday",
    "title": "Week 6 Friday: File I/O - Integration & Testing",
    "duration": 120,
    "target": "Master file i/o through integration & testing",
    "deliverable": "Integration & Testing exercise for file i/o",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "File I/O fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w6-saturday",
    "week": 6,
    "day": "Saturday",
    "title": "Week 6 Saturday: File I/O - Project & Portfolio",
    "duration": 180,
    "target": "Master file i/o through project & portfolio",
    "deliverable": "Portfolio project demonstrating file i/o",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "File I/O fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w7-monday",
    "week": 7,
    "day": "Monday",
    "title": "Week 7 Monday: Error Handling - Theory & Concepts",
    "duration": 120,
    "target": "Master error handling through theory & concepts",
    "deliverable": "Theory & Concepts exercise for error handling",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Error Handling fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w7-tuesday",
    "week": 7,
    "day": "Tuesday",
    "title": "Week 7 Tuesday: Error Handling - Hands-on Practice",
    "duration": 120,
    "target": "Master error handling through hands-on practice",
    "deliverable": "Hands-on Practice exercise for error handling",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Error Handling fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w7-wednesday",
    "week": 7,
    "day": "Wednesday",
    "title": "Week 7 Wednesday: Error Handling - Real-world Application",
    "duration": 120,
    "target": "Master error handling through real-world application",
    "deliverable": "Real-world Application exercise for error handling",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Error Handling fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w7-thursday",
    "week": 7,
    "day": "Thursday",
    "title": "Week 7 Thursday: Error Handling - Advanced Techniques",
    "duration": 120,
    "target": "Master error handling through advanced techniques",
    "deliverable": "Advanced Techniques exercise for error handling",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Error Handling fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w7-friday",
    "week": 7,
    "day": "Friday",
    "title": "Week 7 Friday: Error Handling - Integration & Testing",
    "duration": 120,
    "target": "Master error handling through integration & testing",
    "deliverable": "Integration & Testing exercise for error handling",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Error Handling fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w7-saturday",
    "week": 7,
    "day": "Saturday",
    "title": "Week 7 Saturday: Error Handling - Project & Portfolio",
    "duration": 180,
    "target": "Master error handling through project & portfolio",
    "deliverable": "Portfolio project demonstrating error handling",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Error Handling fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w8-monday",
    "week": 8,
    "day": "Monday",
    "title": "Week 8 Monday: OOP Basics - Theory & Concepts",
    "duration": 120,
    "target": "Master oop basics through theory & concepts",
    "deliverable": "Theory & Concepts exercise for oop basics",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "OOP Basics fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w8-tuesday",
    "week": 8,
    "day": "Tuesday",
    "title": "Week 8 Tuesday: OOP Basics - Hands-on Practice",
    "duration": 120,
    "target": "Master oop basics through hands-on practice",
    "deliverable": "Hands-on Practice exercise for oop basics",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "OOP Basics fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w8-wednesday",
    "week": 8,
    "day": "Wednesday",
    "title": "Week 8 Wednesday: OOP Basics - Real-world Application",
    "duration": 120,
    "target": "Master oop basics through real-world application",
    "deliverable": "Real-world Application exercise for oop basics",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "OOP Basics fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w8-thursday",
    "week": 8,
    "day": "Thursday",
    "title": "Week 8 Thursday: OOP Basics - Advanced Techniques",
    "duration": 120,
    "target": "Master oop basics through advanced techniques",
    "deliverable": "Advanced Techniques exercise for oop basics",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "OOP Basics fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w8-friday",
    "week": 8,
    "day": "Friday",
    "title": "Week 8 Friday: OOP Basics - Integration & Testing",
    "duration": 120,
    "target": "Master oop basics through integration & testing",
    "deliverable": "Integration & Testing exercise for oop basics",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "OOP Basics fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w8-saturday",
    "week": 8,
    "day": "Saturday",
    "title": "Week 8 Saturday: OOP Basics - Project & Portfolio",
    "duration": 180,
    "target": "Master oop basics through project & portfolio",
    "deliverable": "Portfolio project demonstrating oop basics",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "OOP Basics fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w9-monday",
    "week": 9,
    "day": "Monday",
    "title": "Week 9 Monday: Modules & Libraries - Theory & Concepts",
    "duration": 120,
    "target": "Master modules & libraries through theory & concepts",
    "deliverable": "Theory & Concepts exercise for modules & libraries",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Modules & Libraries fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w9-tuesday",
    "week": 9,
    "day": "Tuesday",
    "title": "Week 9 Tuesday: Modules & Libraries - Hands-on Practice",
    "duration": 120,
    "target": "Master modules & libraries through hands-on practice",
    "deliverable": "Hands-on Practice exercise for modules & libraries",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Modules & Libraries fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w9-wednesday",
    "week": 9,
    "day": "Wednesday",
    "title": "Week 9 Wednesday: Modules & Libraries - Real-world Application",
    "duration": 120,
    "target": "Master modules & libraries through real-world application",
    "deliverable": "Real-world Application exercise for modules & libraries",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Modules & Libraries fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w9-thursday",
    "week": 9,
    "day": "Thursday",
    "title": "Week 9 Thursday: Modules & Libraries - Advanced Techniques",
    "duration": 120,
    "target": "Master modules & libraries through advanced techniques",
    "deliverable": "Advanced Techniques exercise for modules & libraries",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Modules & Libraries fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w9-friday",
    "week": 9,
    "day": "Friday",
    "title": "Week 9 Friday: Modules & Libraries - Integration & Testing",
    "duration": 120,
    "target": "Master modules & libraries through integration & testing",
    "deliverable": "Integration & Testing exercise for modules & libraries",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Modules & Libraries fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w9-saturday",
    "week": 9,
    "day": "Saturday",
    "title": "Week 9 Saturday: Modules & Libraries - Project & Portfolio",
    "duration": 180,
    "target": "Master modules & libraries through project & portfolio",
    "deliverable": "Portfolio project demonstrating modules & libraries",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Modules & Libraries fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w10-monday",
    "week": 10,
    "day": "Monday",
    "title": "Week 10 Monday: APIs & HTTP - Theory & Concepts",
    "duration": 120,
    "target": "Master apis & http through theory & concepts",
    "deliverable": "Theory & Concepts exercise for apis & http",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "APIs & HTTP fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w10-tuesday",
    "week": 10,
    "day": "Tuesday",
    "title": "Week 10 Tuesday: APIs & HTTP - Hands-on Practice",
    "duration": 120,
    "target": "Master apis & http through hands-on practice",
    "deliverable": "Hands-on Practice exercise for apis & http",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "APIs & HTTP fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w10-wednesday",
    "week": 10,
    "day": "Wednesday",
    "title": "Week 10 Wednesday: APIs & HTTP - Real-world Application",
    "duration": 120,
    "target": "Master apis & http through real-world application",
    "deliverable": "Real-world Application exercise for apis & http",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "APIs & HTTP fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w10-thursday",
    "week": 10,
    "day": "Thursday",
    "title": "Week 10 Thursday: APIs & HTTP - Advanced Techniques",
    "duration": 120,
    "target": "Master apis & http through advanced techniques",
    "deliverable": "Advanced Techniques exercise for apis & http",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "APIs & HTTP fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w10-friday",
    "week": 10,
    "day": "Friday",
    "title": "Week 10 Friday: APIs & HTTP - Integration & Testing",
    "duration": 120,
    "target": "Master apis & http through integration & testing",
    "deliverable": "Integration & Testing exercise for apis & http",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "APIs & HTTP fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w10-saturday",
    "week": 10,
    "day": "Saturday",
    "title": "Week 10 Saturday: APIs & HTTP - Project & Portfolio",
    "duration": 180,
    "target": "Master apis & http through project & portfolio",
    "deliverable": "Portfolio project demonstrating apis & http",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "APIs & HTTP fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w11-monday",
    "week": 11,
    "day": "Monday",
    "title": "Week 11 Monday: Project Development - Theory & Concepts",
    "duration": 120,
    "target": "Master project development through theory & concepts",
    "deliverable": "Theory & Concepts exercise for project development",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Project Development fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w11-tuesday",
    "week": 11,
    "day": "Tuesday",
    "title": "Week 11 Tuesday: Project Development - Hands-on Practice",
    "duration": 120,
    "target": "Master project development through hands-on practice",
    "deliverable": "Hands-on Practice exercise for project development",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Project Development fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w11-wednesday",
    "week": 11,
    "day": "Wednesday",
    "title": "Week 11 Wednesday: Project Development - Real-world Application",
    "duration": 120,
    "target": "Master project development through real-world application",
    "deliverable": "Real-world Application exercise for project development",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Project Development fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w11-thursday",
    "week": 11,
    "day": "Thursday",
    "title": "Week 11 Thursday: Project Development - Advanced Techniques",
    "duration": 120,
    "target": "Master project development through advanced techniques",
    "deliverable": "Advanced Techniques exercise for project development",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Project Development fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w11-friday",
    "week": 11,
    "day": "Friday",
    "title": "Week 11 Friday: Project Development - Integration & Testing",
    "duration": 120,
    "target": "Master project development through integration & testing",
    "deliverable": "Integration & Testing exercise for project development",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Project Development fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w11-saturday",
    "week": 11,
    "day": "Saturday",
    "title": "Week 11 Saturday: Project Development - Project & Portfolio",
    "duration": 180,
    "target": "Master project development through project & portfolio",
    "deliverable": "Portfolio project demonstrating project development",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Project Development fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w12-monday",
    "week": 12,
    "day": "Monday",
    "title": "Week 12 Monday: Code Quality - Theory & Concepts",
    "duration": 120,
    "target": "Master code quality through theory & concepts",
    "deliverable": "Theory & Concepts exercise for code quality",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Code Quality fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w12-tuesday",
    "week": 12,
    "day": "Tuesday",
    "title": "Week 12 Tuesday: Code Quality - Hands-on Practice",
    "duration": 120,
    "target": "Master code quality through hands-on practice",
    "deliverable": "Hands-on Practice exercise for code quality",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Code Quality fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w12-wednesday",
    "week": 12,
    "day": "Wednesday",
    "title": "Week 12 Wednesday: Code Quality - Real-world Application",
    "duration": 120,
    "target": "Master code quality through real-world application",
    "deliverable": "Real-world Application exercise for code quality",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Code Quality fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w12-thursday",
    "week": 12,
    "day": "Thursday",
    "title": "Week 12 Thursday: Code Quality - Advanced Techniques",
    "duration": 120,
    "target": "Master code quality through advanced techniques",
    "deliverable": "Advanced Techniques exercise for code quality",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Code Quality fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w12-friday",
    "week": 12,
    "day": "Friday",
    "title": "Week 12 Friday: Code Quality - Integration & Testing",
    "duration": 120,
    "target": "Master code quality through integration & testing",
    "deliverable": "Integration & Testing exercise for code quality",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Code Quality fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w12-saturday",
    "week": 12,
    "day": "Saturday",
    "title": "Week 12 Saturday: Code Quality - Project & Portfolio",
    "duration": 180,
    "target": "Master code quality through project & portfolio",
    "deliverable": "Portfolio project demonstrating code quality",
    "difficulty": 1,
    "tier": "free",
    "concepts": [
      "Code Quality fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": false,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w13-monday",
    "week": 13,
    "day": "Monday",
    "title": "Week 13 Monday: HTML/CSS Basics - Theory & Concepts",
    "duration": 120,
    "target": "Master html/css basics through theory & concepts",
    "deliverable": "Theory & Concepts exercise for html/css basics",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "HTML/CSS Basics fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w13-tuesday",
    "week": 13,
    "day": "Tuesday",
    "title": "Week 13 Tuesday: HTML/CSS Basics - Hands-on Practice",
    "duration": 120,
    "target": "Master html/css basics through hands-on practice",
    "deliverable": "Hands-on Practice exercise for html/css basics",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "HTML/CSS Basics fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w13-wednesday",
    "week": 13,
    "day": "Wednesday",
    "title": "Week 13 Wednesday: HTML/CSS Basics - Real-world Application",
    "duration": 120,
    "target": "Master html/css basics through real-world application",
    "deliverable": "Real-world Application exercise for html/css basics",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "HTML/CSS Basics fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w13-thursday",
    "week": 13,
    "day": "Thursday",
    "title": "Week 13 Thursday: HTML/CSS Basics - Advanced Techniques",
    "duration": 120,
    "target": "Master html/css basics through advanced techniques",
    "deliverable": "Advanced Techniques exercise for html/css basics",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "HTML/CSS Basics fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w13-friday",
    "week": 13,
    "day": "Friday",
    "title": "Week 13 Friday: HTML/CSS Basics - Integration & Testing",
    "duration": 120,
    "target": "Master html/css basics through integration & testing",
    "deliverable": "Integration & Testing exercise for html/css basics",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "HTML/CSS Basics fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w13-saturday",
    "week": 13,
    "day": "Saturday",
    "title": "Week 13 Saturday: HTML/CSS Basics - Project & Portfolio",
    "duration": 180,
    "target": "Master html/css basics through project & portfolio",
    "deliverable": "Portfolio project demonstrating html/css basics",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "HTML/CSS Basics fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w14-monday",
    "week": 14,
    "day": "Monday",
    "title": "Week 14 Monday: JavaScript Fundamentals - Theory & Concepts",
    "duration": 120,
    "target": "Master javascript fundamentals through theory & concepts",
    "deliverable": "Theory & Concepts exercise for javascript fundamentals",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "JavaScript Fundamentals fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w14-tuesday",
    "week": 14,
    "day": "Tuesday",
    "title": "Week 14 Tuesday: JavaScript Fundamentals - Hands-on Practice",
    "duration": 120,
    "target": "Master javascript fundamentals through hands-on practice",
    "deliverable": "Hands-on Practice exercise for javascript fundamentals",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "JavaScript Fundamentals fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w14-wednesday",
    "week": 14,
    "day": "Wednesday",
    "title": "Week 14 Wednesday: JavaScript Fundamentals - Real-world Application",
    "duration": 120,
    "target": "Master javascript fundamentals through real-world application",
    "deliverable": "Real-world Application exercise for javascript fundamentals",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "JavaScript Fundamentals fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w14-thursday",
    "week": 14,
    "day": "Thursday",
    "title": "Week 14 Thursday: JavaScript Fundamentals - Advanced Techniques",
    "duration": 120,
    "target": "Master javascript fundamentals through advanced techniques",
    "deliverable": "Advanced Techniques exercise for javascript fundamentals",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "JavaScript Fundamentals fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w14-friday",
    "week": 14,
    "day": "Friday",
    "title": "Week 14 Friday: JavaScript Fundamentals - Integration & Testing",
    "duration": 120,
    "target": "Master javascript fundamentals through integration & testing",
    "deliverable": "Integration & Testing exercise for javascript fundamentals",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "JavaScript Fundamentals fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w14-saturday",
    "week": 14,
    "day": "Saturday",
    "title": "Week 14 Saturday: JavaScript Fundamentals - Project & Portfolio",
    "duration": 180,
    "target": "Master javascript fundamentals through project & portfolio",
    "deliverable": "Portfolio project demonstrating javascript fundamentals",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "JavaScript Fundamentals fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w15-monday",
    "week": 15,
    "day": "Monday",
    "title": "Week 15 Monday: Web APIs - Theory & Concepts",
    "duration": 120,
    "target": "Master web apis through theory & concepts",
    "deliverable": "Theory & Concepts exercise for web apis",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Web APIs fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w15-tuesday",
    "week": 15,
    "day": "Tuesday",
    "title": "Week 15 Tuesday: Web APIs - Hands-on Practice",
    "duration": 120,
    "target": "Master web apis through hands-on practice",
    "deliverable": "Hands-on Practice exercise for web apis",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Web APIs fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w15-wednesday",
    "week": 15,
    "day": "Wednesday",
    "title": "Week 15 Wednesday: Web APIs - Real-world Application",
    "duration": 120,
    "target": "Master web apis through real-world application",
    "deliverable": "Real-world Application exercise for web apis",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Web APIs fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w15-thursday",
    "week": 15,
    "day": "Thursday",
    "title": "Week 15 Thursday: Web APIs - Advanced Techniques",
    "duration": 120,
    "target": "Master web apis through advanced techniques",
    "deliverable": "Advanced Techniques exercise for web apis",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Web APIs fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w15-friday",
    "week": 15,
    "day": "Friday",
    "title": "Week 15 Friday: Web APIs - Integration & Testing",
    "duration": 120,
    "target": "Master web apis through integration & testing",
    "deliverable": "Integration & Testing exercise for web apis",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Web APIs fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w15-saturday",
    "week": 15,
    "day": "Saturday",
    "title": "Week 15 Saturday: Web APIs - Project & Portfolio",
    "duration": 180,
    "target": "Master web apis through project & portfolio",
    "deliverable": "Portfolio project demonstrating web apis",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Web APIs fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w16-monday",
    "week": 16,
    "day": "Monday",
    "title": "Week 16 Monday: Database Basics - Theory & Concepts",
    "duration": 120,
    "target": "Master database basics through theory & concepts",
    "deliverable": "Theory & Concepts exercise for database basics",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Database Basics fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w16-tuesday",
    "week": 16,
    "day": "Tuesday",
    "title": "Week 16 Tuesday: Database Basics - Hands-on Practice",
    "duration": 120,
    "target": "Master database basics through hands-on practice",
    "deliverable": "Hands-on Practice exercise for database basics",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Database Basics fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w16-wednesday",
    "week": 16,
    "day": "Wednesday",
    "title": "Week 16 Wednesday: Database Basics - Real-world Application",
    "duration": 120,
    "target": "Master database basics through real-world application",
    "deliverable": "Real-world Application exercise for database basics",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Database Basics fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w16-thursday",
    "week": 16,
    "day": "Thursday",
    "title": "Week 16 Thursday: Database Basics - Advanced Techniques",
    "duration": 120,
    "target": "Master database basics through advanced techniques",
    "deliverable": "Advanced Techniques exercise for database basics",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Database Basics fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w16-friday",
    "week": 16,
    "day": "Friday",
    "title": "Week 16 Friday: Database Basics - Integration & Testing",
    "duration": 120,
    "target": "Master database basics through integration & testing",
    "deliverable": "Integration & Testing exercise for database basics",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Database Basics fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w16-saturday",
    "week": 16,
    "day": "Saturday",
    "title": "Week 16 Saturday: Database Basics - Project & Portfolio",
    "duration": 180,
    "target": "Master database basics through project & portfolio",
    "deliverable": "Portfolio project demonstrating database basics",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Database Basics fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w17-monday",
    "week": 17,
    "day": "Monday",
    "title": "Week 17 Monday: NumPy & Arrays - Theory & Concepts",
    "duration": 120,
    "target": "Master numpy & arrays through theory & concepts",
    "deliverable": "Theory & Concepts exercise for numpy & arrays",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "NumPy & Arrays fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w17-tuesday",
    "week": 17,
    "day": "Tuesday",
    "title": "Week 17 Tuesday: NumPy & Arrays - Hands-on Practice",
    "duration": 120,
    "target": "Master numpy & arrays through hands-on practice",
    "deliverable": "Hands-on Practice exercise for numpy & arrays",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "NumPy & Arrays fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w17-wednesday",
    "week": 17,
    "day": "Wednesday",
    "title": "Week 17 Wednesday: NumPy & Arrays - Real-world Application",
    "duration": 120,
    "target": "Master numpy & arrays through real-world application",
    "deliverable": "Real-world Application exercise for numpy & arrays",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "NumPy & Arrays fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w17-thursday",
    "week": 17,
    "day": "Thursday",
    "title": "Week 17 Thursday: NumPy & Arrays - Advanced Techniques",
    "duration": 120,
    "target": "Master numpy & arrays through advanced techniques",
    "deliverable": "Advanced Techniques exercise for numpy & arrays",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "NumPy & Arrays fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w17-friday",
    "week": 17,
    "day": "Friday",
    "title": "Week 17 Friday: NumPy & Arrays - Integration & Testing",
    "duration": 120,
    "target": "Master numpy & arrays through integration & testing",
    "deliverable": "Integration & Testing exercise for numpy & arrays",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "NumPy & Arrays fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w17-saturday",
    "week": 17,
    "day": "Saturday",
    "title": "Week 17 Saturday: NumPy & Arrays - Project & Portfolio",
    "duration": 180,
    "target": "Master numpy & arrays through project & portfolio",
    "deliverable": "Portfolio project demonstrating numpy & arrays",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "NumPy & Arrays fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w18-monday",
    "week": 18,
    "day": "Monday",
    "title": "Week 18 Monday: Pandas & DataFrames - Theory & Concepts",
    "duration": 120,
    "target": "Master pandas & dataframes through theory & concepts",
    "deliverable": "Theory & Concepts exercise for pandas & dataframes",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Pandas & DataFrames fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w18-tuesday",
    "week": 18,
    "day": "Tuesday",
    "title": "Week 18 Tuesday: Pandas & DataFrames - Hands-on Practice",
    "duration": 120,
    "target": "Master pandas & dataframes through hands-on practice",
    "deliverable": "Hands-on Practice exercise for pandas & dataframes",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Pandas & DataFrames fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w18-wednesday",
    "week": 18,
    "day": "Wednesday",
    "title": "Week 18 Wednesday: Pandas & DataFrames - Real-world Application",
    "duration": 120,
    "target": "Master pandas & dataframes through real-world application",
    "deliverable": "Real-world Application exercise for pandas & dataframes",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Pandas & DataFrames fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w18-thursday",
    "week": 18,
    "day": "Thursday",
    "title": "Week 18 Thursday: Pandas & DataFrames - Advanced Techniques",
    "duration": 120,
    "target": "Master pandas & dataframes through advanced techniques",
    "deliverable": "Advanced Techniques exercise for pandas & dataframes",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Pandas & DataFrames fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w18-friday",
    "week": 18,
    "day": "Friday",
    "title": "Week 18 Friday: Pandas & DataFrames - Integration & Testing",
    "duration": 120,
    "target": "Master pandas & dataframes through integration & testing",
    "deliverable": "Integration & Testing exercise for pandas & dataframes",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Pandas & DataFrames fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w18-saturday",
    "week": 18,
    "day": "Saturday",
    "title": "Week 18 Saturday: Pandas & DataFrames - Project & Portfolio",
    "duration": 180,
    "target": "Master pandas & dataframes through project & portfolio",
    "deliverable": "Portfolio project demonstrating pandas & dataframes",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Pandas & DataFrames fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w19-monday",
    "week": 19,
    "day": "Monday",
    "title": "Week 19 Monday: Data Visualization - Theory & Concepts",
    "duration": 120,
    "target": "Master data visualization through theory & concepts",
    "deliverable": "Theory & Concepts exercise for data visualization",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Data Visualization fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w19-tuesday",
    "week": 19,
    "day": "Tuesday",
    "title": "Week 19 Tuesday: Data Visualization - Hands-on Practice",
    "duration": 120,
    "target": "Master data visualization through hands-on practice",
    "deliverable": "Hands-on Practice exercise for data visualization",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Data Visualization fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w19-wednesday",
    "week": 19,
    "day": "Wednesday",
    "title": "Week 19 Wednesday: Data Visualization - Real-world Application",
    "duration": 120,
    "target": "Master data visualization through real-world application",
    "deliverable": "Real-world Application exercise for data visualization",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Data Visualization fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w19-thursday",
    "week": 19,
    "day": "Thursday",
    "title": "Week 19 Thursday: Data Visualization - Advanced Techniques",
    "duration": 120,
    "target": "Master data visualization through advanced techniques",
    "deliverable": "Advanced Techniques exercise for data visualization",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Data Visualization fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w19-friday",
    "week": 19,
    "day": "Friday",
    "title": "Week 19 Friday: Data Visualization - Integration & Testing",
    "duration": 120,
    "target": "Master data visualization through integration & testing",
    "deliverable": "Integration & Testing exercise for data visualization",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Data Visualization fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w19-saturday",
    "week": 19,
    "day": "Saturday",
    "title": "Week 19 Saturday: Data Visualization - Project & Portfolio",
    "duration": 180,
    "target": "Master data visualization through project & portfolio",
    "deliverable": "Portfolio project demonstrating data visualization",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Data Visualization fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w20-monday",
    "week": 20,
    "day": "Monday",
    "title": "Week 20 Monday: Web Scraping - Theory & Concepts",
    "duration": 120,
    "target": "Master web scraping through theory & concepts",
    "deliverable": "Theory & Concepts exercise for web scraping",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Web Scraping fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w20-tuesday",
    "week": 20,
    "day": "Tuesday",
    "title": "Week 20 Tuesday: Web Scraping - Hands-on Practice",
    "duration": 120,
    "target": "Master web scraping through hands-on practice",
    "deliverable": "Hands-on Practice exercise for web scraping",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Web Scraping fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w20-wednesday",
    "week": 20,
    "day": "Wednesday",
    "title": "Week 20 Wednesday: Web Scraping - Real-world Application",
    "duration": 120,
    "target": "Master web scraping through real-world application",
    "deliverable": "Real-world Application exercise for web scraping",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Web Scraping fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w20-thursday",
    "week": 20,
    "day": "Thursday",
    "title": "Week 20 Thursday: Web Scraping - Advanced Techniques",
    "duration": 120,
    "target": "Master web scraping through advanced techniques",
    "deliverable": "Advanced Techniques exercise for web scraping",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Web Scraping fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w20-friday",
    "week": 20,
    "day": "Friday",
    "title": "Week 20 Friday: Web Scraping - Integration & Testing",
    "duration": 120,
    "target": "Master web scraping through integration & testing",
    "deliverable": "Integration & Testing exercise for web scraping",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Web Scraping fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w20-saturday",
    "week": 20,
    "day": "Saturday",
    "title": "Week 20 Saturday: Web Scraping - Project & Portfolio",
    "duration": 180,
    "target": "Master web scraping through project & portfolio",
    "deliverable": "Portfolio project demonstrating web scraping",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Web Scraping fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w21-monday",
    "week": 21,
    "day": "Monday",
    "title": "Week 21 Monday: REST APIs - Theory & Concepts",
    "duration": 120,
    "target": "Master rest apis through theory & concepts",
    "deliverable": "Theory & Concepts exercise for rest apis",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "REST APIs fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w21-tuesday",
    "week": 21,
    "day": "Tuesday",
    "title": "Week 21 Tuesday: REST APIs - Hands-on Practice",
    "duration": 120,
    "target": "Master rest apis through hands-on practice",
    "deliverable": "Hands-on Practice exercise for rest apis",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "REST APIs fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w21-wednesday",
    "week": 21,
    "day": "Wednesday",
    "title": "Week 21 Wednesday: REST APIs - Real-world Application",
    "duration": 120,
    "target": "Master rest apis through real-world application",
    "deliverable": "Real-world Application exercise for rest apis",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "REST APIs fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w21-thursday",
    "week": 21,
    "day": "Thursday",
    "title": "Week 21 Thursday: REST APIs - Advanced Techniques",
    "duration": 120,
    "target": "Master rest apis through advanced techniques",
    "deliverable": "Advanced Techniques exercise for rest apis",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "REST APIs fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w21-friday",
    "week": 21,
    "day": "Friday",
    "title": "Week 21 Friday: REST APIs - Integration & Testing",
    "duration": 120,
    "target": "Master rest apis through integration & testing",
    "deliverable": "Integration & Testing exercise for rest apis",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "REST APIs fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w21-saturday",
    "week": 21,
    "day": "Saturday",
    "title": "Week 21 Saturday: REST APIs - Project & Portfolio",
    "duration": 180,
    "target": "Master rest apis through project & portfolio",
    "deliverable": "Portfolio project demonstrating rest apis",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "REST APIs fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w22-monday",
    "week": 22,
    "day": "Monday",
    "title": "Week 22 Monday: Authentication - Theory & Concepts",
    "duration": 120,
    "target": "Master authentication through theory & concepts",
    "deliverable": "Theory & Concepts exercise for authentication",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Authentication fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w22-tuesday",
    "week": 22,
    "day": "Tuesday",
    "title": "Week 22 Tuesday: Authentication - Hands-on Practice",
    "duration": 120,
    "target": "Master authentication through hands-on practice",
    "deliverable": "Hands-on Practice exercise for authentication",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Authentication fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w22-wednesday",
    "week": 22,
    "day": "Wednesday",
    "title": "Week 22 Wednesday: Authentication - Real-world Application",
    "duration": 120,
    "target": "Master authentication through real-world application",
    "deliverable": "Real-world Application exercise for authentication",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Authentication fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w22-thursday",
    "week": 22,
    "day": "Thursday",
    "title": "Week 22 Thursday: Authentication - Advanced Techniques",
    "duration": 120,
    "target": "Master authentication through advanced techniques",
    "deliverable": "Advanced Techniques exercise for authentication",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Authentication fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w22-friday",
    "week": 22,
    "day": "Friday",
    "title": "Week 22 Friday: Authentication - Integration & Testing",
    "duration": 120,
    "target": "Master authentication through integration & testing",
    "deliverable": "Integration & Testing exercise for authentication",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Authentication fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w22-saturday",
    "week": 22,
    "day": "Saturday",
    "title": "Week 22 Saturday: Authentication - Project & Portfolio",
    "duration": 180,
    "target": "Master authentication through project & portfolio",
    "deliverable": "Portfolio project demonstrating authentication",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Authentication fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w23-monday",
    "week": 23,
    "day": "Monday",
    "title": "Week 23 Monday: Deployment - Theory & Concepts",
    "duration": 120,
    "target": "Master deployment through theory & concepts",
    "deliverable": "Theory & Concepts exercise for deployment",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Deployment fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w23-tuesday",
    "week": 23,
    "day": "Tuesday",
    "title": "Week 23 Tuesday: Deployment - Hands-on Practice",
    "duration": 120,
    "target": "Master deployment through hands-on practice",
    "deliverable": "Hands-on Practice exercise for deployment",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Deployment fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w23-wednesday",
    "week": 23,
    "day": "Wednesday",
    "title": "Week 23 Wednesday: Deployment - Real-world Application",
    "duration": 120,
    "target": "Master deployment through real-world application",
    "deliverable": "Real-world Application exercise for deployment",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Deployment fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w23-thursday",
    "week": 23,
    "day": "Thursday",
    "title": "Week 23 Thursday: Deployment - Advanced Techniques",
    "duration": 120,
    "target": "Master deployment through advanced techniques",
    "deliverable": "Advanced Techniques exercise for deployment",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Deployment fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w23-friday",
    "week": 23,
    "day": "Friday",
    "title": "Week 23 Friday: Deployment - Integration & Testing",
    "duration": 120,
    "target": "Master deployment through integration & testing",
    "deliverable": "Integration & Testing exercise for deployment",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Deployment fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w23-saturday",
    "week": 23,
    "day": "Saturday",
    "title": "Week 23 Saturday: Deployment - Project & Portfolio",
    "duration": 180,
    "target": "Master deployment through project & portfolio",
    "deliverable": "Portfolio project demonstrating deployment",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Deployment fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w24-monday",
    "week": 24,
    "day": "Monday",
    "title": "Week 24 Monday: Testing - Theory & Concepts",
    "duration": 120,
    "target": "Master testing through theory & concepts",
    "deliverable": "Theory & Concepts exercise for testing",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Testing fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w24-tuesday",
    "week": 24,
    "day": "Tuesday",
    "title": "Week 24 Tuesday: Testing - Hands-on Practice",
    "duration": 120,
    "target": "Master testing through hands-on practice",
    "deliverable": "Hands-on Practice exercise for testing",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Testing fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w24-wednesday",
    "week": 24,
    "day": "Wednesday",
    "title": "Week 24 Wednesday: Testing - Real-world Application",
    "duration": 120,
    "target": "Master testing through real-world application",
    "deliverable": "Real-world Application exercise for testing",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Testing fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w24-thursday",
    "week": 24,
    "day": "Thursday",
    "title": "Week 24 Thursday: Testing - Advanced Techniques",
    "duration": 120,
    "target": "Master testing through advanced techniques",
    "deliverable": "Advanced Techniques exercise for testing",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Testing fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w24-friday",
    "week": 24,
    "day": "Friday",
    "title": "Week 24 Friday: Testing - Integration & Testing",
    "duration": 120,
    "target": "Master testing through integration & testing",
    "deliverable": "Integration & Testing exercise for testing",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Testing fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w24-saturday",
    "week": 24,
    "day": "Saturday",
    "title": "Week 24 Saturday: Testing - Project & Portfolio",
    "duration": 180,
    "target": "Master testing through project & portfolio",
    "deliverable": "Portfolio project demonstrating testing",
    "difficulty": 2,
    "tier": "intermediate",
    "concepts": [
      "Testing fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w25-monday",
    "week": 25,
    "day": "Monday",
    "title": "Week 25 Monday: Git & Version Control - Theory & Concepts",
    "duration": 120,
    "target": "Master git & version control through theory & concepts",
    "deliverable": "Theory & Concepts exercise for git & version control",
    "difficulty": 3,
    "tier": "intermediate",
    "concepts": [
      "Git & Version Control fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w25-tuesday",
    "week": 25,
    "day": "Tuesday",
    "title": "Week 25 Tuesday: Git & Version Control - Hands-on Practice",
    "duration": 120,
    "target": "Master git & version control through hands-on practice",
    "deliverable": "Hands-on Practice exercise for git & version control",
    "difficulty": 3,
    "tier": "intermediate",
    "concepts": [
      "Git & Version Control fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w25-wednesday",
    "week": 25,
    "day": "Wednesday",
    "title": "Week 25 Wednesday: Git & Version Control - Real-world Application",
    "duration": 120,
    "target": "Master git & version control through real-world application",
    "deliverable": "Real-world Application exercise for git & version control",
    "difficulty": 3,
    "tier": "intermediate",
    "concepts": [
      "Git & Version Control fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w25-thursday",
    "week": 25,
    "day": "Thursday",
    "title": "Week 25 Thursday: Git & Version Control - Advanced Techniques",
    "duration": 120,
    "target": "Master git & version control through advanced techniques",
    "deliverable": "Advanced Techniques exercise for git & version control",
    "difficulty": 3,
    "tier": "intermediate",
    "concepts": [
      "Git & Version Control fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w25-friday",
    "week": 25,
    "day": "Friday",
    "title": "Week 25 Friday: Git & Version Control - Integration & Testing",
    "duration": 120,
    "target": "Master git & version control through integration & testing",
    "deliverable": "Integration & Testing exercise for git & version control",
    "difficulty": 3,
    "tier": "intermediate",
    "concepts": [
      "Git & Version Control fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w25-saturday",
    "week": 25,
    "day": "Saturday",
    "title": "Week 25 Saturday: Git & Version Control - Project & Portfolio",
    "duration": 180,
    "target": "Master git & version control through project & portfolio",
    "deliverable": "Portfolio project demonstrating git & version control",
    "difficulty": 3,
    "tier": "intermediate",
    "concepts": [
      "Git & Version Control fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w26-monday",
    "week": 26,
    "day": "Monday",
    "title": "Week 26 Monday: Project Management - Theory & Concepts",
    "duration": 120,
    "target": "Master project management through theory & concepts",
    "deliverable": "Theory & Concepts exercise for project management",
    "difficulty": 3,
    "tier": "intermediate",
    "concepts": [
      "Project Management fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w26-tuesday",
    "week": 26,
    "day": "Tuesday",
    "title": "Week 26 Tuesday: Project Management - Hands-on Practice",
    "duration": 120,
    "target": "Master project management through hands-on practice",
    "deliverable": "Hands-on Practice exercise for project management",
    "difficulty": 3,
    "tier": "intermediate",
    "concepts": [
      "Project Management fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w26-wednesday",
    "week": 26,
    "day": "Wednesday",
    "title": "Week 26 Wednesday: Project Management - Real-world Application",
    "duration": 120,
    "target": "Master project management through real-world application",
    "deliverable": "Real-world Application exercise for project management",
    "difficulty": 3,
    "tier": "intermediate",
    "concepts": [
      "Project Management fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w26-thursday",
    "week": 26,
    "day": "Thursday",
    "title": "Week 26 Thursday: Project Management - Advanced Techniques",
    "duration": 120,
    "target": "Master project management through advanced techniques",
    "deliverable": "Advanced Techniques exercise for project management",
    "difficulty": 3,
    "tier": "intermediate",
    "concepts": [
      "Project Management fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w26-friday",
    "week": 26,
    "day": "Friday",
    "title": "Week 26 Friday: Project Management - Integration & Testing",
    "duration": 120,
    "target": "Master project management through integration & testing",
    "deliverable": "Integration & Testing exercise for project management",
    "difficulty": 3,
    "tier": "intermediate",
    "concepts": [
      "Project Management fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w26-saturday",
    "week": 26,
    "day": "Saturday",
    "title": "Week 26 Saturday: Project Management - Project & Portfolio",
    "duration": 180,
    "target": "Master project management through project & portfolio",
    "deliverable": "Portfolio project demonstrating project management",
    "difficulty": 3,
    "tier": "intermediate",
    "concepts": [
      "Project Management fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w27-monday",
    "week": 27,
    "day": "Monday",
    "title": "Week 27 Monday: Portfolio Building - Theory & Concepts",
    "duration": 120,
    "target": "Master portfolio building through theory & concepts",
    "deliverable": "Theory & Concepts exercise for portfolio building",
    "difficulty": 3,
    "tier": "intermediate",
    "concepts": [
      "Portfolio Building fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w27-tuesday",
    "week": 27,
    "day": "Tuesday",
    "title": "Week 27 Tuesday: Portfolio Building - Hands-on Practice",
    "duration": 120,
    "target": "Master portfolio building through hands-on practice",
    "deliverable": "Hands-on Practice exercise for portfolio building",
    "difficulty": 3,
    "tier": "intermediate",
    "concepts": [
      "Portfolio Building fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w27-wednesday",
    "week": 27,
    "day": "Wednesday",
    "title": "Week 27 Wednesday: Portfolio Building - Real-world Application",
    "duration": 120,
    "target": "Master portfolio building through real-world application",
    "deliverable": "Real-world Application exercise for portfolio building",
    "difficulty": 3,
    "tier": "intermediate",
    "concepts": [
      "Portfolio Building fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w27-thursday",
    "week": 27,
    "day": "Thursday",
    "title": "Week 27 Thursday: Portfolio Building - Advanced Techniques",
    "duration": 120,
    "target": "Master portfolio building through advanced techniques",
    "deliverable": "Advanced Techniques exercise for portfolio building",
    "difficulty": 3,
    "tier": "intermediate",
    "concepts": [
      "Portfolio Building fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w27-friday",
    "week": 27,
    "day": "Friday",
    "title": "Week 27 Friday: Portfolio Building - Integration & Testing",
    "duration": 120,
    "target": "Master portfolio building through integration & testing",
    "deliverable": "Integration & Testing exercise for portfolio building",
    "difficulty": 3,
    "tier": "intermediate",
    "concepts": [
      "Portfolio Building fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w27-saturday",
    "week": 27,
    "day": "Saturday",
    "title": "Week 27 Saturday: Portfolio Building - Project & Portfolio",
    "duration": 180,
    "target": "Master portfolio building through project & portfolio",
    "deliverable": "Portfolio project demonstrating portfolio building",
    "difficulty": 3,
    "tier": "intermediate",
    "concepts": [
      "Portfolio Building fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w28-monday",
    "week": 28,
    "day": "Monday",
    "title": "Week 28 Monday: Career Skills - Theory & Concepts",
    "duration": 120,
    "target": "Master career skills through theory & concepts",
    "deliverable": "Theory & Concepts exercise for career skills",
    "difficulty": 3,
    "tier": "intermediate",
    "concepts": [
      "Career Skills fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w28-tuesday",
    "week": 28,
    "day": "Tuesday",
    "title": "Week 28 Tuesday: Career Skills - Hands-on Practice",
    "duration": 120,
    "target": "Master career skills through hands-on practice",
    "deliverable": "Hands-on Practice exercise for career skills",
    "difficulty": 3,
    "tier": "intermediate",
    "concepts": [
      "Career Skills fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w28-wednesday",
    "week": 28,
    "day": "Wednesday",
    "title": "Week 28 Wednesday: Career Skills - Real-world Application",
    "duration": 120,
    "target": "Master career skills through real-world application",
    "deliverable": "Real-world Application exercise for career skills",
    "difficulty": 3,
    "tier": "intermediate",
    "concepts": [
      "Career Skills fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w28-thursday",
    "week": 28,
    "day": "Thursday",
    "title": "Week 28 Thursday: Career Skills - Advanced Techniques",
    "duration": 120,
    "target": "Master career skills through advanced techniques",
    "deliverable": "Advanced Techniques exercise for career skills",
    "difficulty": 3,
    "tier": "intermediate",
    "concepts": [
      "Career Skills fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w28-friday",
    "week": 28,
    "day": "Friday",
    "title": "Week 28 Friday: Career Skills - Integration & Testing",
    "duration": 120,
    "target": "Master career skills through integration & testing",
    "deliverable": "Integration & Testing exercise for career skills",
    "difficulty": 3,
    "tier": "intermediate",
    "concepts": [
      "Career Skills fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w28-saturday",
    "week": 28,
    "day": "Saturday",
    "title": "Week 28 Saturday: Career Skills - Project & Portfolio",
    "duration": 180,
    "target": "Master career skills through project & portfolio",
    "deliverable": "Portfolio project demonstrating career skills",
    "difficulty": 3,
    "tier": "intermediate",
    "concepts": [
      "Career Skills fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w29-monday",
    "week": 29,
    "day": "Monday",
    "title": "Week 29 Monday: Statistics & Math - Theory & Concepts",
    "duration": 120,
    "target": "Master statistics & math through theory & concepts",
    "deliverable": "Theory & Concepts exercise for statistics & math",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Statistics & Math fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w29-tuesday",
    "week": 29,
    "day": "Tuesday",
    "title": "Week 29 Tuesday: Statistics & Math - Hands-on Practice",
    "duration": 120,
    "target": "Master statistics & math through hands-on practice",
    "deliverable": "Hands-on Practice exercise for statistics & math",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Statistics & Math fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w29-wednesday",
    "week": 29,
    "day": "Wednesday",
    "title": "Week 29 Wednesday: Statistics & Math - Real-world Application",
    "duration": 120,
    "target": "Master statistics & math through real-world application",
    "deliverable": "Real-world Application exercise for statistics & math",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Statistics & Math fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w29-thursday",
    "week": 29,
    "day": "Thursday",
    "title": "Week 29 Thursday: Statistics & Math - Advanced Techniques",
    "duration": 120,
    "target": "Master statistics & math through advanced techniques",
    "deliverable": "Advanced Techniques exercise for statistics & math",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Statistics & Math fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w29-friday",
    "week": 29,
    "day": "Friday",
    "title": "Week 29 Friday: Statistics & Math - Integration & Testing",
    "duration": 120,
    "target": "Master statistics & math through integration & testing",
    "deliverable": "Integration & Testing exercise for statistics & math",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Statistics & Math fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w29-saturday",
    "week": 29,
    "day": "Saturday",
    "title": "Week 29 Saturday: Statistics & Math - Project & Portfolio",
    "duration": 180,
    "target": "Master statistics & math through project & portfolio",
    "deliverable": "Portfolio project demonstrating statistics & math",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Statistics & Math fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w30-monday",
    "week": 30,
    "day": "Monday",
    "title": "Week 30 Monday: Data Preprocessing - Theory & Concepts",
    "duration": 120,
    "target": "Master data preprocessing through theory & concepts",
    "deliverable": "Theory & Concepts exercise for data preprocessing",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Data Preprocessing fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w30-tuesday",
    "week": 30,
    "day": "Tuesday",
    "title": "Week 30 Tuesday: Data Preprocessing - Hands-on Practice",
    "duration": 120,
    "target": "Master data preprocessing through hands-on practice",
    "deliverable": "Hands-on Practice exercise for data preprocessing",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Data Preprocessing fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w30-wednesday",
    "week": 30,
    "day": "Wednesday",
    "title": "Week 30 Wednesday: Data Preprocessing - Real-world Application",
    "duration": 120,
    "target": "Master data preprocessing through real-world application",
    "deliverable": "Real-world Application exercise for data preprocessing",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Data Preprocessing fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w30-thursday",
    "week": 30,
    "day": "Thursday",
    "title": "Week 30 Thursday: Data Preprocessing - Advanced Techniques",
    "duration": 120,
    "target": "Master data preprocessing through advanced techniques",
    "deliverable": "Advanced Techniques exercise for data preprocessing",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Data Preprocessing fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w30-friday",
    "week": 30,
    "day": "Friday",
    "title": "Week 30 Friday: Data Preprocessing - Integration & Testing",
    "duration": 120,
    "target": "Master data preprocessing through integration & testing",
    "deliverable": "Integration & Testing exercise for data preprocessing",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Data Preprocessing fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w30-saturday",
    "week": 30,
    "day": "Saturday",
    "title": "Week 30 Saturday: Data Preprocessing - Project & Portfolio",
    "duration": 180,
    "target": "Master data preprocessing through project & portfolio",
    "deliverable": "Portfolio project demonstrating data preprocessing",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Data Preprocessing fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w31-monday",
    "week": 31,
    "day": "Monday",
    "title": "Week 31 Monday: Supervised Learning - Theory & Concepts",
    "duration": 120,
    "target": "Master supervised learning through theory & concepts",
    "deliverable": "Theory & Concepts exercise for supervised learning",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Supervised Learning fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w31-tuesday",
    "week": 31,
    "day": "Tuesday",
    "title": "Week 31 Tuesday: Supervised Learning - Hands-on Practice",
    "duration": 120,
    "target": "Master supervised learning through hands-on practice",
    "deliverable": "Hands-on Practice exercise for supervised learning",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Supervised Learning fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w31-wednesday",
    "week": 31,
    "day": "Wednesday",
    "title": "Week 31 Wednesday: Supervised Learning - Real-world Application",
    "duration": 120,
    "target": "Master supervised learning through real-world application",
    "deliverable": "Real-world Application exercise for supervised learning",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Supervised Learning fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w31-thursday",
    "week": 31,
    "day": "Thursday",
    "title": "Week 31 Thursday: Supervised Learning - Advanced Techniques",
    "duration": 120,
    "target": "Master supervised learning through advanced techniques",
    "deliverable": "Advanced Techniques exercise for supervised learning",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Supervised Learning fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w31-friday",
    "week": 31,
    "day": "Friday",
    "title": "Week 31 Friday: Supervised Learning - Integration & Testing",
    "duration": 120,
    "target": "Master supervised learning through integration & testing",
    "deliverable": "Integration & Testing exercise for supervised learning",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Supervised Learning fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w31-saturday",
    "week": 31,
    "day": "Saturday",
    "title": "Week 31 Saturday: Supervised Learning - Project & Portfolio",
    "duration": 180,
    "target": "Master supervised learning through project & portfolio",
    "deliverable": "Portfolio project demonstrating supervised learning",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Supervised Learning fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w32-monday",
    "week": 32,
    "day": "Monday",
    "title": "Week 32 Monday: Classification - Theory & Concepts",
    "duration": 120,
    "target": "Master classification through theory & concepts",
    "deliverable": "Theory & Concepts exercise for classification",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Classification fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w32-tuesday",
    "week": 32,
    "day": "Tuesday",
    "title": "Week 32 Tuesday: Classification - Hands-on Practice",
    "duration": 120,
    "target": "Master classification through hands-on practice",
    "deliverable": "Hands-on Practice exercise for classification",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Classification fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w32-wednesday",
    "week": 32,
    "day": "Wednesday",
    "title": "Week 32 Wednesday: Classification - Real-world Application",
    "duration": 120,
    "target": "Master classification through real-world application",
    "deliverable": "Real-world Application exercise for classification",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Classification fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w32-thursday",
    "week": 32,
    "day": "Thursday",
    "title": "Week 32 Thursday: Classification - Advanced Techniques",
    "duration": 120,
    "target": "Master classification through advanced techniques",
    "deliverable": "Advanced Techniques exercise for classification",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Classification fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w32-friday",
    "week": 32,
    "day": "Friday",
    "title": "Week 32 Friday: Classification - Integration & Testing",
    "duration": 120,
    "target": "Master classification through integration & testing",
    "deliverable": "Integration & Testing exercise for classification",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Classification fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w32-saturday",
    "week": 32,
    "day": "Saturday",
    "title": "Week 32 Saturday: Classification - Project & Portfolio",
    "duration": 180,
    "target": "Master classification through project & portfolio",
    "deliverable": "Portfolio project demonstrating classification",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Classification fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w33-monday",
    "week": 33,
    "day": "Monday",
    "title": "Week 33 Monday: Regression - Theory & Concepts",
    "duration": 120,
    "target": "Master regression through theory & concepts",
    "deliverable": "Theory & Concepts exercise for regression",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Regression fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w33-tuesday",
    "week": 33,
    "day": "Tuesday",
    "title": "Week 33 Tuesday: Regression - Hands-on Practice",
    "duration": 120,
    "target": "Master regression through hands-on practice",
    "deliverable": "Hands-on Practice exercise for regression",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Regression fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w33-wednesday",
    "week": 33,
    "day": "Wednesday",
    "title": "Week 33 Wednesday: Regression - Real-world Application",
    "duration": 120,
    "target": "Master regression through real-world application",
    "deliverable": "Real-world Application exercise for regression",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Regression fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w33-thursday",
    "week": 33,
    "day": "Thursday",
    "title": "Week 33 Thursday: Regression - Advanced Techniques",
    "duration": 120,
    "target": "Master regression through advanced techniques",
    "deliverable": "Advanced Techniques exercise for regression",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Regression fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w33-friday",
    "week": 33,
    "day": "Friday",
    "title": "Week 33 Friday: Regression - Integration & Testing",
    "duration": 120,
    "target": "Master regression through integration & testing",
    "deliverable": "Integration & Testing exercise for regression",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Regression fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w33-saturday",
    "week": 33,
    "day": "Saturday",
    "title": "Week 33 Saturday: Regression - Project & Portfolio",
    "duration": 180,
    "target": "Master regression through project & portfolio",
    "deliverable": "Portfolio project demonstrating regression",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Regression fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w34-monday",
    "week": 34,
    "day": "Monday",
    "title": "Week 34 Monday: Model Evaluation - Theory & Concepts",
    "duration": 120,
    "target": "Master model evaluation through theory & concepts",
    "deliverable": "Theory & Concepts exercise for model evaluation",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Model Evaluation fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w34-tuesday",
    "week": 34,
    "day": "Tuesday",
    "title": "Week 34 Tuesday: Model Evaluation - Hands-on Practice",
    "duration": 120,
    "target": "Master model evaluation through hands-on practice",
    "deliverable": "Hands-on Practice exercise for model evaluation",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Model Evaluation fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w34-wednesday",
    "week": 34,
    "day": "Wednesday",
    "title": "Week 34 Wednesday: Model Evaluation - Real-world Application",
    "duration": 120,
    "target": "Master model evaluation through real-world application",
    "deliverable": "Real-world Application exercise for model evaluation",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Model Evaluation fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w34-thursday",
    "week": 34,
    "day": "Thursday",
    "title": "Week 34 Thursday: Model Evaluation - Advanced Techniques",
    "duration": 120,
    "target": "Master model evaluation through advanced techniques",
    "deliverable": "Advanced Techniques exercise for model evaluation",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Model Evaluation fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w34-friday",
    "week": 34,
    "day": "Friday",
    "title": "Week 34 Friday: Model Evaluation - Integration & Testing",
    "duration": 120,
    "target": "Master model evaluation through integration & testing",
    "deliverable": "Integration & Testing exercise for model evaluation",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Model Evaluation fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w34-saturday",
    "week": 34,
    "day": "Saturday",
    "title": "Week 34 Saturday: Model Evaluation - Project & Portfolio",
    "duration": 180,
    "target": "Master model evaluation through project & portfolio",
    "deliverable": "Portfolio project demonstrating model evaluation",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Model Evaluation fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w35-monday",
    "week": 35,
    "day": "Monday",
    "title": "Week 35 Monday: Unsupervised Learning - Theory & Concepts",
    "duration": 120,
    "target": "Master unsupervised learning through theory & concepts",
    "deliverable": "Theory & Concepts exercise for unsupervised learning",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Unsupervised Learning fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w35-tuesday",
    "week": 35,
    "day": "Tuesday",
    "title": "Week 35 Tuesday: Unsupervised Learning - Hands-on Practice",
    "duration": 120,
    "target": "Master unsupervised learning through hands-on practice",
    "deliverable": "Hands-on Practice exercise for unsupervised learning",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Unsupervised Learning fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w35-wednesday",
    "week": 35,
    "day": "Wednesday",
    "title": "Week 35 Wednesday: Unsupervised Learning - Real-world Application",
    "duration": 120,
    "target": "Master unsupervised learning through real-world application",
    "deliverable": "Real-world Application exercise for unsupervised learning",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Unsupervised Learning fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w35-thursday",
    "week": 35,
    "day": "Thursday",
    "title": "Week 35 Thursday: Unsupervised Learning - Advanced Techniques",
    "duration": 120,
    "target": "Master unsupervised learning through advanced techniques",
    "deliverable": "Advanced Techniques exercise for unsupervised learning",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Unsupervised Learning fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w35-friday",
    "week": 35,
    "day": "Friday",
    "title": "Week 35 Friday: Unsupervised Learning - Integration & Testing",
    "duration": 120,
    "target": "Master unsupervised learning through integration & testing",
    "deliverable": "Integration & Testing exercise for unsupervised learning",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Unsupervised Learning fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w35-saturday",
    "week": 35,
    "day": "Saturday",
    "title": "Week 35 Saturday: Unsupervised Learning - Project & Portfolio",
    "duration": 180,
    "target": "Master unsupervised learning through project & portfolio",
    "deliverable": "Portfolio project demonstrating unsupervised learning",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Unsupervised Learning fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w36-monday",
    "week": 36,
    "day": "Monday",
    "title": "Week 36 Monday: Clustering - Theory & Concepts",
    "duration": 120,
    "target": "Master clustering through theory & concepts",
    "deliverable": "Theory & Concepts exercise for clustering",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Clustering fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w36-tuesday",
    "week": 36,
    "day": "Tuesday",
    "title": "Week 36 Tuesday: Clustering - Hands-on Practice",
    "duration": 120,
    "target": "Master clustering through hands-on practice",
    "deliverable": "Hands-on Practice exercise for clustering",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Clustering fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w36-wednesday",
    "week": 36,
    "day": "Wednesday",
    "title": "Week 36 Wednesday: Clustering - Real-world Application",
    "duration": 120,
    "target": "Master clustering through real-world application",
    "deliverable": "Real-world Application exercise for clustering",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Clustering fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w36-thursday",
    "week": 36,
    "day": "Thursday",
    "title": "Week 36 Thursday: Clustering - Advanced Techniques",
    "duration": 120,
    "target": "Master clustering through advanced techniques",
    "deliverable": "Advanced Techniques exercise for clustering",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Clustering fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w36-friday",
    "week": 36,
    "day": "Friday",
    "title": "Week 36 Friday: Clustering - Integration & Testing",
    "duration": 120,
    "target": "Master clustering through integration & testing",
    "deliverable": "Integration & Testing exercise for clustering",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Clustering fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w36-saturday",
    "week": 36,
    "day": "Saturday",
    "title": "Week 36 Saturday: Clustering - Project & Portfolio",
    "duration": 180,
    "target": "Master clustering through project & portfolio",
    "deliverable": "Portfolio project demonstrating clustering",
    "difficulty": 3,
    "tier": "advanced",
    "concepts": [
      "Clustering fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w37-monday",
    "week": 37,
    "day": "Monday",
    "title": "Week 37 Monday: Feature Engineering - Theory & Concepts",
    "duration": 120,
    "target": "Master feature engineering through theory & concepts",
    "deliverable": "Theory & Concepts exercise for feature engineering",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Feature Engineering fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w37-tuesday",
    "week": 37,
    "day": "Tuesday",
    "title": "Week 37 Tuesday: Feature Engineering - Hands-on Practice",
    "duration": 120,
    "target": "Master feature engineering through hands-on practice",
    "deliverable": "Hands-on Practice exercise for feature engineering",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Feature Engineering fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w37-wednesday",
    "week": 37,
    "day": "Wednesday",
    "title": "Week 37 Wednesday: Feature Engineering - Real-world Application",
    "duration": 120,
    "target": "Master feature engineering through real-world application",
    "deliverable": "Real-world Application exercise for feature engineering",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Feature Engineering fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w37-thursday",
    "week": 37,
    "day": "Thursday",
    "title": "Week 37 Thursday: Feature Engineering - Advanced Techniques",
    "duration": 120,
    "target": "Master feature engineering through advanced techniques",
    "deliverable": "Advanced Techniques exercise for feature engineering",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Feature Engineering fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w37-friday",
    "week": 37,
    "day": "Friday",
    "title": "Week 37 Friday: Feature Engineering - Integration & Testing",
    "duration": 120,
    "target": "Master feature engineering through integration & testing",
    "deliverable": "Integration & Testing exercise for feature engineering",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Feature Engineering fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w37-saturday",
    "week": 37,
    "day": "Saturday",
    "title": "Week 37 Saturday: Feature Engineering - Project & Portfolio",
    "duration": 180,
    "target": "Master feature engineering through project & portfolio",
    "deliverable": "Portfolio project demonstrating feature engineering",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Feature Engineering fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w38-monday",
    "week": 38,
    "day": "Monday",
    "title": "Week 38 Monday: Cross Validation - Theory & Concepts",
    "duration": 120,
    "target": "Master cross validation through theory & concepts",
    "deliverable": "Theory & Concepts exercise for cross validation",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Cross Validation fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w38-tuesday",
    "week": 38,
    "day": "Tuesday",
    "title": "Week 38 Tuesday: Cross Validation - Hands-on Practice",
    "duration": 120,
    "target": "Master cross validation through hands-on practice",
    "deliverable": "Hands-on Practice exercise for cross validation",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Cross Validation fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w38-wednesday",
    "week": 38,
    "day": "Wednesday",
    "title": "Week 38 Wednesday: Cross Validation - Real-world Application",
    "duration": 120,
    "target": "Master cross validation through real-world application",
    "deliverable": "Real-world Application exercise for cross validation",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Cross Validation fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w38-thursday",
    "week": 38,
    "day": "Thursday",
    "title": "Week 38 Thursday: Cross Validation - Advanced Techniques",
    "duration": 120,
    "target": "Master cross validation through advanced techniques",
    "deliverable": "Advanced Techniques exercise for cross validation",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Cross Validation fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w38-friday",
    "week": 38,
    "day": "Friday",
    "title": "Week 38 Friday: Cross Validation - Integration & Testing",
    "duration": 120,
    "target": "Master cross validation through integration & testing",
    "deliverable": "Integration & Testing exercise for cross validation",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Cross Validation fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w38-saturday",
    "week": 38,
    "day": "Saturday",
    "title": "Week 38 Saturday: Cross Validation - Project & Portfolio",
    "duration": 180,
    "target": "Master cross validation through project & portfolio",
    "deliverable": "Portfolio project demonstrating cross validation",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Cross Validation fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w39-monday",
    "week": 39,
    "day": "Monday",
    "title": "Week 39 Monday: Ensemble Methods - Theory & Concepts",
    "duration": 120,
    "target": "Master ensemble methods through theory & concepts",
    "deliverable": "Theory & Concepts exercise for ensemble methods",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Ensemble Methods fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w39-tuesday",
    "week": 39,
    "day": "Tuesday",
    "title": "Week 39 Tuesday: Ensemble Methods - Hands-on Practice",
    "duration": 120,
    "target": "Master ensemble methods through hands-on practice",
    "deliverable": "Hands-on Practice exercise for ensemble methods",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Ensemble Methods fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w39-wednesday",
    "week": 39,
    "day": "Wednesday",
    "title": "Week 39 Wednesday: Ensemble Methods - Real-world Application",
    "duration": 120,
    "target": "Master ensemble methods through real-world application",
    "deliverable": "Real-world Application exercise for ensemble methods",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Ensemble Methods fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w39-thursday",
    "week": 39,
    "day": "Thursday",
    "title": "Week 39 Thursday: Ensemble Methods - Advanced Techniques",
    "duration": 120,
    "target": "Master ensemble methods through advanced techniques",
    "deliverable": "Advanced Techniques exercise for ensemble methods",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Ensemble Methods fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w39-friday",
    "week": 39,
    "day": "Friday",
    "title": "Week 39 Friday: Ensemble Methods - Integration & Testing",
    "duration": 120,
    "target": "Master ensemble methods through integration & testing",
    "deliverable": "Integration & Testing exercise for ensemble methods",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Ensemble Methods fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w39-saturday",
    "week": 39,
    "day": "Saturday",
    "title": "Week 39 Saturday: Ensemble Methods - Project & Portfolio",
    "duration": 180,
    "target": "Master ensemble methods through project & portfolio",
    "deliverable": "Portfolio project demonstrating ensemble methods",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Ensemble Methods fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w40-monday",
    "week": 40,
    "day": "Monday",
    "title": "Week 40 Monday: Time Series - Theory & Concepts",
    "duration": 120,
    "target": "Master time series through theory & concepts",
    "deliverable": "Theory & Concepts exercise for time series",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Time Series fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w40-tuesday",
    "week": 40,
    "day": "Tuesday",
    "title": "Week 40 Tuesday: Time Series - Hands-on Practice",
    "duration": 120,
    "target": "Master time series through hands-on practice",
    "deliverable": "Hands-on Practice exercise for time series",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Time Series fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w40-wednesday",
    "week": 40,
    "day": "Wednesday",
    "title": "Week 40 Wednesday: Time Series - Real-world Application",
    "duration": 120,
    "target": "Master time series through real-world application",
    "deliverable": "Real-world Application exercise for time series",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Time Series fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w40-thursday",
    "week": 40,
    "day": "Thursday",
    "title": "Week 40 Thursday: Time Series - Advanced Techniques",
    "duration": 120,
    "target": "Master time series through advanced techniques",
    "deliverable": "Advanced Techniques exercise for time series",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Time Series fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w40-friday",
    "week": 40,
    "day": "Friday",
    "title": "Week 40 Friday: Time Series - Integration & Testing",
    "duration": 120,
    "target": "Master time series through integration & testing",
    "deliverable": "Integration & Testing exercise for time series",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Time Series fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w40-saturday",
    "week": 40,
    "day": "Saturday",
    "title": "Week 40 Saturday: Time Series - Project & Portfolio",
    "duration": 180,
    "target": "Master time series through project & portfolio",
    "deliverable": "Portfolio project demonstrating time series",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Time Series fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w41-monday",
    "week": 41,
    "day": "Monday",
    "title": "Week 41 Monday: Neural Networks - Theory & Concepts",
    "duration": 120,
    "target": "Master neural networks through theory & concepts",
    "deliverable": "Theory & Concepts exercise for neural networks",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Neural Networks fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w41-tuesday",
    "week": 41,
    "day": "Tuesday",
    "title": "Week 41 Tuesday: Neural Networks - Hands-on Practice",
    "duration": 120,
    "target": "Master neural networks through hands-on practice",
    "deliverable": "Hands-on Practice exercise for neural networks",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Neural Networks fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w41-wednesday",
    "week": 41,
    "day": "Wednesday",
    "title": "Week 41 Wednesday: Neural Networks - Real-world Application",
    "duration": 120,
    "target": "Master neural networks through real-world application",
    "deliverable": "Real-world Application exercise for neural networks",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Neural Networks fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w41-thursday",
    "week": 41,
    "day": "Thursday",
    "title": "Week 41 Thursday: Neural Networks - Advanced Techniques",
    "duration": 120,
    "target": "Master neural networks through advanced techniques",
    "deliverable": "Advanced Techniques exercise for neural networks",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Neural Networks fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w41-friday",
    "week": 41,
    "day": "Friday",
    "title": "Week 41 Friday: Neural Networks - Integration & Testing",
    "duration": 120,
    "target": "Master neural networks through integration & testing",
    "deliverable": "Integration & Testing exercise for neural networks",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Neural Networks fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w41-saturday",
    "week": 41,
    "day": "Saturday",
    "title": "Week 41 Saturday: Neural Networks - Project & Portfolio",
    "duration": 180,
    "target": "Master neural networks through project & portfolio",
    "deliverable": "Portfolio project demonstrating neural networks",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Neural Networks fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w42-monday",
    "week": 42,
    "day": "Monday",
    "title": "Week 42 Monday: Deep Learning Basics - Theory & Concepts",
    "duration": 120,
    "target": "Master deep learning basics through theory & concepts",
    "deliverable": "Theory & Concepts exercise for deep learning basics",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Deep Learning Basics fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w42-tuesday",
    "week": 42,
    "day": "Tuesday",
    "title": "Week 42 Tuesday: Deep Learning Basics - Hands-on Practice",
    "duration": 120,
    "target": "Master deep learning basics through hands-on practice",
    "deliverable": "Hands-on Practice exercise for deep learning basics",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Deep Learning Basics fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w42-wednesday",
    "week": 42,
    "day": "Wednesday",
    "title": "Week 42 Wednesday: Deep Learning Basics - Real-world Application",
    "duration": 120,
    "target": "Master deep learning basics through real-world application",
    "deliverable": "Real-world Application exercise for deep learning basics",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Deep Learning Basics fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w42-thursday",
    "week": 42,
    "day": "Thursday",
    "title": "Week 42 Thursday: Deep Learning Basics - Advanced Techniques",
    "duration": 120,
    "target": "Master deep learning basics through advanced techniques",
    "deliverable": "Advanced Techniques exercise for deep learning basics",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Deep Learning Basics fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w42-friday",
    "week": 42,
    "day": "Friday",
    "title": "Week 42 Friday: Deep Learning Basics - Integration & Testing",
    "duration": 120,
    "target": "Master deep learning basics through integration & testing",
    "deliverable": "Integration & Testing exercise for deep learning basics",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Deep Learning Basics fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w42-saturday",
    "week": 42,
    "day": "Saturday",
    "title": "Week 42 Saturday: Deep Learning Basics - Project & Portfolio",
    "duration": 180,
    "target": "Master deep learning basics through project & portfolio",
    "deliverable": "Portfolio project demonstrating deep learning basics",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Deep Learning Basics fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w43-monday",
    "week": 43,
    "day": "Monday",
    "title": "Week 43 Monday: TensorFlow/PyTorch - Theory & Concepts",
    "duration": 120,
    "target": "Master tensorflow/pytorch through theory & concepts",
    "deliverable": "Theory & Concepts exercise for tensorflow/pytorch",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "TensorFlow/PyTorch fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w43-tuesday",
    "week": 43,
    "day": "Tuesday",
    "title": "Week 43 Tuesday: TensorFlow/PyTorch - Hands-on Practice",
    "duration": 120,
    "target": "Master tensorflow/pytorch through hands-on practice",
    "deliverable": "Hands-on Practice exercise for tensorflow/pytorch",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "TensorFlow/PyTorch fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w43-wednesday",
    "week": 43,
    "day": "Wednesday",
    "title": "Week 43 Wednesday: TensorFlow/PyTorch - Real-world Application",
    "duration": 120,
    "target": "Master tensorflow/pytorch through real-world application",
    "deliverable": "Real-world Application exercise for tensorflow/pytorch",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "TensorFlow/PyTorch fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w43-thursday",
    "week": 43,
    "day": "Thursday",
    "title": "Week 43 Thursday: TensorFlow/PyTorch - Advanced Techniques",
    "duration": 120,
    "target": "Master tensorflow/pytorch through advanced techniques",
    "deliverable": "Advanced Techniques exercise for tensorflow/pytorch",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "TensorFlow/PyTorch fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w43-friday",
    "week": 43,
    "day": "Friday",
    "title": "Week 43 Friday: TensorFlow/PyTorch - Integration & Testing",
    "duration": 120,
    "target": "Master tensorflow/pytorch through integration & testing",
    "deliverable": "Integration & Testing exercise for tensorflow/pytorch",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "TensorFlow/PyTorch fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w43-saturday",
    "week": 43,
    "day": "Saturday",
    "title": "Week 43 Saturday: TensorFlow/PyTorch - Project & Portfolio",
    "duration": 180,
    "target": "Master tensorflow/pytorch through project & portfolio",
    "deliverable": "Portfolio project demonstrating tensorflow/pytorch",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "TensorFlow/PyTorch fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w44-monday",
    "week": 44,
    "day": "Monday",
    "title": "Week 44 Monday: Computer Vision - Theory & Concepts",
    "duration": 120,
    "target": "Master computer vision through theory & concepts",
    "deliverable": "Theory & Concepts exercise for computer vision",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Computer Vision fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w44-tuesday",
    "week": 44,
    "day": "Tuesday",
    "title": "Week 44 Tuesday: Computer Vision - Hands-on Practice",
    "duration": 120,
    "target": "Master computer vision through hands-on practice",
    "deliverable": "Hands-on Practice exercise for computer vision",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Computer Vision fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w44-wednesday",
    "week": 44,
    "day": "Wednesday",
    "title": "Week 44 Wednesday: Computer Vision - Real-world Application",
    "duration": 120,
    "target": "Master computer vision through real-world application",
    "deliverable": "Real-world Application exercise for computer vision",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Computer Vision fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w44-thursday",
    "week": 44,
    "day": "Thursday",
    "title": "Week 44 Thursday: Computer Vision - Advanced Techniques",
    "duration": 120,
    "target": "Master computer vision through advanced techniques",
    "deliverable": "Advanced Techniques exercise for computer vision",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Computer Vision fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w44-friday",
    "week": 44,
    "day": "Friday",
    "title": "Week 44 Friday: Computer Vision - Integration & Testing",
    "duration": 120,
    "target": "Master computer vision through integration & testing",
    "deliverable": "Integration & Testing exercise for computer vision",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Computer Vision fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w44-saturday",
    "week": 44,
    "day": "Saturday",
    "title": "Week 44 Saturday: Computer Vision - Project & Portfolio",
    "duration": 180,
    "target": "Master computer vision through project & portfolio",
    "deliverable": "Portfolio project demonstrating computer vision",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Computer Vision fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w45-monday",
    "week": 45,
    "day": "Monday",
    "title": "Week 45 Monday: Natural Language Processing - Theory & Concepts",
    "duration": 120,
    "target": "Master natural language processing through theory & concepts",
    "deliverable": "Theory & Concepts exercise for natural language processing",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Natural Language Processing fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w45-tuesday",
    "week": 45,
    "day": "Tuesday",
    "title": "Week 45 Tuesday: Natural Language Processing - Hands-on Practice",
    "duration": 120,
    "target": "Master natural language processing through hands-on practice",
    "deliverable": "Hands-on Practice exercise for natural language processing",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Natural Language Processing fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w45-wednesday",
    "week": 45,
    "day": "Wednesday",
    "title": "Week 45 Wednesday: Natural Language Processing - Real-world Application",
    "duration": 120,
    "target": "Master natural language processing through real-world application",
    "deliverable": "Real-world Application exercise for natural language processing",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Natural Language Processing fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w45-thursday",
    "week": 45,
    "day": "Thursday",
    "title": "Week 45 Thursday: Natural Language Processing - Advanced Techniques",
    "duration": 120,
    "target": "Master natural language processing through advanced techniques",
    "deliverable": "Advanced Techniques exercise for natural language processing",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Natural Language Processing fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w45-friday",
    "week": 45,
    "day": "Friday",
    "title": "Week 45 Friday: Natural Language Processing - Integration & Testing",
    "duration": 120,
    "target": "Master natural language processing through integration & testing",
    "deliverable": "Integration & Testing exercise for natural language processing",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Natural Language Processing fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w45-saturday",
    "week": 45,
    "day": "Saturday",
    "title": "Week 45 Saturday: Natural Language Processing - Project & Portfolio",
    "duration": 180,
    "target": "Master natural language processing through project & portfolio",
    "deliverable": "Portfolio project demonstrating natural language processing",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Natural Language Processing fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w46-monday",
    "week": 46,
    "day": "Monday",
    "title": "Week 46 Monday: Reinforcement Learning - Theory & Concepts",
    "duration": 120,
    "target": "Master reinforcement learning through theory & concepts",
    "deliverable": "Theory & Concepts exercise for reinforcement learning",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Reinforcement Learning fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w46-tuesday",
    "week": 46,
    "day": "Tuesday",
    "title": "Week 46 Tuesday: Reinforcement Learning - Hands-on Practice",
    "duration": 120,
    "target": "Master reinforcement learning through hands-on practice",
    "deliverable": "Hands-on Practice exercise for reinforcement learning",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Reinforcement Learning fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w46-wednesday",
    "week": 46,
    "day": "Wednesday",
    "title": "Week 46 Wednesday: Reinforcement Learning - Real-world Application",
    "duration": 120,
    "target": "Master reinforcement learning through real-world application",
    "deliverable": "Real-world Application exercise for reinforcement learning",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Reinforcement Learning fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w46-thursday",
    "week": 46,
    "day": "Thursday",
    "title": "Week 46 Thursday: Reinforcement Learning - Advanced Techniques",
    "duration": 120,
    "target": "Master reinforcement learning through advanced techniques",
    "deliverable": "Advanced Techniques exercise for reinforcement learning",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Reinforcement Learning fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w46-friday",
    "week": 46,
    "day": "Friday",
    "title": "Week 46 Friday: Reinforcement Learning - Integration & Testing",
    "duration": 120,
    "target": "Master reinforcement learning through integration & testing",
    "deliverable": "Integration & Testing exercise for reinforcement learning",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Reinforcement Learning fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w46-saturday",
    "week": 46,
    "day": "Saturday",
    "title": "Week 46 Saturday: Reinforcement Learning - Project & Portfolio",
    "duration": 180,
    "target": "Master reinforcement learning through project & portfolio",
    "deliverable": "Portfolio project demonstrating reinforcement learning",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Reinforcement Learning fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w47-monday",
    "week": 47,
    "day": "Monday",
    "title": "Week 47 Monday: Model Deployment - Theory & Concepts",
    "duration": 120,
    "target": "Master model deployment through theory & concepts",
    "deliverable": "Theory & Concepts exercise for model deployment",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Model Deployment fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w47-tuesday",
    "week": 47,
    "day": "Tuesday",
    "title": "Week 47 Tuesday: Model Deployment - Hands-on Practice",
    "duration": 120,
    "target": "Master model deployment through hands-on practice",
    "deliverable": "Hands-on Practice exercise for model deployment",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Model Deployment fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w47-wednesday",
    "week": 47,
    "day": "Wednesday",
    "title": "Week 47 Wednesday: Model Deployment - Real-world Application",
    "duration": 120,
    "target": "Master model deployment through real-world application",
    "deliverable": "Real-world Application exercise for model deployment",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Model Deployment fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w47-thursday",
    "week": 47,
    "day": "Thursday",
    "title": "Week 47 Thursday: Model Deployment - Advanced Techniques",
    "duration": 120,
    "target": "Master model deployment through advanced techniques",
    "deliverable": "Advanced Techniques exercise for model deployment",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Model Deployment fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w47-friday",
    "week": 47,
    "day": "Friday",
    "title": "Week 47 Friday: Model Deployment - Integration & Testing",
    "duration": 120,
    "target": "Master model deployment through integration & testing",
    "deliverable": "Integration & Testing exercise for model deployment",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Model Deployment fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w47-saturday",
    "week": 47,
    "day": "Saturday",
    "title": "Week 47 Saturday: Model Deployment - Project & Portfolio",
    "duration": 180,
    "target": "Master model deployment through project & portfolio",
    "deliverable": "Portfolio project demonstrating model deployment",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "Model Deployment fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w48-monday",
    "week": 48,
    "day": "Monday",
    "title": "Week 48 Monday: MLOps - Theory & Concepts",
    "duration": 120,
    "target": "Master mlops through theory & concepts",
    "deliverable": "Theory & Concepts exercise for mlops",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "MLOps fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w48-tuesday",
    "week": 48,
    "day": "Tuesday",
    "title": "Week 48 Tuesday: MLOps - Hands-on Practice",
    "duration": 120,
    "target": "Master mlops through hands-on practice",
    "deliverable": "Hands-on Practice exercise for mlops",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "MLOps fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w48-wednesday",
    "week": 48,
    "day": "Wednesday",
    "title": "Week 48 Wednesday: MLOps - Real-world Application",
    "duration": 120,
    "target": "Master mlops through real-world application",
    "deliverable": "Real-world Application exercise for mlops",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "MLOps fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w48-thursday",
    "week": 48,
    "day": "Thursday",
    "title": "Week 48 Thursday: MLOps - Advanced Techniques",
    "duration": 120,
    "target": "Master mlops through advanced techniques",
    "deliverable": "Advanced Techniques exercise for mlops",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "MLOps fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w48-friday",
    "week": 48,
    "day": "Friday",
    "title": "Week 48 Friday: MLOps - Integration & Testing",
    "duration": 120,
    "target": "Master mlops through integration & testing",
    "deliverable": "Integration & Testing exercise for mlops",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "MLOps fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w48-saturday",
    "week": 48,
    "day": "Saturday",
    "title": "Week 48 Saturday: MLOps - Project & Portfolio",
    "duration": 180,
    "target": "Master mlops through project & portfolio",
    "deliverable": "Portfolio project demonstrating mlops",
    "difficulty": 4,
    "tier": "advanced",
    "concepts": [
      "MLOps fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w49-monday",
    "week": 49,
    "day": "Monday",
    "title": "Week 49 Monday: AI Ethics - Theory & Concepts",
    "duration": 120,
    "target": "Master ai ethics through theory & concepts",
    "deliverable": "Theory & Concepts exercise for ai ethics",
    "difficulty": 5,
    "tier": "advanced",
    "concepts": [
      "AI Ethics fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w49-tuesday",
    "week": 49,
    "day": "Tuesday",
    "title": "Week 49 Tuesday: AI Ethics - Hands-on Practice",
    "duration": 120,
    "target": "Master ai ethics through hands-on practice",
    "deliverable": "Hands-on Practice exercise for ai ethics",
    "difficulty": 5,
    "tier": "advanced",
    "concepts": [
      "AI Ethics fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w49-wednesday",
    "week": 49,
    "day": "Wednesday",
    "title": "Week 49 Wednesday: AI Ethics - Real-world Application",
    "duration": 120,
    "target": "Master ai ethics through real-world application",
    "deliverable": "Real-world Application exercise for ai ethics",
    "difficulty": 5,
    "tier": "advanced",
    "concepts": [
      "AI Ethics fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w49-thursday",
    "week": 49,
    "day": "Thursday",
    "title": "Week 49 Thursday: AI Ethics - Advanced Techniques",
    "duration": 120,
    "target": "Master ai ethics through advanced techniques",
    "deliverable": "Advanced Techniques exercise for ai ethics",
    "difficulty": 5,
    "tier": "advanced",
    "concepts": [
      "AI Ethics fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w49-friday",
    "week": 49,
    "day": "Friday",
    "title": "Week 49 Friday: AI Ethics - Integration & Testing",
    "duration": 120,
    "target": "Master ai ethics through integration & testing",
    "deliverable": "Integration & Testing exercise for ai ethics",
    "difficulty": 5,
    "tier": "advanced",
    "concepts": [
      "AI Ethics fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w49-saturday",
    "week": 49,
    "day": "Saturday",
    "title": "Week 49 Saturday: AI Ethics - Project & Portfolio",
    "duration": 180,
    "target": "Master ai ethics through project & portfolio",
    "deliverable": "Portfolio project demonstrating ai ethics",
    "difficulty": 5,
    "tier": "advanced",
    "concepts": [
      "AI Ethics fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w50-monday",
    "week": 50,
    "day": "Monday",
    "title": "Week 50 Monday: Research Methods - Theory & Concepts",
    "duration": 120,
    "target": "Master research methods through theory & concepts",
    "deliverable": "Theory & Concepts exercise for research methods",
    "difficulty": 5,
    "tier": "advanced",
    "concepts": [
      "Research Methods fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w50-tuesday",
    "week": 50,
    "day": "Tuesday",
    "title": "Week 50 Tuesday: Research Methods - Hands-on Practice",
    "duration": 120,
    "target": "Master research methods through hands-on practice",
    "deliverable": "Hands-on Practice exercise for research methods",
    "difficulty": 5,
    "tier": "advanced",
    "concepts": [
      "Research Methods fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w50-wednesday",
    "week": 50,
    "day": "Wednesday",
    "title": "Week 50 Wednesday: Research Methods - Real-world Application",
    "duration": 120,
    "target": "Master research methods through real-world application",
    "deliverable": "Real-world Application exercise for research methods",
    "difficulty": 5,
    "tier": "advanced",
    "concepts": [
      "Research Methods fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w50-thursday",
    "week": 50,
    "day": "Thursday",
    "title": "Week 50 Thursday: Research Methods - Advanced Techniques",
    "duration": 120,
    "target": "Master research methods through advanced techniques",
    "deliverable": "Advanced Techniques exercise for research methods",
    "difficulty": 5,
    "tier": "advanced",
    "concepts": [
      "Research Methods fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w50-friday",
    "week": 50,
    "day": "Friday",
    "title": "Week 50 Friday: Research Methods - Integration & Testing",
    "duration": 120,
    "target": "Master research methods through integration & testing",
    "deliverable": "Integration & Testing exercise for research methods",
    "difficulty": 5,
    "tier": "advanced",
    "concepts": [
      "Research Methods fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w50-saturday",
    "week": 50,
    "day": "Saturday",
    "title": "Week 50 Saturday: Research Methods - Project & Portfolio",
    "duration": 180,
    "target": "Master research methods through project & portfolio",
    "deliverable": "Portfolio project demonstrating research methods",
    "difficulty": 5,
    "tier": "advanced",
    "concepts": [
      "Research Methods fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w51-monday",
    "week": 51,
    "day": "Monday",
    "title": "Week 51 Monday: Advanced Projects - Theory & Concepts",
    "duration": 120,
    "target": "Master advanced projects through theory & concepts",
    "deliverable": "Theory & Concepts exercise for advanced projects",
    "difficulty": 5,
    "tier": "advanced",
    "concepts": [
      "Advanced Projects fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w51-tuesday",
    "week": 51,
    "day": "Tuesday",
    "title": "Week 51 Tuesday: Advanced Projects - Hands-on Practice",
    "duration": 120,
    "target": "Master advanced projects through hands-on practice",
    "deliverable": "Hands-on Practice exercise for advanced projects",
    "difficulty": 5,
    "tier": "advanced",
    "concepts": [
      "Advanced Projects fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w51-wednesday",
    "week": 51,
    "day": "Wednesday",
    "title": "Week 51 Wednesday: Advanced Projects - Real-world Application",
    "duration": 120,
    "target": "Master advanced projects through real-world application",
    "deliverable": "Real-world Application exercise for advanced projects",
    "difficulty": 5,
    "tier": "advanced",
    "concepts": [
      "Advanced Projects fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w51-thursday",
    "week": 51,
    "day": "Thursday",
    "title": "Week 51 Thursday: Advanced Projects - Advanced Techniques",
    "duration": 120,
    "target": "Master advanced projects through advanced techniques",
    "deliverable": "Advanced Techniques exercise for advanced projects",
    "difficulty": 5,
    "tier": "advanced",
    "concepts": [
      "Advanced Projects fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w51-friday",
    "week": 51,
    "day": "Friday",
    "title": "Week 51 Friday: Advanced Projects - Integration & Testing",
    "duration": 120,
    "target": "Master advanced projects through integration & testing",
    "deliverable": "Integration & Testing exercise for advanced projects",
    "difficulty": 5,
    "tier": "advanced",
    "concepts": [
      "Advanced Projects fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w51-saturday",
    "week": 51,
    "day": "Saturday",
    "title": "Week 51 Saturday: Advanced Projects - Project & Portfolio",
    "duration": 180,
    "target": "Master advanced projects through project & portfolio",
    "deliverable": "Portfolio project demonstrating advanced projects",
    "difficulty": 5,
    "tier": "advanced",
    "concepts": [
      "Advanced Projects fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w52-monday",
    "week": 52,
    "day": "Monday",
    "title": "Week 52 Monday: Industry Applications - Theory & Concepts",
    "duration": 120,
    "target": "Master industry applications through theory & concepts",
    "deliverable": "Theory & Concepts exercise for industry applications",
    "difficulty": 5,
    "tier": "advanced",
    "concepts": [
      "Industry Applications fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w52-tuesday",
    "week": 52,
    "day": "Tuesday",
    "title": "Week 52 Tuesday: Industry Applications - Hands-on Practice",
    "duration": 120,
    "target": "Master industry applications through hands-on practice",
    "deliverable": "Hands-on Practice exercise for industry applications",
    "difficulty": 5,
    "tier": "advanced",
    "concepts": [
      "Industry Applications fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w52-wednesday",
    "week": 52,
    "day": "Wednesday",
    "title": "Week 52 Wednesday: Industry Applications - Real-world Application",
    "duration": 120,
    "target": "Master industry applications through real-world application",
    "deliverable": "Real-world Application exercise for industry applications",
    "difficulty": 5,
    "tier": "advanced",
    "concepts": [
      "Industry Applications fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w52-thursday",
    "week": 52,
    "day": "Thursday",
    "title": "Week 52 Thursday: Industry Applications - Advanced Techniques",
    "duration": 120,
    "target": "Master industry applications through advanced techniques",
    "deliverable": "Advanced Techniques exercise for industry applications",
    "difficulty": 5,
    "tier": "advanced",
    "concepts": [
      "Industry Applications fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w52-friday",
    "week": 52,
    "day": "Friday",
    "title": "Week 52 Friday: Industry Applications - Integration & Testing",
    "duration": 120,
    "target": "Master industry applications through integration & testing",
    "deliverable": "Integration & Testing exercise for industry applications",
    "difficulty": 5,
    "tier": "advanced",
    "concepts": [
      "Industry Applications fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w52-saturday",
    "week": 52,
    "day": "Saturday",
    "title": "Week 52 Saturday: Industry Applications - Project & Portfolio",
    "duration": 180,
    "target": "Master industry applications through project & portfolio",
    "deliverable": "Portfolio project demonstrating industry applications",
    "difficulty": 5,
    "tier": "advanced",
    "concepts": [
      "Industry Applications fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w53-monday",
    "week": 53,
    "day": "Monday",
    "title": "Week 53 Monday: Advanced Deep Learning - Theory & Concepts",
    "duration": 120,
    "target": "Master advanced deep learning through theory & concepts",
    "deliverable": "Theory & Concepts exercise for advanced deep learning",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Advanced Deep Learning fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w53-tuesday",
    "week": 53,
    "day": "Tuesday",
    "title": "Week 53 Tuesday: Advanced Deep Learning - Hands-on Practice",
    "duration": 120,
    "target": "Master advanced deep learning through hands-on practice",
    "deliverable": "Hands-on Practice exercise for advanced deep learning",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Advanced Deep Learning fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w53-wednesday",
    "week": 53,
    "day": "Wednesday",
    "title": "Week 53 Wednesday: Advanced Deep Learning - Real-world Application",
    "duration": 120,
    "target": "Master advanced deep learning through real-world application",
    "deliverable": "Real-world Application exercise for advanced deep learning",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Advanced Deep Learning fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w53-thursday",
    "week": 53,
    "day": "Thursday",
    "title": "Week 53 Thursday: Advanced Deep Learning - Advanced Techniques",
    "duration": 120,
    "target": "Master advanced deep learning through advanced techniques",
    "deliverable": "Advanced Techniques exercise for advanced deep learning",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Advanced Deep Learning fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w53-friday",
    "week": 53,
    "day": "Friday",
    "title": "Week 53 Friday: Advanced Deep Learning - Integration & Testing",
    "duration": 120,
    "target": "Master advanced deep learning through integration & testing",
    "deliverable": "Integration & Testing exercise for advanced deep learning",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Advanced Deep Learning fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w53-saturday",
    "week": 53,
    "day": "Saturday",
    "title": "Week 53 Saturday: Advanced Deep Learning - Project & Portfolio",
    "duration": 180,
    "target": "Master advanced deep learning through project & portfolio",
    "deliverable": "Portfolio project demonstrating advanced deep learning",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Advanced Deep Learning fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w54-monday",
    "week": 54,
    "day": "Monday",
    "title": "Week 54 Monday: Transformer Models - Theory & Concepts",
    "duration": 120,
    "target": "Master transformer models through theory & concepts",
    "deliverable": "Theory & Concepts exercise for transformer models",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Transformer Models fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w54-tuesday",
    "week": 54,
    "day": "Tuesday",
    "title": "Week 54 Tuesday: Transformer Models - Hands-on Practice",
    "duration": 120,
    "target": "Master transformer models through hands-on practice",
    "deliverable": "Hands-on Practice exercise for transformer models",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Transformer Models fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w54-wednesday",
    "week": 54,
    "day": "Wednesday",
    "title": "Week 54 Wednesday: Transformer Models - Real-world Application",
    "duration": 120,
    "target": "Master transformer models through real-world application",
    "deliverable": "Real-world Application exercise for transformer models",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Transformer Models fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w54-thursday",
    "week": 54,
    "day": "Thursday",
    "title": "Week 54 Thursday: Transformer Models - Advanced Techniques",
    "duration": 120,
    "target": "Master transformer models through advanced techniques",
    "deliverable": "Advanced Techniques exercise for transformer models",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Transformer Models fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w54-friday",
    "week": 54,
    "day": "Friday",
    "title": "Week 54 Friday: Transformer Models - Integration & Testing",
    "duration": 120,
    "target": "Master transformer models through integration & testing",
    "deliverable": "Integration & Testing exercise for transformer models",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Transformer Models fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w54-saturday",
    "week": 54,
    "day": "Saturday",
    "title": "Week 54 Saturday: Transformer Models - Project & Portfolio",
    "duration": 180,
    "target": "Master transformer models through project & portfolio",
    "deliverable": "Portfolio project demonstrating transformer models",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Transformer Models fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w55-monday",
    "week": 55,
    "day": "Monday",
    "title": "Week 55 Monday: GANs - Theory & Concepts",
    "duration": 120,
    "target": "Master gans through theory & concepts",
    "deliverable": "Theory & Concepts exercise for gans",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "GANs fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w55-tuesday",
    "week": 55,
    "day": "Tuesday",
    "title": "Week 55 Tuesday: GANs - Hands-on Practice",
    "duration": 120,
    "target": "Master gans through hands-on practice",
    "deliverable": "Hands-on Practice exercise for gans",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "GANs fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w55-wednesday",
    "week": 55,
    "day": "Wednesday",
    "title": "Week 55 Wednesday: GANs - Real-world Application",
    "duration": 120,
    "target": "Master gans through real-world application",
    "deliverable": "Real-world Application exercise for gans",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "GANs fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w55-thursday",
    "week": 55,
    "day": "Thursday",
    "title": "Week 55 Thursday: GANs - Advanced Techniques",
    "duration": 120,
    "target": "Master gans through advanced techniques",
    "deliverable": "Advanced Techniques exercise for gans",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "GANs fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w55-friday",
    "week": 55,
    "day": "Friday",
    "title": "Week 55 Friday: GANs - Integration & Testing",
    "duration": 120,
    "target": "Master gans through integration & testing",
    "deliverable": "Integration & Testing exercise for gans",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "GANs fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w55-saturday",
    "week": 55,
    "day": "Saturday",
    "title": "Week 55 Saturday: GANs - Project & Portfolio",
    "duration": 180,
    "target": "Master gans through project & portfolio",
    "deliverable": "Portfolio project demonstrating gans",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "GANs fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w56-monday",
    "week": 56,
    "day": "Monday",
    "title": "Week 56 Monday: Attention Mechanisms - Theory & Concepts",
    "duration": 120,
    "target": "Master attention mechanisms through theory & concepts",
    "deliverable": "Theory & Concepts exercise for attention mechanisms",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Attention Mechanisms fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w56-tuesday",
    "week": 56,
    "day": "Tuesday",
    "title": "Week 56 Tuesday: Attention Mechanisms - Hands-on Practice",
    "duration": 120,
    "target": "Master attention mechanisms through hands-on practice",
    "deliverable": "Hands-on Practice exercise for attention mechanisms",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Attention Mechanisms fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w56-wednesday",
    "week": 56,
    "day": "Wednesday",
    "title": "Week 56 Wednesday: Attention Mechanisms - Real-world Application",
    "duration": 120,
    "target": "Master attention mechanisms through real-world application",
    "deliverable": "Real-world Application exercise for attention mechanisms",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Attention Mechanisms fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w56-thursday",
    "week": 56,
    "day": "Thursday",
    "title": "Week 56 Thursday: Attention Mechanisms - Advanced Techniques",
    "duration": 120,
    "target": "Master attention mechanisms through advanced techniques",
    "deliverable": "Advanced Techniques exercise for attention mechanisms",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Attention Mechanisms fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w56-friday",
    "week": 56,
    "day": "Friday",
    "title": "Week 56 Friday: Attention Mechanisms - Integration & Testing",
    "duration": 120,
    "target": "Master attention mechanisms through integration & testing",
    "deliverable": "Integration & Testing exercise for attention mechanisms",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Attention Mechanisms fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w56-saturday",
    "week": 56,
    "day": "Saturday",
    "title": "Week 56 Saturday: Attention Mechanisms - Project & Portfolio",
    "duration": 180,
    "target": "Master attention mechanisms through project & portfolio",
    "deliverable": "Portfolio project demonstrating attention mechanisms",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Attention Mechanisms fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w57-monday",
    "week": 57,
    "day": "Monday",
    "title": "Week 57 Monday: BERT & Language Models - Theory & Concepts",
    "duration": 120,
    "target": "Master bert & language models through theory & concepts",
    "deliverable": "Theory & Concepts exercise for bert & language models",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "BERT & Language Models fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w57-tuesday",
    "week": 57,
    "day": "Tuesday",
    "title": "Week 57 Tuesday: BERT & Language Models - Hands-on Practice",
    "duration": 120,
    "target": "Master bert & language models through hands-on practice",
    "deliverable": "Hands-on Practice exercise for bert & language models",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "BERT & Language Models fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w57-wednesday",
    "week": 57,
    "day": "Wednesday",
    "title": "Week 57 Wednesday: BERT & Language Models - Real-world Application",
    "duration": 120,
    "target": "Master bert & language models through real-world application",
    "deliverable": "Real-world Application exercise for bert & language models",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "BERT & Language Models fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w57-thursday",
    "week": 57,
    "day": "Thursday",
    "title": "Week 57 Thursday: BERT & Language Models - Advanced Techniques",
    "duration": 120,
    "target": "Master bert & language models through advanced techniques",
    "deliverable": "Advanced Techniques exercise for bert & language models",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "BERT & Language Models fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w57-friday",
    "week": 57,
    "day": "Friday",
    "title": "Week 57 Friday: BERT & Language Models - Integration & Testing",
    "duration": 120,
    "target": "Master bert & language models through integration & testing",
    "deliverable": "Integration & Testing exercise for bert & language models",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "BERT & Language Models fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w57-saturday",
    "week": 57,
    "day": "Saturday",
    "title": "Week 57 Saturday: BERT & Language Models - Project & Portfolio",
    "duration": 180,
    "target": "Master bert & language models through project & portfolio",
    "deliverable": "Portfolio project demonstrating bert & language models",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "BERT & Language Models fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w58-monday",
    "week": 58,
    "day": "Monday",
    "title": "Week 58 Monday: GPT Architecture - Theory & Concepts",
    "duration": 120,
    "target": "Master gpt architecture through theory & concepts",
    "deliverable": "Theory & Concepts exercise for gpt architecture",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "GPT Architecture fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w58-tuesday",
    "week": 58,
    "day": "Tuesday",
    "title": "Week 58 Tuesday: GPT Architecture - Hands-on Practice",
    "duration": 120,
    "target": "Master gpt architecture through hands-on practice",
    "deliverable": "Hands-on Practice exercise for gpt architecture",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "GPT Architecture fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w58-wednesday",
    "week": 58,
    "day": "Wednesday",
    "title": "Week 58 Wednesday: GPT Architecture - Real-world Application",
    "duration": 120,
    "target": "Master gpt architecture through real-world application",
    "deliverable": "Real-world Application exercise for gpt architecture",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "GPT Architecture fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w58-thursday",
    "week": 58,
    "day": "Thursday",
    "title": "Week 58 Thursday: GPT Architecture - Advanced Techniques",
    "duration": 120,
    "target": "Master gpt architecture through advanced techniques",
    "deliverable": "Advanced Techniques exercise for gpt architecture",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "GPT Architecture fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w58-friday",
    "week": 58,
    "day": "Friday",
    "title": "Week 58 Friday: GPT Architecture - Integration & Testing",
    "duration": 120,
    "target": "Master gpt architecture through integration & testing",
    "deliverable": "Integration & Testing exercise for gpt architecture",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "GPT Architecture fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w58-saturday",
    "week": 58,
    "day": "Saturday",
    "title": "Week 58 Saturday: GPT Architecture - Project & Portfolio",
    "duration": 180,
    "target": "Master gpt architecture through project & portfolio",
    "deliverable": "Portfolio project demonstrating gpt architecture",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "GPT Architecture fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w59-monday",
    "week": 59,
    "day": "Monday",
    "title": "Week 59 Monday: Vision Transformers - Theory & Concepts",
    "duration": 120,
    "target": "Master vision transformers through theory & concepts",
    "deliverable": "Theory & Concepts exercise for vision transformers",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Vision Transformers fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w59-tuesday",
    "week": 59,
    "day": "Tuesday",
    "title": "Week 59 Tuesday: Vision Transformers - Hands-on Practice",
    "duration": 120,
    "target": "Master vision transformers through hands-on practice",
    "deliverable": "Hands-on Practice exercise for vision transformers",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Vision Transformers fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w59-wednesday",
    "week": 59,
    "day": "Wednesday",
    "title": "Week 59 Wednesday: Vision Transformers - Real-world Application",
    "duration": 120,
    "target": "Master vision transformers through real-world application",
    "deliverable": "Real-world Application exercise for vision transformers",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Vision Transformers fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w59-thursday",
    "week": 59,
    "day": "Thursday",
    "title": "Week 59 Thursday: Vision Transformers - Advanced Techniques",
    "duration": 120,
    "target": "Master vision transformers through advanced techniques",
    "deliverable": "Advanced Techniques exercise for vision transformers",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Vision Transformers fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w59-friday",
    "week": 59,
    "day": "Friday",
    "title": "Week 59 Friday: Vision Transformers - Integration & Testing",
    "duration": 120,
    "target": "Master vision transformers through integration & testing",
    "deliverable": "Integration & Testing exercise for vision transformers",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Vision Transformers fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w59-saturday",
    "week": 59,
    "day": "Saturday",
    "title": "Week 59 Saturday: Vision Transformers - Project & Portfolio",
    "duration": 180,
    "target": "Master vision transformers through project & portfolio",
    "deliverable": "Portfolio project demonstrating vision transformers",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Vision Transformers fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w60-monday",
    "week": 60,
    "day": "Monday",
    "title": "Week 60 Monday: Multimodal AI - Theory & Concepts",
    "duration": 120,
    "target": "Master multimodal ai through theory & concepts",
    "deliverable": "Theory & Concepts exercise for multimodal ai",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Multimodal AI fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w60-tuesday",
    "week": 60,
    "day": "Tuesday",
    "title": "Week 60 Tuesday: Multimodal AI - Hands-on Practice",
    "duration": 120,
    "target": "Master multimodal ai through hands-on practice",
    "deliverable": "Hands-on Practice exercise for multimodal ai",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Multimodal AI fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w60-wednesday",
    "week": 60,
    "day": "Wednesday",
    "title": "Week 60 Wednesday: Multimodal AI - Real-world Application",
    "duration": 120,
    "target": "Master multimodal ai through real-world application",
    "deliverable": "Real-world Application exercise for multimodal ai",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Multimodal AI fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w60-thursday",
    "week": 60,
    "day": "Thursday",
    "title": "Week 60 Thursday: Multimodal AI - Advanced Techniques",
    "duration": 120,
    "target": "Master multimodal ai through advanced techniques",
    "deliverable": "Advanced Techniques exercise for multimodal ai",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Multimodal AI fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w60-friday",
    "week": 60,
    "day": "Friday",
    "title": "Week 60 Friday: Multimodal AI - Integration & Testing",
    "duration": 120,
    "target": "Master multimodal ai through integration & testing",
    "deliverable": "Integration & Testing exercise for multimodal ai",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Multimodal AI fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w60-saturday",
    "week": 60,
    "day": "Saturday",
    "title": "Week 60 Saturday: Multimodal AI - Project & Portfolio",
    "duration": 180,
    "target": "Master multimodal ai through project & portfolio",
    "deliverable": "Portfolio project demonstrating multimodal ai",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Multimodal AI fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w61-monday",
    "week": 61,
    "day": "Monday",
    "title": "Week 61 Monday: AI Research Papers - Theory & Concepts",
    "duration": 120,
    "target": "Master ai research papers through theory & concepts",
    "deliverable": "Theory & Concepts exercise for ai research papers",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "AI Research Papers fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w61-tuesday",
    "week": 61,
    "day": "Tuesday",
    "title": "Week 61 Tuesday: AI Research Papers - Hands-on Practice",
    "duration": 120,
    "target": "Master ai research papers through hands-on practice",
    "deliverable": "Hands-on Practice exercise for ai research papers",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "AI Research Papers fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w61-wednesday",
    "week": 61,
    "day": "Wednesday",
    "title": "Week 61 Wednesday: AI Research Papers - Real-world Application",
    "duration": 120,
    "target": "Master ai research papers through real-world application",
    "deliverable": "Real-world Application exercise for ai research papers",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "AI Research Papers fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w61-thursday",
    "week": 61,
    "day": "Thursday",
    "title": "Week 61 Thursday: AI Research Papers - Advanced Techniques",
    "duration": 120,
    "target": "Master ai research papers through advanced techniques",
    "deliverable": "Advanced Techniques exercise for ai research papers",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "AI Research Papers fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w61-friday",
    "week": 61,
    "day": "Friday",
    "title": "Week 61 Friday: AI Research Papers - Integration & Testing",
    "duration": 120,
    "target": "Master ai research papers through integration & testing",
    "deliverable": "Integration & Testing exercise for ai research papers",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "AI Research Papers fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w61-saturday",
    "week": 61,
    "day": "Saturday",
    "title": "Week 61 Saturday: AI Research Papers - Project & Portfolio",
    "duration": 180,
    "target": "Master ai research papers through project & portfolio",
    "deliverable": "Portfolio project demonstrating ai research papers",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "AI Research Papers fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w62-monday",
    "week": 62,
    "day": "Monday",
    "title": "Week 62 Monday: Implementing Research - Theory & Concepts",
    "duration": 120,
    "target": "Master implementing research through theory & concepts",
    "deliverable": "Theory & Concepts exercise for implementing research",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Implementing Research fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w62-tuesday",
    "week": 62,
    "day": "Tuesday",
    "title": "Week 62 Tuesday: Implementing Research - Hands-on Practice",
    "duration": 120,
    "target": "Master implementing research through hands-on practice",
    "deliverable": "Hands-on Practice exercise for implementing research",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Implementing Research fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w62-wednesday",
    "week": 62,
    "day": "Wednesday",
    "title": "Week 62 Wednesday: Implementing Research - Real-world Application",
    "duration": 120,
    "target": "Master implementing research through real-world application",
    "deliverable": "Real-world Application exercise for implementing research",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Implementing Research fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w62-thursday",
    "week": 62,
    "day": "Thursday",
    "title": "Week 62 Thursday: Implementing Research - Advanced Techniques",
    "duration": 120,
    "target": "Master implementing research through advanced techniques",
    "deliverable": "Advanced Techniques exercise for implementing research",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Implementing Research fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w62-friday",
    "week": 62,
    "day": "Friday",
    "title": "Week 62 Friday: Implementing Research - Integration & Testing",
    "duration": 120,
    "target": "Master implementing research through integration & testing",
    "deliverable": "Integration & Testing exercise for implementing research",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Implementing Research fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w62-saturday",
    "week": 62,
    "day": "Saturday",
    "title": "Week 62 Saturday: Implementing Research - Project & Portfolio",
    "duration": 180,
    "target": "Master implementing research through project & portfolio",
    "deliverable": "Portfolio project demonstrating implementing research",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Implementing Research fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w63-monday",
    "week": 63,
    "day": "Monday",
    "title": "Week 63 Monday: Custom Architectures - Theory & Concepts",
    "duration": 120,
    "target": "Master custom architectures through theory & concepts",
    "deliverable": "Theory & Concepts exercise for custom architectures",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Custom Architectures fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w63-tuesday",
    "week": 63,
    "day": "Tuesday",
    "title": "Week 63 Tuesday: Custom Architectures - Hands-on Practice",
    "duration": 120,
    "target": "Master custom architectures through hands-on practice",
    "deliverable": "Hands-on Practice exercise for custom architectures",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Custom Architectures fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w63-wednesday",
    "week": 63,
    "day": "Wednesday",
    "title": "Week 63 Wednesday: Custom Architectures - Real-world Application",
    "duration": 120,
    "target": "Master custom architectures through real-world application",
    "deliverable": "Real-world Application exercise for custom architectures",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Custom Architectures fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w63-thursday",
    "week": 63,
    "day": "Thursday",
    "title": "Week 63 Thursday: Custom Architectures - Advanced Techniques",
    "duration": 120,
    "target": "Master custom architectures through advanced techniques",
    "deliverable": "Advanced Techniques exercise for custom architectures",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Custom Architectures fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w63-friday",
    "week": 63,
    "day": "Friday",
    "title": "Week 63 Friday: Custom Architectures - Integration & Testing",
    "duration": 120,
    "target": "Master custom architectures through integration & testing",
    "deliverable": "Integration & Testing exercise for custom architectures",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Custom Architectures fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w63-saturday",
    "week": 63,
    "day": "Saturday",
    "title": "Week 63 Saturday: Custom Architectures - Project & Portfolio",
    "duration": 180,
    "target": "Master custom architectures through project & portfolio",
    "deliverable": "Portfolio project demonstrating custom architectures",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Custom Architectures fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w64-monday",
    "week": 64,
    "day": "Monday",
    "title": "Week 64 Monday: Optimization - Theory & Concepts",
    "duration": 120,
    "target": "Master optimization through theory & concepts",
    "deliverable": "Theory & Concepts exercise for optimization",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Optimization fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w64-tuesday",
    "week": 64,
    "day": "Tuesday",
    "title": "Week 64 Tuesday: Optimization - Hands-on Practice",
    "duration": 120,
    "target": "Master optimization through hands-on practice",
    "deliverable": "Hands-on Practice exercise for optimization",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Optimization fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w64-wednesday",
    "week": 64,
    "day": "Wednesday",
    "title": "Week 64 Wednesday: Optimization - Real-world Application",
    "duration": 120,
    "target": "Master optimization through real-world application",
    "deliverable": "Real-world Application exercise for optimization",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Optimization fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w64-thursday",
    "week": 64,
    "day": "Thursday",
    "title": "Week 64 Thursday: Optimization - Advanced Techniques",
    "duration": 120,
    "target": "Master optimization through advanced techniques",
    "deliverable": "Advanced Techniques exercise for optimization",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Optimization fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w64-friday",
    "week": 64,
    "day": "Friday",
    "title": "Week 64 Friday: Optimization - Integration & Testing",
    "duration": 120,
    "target": "Master optimization through integration & testing",
    "deliverable": "Integration & Testing exercise for optimization",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Optimization fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w64-saturday",
    "week": 64,
    "day": "Saturday",
    "title": "Week 64 Saturday: Optimization - Project & Portfolio",
    "duration": 180,
    "target": "Master optimization through project & portfolio",
    "deliverable": "Portfolio project demonstrating optimization",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Optimization fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w65-monday",
    "week": 65,
    "day": "Monday",
    "title": "Week 65 Monday: Distributed Training - Theory & Concepts",
    "duration": 120,
    "target": "Master distributed training through theory & concepts",
    "deliverable": "Theory & Concepts exercise for distributed training",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Distributed Training fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w65-tuesday",
    "week": 65,
    "day": "Tuesday",
    "title": "Week 65 Tuesday: Distributed Training - Hands-on Practice",
    "duration": 120,
    "target": "Master distributed training through hands-on practice",
    "deliverable": "Hands-on Practice exercise for distributed training",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Distributed Training fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w65-wednesday",
    "week": 65,
    "day": "Wednesday",
    "title": "Week 65 Wednesday: Distributed Training - Real-world Application",
    "duration": 120,
    "target": "Master distributed training through real-world application",
    "deliverable": "Real-world Application exercise for distributed training",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Distributed Training fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w65-thursday",
    "week": 65,
    "day": "Thursday",
    "title": "Week 65 Thursday: Distributed Training - Advanced Techniques",
    "duration": 120,
    "target": "Master distributed training through advanced techniques",
    "deliverable": "Advanced Techniques exercise for distributed training",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Distributed Training fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w65-friday",
    "week": 65,
    "day": "Friday",
    "title": "Week 65 Friday: Distributed Training - Integration & Testing",
    "duration": 120,
    "target": "Master distributed training through integration & testing",
    "deliverable": "Integration & Testing exercise for distributed training",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Distributed Training fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w65-saturday",
    "week": 65,
    "day": "Saturday",
    "title": "Week 65 Saturday: Distributed Training - Project & Portfolio",
    "duration": 180,
    "target": "Master distributed training through project & portfolio",
    "deliverable": "Portfolio project demonstrating distributed training",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Distributed Training fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w66-monday",
    "week": 66,
    "day": "Monday",
    "title": "Week 66 Monday: Model Compression - Theory & Concepts",
    "duration": 120,
    "target": "Master model compression through theory & concepts",
    "deliverable": "Theory & Concepts exercise for model compression",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Model Compression fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w66-tuesday",
    "week": 66,
    "day": "Tuesday",
    "title": "Week 66 Tuesday: Model Compression - Hands-on Practice",
    "duration": 120,
    "target": "Master model compression through hands-on practice",
    "deliverable": "Hands-on Practice exercise for model compression",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Model Compression fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w66-wednesday",
    "week": 66,
    "day": "Wednesday",
    "title": "Week 66 Wednesday: Model Compression - Real-world Application",
    "duration": 120,
    "target": "Master model compression through real-world application",
    "deliverable": "Real-world Application exercise for model compression",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Model Compression fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w66-thursday",
    "week": 66,
    "day": "Thursday",
    "title": "Week 66 Thursday: Model Compression - Advanced Techniques",
    "duration": 120,
    "target": "Master model compression through advanced techniques",
    "deliverable": "Advanced Techniques exercise for model compression",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Model Compression fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w66-friday",
    "week": 66,
    "day": "Friday",
    "title": "Week 66 Friday: Model Compression - Integration & Testing",
    "duration": 120,
    "target": "Master model compression through integration & testing",
    "deliverable": "Integration & Testing exercise for model compression",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Model Compression fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w66-saturday",
    "week": 66,
    "day": "Saturday",
    "title": "Week 66 Saturday: Model Compression - Project & Portfolio",
    "duration": 180,
    "target": "Master model compression through project & portfolio",
    "deliverable": "Portfolio project demonstrating model compression",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Model Compression fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w67-monday",
    "week": 67,
    "day": "Monday",
    "title": "Week 67 Monday: Edge AI - Theory & Concepts",
    "duration": 120,
    "target": "Master edge ai through theory & concepts",
    "deliverable": "Theory & Concepts exercise for edge ai",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Edge AI fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w67-tuesday",
    "week": 67,
    "day": "Tuesday",
    "title": "Week 67 Tuesday: Edge AI - Hands-on Practice",
    "duration": 120,
    "target": "Master edge ai through hands-on practice",
    "deliverable": "Hands-on Practice exercise for edge ai",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Edge AI fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w67-wednesday",
    "week": 67,
    "day": "Wednesday",
    "title": "Week 67 Wednesday: Edge AI - Real-world Application",
    "duration": 120,
    "target": "Master edge ai through real-world application",
    "deliverable": "Real-world Application exercise for edge ai",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Edge AI fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w67-thursday",
    "week": 67,
    "day": "Thursday",
    "title": "Week 67 Thursday: Edge AI - Advanced Techniques",
    "duration": 120,
    "target": "Master edge ai through advanced techniques",
    "deliverable": "Advanced Techniques exercise for edge ai",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Edge AI fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w67-friday",
    "week": 67,
    "day": "Friday",
    "title": "Week 67 Friday: Edge AI - Integration & Testing",
    "duration": 120,
    "target": "Master edge ai through integration & testing",
    "deliverable": "Integration & Testing exercise for edge ai",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Edge AI fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w67-saturday",
    "week": 67,
    "day": "Saturday",
    "title": "Week 67 Saturday: Edge AI - Project & Portfolio",
    "duration": 180,
    "target": "Master edge ai through project & portfolio",
    "deliverable": "Portfolio project demonstrating edge ai",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Edge AI fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w68-monday",
    "week": 68,
    "day": "Monday",
    "title": "Week 68 Monday: Production ML - Theory & Concepts",
    "duration": 120,
    "target": "Master production ml through theory & concepts",
    "deliverable": "Theory & Concepts exercise for production ml",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Production ML fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w68-tuesday",
    "week": 68,
    "day": "Tuesday",
    "title": "Week 68 Tuesday: Production ML - Hands-on Practice",
    "duration": 120,
    "target": "Master production ml through hands-on practice",
    "deliverable": "Hands-on Practice exercise for production ml",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Production ML fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w68-wednesday",
    "week": 68,
    "day": "Wednesday",
    "title": "Week 68 Wednesday: Production ML - Real-world Application",
    "duration": 120,
    "target": "Master production ml through real-world application",
    "deliverable": "Real-world Application exercise for production ml",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Production ML fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w68-thursday",
    "week": 68,
    "day": "Thursday",
    "title": "Week 68 Thursday: Production ML - Advanced Techniques",
    "duration": 120,
    "target": "Master production ml through advanced techniques",
    "deliverable": "Advanced Techniques exercise for production ml",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Production ML fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w68-friday",
    "week": 68,
    "day": "Friday",
    "title": "Week 68 Friday: Production ML - Integration & Testing",
    "duration": 120,
    "target": "Master production ml through integration & testing",
    "deliverable": "Integration & Testing exercise for production ml",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Production ML fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w68-saturday",
    "week": 68,
    "day": "Saturday",
    "title": "Week 68 Saturday: Production ML - Project & Portfolio",
    "duration": 180,
    "target": "Master production ml through project & portfolio",
    "deliverable": "Portfolio project demonstrating production ml",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Production ML fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w69-monday",
    "week": 69,
    "day": "Monday",
    "title": "Week 69 Monday: AI System Design - Theory & Concepts",
    "duration": 120,
    "target": "Master ai system design through theory & concepts",
    "deliverable": "Theory & Concepts exercise for ai system design",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "AI System Design fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w69-tuesday",
    "week": 69,
    "day": "Tuesday",
    "title": "Week 69 Tuesday: AI System Design - Hands-on Practice",
    "duration": 120,
    "target": "Master ai system design through hands-on practice",
    "deliverable": "Hands-on Practice exercise for ai system design",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "AI System Design fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w69-wednesday",
    "week": 69,
    "day": "Wednesday",
    "title": "Week 69 Wednesday: AI System Design - Real-world Application",
    "duration": 120,
    "target": "Master ai system design through real-world application",
    "deliverable": "Real-world Application exercise for ai system design",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "AI System Design fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w69-thursday",
    "week": 69,
    "day": "Thursday",
    "title": "Week 69 Thursday: AI System Design - Advanced Techniques",
    "duration": 120,
    "target": "Master ai system design through advanced techniques",
    "deliverable": "Advanced Techniques exercise for ai system design",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "AI System Design fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w69-friday",
    "week": 69,
    "day": "Friday",
    "title": "Week 69 Friday: AI System Design - Integration & Testing",
    "duration": 120,
    "target": "Master ai system design through integration & testing",
    "deliverable": "Integration & Testing exercise for ai system design",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "AI System Design fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w69-saturday",
    "week": 69,
    "day": "Saturday",
    "title": "Week 69 Saturday: AI System Design - Project & Portfolio",
    "duration": 180,
    "target": "Master ai system design through project & portfolio",
    "deliverable": "Portfolio project demonstrating ai system design",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "AI System Design fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w70-monday",
    "week": 70,
    "day": "Monday",
    "title": "Week 70 Monday: Scalability - Theory & Concepts",
    "duration": 120,
    "target": "Master scalability through theory & concepts",
    "deliverable": "Theory & Concepts exercise for scalability",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Scalability fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w70-tuesday",
    "week": 70,
    "day": "Tuesday",
    "title": "Week 70 Tuesday: Scalability - Hands-on Practice",
    "duration": 120,
    "target": "Master scalability through hands-on practice",
    "deliverable": "Hands-on Practice exercise for scalability",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Scalability fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w70-wednesday",
    "week": 70,
    "day": "Wednesday",
    "title": "Week 70 Wednesday: Scalability - Real-world Application",
    "duration": 120,
    "target": "Master scalability through real-world application",
    "deliverable": "Real-world Application exercise for scalability",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Scalability fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w70-thursday",
    "week": 70,
    "day": "Thursday",
    "title": "Week 70 Thursday: Scalability - Advanced Techniques",
    "duration": 120,
    "target": "Master scalability through advanced techniques",
    "deliverable": "Advanced Techniques exercise for scalability",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Scalability fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w70-friday",
    "week": 70,
    "day": "Friday",
    "title": "Week 70 Friday: Scalability - Integration & Testing",
    "duration": 120,
    "target": "Master scalability through integration & testing",
    "deliverable": "Integration & Testing exercise for scalability",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Scalability fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w70-saturday",
    "week": 70,
    "day": "Saturday",
    "title": "Week 70 Saturday: Scalability - Project & Portfolio",
    "duration": 180,
    "target": "Master scalability through project & portfolio",
    "deliverable": "Portfolio project demonstrating scalability",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Scalability fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w71-monday",
    "week": 71,
    "day": "Monday",
    "title": "Week 71 Monday: Performance Tuning - Theory & Concepts",
    "duration": 120,
    "target": "Master performance tuning through theory & concepts",
    "deliverable": "Theory & Concepts exercise for performance tuning",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Performance Tuning fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w71-tuesday",
    "week": 71,
    "day": "Tuesday",
    "title": "Week 71 Tuesday: Performance Tuning - Hands-on Practice",
    "duration": 120,
    "target": "Master performance tuning through hands-on practice",
    "deliverable": "Hands-on Practice exercise for performance tuning",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Performance Tuning fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w71-wednesday",
    "week": 71,
    "day": "Wednesday",
    "title": "Week 71 Wednesday: Performance Tuning - Real-world Application",
    "duration": 120,
    "target": "Master performance tuning through real-world application",
    "deliverable": "Real-world Application exercise for performance tuning",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Performance Tuning fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w71-thursday",
    "week": 71,
    "day": "Thursday",
    "title": "Week 71 Thursday: Performance Tuning - Advanced Techniques",
    "duration": 120,
    "target": "Master performance tuning through advanced techniques",
    "deliverable": "Advanced Techniques exercise for performance tuning",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Performance Tuning fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w71-friday",
    "week": 71,
    "day": "Friday",
    "title": "Week 71 Friday: Performance Tuning - Integration & Testing",
    "duration": 120,
    "target": "Master performance tuning through integration & testing",
    "deliverable": "Integration & Testing exercise for performance tuning",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Performance Tuning fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w71-saturday",
    "week": 71,
    "day": "Saturday",
    "title": "Week 71 Saturday: Performance Tuning - Project & Portfolio",
    "duration": 180,
    "target": "Master performance tuning through project & portfolio",
    "deliverable": "Portfolio project demonstrating performance tuning",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Performance Tuning fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w72-monday",
    "week": 72,
    "day": "Monday",
    "title": "Week 72 Monday: Advanced MLOps - Theory & Concepts",
    "duration": 120,
    "target": "Master advanced mlops through theory & concepts",
    "deliverable": "Theory & Concepts exercise for advanced mlops",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Advanced MLOps fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w72-tuesday",
    "week": 72,
    "day": "Tuesday",
    "title": "Week 72 Tuesday: Advanced MLOps - Hands-on Practice",
    "duration": 120,
    "target": "Master advanced mlops through hands-on practice",
    "deliverable": "Hands-on Practice exercise for advanced mlops",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Advanced MLOps fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w72-wednesday",
    "week": 72,
    "day": "Wednesday",
    "title": "Week 72 Wednesday: Advanced MLOps - Real-world Application",
    "duration": 120,
    "target": "Master advanced mlops through real-world application",
    "deliverable": "Real-world Application exercise for advanced mlops",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Advanced MLOps fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w72-thursday",
    "week": 72,
    "day": "Thursday",
    "title": "Week 72 Thursday: Advanced MLOps - Advanced Techniques",
    "duration": 120,
    "target": "Master advanced mlops through advanced techniques",
    "deliverable": "Advanced Techniques exercise for advanced mlops",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Advanced MLOps fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w72-friday",
    "week": 72,
    "day": "Friday",
    "title": "Week 72 Friday: Advanced MLOps - Integration & Testing",
    "duration": 120,
    "target": "Master advanced mlops through integration & testing",
    "deliverable": "Integration & Testing exercise for advanced mlops",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Advanced MLOps fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w72-saturday",
    "week": 72,
    "day": "Saturday",
    "title": "Week 72 Saturday: Advanced MLOps - Project & Portfolio",
    "duration": 180,
    "target": "Master advanced mlops through project & portfolio",
    "deliverable": "Portfolio project demonstrating advanced mlops",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Advanced MLOps fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w73-monday",
    "week": 73,
    "day": "Monday",
    "title": "Week 73 Monday: AI Safety - Theory & Concepts",
    "duration": 120,
    "target": "Master ai safety through theory & concepts",
    "deliverable": "Theory & Concepts exercise for ai safety",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "AI Safety fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w73-tuesday",
    "week": 73,
    "day": "Tuesday",
    "title": "Week 73 Tuesday: AI Safety - Hands-on Practice",
    "duration": 120,
    "target": "Master ai safety through hands-on practice",
    "deliverable": "Hands-on Practice exercise for ai safety",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "AI Safety fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w73-wednesday",
    "week": 73,
    "day": "Wednesday",
    "title": "Week 73 Wednesday: AI Safety - Real-world Application",
    "duration": 120,
    "target": "Master ai safety through real-world application",
    "deliverable": "Real-world Application exercise for ai safety",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "AI Safety fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w73-thursday",
    "week": 73,
    "day": "Thursday",
    "title": "Week 73 Thursday: AI Safety - Advanced Techniques",
    "duration": 120,
    "target": "Master ai safety through advanced techniques",
    "deliverable": "Advanced Techniques exercise for ai safety",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "AI Safety fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w73-friday",
    "week": 73,
    "day": "Friday",
    "title": "Week 73 Friday: AI Safety - Integration & Testing",
    "duration": 120,
    "target": "Master ai safety through integration & testing",
    "deliverable": "Integration & Testing exercise for ai safety",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "AI Safety fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w73-saturday",
    "week": 73,
    "day": "Saturday",
    "title": "Week 73 Saturday: AI Safety - Project & Portfolio",
    "duration": 180,
    "target": "Master ai safety through project & portfolio",
    "deliverable": "Portfolio project demonstrating ai safety",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "AI Safety fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w74-monday",
    "week": 74,
    "day": "Monday",
    "title": "Week 74 Monday: Bias & Fairness - Theory & Concepts",
    "duration": 120,
    "target": "Master bias & fairness through theory & concepts",
    "deliverable": "Theory & Concepts exercise for bias & fairness",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Bias & Fairness fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w74-tuesday",
    "week": 74,
    "day": "Tuesday",
    "title": "Week 74 Tuesday: Bias & Fairness - Hands-on Practice",
    "duration": 120,
    "target": "Master bias & fairness through hands-on practice",
    "deliverable": "Hands-on Practice exercise for bias & fairness",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Bias & Fairness fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w74-wednesday",
    "week": 74,
    "day": "Wednesday",
    "title": "Week 74 Wednesday: Bias & Fairness - Real-world Application",
    "duration": 120,
    "target": "Master bias & fairness through real-world application",
    "deliverable": "Real-world Application exercise for bias & fairness",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Bias & Fairness fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w74-thursday",
    "week": 74,
    "day": "Thursday",
    "title": "Week 74 Thursday: Bias & Fairness - Advanced Techniques",
    "duration": 120,
    "target": "Master bias & fairness through advanced techniques",
    "deliverable": "Advanced Techniques exercise for bias & fairness",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Bias & Fairness fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w74-friday",
    "week": 74,
    "day": "Friday",
    "title": "Week 74 Friday: Bias & Fairness - Integration & Testing",
    "duration": 120,
    "target": "Master bias & fairness through integration & testing",
    "deliverable": "Integration & Testing exercise for bias & fairness",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Bias & Fairness fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w74-saturday",
    "week": 74,
    "day": "Saturday",
    "title": "Week 74 Saturday: Bias & Fairness - Project & Portfolio",
    "duration": 180,
    "target": "Master bias & fairness through project & portfolio",
    "deliverable": "Portfolio project demonstrating bias & fairness",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Bias & Fairness fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w75-monday",
    "week": 75,
    "day": "Monday",
    "title": "Week 75 Monday: Explainable AI - Theory & Concepts",
    "duration": 120,
    "target": "Master explainable ai through theory & concepts",
    "deliverable": "Theory & Concepts exercise for explainable ai",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Explainable AI fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w75-tuesday",
    "week": 75,
    "day": "Tuesday",
    "title": "Week 75 Tuesday: Explainable AI - Hands-on Practice",
    "duration": 120,
    "target": "Master explainable ai through hands-on practice",
    "deliverable": "Hands-on Practice exercise for explainable ai",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Explainable AI fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w75-wednesday",
    "week": 75,
    "day": "Wednesday",
    "title": "Week 75 Wednesday: Explainable AI - Real-world Application",
    "duration": 120,
    "target": "Master explainable ai through real-world application",
    "deliverable": "Real-world Application exercise for explainable ai",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Explainable AI fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w75-thursday",
    "week": 75,
    "day": "Thursday",
    "title": "Week 75 Thursday: Explainable AI - Advanced Techniques",
    "duration": 120,
    "target": "Master explainable ai through advanced techniques",
    "deliverable": "Advanced Techniques exercise for explainable ai",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Explainable AI fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w75-friday",
    "week": 75,
    "day": "Friday",
    "title": "Week 75 Friday: Explainable AI - Integration & Testing",
    "duration": 120,
    "target": "Master explainable ai through integration & testing",
    "deliverable": "Integration & Testing exercise for explainable ai",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Explainable AI fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w75-saturday",
    "week": 75,
    "day": "Saturday",
    "title": "Week 75 Saturday: Explainable AI - Project & Portfolio",
    "duration": 180,
    "target": "Master explainable ai through project & portfolio",
    "deliverable": "Portfolio project demonstrating explainable ai",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Explainable AI fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w76-monday",
    "week": 76,
    "day": "Monday",
    "title": "Week 76 Monday: AI Governance - Theory & Concepts",
    "duration": 120,
    "target": "Master ai governance through theory & concepts",
    "deliverable": "Theory & Concepts exercise for ai governance",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "AI Governance fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w76-tuesday",
    "week": 76,
    "day": "Tuesday",
    "title": "Week 76 Tuesday: AI Governance - Hands-on Practice",
    "duration": 120,
    "target": "Master ai governance through hands-on practice",
    "deliverable": "Hands-on Practice exercise for ai governance",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "AI Governance fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w76-wednesday",
    "week": 76,
    "day": "Wednesday",
    "title": "Week 76 Wednesday: AI Governance - Real-world Application",
    "duration": 120,
    "target": "Master ai governance through real-world application",
    "deliverable": "Real-world Application exercise for ai governance",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "AI Governance fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w76-thursday",
    "week": 76,
    "day": "Thursday",
    "title": "Week 76 Thursday: AI Governance - Advanced Techniques",
    "duration": 120,
    "target": "Master ai governance through advanced techniques",
    "deliverable": "Advanced Techniques exercise for ai governance",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "AI Governance fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w76-friday",
    "week": 76,
    "day": "Friday",
    "title": "Week 76 Friday: AI Governance - Integration & Testing",
    "duration": 120,
    "target": "Master ai governance through integration & testing",
    "deliverable": "Integration & Testing exercise for ai governance",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "AI Governance fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w76-saturday",
    "week": 76,
    "day": "Saturday",
    "title": "Week 76 Saturday: AI Governance - Project & Portfolio",
    "duration": 180,
    "target": "Master ai governance through project & portfolio",
    "deliverable": "Portfolio project demonstrating ai governance",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "AI Governance fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w77-monday",
    "week": 77,
    "day": "Monday",
    "title": "Week 77 Monday: Startup Skills - Theory & Concepts",
    "duration": 120,
    "target": "Master startup skills through theory & concepts",
    "deliverable": "Theory & Concepts exercise for startup skills",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Startup Skills fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w77-tuesday",
    "week": 77,
    "day": "Tuesday",
    "title": "Week 77 Tuesday: Startup Skills - Hands-on Practice",
    "duration": 120,
    "target": "Master startup skills through hands-on practice",
    "deliverable": "Hands-on Practice exercise for startup skills",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Startup Skills fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w77-wednesday",
    "week": 77,
    "day": "Wednesday",
    "title": "Week 77 Wednesday: Startup Skills - Real-world Application",
    "duration": 120,
    "target": "Master startup skills through real-world application",
    "deliverable": "Real-world Application exercise for startup skills",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Startup Skills fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w77-thursday",
    "week": 77,
    "day": "Thursday",
    "title": "Week 77 Thursday: Startup Skills - Advanced Techniques",
    "duration": 120,
    "target": "Master startup skills through advanced techniques",
    "deliverable": "Advanced Techniques exercise for startup skills",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Startup Skills fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w77-friday",
    "week": 77,
    "day": "Friday",
    "title": "Week 77 Friday: Startup Skills - Integration & Testing",
    "duration": 120,
    "target": "Master startup skills through integration & testing",
    "deliverable": "Integration & Testing exercise for startup skills",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Startup Skills fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w77-saturday",
    "week": 77,
    "day": "Saturday",
    "title": "Week 77 Saturday: Startup Skills - Project & Portfolio",
    "duration": 180,
    "target": "Master startup skills through project & portfolio",
    "deliverable": "Portfolio project demonstrating startup skills",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Startup Skills fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w78-monday",
    "week": 78,
    "day": "Monday",
    "title": "Week 78 Monday: Team Leadership - Theory & Concepts",
    "duration": 120,
    "target": "Master team leadership through theory & concepts",
    "deliverable": "Theory & Concepts exercise for team leadership",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Team Leadership fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w78-tuesday",
    "week": 78,
    "day": "Tuesday",
    "title": "Week 78 Tuesday: Team Leadership - Hands-on Practice",
    "duration": 120,
    "target": "Master team leadership through hands-on practice",
    "deliverable": "Hands-on Practice exercise for team leadership",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Team Leadership fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w78-wednesday",
    "week": 78,
    "day": "Wednesday",
    "title": "Week 78 Wednesday: Team Leadership - Real-world Application",
    "duration": 120,
    "target": "Master team leadership through real-world application",
    "deliverable": "Real-world Application exercise for team leadership",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Team Leadership fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w78-thursday",
    "week": 78,
    "day": "Thursday",
    "title": "Week 78 Thursday: Team Leadership - Advanced Techniques",
    "duration": 120,
    "target": "Master team leadership through advanced techniques",
    "deliverable": "Advanced Techniques exercise for team leadership",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Team Leadership fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w78-friday",
    "week": 78,
    "day": "Friday",
    "title": "Week 78 Friday: Team Leadership - Integration & Testing",
    "duration": 120,
    "target": "Master team leadership through integration & testing",
    "deliverable": "Integration & Testing exercise for team leadership",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Team Leadership fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w78-saturday",
    "week": 78,
    "day": "Saturday",
    "title": "Week 78 Saturday: Team Leadership - Project & Portfolio",
    "duration": 180,
    "target": "Master team leadership through project & portfolio",
    "deliverable": "Portfolio project demonstrating team leadership",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Team Leadership fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w79-monday",
    "week": 79,
    "day": "Monday",
    "title": "Week 79 Monday: Product Development - Theory & Concepts",
    "duration": 120,
    "target": "Master product development through theory & concepts",
    "deliverable": "Theory & Concepts exercise for product development",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Product Development fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w79-tuesday",
    "week": 79,
    "day": "Tuesday",
    "title": "Week 79 Tuesday: Product Development - Hands-on Practice",
    "duration": 120,
    "target": "Master product development through hands-on practice",
    "deliverable": "Hands-on Practice exercise for product development",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Product Development fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w79-wednesday",
    "week": 79,
    "day": "Wednesday",
    "title": "Week 79 Wednesday: Product Development - Real-world Application",
    "duration": 120,
    "target": "Master product development through real-world application",
    "deliverable": "Real-world Application exercise for product development",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Product Development fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w79-thursday",
    "week": 79,
    "day": "Thursday",
    "title": "Week 79 Thursday: Product Development - Advanced Techniques",
    "duration": 120,
    "target": "Master product development through advanced techniques",
    "deliverable": "Advanced Techniques exercise for product development",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Product Development fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w79-friday",
    "week": 79,
    "day": "Friday",
    "title": "Week 79 Friday: Product Development - Integration & Testing",
    "duration": 120,
    "target": "Master product development through integration & testing",
    "deliverable": "Integration & Testing exercise for product development",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Product Development fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w79-saturday",
    "week": 79,
    "day": "Saturday",
    "title": "Week 79 Saturday: Product Development - Project & Portfolio",
    "duration": 180,
    "target": "Master product development through project & portfolio",
    "deliverable": "Portfolio project demonstrating product development",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Product Development fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w80-monday",
    "week": 80,
    "day": "Monday",
    "title": "Week 80 Monday: Business Strategy - Theory & Concepts",
    "duration": 120,
    "target": "Master business strategy through theory & concepts",
    "deliverable": "Theory & Concepts exercise for business strategy",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Business Strategy fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w80-tuesday",
    "week": 80,
    "day": "Tuesday",
    "title": "Week 80 Tuesday: Business Strategy - Hands-on Practice",
    "duration": 120,
    "target": "Master business strategy through hands-on practice",
    "deliverable": "Hands-on Practice exercise for business strategy",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Business Strategy fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w80-wednesday",
    "week": 80,
    "day": "Wednesday",
    "title": "Week 80 Wednesday: Business Strategy - Real-world Application",
    "duration": 120,
    "target": "Master business strategy through real-world application",
    "deliverable": "Real-world Application exercise for business strategy",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Business Strategy fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w80-thursday",
    "week": 80,
    "day": "Thursday",
    "title": "Week 80 Thursday: Business Strategy - Advanced Techniques",
    "duration": 120,
    "target": "Master business strategy through advanced techniques",
    "deliverable": "Advanced Techniques exercise for business strategy",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Business Strategy fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w80-friday",
    "week": 80,
    "day": "Friday",
    "title": "Week 80 Friday: Business Strategy - Integration & Testing",
    "duration": 120,
    "target": "Master business strategy through integration & testing",
    "deliverable": "Integration & Testing exercise for business strategy",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Business Strategy fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w80-saturday",
    "week": 80,
    "day": "Saturday",
    "title": "Week 80 Saturday: Business Strategy - Project & Portfolio",
    "duration": 180,
    "target": "Master business strategy through project & portfolio",
    "deliverable": "Portfolio project demonstrating business strategy",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Business Strategy fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w81-monday",
    "week": 81,
    "day": "Monday",
    "title": "Week 81 Monday: Research Collaboration - Theory & Concepts",
    "duration": 120,
    "target": "Master research collaboration through theory & concepts",
    "deliverable": "Theory & Concepts exercise for research collaboration",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Research Collaboration fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w81-tuesday",
    "week": 81,
    "day": "Tuesday",
    "title": "Week 81 Tuesday: Research Collaboration - Hands-on Practice",
    "duration": 120,
    "target": "Master research collaboration through hands-on practice",
    "deliverable": "Hands-on Practice exercise for research collaboration",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Research Collaboration fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w81-wednesday",
    "week": 81,
    "day": "Wednesday",
    "title": "Week 81 Wednesday: Research Collaboration - Real-world Application",
    "duration": 120,
    "target": "Master research collaboration through real-world application",
    "deliverable": "Real-world Application exercise for research collaboration",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Research Collaboration fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w81-thursday",
    "week": 81,
    "day": "Thursday",
    "title": "Week 81 Thursday: Research Collaboration - Advanced Techniques",
    "duration": 120,
    "target": "Master research collaboration through advanced techniques",
    "deliverable": "Advanced Techniques exercise for research collaboration",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Research Collaboration fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w81-friday",
    "week": 81,
    "day": "Friday",
    "title": "Week 81 Friday: Research Collaboration - Integration & Testing",
    "duration": 120,
    "target": "Master research collaboration through integration & testing",
    "deliverable": "Integration & Testing exercise for research collaboration",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Research Collaboration fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w81-saturday",
    "week": 81,
    "day": "Saturday",
    "title": "Week 81 Saturday: Research Collaboration - Project & Portfolio",
    "duration": 180,
    "target": "Master research collaboration through project & portfolio",
    "deliverable": "Portfolio project demonstrating research collaboration",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Research Collaboration fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w82-monday",
    "week": 82,
    "day": "Monday",
    "title": "Week 82 Monday: Publication - Theory & Concepts",
    "duration": 120,
    "target": "Master publication through theory & concepts",
    "deliverable": "Theory & Concepts exercise for publication",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Publication fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w82-tuesday",
    "week": 82,
    "day": "Tuesday",
    "title": "Week 82 Tuesday: Publication - Hands-on Practice",
    "duration": 120,
    "target": "Master publication through hands-on practice",
    "deliverable": "Hands-on Practice exercise for publication",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Publication fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w82-wednesday",
    "week": 82,
    "day": "Wednesday",
    "title": "Week 82 Wednesday: Publication - Real-world Application",
    "duration": 120,
    "target": "Master publication through real-world application",
    "deliverable": "Real-world Application exercise for publication",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Publication fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w82-thursday",
    "week": 82,
    "day": "Thursday",
    "title": "Week 82 Thursday: Publication - Advanced Techniques",
    "duration": 120,
    "target": "Master publication through advanced techniques",
    "deliverable": "Advanced Techniques exercise for publication",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Publication fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w82-friday",
    "week": 82,
    "day": "Friday",
    "title": "Week 82 Friday: Publication - Integration & Testing",
    "duration": 120,
    "target": "Master publication through integration & testing",
    "deliverable": "Integration & Testing exercise for publication",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Publication fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w82-saturday",
    "week": 82,
    "day": "Saturday",
    "title": "Week 82 Saturday: Publication - Project & Portfolio",
    "duration": 180,
    "target": "Master publication through project & portfolio",
    "deliverable": "Portfolio project demonstrating publication",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Publication fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w83-monday",
    "week": 83,
    "day": "Monday",
    "title": "Week 83 Monday: Conference Presentations - Theory & Concepts",
    "duration": 120,
    "target": "Master conference presentations through theory & concepts",
    "deliverable": "Theory & Concepts exercise for conference presentations",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Conference Presentations fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w83-tuesday",
    "week": 83,
    "day": "Tuesday",
    "title": "Week 83 Tuesday: Conference Presentations - Hands-on Practice",
    "duration": 120,
    "target": "Master conference presentations through hands-on practice",
    "deliverable": "Hands-on Practice exercise for conference presentations",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Conference Presentations fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w83-wednesday",
    "week": 83,
    "day": "Wednesday",
    "title": "Week 83 Wednesday: Conference Presentations - Real-world Application",
    "duration": 120,
    "target": "Master conference presentations through real-world application",
    "deliverable": "Real-world Application exercise for conference presentations",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Conference Presentations fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w83-thursday",
    "week": 83,
    "day": "Thursday",
    "title": "Week 83 Thursday: Conference Presentations - Advanced Techniques",
    "duration": 120,
    "target": "Master conference presentations through advanced techniques",
    "deliverable": "Advanced Techniques exercise for conference presentations",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Conference Presentations fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w83-friday",
    "week": 83,
    "day": "Friday",
    "title": "Week 83 Friday: Conference Presentations - Integration & Testing",
    "duration": 120,
    "target": "Master conference presentations through integration & testing",
    "deliverable": "Integration & Testing exercise for conference presentations",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Conference Presentations fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w83-saturday",
    "week": 83,
    "day": "Saturday",
    "title": "Week 83 Saturday: Conference Presentations - Project & Portfolio",
    "duration": 180,
    "target": "Master conference presentations through project & portfolio",
    "deliverable": "Portfolio project demonstrating conference presentations",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Conference Presentations fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  },
  {
    "id": "w84-monday",
    "week": 84,
    "day": "Monday",
    "title": "Week 84 Monday: Industry Impact - Theory & Concepts",
    "duration": 120,
    "target": "Master industry impact through theory & concepts",
    "deliverable": "Theory & Concepts exercise for industry impact",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Industry Impact fundamentals",
      "Theory & Concepts techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete theory & concepts requirements"
  },
  {
    "id": "w84-tuesday",
    "week": 84,
    "day": "Tuesday",
    "title": "Week 84 Tuesday: Industry Impact - Hands-on Practice",
    "duration": 120,
    "target": "Master industry impact through hands-on practice",
    "deliverable": "Hands-on Practice exercise for industry impact",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Industry Impact fundamentals",
      "Hands-on Practice techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete hands-on practice requirements"
  },
  {
    "id": "w84-wednesday",
    "week": 84,
    "day": "Wednesday",
    "title": "Week 84 Wednesday: Industry Impact - Real-world Application",
    "duration": 120,
    "target": "Master industry impact through real-world application",
    "deliverable": "Real-world Application exercise for industry impact",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Industry Impact fundamentals",
      "Real-world Application techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete real-world application requirements"
  },
  {
    "id": "w84-thursday",
    "week": 84,
    "day": "Thursday",
    "title": "Week 84 Thursday: Industry Impact - Advanced Techniques",
    "duration": 120,
    "target": "Master industry impact through advanced techniques",
    "deliverable": "Advanced Techniques exercise for industry impact",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Industry Impact fundamentals",
      "Advanced Techniques techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete advanced techniques requirements"
  },
  {
    "id": "w84-friday",
    "week": 84,
    "day": "Friday",
    "title": "Week 84 Friday: Industry Impact - Integration & Testing",
    "duration": 120,
    "target": "Master industry impact through integration & testing",
    "deliverable": "Integration & Testing exercise for industry impact",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Industry Impact fundamentals",
      "Integration & Testing techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": false,
    "passCriteria": "Successfully complete integration & testing requirements"
  },
  {
    "id": "w84-saturday",
    "week": 84,
    "day": "Saturday",
    "title": "Week 84 Saturday: Industry Impact - Project & Portfolio",
    "duration": 180,
    "target": "Master industry impact through project & portfolio",
    "deliverable": "Portfolio project demonstrating industry impact",
    "difficulty": 5,
    "tier": "professional",
    "concepts": [
      "Industry Impact fundamentals",
      "Project & Portfolio techniques",
      "Real-world application",
      "Best practices"
    ],
    "locked": true,
    "isPortfolioWorthy": true,
    "passCriteria": "Successfully complete project & portfolio requirements"
  }
];

// Helper functions
export function getLessonById(id: string): Lesson | undefined {
  return allLessons.find(lesson => lesson.id === id);
}

export function getLessonsByWeek(week: number): Lesson[] {
  return allLessons.filter(lesson => lesson.week === week);
}

export function getLessonsByTier(tier: string): Lesson[] {
  return allLessons.filter(lesson => lesson.tier === tier);
}

export function getWeeksByTier(tier: string): number[] {
  const weeks = Array.from(new Set(
    allLessons
      .filter(lesson => lesson.tier === tier)
      .map(lesson => lesson.week)
  ));
  return weeks.sort((a, b) => a - b);
}

// Subscription tiers
export const SUBSCRIPTION_TIERS = {
  free: {
    name: 'Free Explorer',
    price: 0,
    duration: 'forever',
    features: ['Weeks 1-12', 'Python fundamentals', 'Community access'],
    weeks: Array.from({length: 12}, (_, i) => i + 1)
  },
  intermediate: {
    name: 'AI Developer',
    price: 197,
    duration: 'one-time',
    features: ['Weeks 13-28', 'Web development', 'Data science basics'],
    weeks: Array.from({length: 16}, (_, i) => i + 13)
  },
  advanced: {
    name: 'AI Engineer',
    price: 497,
    duration: 'one-time', 
    features: ['Weeks 29-52', 'Machine learning', 'Advanced AI projects'],
    weeks: Array.from({length: 24}, (_, i) => i + 29)
  },
  professional: {
    name: 'AI Research Pro',
    price: 997,
    duration: 'one-time',
    features: ['Weeks 53-84', 'AI research', 'Industry applications'],
    weeks: Array.from({length: 32}, (_, i) => i + 53)
  }
};

export default {
  lessons: allLessons,
  getLessonById,
  getLessonsByWeek,
  getLessonsByTier,
  getWeeksByTier,
  SUBSCRIPTION_TIERS
};
