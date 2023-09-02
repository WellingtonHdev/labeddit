import { Database } from 'better-sqlite3';

export interface Users {
  id: number;
  username: string;
  password: string;
}

export const createUser = async (db: Database) => {
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY,
      username TEXT NOT NULL,
      password TEXT NOT NULL
    )
  `);
};


