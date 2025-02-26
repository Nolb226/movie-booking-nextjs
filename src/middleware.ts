import { protectedRoutes, publicRoutes } from '@/config/navigation'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export default async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname
    const isPublicRoute = publicRoutes.includes(path)
    const isProtectedRoute = protectedRoutes.includes(path)
    const token = cookies().get('_session')?.value
    if (isPublicRoute && token) {
        return NextResponse.redirect(new URL('/', req.nextUrl))
    }
    if (isProtectedRoute && !token) {
        const loginUrl = new URL('/login', req.nextUrl)
        loginUrl.searchParams.set('callbackUrl', req.nextUrl.pathname)

        return NextResponse.redirect(loginUrl)
    }
    return NextResponse.next()
}
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
