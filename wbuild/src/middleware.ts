

import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher(['/agency/sign-in(.*)', '/agency/sign-up(.*)', '/site', '/api/uploadthing']);



export default clerkMiddleware((auth, request) => {
    if (!isPublicRoute(request)) {
        return auth().redirectToSignIn({ returnBackUrl: request.url });
    }
});

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};


















// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";
// import { NextRequest } from 'next/server'

// const publicRoutes = createRouteMatcher([
//     '/',
//     'agency/signin(.*)',
//     '/singup(.*)',
//     '/api/clerk-webhook',
//     '/api/drive-activity/notification',
//     '/api/payment/success'
// ])

// const ignoredRoutes = createRouteMatcher([
//     '/api/auth/callback/discord',
//     '/api/auth/callback/notion',
//     '/api/auth/callback/slack',
//     '/api/flow',
//     '/api/cron/wait',
// ])

// export const config = {
//     matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };

// export default clerkMiddleware((auth, req: NextRequest) => {
//     if (!(publicRoutes(req) || ignoredRoutes(req))) {
//         auth().protect();
//     }

//     if (req.nextUrl.pathname.endsWith('/workflows/editor')) {
//         return NextResponse.redirect(new URL('/workflows', req.url))
//     }

//     return NextResponse.next();
// });











