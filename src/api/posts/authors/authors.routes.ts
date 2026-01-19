import express from "express";
import { createAuthor, getAllAuthors } from "./authors.controllers";

const authorRouter = express.Router();

authorRouter.post("/", createAuthor);

authorRouter.get("/", getAllAuthors);

export default authorRouter;