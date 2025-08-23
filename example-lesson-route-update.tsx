// Example updated lesson route
'use client'

import { notFound } from 'next/navigation'
import EnhancedLessonPage from '@/components/EnhancedLessonPage'
import { getLessonById } from '@/lib/curriculum'
import { week01Content } from '@/lib/curriculum/weeks/week01'

export default function LessonPage({ params }: { params: { id: string } }) {
  const lesson = getLessonById(params.id)
  
  if (!lesson) {
    notFound()
  }

  // Get enhanced content if available, fall back to basic display
  const enhancedContent = week01Content[params.id as keyof typeof week01Content]
  
  if (enhancedContent) {
    // Use the enhanced lesson component for rich content
    return <EnhancedLessonPage lesson={lesson} content={enhancedContent} />
  }
  
  // Fall back to your current lesson component for lessons without enhanced content
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-4">{lesson.title}</h1>
      <p>Enhanced content coming soon for this lesson!</p>
      {/* Your current lesson component here */}
    </div>
  )
}
