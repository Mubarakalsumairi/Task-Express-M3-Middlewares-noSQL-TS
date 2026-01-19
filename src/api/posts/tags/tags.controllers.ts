import { Request, Response } from "express";
import Tag from "../../../models/Tag";
import Post from "../../../models/Post";

const createTag = async ( req: Request, res: Response ) => {
    try {
        const { name } = req.body;
        const tag = await Tag.create({ name});

        res.status(201).json(tag);
    } catch (error) {
        res.status(500).json({ message: "Error"});
    }
};

const getAllTags = async ( req: Request, res: Response ) => {
    try {
        const tag = await Tag.find()
        res.status(200).json(tag);
    } catch (error) {
        res.status(500).json({ message: " Error "});
    }
}

export { createTag, getAllTags };