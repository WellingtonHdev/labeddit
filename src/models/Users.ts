import { Database } from 'better-sqlite3';

export enum USER_ROLES {
  NORMAL = 'NORMAL',
  ADMIN = 'ADMIN'
}

export interface TokenUser {
  id: string;
  name: string;
  role: USER_ROLES
}

export interface UserDB {
  id: string,
  name: string,
  email: string,
  password: string,
  role: USER_ROLES,
  created_at: string
}

export interface UserModel {
  id: string,
  name: string,
  email: string,
  role: USER_ROLES,
  created_at: string
}

export class User {
  constructor(
  private id: string,
  private name: string,
  private email: string,
  private password: string,
  private role: USER_ROLES,
  private created_at: string
  ){ }

  public getId(): string {
    return this.id
  }
  public setId(value: string): void {
    this.id = value
  }
  public getName(): string {
    return this.name
  }
  public setName(value: string): void {
    this.name = value
  }
  public getEmail(): string {
    return this.email
  }
  public setEmail(value: string): void {
    this.email = value
  }
  public getPassword(): string {
    return this.password
  }
  public setPassword(value: string): void {
    this.password = value
  }
  public getRole(): USER_ROLES {
    return this.role
  }
  public setRole(value: USER_ROLES): void {
    this.role = value
  }
  public getCreated_at(): string {
    return this.created_at
  }
  public setCreated_at(value: string): void {
    this.created_at = value
  }

  public toUserDB(): UserDB {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
      role: this.role,
      created_at: this.created_at
    }
  }

  public toUserModel(): UserModel {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      role: USER_ROLES.NORMAL,
      created_at: this.created_at
    }
  }
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


