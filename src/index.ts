import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import authRoutes from './routes/auth';
import postsRoutes from './routes/posts';
import { Database } from 'better-sqlite3';
import { createUser } from './models/Users'
import { createPost } from './models/Post';


const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', authRoutes);
app.use('/posts', postsRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


