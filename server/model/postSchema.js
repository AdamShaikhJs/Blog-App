import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  picture: String,
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  date: {
    type: String,
  },
  description: {
    type: String,
  },
  categories: {
    type: String,
    required: true,
  },
});

const Posts = mongoose.model("Posts", postSchema);
export default Posts;
