'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

const MonacoEditor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

const lessonContent = {
  'w1-mon': {
    title: 'Python Installation & Basic Syntax',
    objective: 'Install Python, VS Code, write first 10 programs',
    timeLimit: 150,
    content: `Welcome to AIHero. No hand-holding here.

**Installation:**
1. Download Python 3.10+ from python.org
2. Install VS Code with Python extension  
3. Verify: python --version

**Basic Syntax:**
- Variables: name = "John"
- Print: print("Hello!")
- Math: 5 + 3, 10 / 2
- Comments: # This is a comment`,
    starterCode: '# Your first Python program\nprint("Hello, AIHero!")\n\n# Variables\nname = "Your Name"\nage = 25\n\n# Math\nresult = 10 + 5\nprint(f"Result: {result}")',
    solution: 'print("Hello, AIHero!")\nname = "John"\nage = 25\nresult = 10 + 5\nprint(f"My name is {name}, I am {age} years old")\nprint(f"Math result: {result}")'
  }
};

export default function LessonPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [sessionStarted, setSessionStarted] = useState(false);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [showSolution, setShowSolution] = useState(false);
  const [completed, setCompleted] = useState(false);
  
  const lesson = lessonContent[params.id as keyof typeof lessonContent];

  useEffect(() => {
    if (lesson) {
      setCode(lesson.starterCode);
    }
  }, [lesson]);

  const timeElapsed = startTime ? 
    Math.floor((new Date().getTime() - startTime.getTime()) / 60000) : 0;

  const handleStartSession = () => {
    setSessionStarted(true);
    setStartTime(new Date());
  };

  const handleRunCode = () => {
    if (code.includes('print(')) {
      const matches = code.match(/print\(['"](.*?)['"]\)/g);
      if (matches) {
        const outputs = matches.map(match => {
          const content = match.match(/print\(['"](.*?)['"]\)/)?.[1] || '';
          return content;
        });
        setOutput(outputs.join('\n'));
      } else {
        setOutput('Code executed successfully');
      }
    } else {
      setOutput('Code executed successfully');
    }
  };

  const handleComplete = () => {
    setCompleted(true);
  };

  if (!lesson) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#111827', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '32px', color: '#ef4444' }}>Lesson Not Found</h1>
          <button onClick={() => router.push('/')} style={{ backgroundColor: '#6b7280', color: 'white', padding: '12px 24px', border: 'none', borderRadius: '8px', cursor: 'pointer', marginTop: '16px' }}>
            ← Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  if (!sessionStarted) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#111827', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ backgroundColor: '#1f2937', padding: '48px', borderRadius: '16px', textAlign: 'center', maxWidth: '600px' }}>
          <h1 style={{ fontSize: '32px', color: '#fcd34d', marginBottom: '16px' }}>{lesson.title}</h1>
          <p style={{ fontSize: '18px', color: '#9ca3af', marginBottom: '24px' }}>{lesson.objective}</p>
          <p style={{ color: '#fbbf24', fontWeight: 'bold', marginBottom: '24px' }}>⚠️ BRUTAL STANDARD: {lesson.timeLimit} minutes maximum</p>
          <button onClick={handleStartSession} style={{ backgroundColor: '#dc2626', color: 'white', padding: '16px 32px', border: 'none', borderRadius: '8px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', marginRight: '16px' }}>
            🔥 START LESSON
          </button>
          <button onClick={() => router.push('/')} style={{ backgroundColor: '#6b7280', color: 'white', padding: '16px 32px', border: 'none', borderRadius: '8px', fontSize: '18px', cursor: 'pointer' }}>
            ← Back
          </button>
        </div>
      </div>
    );
  }

  if (completed) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#111827', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ backgroundColor: '#065f46', padding: '48px', borderRadius: '16px', textAlign: 'center', maxWidth: '600px' }}>
          <h1 style={{ fontSize: '48px', marginBottom: '16px' }}>✅</h1>
          <h2 style={{ fontSize: '32px', color: '#6ee7b7', marginBottom: '16px' }}>Lesson Completed!</h2>
          <p style={{ fontSize: '18px', color: '#a7f3d0', marginBottom: '24px' }}>{lesson.title} - {timeElapsed} minutes</p>
          <button onClick={() => router.push('/')} style={{ backgroundColor: '#16a34a', color: 'white', padding: '16px 32px', border: 'none', borderRadius: '8px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer' }}>
            🚀 Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#111827', color: 'white' }}>
      <div style={{ backgroundColor: '#1f2937', padding: '16px 24px', borderBottom: '2px solid #374151', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button onClick={() => router.push('/')} style={{ backgroundColor: '#6b7280', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>← Dashboard</button>
        <h1 style={{ margin: '0', fontSize: '20px', color: '#fcd34d' }}>{lesson.title}</h1>
        <div style={{ color: timeElapsed > lesson.timeLimit ? '#ef4444' : '#22c55e', fontSize: '18px', fontWeight: 'bold' }}>{timeElapsed} / {lesson.timeLimit} min</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: 'calc(100vh - 80px)' }}>
        <div style={{ padding: '24px', backgroundColor: '#1f2937', borderRight: '2px solid #374151', overflowY: 'auto' }}>
          <h2 style={{ fontSize: '24px', color: '#fcd34d', marginBottom: '16px' }}>Lesson Content</h2>
          <div style={{ backgroundColor: '#374151', padding: '20px', borderRadius: '8px', marginBottom: '24px', whiteSpace: 'pre-line', lineHeight: '1.6' }}>{lesson.content}</div>
          <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
            <button onClick={handleComplete} style={{ backgroundColor: '#dc2626', color: 'white', padding: '12px 24px', border: 'none', borderRadius: '6px', cursor: 'pointer', flex: 1, fontWeight: 'bold' }}>✅ COMPLETE LESSON</button>
          </div>
          <button onClick={() => setShowSolution(!showSolution)} style={{ backgroundColor: '#7c2d12', color: '#fed7aa', padding: '8px 16px', border: 'none', borderRadius: '6px', cursor: 'pointer', width: '100%' }}>
            {showSolution ? 'Hide Solution' : '💡 Show Solution'}
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#0f172a' }}>
          <div style={{ padding: '16px', backgroundColor: '#1e293b', borderBottom: '1px solid #334155' }}>
            <button onClick={handleRunCode} style={{ backgroundColor: '#16a34a', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>▶️ Run Code</button>
          </div>
          <div style={{ flex: 1 }}>
            <MonacoEditor height="60%" defaultLanguage="python" theme="vs-dark" value={showSolution ? lesson.solution : code} onChange={(value) => setCode(value || '')} options={{ fontSize: 14, minimap: { enabled: false }, scrollBeyondLastLine: false, wordWrap: 'on' }} />
          </div>
          <div style={{ height: '40%', backgroundColor: '#0f172a', borderTop: '2px solid #334155', padding: '16px', overflowY: 'auto' }}>
            <h3 style={{ margin: '0 0 12px 0', color: '#22c55e' }}>Output:</h3>
            <pre style={{ margin: '0', color: '#e2e8f0', backgroundColor: '#1e293b', padding: '12px', borderRadius: '6px', fontSize: '14px', whiteSpace: 'pre-wrap' }}>
              {output || 'Click "Run Code" to see output...'}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
