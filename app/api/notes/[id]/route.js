import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(_, { params }) {
  const note = db.prepare("SELECT * FROM notes WHERE id = ?").get(params.id);
  if (!note) return new Response("Not found", { status: 404 });
  return NextResponse.json(note);
}

export async function PUT(request, { params }) {
  const { name, content } = await request.json();
  db.prepare("UPDATE notes SET name = ?, content = ? WHERE id = ?").run(
    name,
    content,
    params.id
  );
  return NextResponse.json({ id: params.id, name, content });
}

export async function DELETE(_, { params }) {
  db.prepare("DELETE FROM notes WHERE id = ?").run(params.id);
  return NextResponse.json({ success: true });
}
