import express, { Request, Response } from "express";
import { getTopHeadlinesWithCountryCode } from "./news/top_headlines";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = 8000;

app.get('/', async (request: Request, response: Response) => {
    const result = await getTopHeadlinesWithCountryCode('in');

    response.status(200).json(result);
});

app.listen(PORT, () => console.log(`The application is running on http://localhost:${PORT}`));
