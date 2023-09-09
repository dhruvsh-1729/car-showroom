import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const publicpaths = ['/','/login','/signup','/verifyemail','/about','/news']

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  const isPublicPath = publicpaths.includes(path)

  const token = request.cookies.get('token')?.value || ''

  if(isPublicPath && token) {
    return NextResponse.redirect(new URL('/', request.nextUrl))
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/login', request.nextUrl))
  }
    
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/login',
    '/signup',
    '/verifyemail'
  ]
}