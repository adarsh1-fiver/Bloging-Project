import express from "express";
import { addBlog, deleteBlogById, generateContent, getAllBlogs, getAllBlogsAdmin, getBlogById, togglePublish } from "../controllers/blogControl.js";
import upload from "../middleware/multer.js";
import auth from "../middleware/auth.js";


const blogRouter=express.Router();



blogRouter.post("/add",upload.single('image'),auth, addBlog)
blogRouter.get('/all',getAllBlogs);
blogRouter.get('/admin/all', auth, getAllBlogsAdmin);
blogRouter.post('/delete',auth,deleteBlogById);
blogRouter.post('/toggle-publish',auth,togglePublish);



blogRouter.get('/:blogId',getBlogById);
blogRouter.post('/generate',auth,generateContent);

export default blogRouter;

