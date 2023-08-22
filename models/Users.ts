import { Database } from 'better-sqlite3';

interface User {
    id: number;
    username: string;
    password: string;
}

const createUserTable = async (db: Database) => {
    await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY,
      username TEXT NOT NULL,
      password TEXT NOT NULL
    )
  `);
};

export { User, createUserTable };
