import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/players.js';

const router = express.Router();

export const getPosts = async (req, res) => {
const { page } = req.query;

try {
const LIMIT = 1000;
const startIndex = (Number(page) - 1) * LIMIT; // get the starting index of every page

const total = await PostMessage.countDocuments({});
const posts = await PostMessage.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);

res.json({ data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT)});
} catch (error) {    
res.status(404).json({ message: error.message });
}
}



export const getPost = async (req, res) => { 
const { id } = req.params;

try {
const post = await PostMessage.findById(id);

res.status(200).json(post);
} catch (error) {
res.status(404).json({ message: error.message });
}
}

export const createPost = async (req, res) => {
const {

    name,
    age,
    description,
    title,
    nationality,
    image,
    video,
    position,
    gessynumber,
    role,
    department,
    indexnumber,
    telephone,
    team,
    year,
   active,


} = req.body;

const newPostMessage = new PostMessage({ 
    name,
    age,
    description,
    title,
    nationality,
    image,
    video,
    position,
    gessynumber,
    role,
    department,
    indexnumber,
    telephone,
    team,
    year,
   active,

})

try {
await newPostMessage.save();

res.status(201).json(newPostMessage );
} catch (error) {
res.status(409).json({ message: error.message });
}
}


export const updatePost = async (req, res) => {
const { id } = req.params;
const { 
   name,
   role_played,
    age,
    description,
    title,
    nationality,
    image,
    video,
    position,
    gessynumber,
    role,
    department,
    indexnumber,
    telephone,
    team,
    year,
   active,
 



 } = req.body;

if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

const updatedPost = {name,
    age,
    description,
    title,
    nationality,
    image,
    video,
    position,
    gessynumber,
    role,
    department,
    indexnumber,
    telephone,
    team,
    year,
   active,
   role,
 _id: id };

await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

res.json(updatedPost);
}

export const deletePost = async (req, res) => {
const { id } = req.params;

if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

await PostMessage.findByIdAndRemove(id);

res.json({ message: "Post deleted successfully." });
}




export default router;