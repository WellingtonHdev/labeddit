import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import authRoutes from './routes/auth';
import postsRoutes from './routes/posts';
import { Database } from 'better-sqlite3';
import { createUser } from './models/Users'
import { createPost } from './models/Post';

dotenv.config()


const app = express();

app.use(cors());
app.use(express.json())
app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/posts', postsRoutes);

app.listen(Number(process.env.PORT) || 3003, () => {
    console.log(`Servidor rodando na porta ${Number(process.env.PORT) || 3003}`)
})

app.get("/ping", (req, res) => {
    res.send("pong!")
})

