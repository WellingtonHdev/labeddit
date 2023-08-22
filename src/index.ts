import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import authRoutes from './routes/auth';
import postsRoutes from './routes/posts';
import { Database } from 'better-sqlite3';
import { createUserTable } from '../models/User';
import { createPostTable } from '../models/Post';


const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', authRoutes);
app.use('/posts', postsRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const openDatabase = async () => {
    const db = await open({
        filename: './db/forum.db',
        driver: sqlite3.Database,
    });

    await createUserTable(db);
    await createPostTable(db);

    return db;
};

export default openDatabase;
