import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (process.env.NODE_ENV === "production") {
    if (request.headers.get("x-forwarded-proto") === "http") {
      const url = request.nextUrl.clone();
      url.protocol = "https";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}
