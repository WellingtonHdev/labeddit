import sqlite3 from 'better-sqlite3';

const openDatabase = () => {
    const db = new sqlite3('sqlite:./db/forum.db');

    db.exec(`
    PRAGMA foreign_keys = ON;
  `);

    return db;
};

export default openDatabase;
