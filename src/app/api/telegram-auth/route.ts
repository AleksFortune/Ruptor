import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const params = Object.fromEntries(new URL(req.url).searchParams.entries());
  // Здесь ты получаешь user_id, username и другие данные из Telegram
  // Можно добавить проверку подписи (security), но для старта — просто выводи данные.
  console.log("Telegram login params:", params);
  // Тут можно сделать авторизацию пользователя на сайте
  return NextResponse.redirect('/gpt'); // Перенаправляем на страницу GPT чата
}
