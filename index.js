import express  from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv"
import {moviesRouter} from './routes/movies.js';
import cors from 'cors';

dotenv.config();

const app = express()
app.use(cors())
const PORT = process.env.PORT;

app.use(express.json());
   


 const MONGO_URL = process.env.MONGO_URL

 async function createConnection(){
   const client = new MongoClient(MONGO_URL);
   await client.connect();
   console.log("mongoDB connected...");
   return client;
 }

export const client = await createConnection();





app.get('/', (request, response) => {
  response.send('Hello World!***🎈')
})

app.use('/movies', moviesRouter)

app.listen(PORT,() => console.log("App is started in", PORT))

