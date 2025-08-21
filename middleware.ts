import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export async function middleware(request: NextRequest) {
  try {
    // Create a response object
    const res = NextResponse.next()
    
    // Create a Supabase client configured to use cookies
    const cookieStore = cookies()
    const supabase = createServerComponentClient({ 
      cookies: () => cookieStore 
    })

    // Refresh session if expired - required for Server Components
    const { data: { session }, error } = await supabase.auth.getSession()

    // Protected routes
    const protectedPaths = ['/dashboard', '/lesson', '/profile', '/achievements']
    const isProtectedPath = protectedPaths.some(path => 
      request.nextUrl.pathname.startsWith(path)
    )

    // Redirect to signin if trying to access protected route without session
    if (isProtectedPath && !session) {
      return NextResponse.redirect(new URL('/auth/signin', request.url))
    }

    // Redirect to dashboard if trying to access auth pages while logged in
    const authPaths = ['/auth/signin', '/auth/signup']
    const isAuthPath = authPaths.some(path => 
      request.nextUrl.pathname.startsWith(path)
    )

    if (isAuthPath && session) {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }

    return res
  } catch (error) {
    // If anything goes wrong, just continue
    console.error('Middleware error:', error)
    return NextResponse.next()
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public directory)
     */
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
  ],
}