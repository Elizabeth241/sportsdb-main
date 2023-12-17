import express from "express";
const router = express.Router();

import { signin, signup,updateUser,deletePost } from "../controllers/user.js";

router.post("/signin", signin);
router.post("/signup", signup);
router.patch('/:id/userupdate', updateUser);
router.delete('/:id', deletePost);
export default router;