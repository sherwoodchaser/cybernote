import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

// Path to your database file
const dbPath = path.join(process.cwd(), "data", "notes.db");

// Ensure the folder exists
if (!fs.existsSync("data")) {
  fs.mkdirSync("data");
}

// Initialize connection
const db = new Database(dbPath);

// Create table if not exists
db.prepare(
  `
  CREATE TABLE IF NOT EXISTS notes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    content TEXT
  )
`
).run();

export default db;
