import express, { Express, Request, Response, response } from "express";
import dotenv from "dotenv";
import {connectToMongo} from './db';
import bodyParser from "body-parser";
import cors from 'cors';

const corsOptions={
  origin:"*"
}
connectToMongo();

dotenv.config();
const app: Express = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded());
const port = process.env.PORT || 3000;

app.use('/api/child', require('./routes/child'))
app.use('/api/teacher', require('./routes/teacher'))

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});