import express, { Router } from "express";

import {
  postBlog,
  getAllBlog,
  getBlog,
  deleteBlog,
  updateBlog,
} from "../controller/postController.js";
import { uploadImage, getImage } from "../controller/imageController.js";
import upload from "../utils/upload.js";
const router = express.Router();

router.post("/create", postBlog);
router.get("/get", getAllBlog);
router.get("/get/:id", getBlog);
router.delete("/:id", deleteBlog);
router.post("/edit/:id", updateBlog);

router.post("/file/upload", upload.single("file"), uploadImage);
router.get("/file/:filename", getImage);

export default router;
