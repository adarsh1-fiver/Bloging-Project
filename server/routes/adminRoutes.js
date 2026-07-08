import express from "express";
import { adminLogin, getDashboard } from "../controllers/admincontro.js";
import auth from "../middleware/auth.js";
import { getAllBlogs } from "../controllers/blogControl.js";


const adminRouter=express.Router();
 
adminRouter.post("/login",adminLogin);
adminRouter.get("/blog",auth, getAllBlogs);
adminRouter.get("/dashboard",auth, getDashboard);
export default adminRouter;