import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI as string;

if (!uri) throw new Error("Добавь MONGODB_URI в .env.local!");

export const client = new MongoClient(uri);
export const db = client.db(); // Можно указать имя БД если нужно: client.db("имя_твоей_бд")
