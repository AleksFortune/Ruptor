import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): Promise<NextResponse> {
  const params = Object.fromEntries(new URL(req.url).searchParams.entries());
  console.log("Telegram login params:", params);

  // Здесь обязательно указываем полный абсолютный путь редиректа
  return NextResponse.redirect(new URL('/gpt', req.url));
}
