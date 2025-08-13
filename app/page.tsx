'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();
  
  const weekOneLessons = [
    { id: 'w1-mon', title: 'Python Installation & Basic Syntax', day: 'Monday', duration: 150, completed: false },
    { id: 'w1-tue', title: 'Variables & Data Types', day: 'Tuesday', duration: 150, completed: false },
    { id: 'w1-wed', title: 'Lists & Dictionaries', day: 'Wednesday', duration: 150, completed: false },
    { id: 'w1-thu', title: 'Loops & Conditionals', day: 'Thursday', duration: 150, completed: false },
    { id: 'w1-fri', title: 'Functions & Error Handling', day: 'Friday', duration: 150, completed: false },
    { id: 'w1-sat', title: 'Week 1 Assessment', day: 'Saturday', duration: 180, completed: false }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#111827', color: 'white', padding: '24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ backgroundColor: '#1f2937', padding: '32px', borderRadius: '16px', marginBottom: '32px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '48px', color: '#fcd34d', marginBottom: '16px', fontWeight: 'bold' }}>🧠 AIHero Platform</h1>
          <p style={{ fontSize: '20px', color: '#9ca3af', marginBottom: '8px' }}>Brutal AI Education System</p>
          <p style={{ fontSize: '16px', color: '#ef4444', fontWeight: 'bold' }}>⚠️ 210 hours over 14 weeks. No shortcuts. No excuses.</p>
        </div>

        <div style={{ backgroundColor: '#1f2937', padding: '24px', borderRadius: '12px', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '24px', color: '#fcd34d', marginBottom: '16px' }}>📊 Your Progress</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            <div style={{ backgroundColor: '#374151', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '32px', color: '#22c55e', fontWeight: 'bold' }}>0</div>
              <div style={{ color: '#9ca3af' }}>Lessons Completed</div>
            </div>
            <div style={{ backgroundColor: '#374151', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '32px', color: '#fbbf24', fontWeight: 'bold' }}>1</div>
              <div style={{ color: '#9ca3af' }}>Current Week</div>
            </div>
            <div style={{ backgroundColor: '#374151', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '32px', color: '#3b82f6', fontWeight: 'bold' }}>0h</div>
              <div style={{ color: '#9ca3af' }}>Study Time</div>
            </div>
            <div style={{ backgroundColor: '#374151', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '32px', color: '#8b5cf6', fontWeight: 'bold' }}>LOW</div>
              <div style={{ color: '#9ca3af' }}>Dropout Risk</div>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: '#1f2937', padding: '24px', borderRadius: '12px' }}>
          <h2 style={{ fontSize: '24px', color: '#fcd34d', marginBottom: '8px' }}>📚 Week 1: Python Foundations</h2>
          <p style={{ color: '#9ca3af', marginBottom: '24px' }}>Master Python basics before moving to data science tools</p>
          
          <div style={{ display: 'grid', gap: '16px' }}>
            {weekOneLessons.map((lesson, index) => (
              <div key={lesson.id} style={{ backgroundColor: '#374151', padding: '20px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: lesson.completed ? '2px solid #22c55e' : '2px solid transparent' }}>
                <div>
                  <h3 style={{ fontSize: '18px', color: 'white', marginBottom: '4px' }}>{lesson.title}</h3>
                  <p style={{ color: '#9ca3af', fontSize: '14px' }}>{lesson.day} • {lesson.duration} minutes • {lesson.completed ? ' ✅ Completed' : ' ⏳ Pending'}</p>
                </div>
                <button onClick={() => router.push(`/lesson/${lesson.id}`)} style={{ backgroundColor: lesson.completed ? '#16a34a' : '#dc2626', color: 'white', padding: '12px 24px', border: 'none', borderRadius: '6px', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer' }}>
                  {lesson.completed ? '📖 Review' : '🔥 Start Lesson'}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div style={{ backgroundColor: '#7f1d1d', padding: '20px', borderRadius: '8px', marginTop: '32px', textAlign: 'center' }}>
          <p style={{ color: '#fecaca', fontWeight: 'bold' }}>⚠️ BRUTAL STANDARD WARNING ⚠️</p>
          <p style={{ color: '#fecaca', fontSize: '14px', marginTop: '8px' }}>Miss more than 3 days total = restart from beginning. Pass rate: 30-40%. This system filters for serious learners only.</p>
        </div>
      </div>
    </div>
  );
}
