import Posts from "../model/postSchema.js";

export const postBlog = async (req, res) => {
  try {
    let body = req.body;
    console.log(body);
    const post = await new Posts(body);
    post.save();
    res.status(200).json({ message: "user created", result: post });
  } catch (error) {
    res.status(400).json(error, "not saved data");
  }
};

export const getAllBlog = async (req, res) => {
  let author = req.query.author;
  let category = req.query.category;
  let post;
  try {
    if (author) post = await Posts.find({ author: author });
    else if (category) post = await Posts.find({ categories: category });
    else post = await Posts.find({});
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json(error, "not get All data");
  }
};

export const getBlog = async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json(error, "not get data");
  }
};

export const deleteBlog = async (req, res) => {
  try {
    await Posts.findByIdAndDelete(req.params.id);
    res.status(200).json("deleted succesful");
  } catch (error) {
    res.status(404).json(error, "not get data");
  }
};

export const updateBlog = async (req, res) => {
  try {
    await Posts.findByIdAndUpdate(req.params.id, { $set: req.body });
    res.status(200).json("post updated successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};
