import { Router } from "express";
import checkAuth from "../utils/checkAuth";
import { getAllPosts, getPost, addPost, deletePost, updatePost } from "../controllers/post";

const router = Router()

router.get('/', getAllPosts)
router.get('/:id', getPost)
router.post('/', checkAuth, addPost)
router.delete('/:id', checkAuth, deletePost)
router.patch('/:id', checkAuth,  updatePost)

export default router