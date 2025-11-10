import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const VALID_USERNAME = "shomalik"
const VALID_PASSWORD = "shomalik1996"

export function middleware(request: NextRequest) {
  // Protect /dashboard route
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    const token = request.cookies.get("auth_token")?.value

    // Check if token is valid (simple implementation)
    if (!token || token !== Buffer.from(`${VALID_USERNAME}:${VALID_PASSWORD}`).toString("base64")) {
      return NextResponse.redirect(new URL("/login", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard", "/dashboard/:path*"],
}
