import { NextRequest, NextResponse } from "next/server";
import { getLocale, hasPathnameLocale } from "./utils/i18n";

export default function Middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.includes("assets") || pathname.includes("favicon") || pathname.startsWith("/api")) return

  const hasLocal = hasPathnameLocale(pathname)
  if (hasLocal) return

  const locale = getLocale({
    "accept-language": request.headers.get("Accept-Language") || "",
  })
  request.nextUrl.pathname = `${locale}${pathname}`

  return NextResponse.redirect(request.nextUrl.href)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
}
