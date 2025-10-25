import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  const rows = db.prepare("SELECT * FROM notes").all();
  return NextResponse.json(rows);
}

export async function POST(request) {
  const { name, content } = await request.json();
  const stmt = db.prepare("INSERT INTO notes (name, content) VALUES (?, ?)");
  const info = stmt.run(name, content);
  return NextResponse.json({ id: info.lastInsertRowid, name, content });
}
