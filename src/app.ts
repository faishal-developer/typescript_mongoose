import express, { Application } from 'express';
import cors from 'cors';
import userRoutes from './modules/user/user.routes';

const app:Application = express()
app.use(cors());

app.use(express.json());


app.use("/api/v1/user",userRoutes);
export default app;
