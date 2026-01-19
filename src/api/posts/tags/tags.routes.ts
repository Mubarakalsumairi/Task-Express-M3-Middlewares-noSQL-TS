import express from "express";
import { createTag, getAllTags } from "./tags.controllers";

const tagRouter = express.Router();

tagRouter.post("/", createTag);
tagRouter.get("/", getAllTags);

export default tagRouter;


