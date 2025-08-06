import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET(req: NextRequest) {
  const params = Object.fromEntries(new URL(req.url).searchParams.entries());

  // --- MongoDB сохранение пользователя ---
  try {
    const client = await clientPromise;
    const db = client.db(); // можно явно указать имя db, если не default
    await db.collection("users").updateOne(
      { id: params.id }, // уникальное поле Telegram, обычно id
      {
        $set: {
          id: params.id,
          username: params.username,
          first_name: params.first_name,
          last_name: params.last_name,
          photo_url: params.photo_url,
          auth_date: params.auth_date,
        },
      },
      { upsert: true }
    );
  } catch (e) {
    console.error("MongoDB error:", e);
  }
  // --- конец MongoDB ---

  // Редирект на страницу чата
  return NextResponse.redirect('/gpt');
}
