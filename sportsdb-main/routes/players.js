import express from 'express';

import { getPosts, getPost, createPost,updatePost,   deletePost } from '../controllers/players.js';

const router = express.Router();
import auth from "../middleware/auth.js";
router.patch('/:id', updatePost);
router.delete('/:id',  deletePost);
router.get('/:id', getPost);
router.get('/', getPosts);
router.post('/', createPost);



export default router;