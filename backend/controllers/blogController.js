const Blog = require("../models/Blog");

const getBlogs = async (req, res) => {
  const blogs = await Blog.find({});
  res.json(blogs);
};

const getBlogById = async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (blog) {
    res.json(blog);
  } else {
    res.status(404);
    throw new Error("Blog not found");
  }
};

const createBlog = async (req, res) => {
  const { title, content } = req.body;

  const blog = await Blog.create({
    title,
    content,
    user: req.user.id,
  });

  if (blog) {
    res.status(201).json(blog);
  } else {
    res.status(400);
    throw new Error("Invalid blog data");
  }
};

const updateBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (blog) {
    blog.title = req.body.title || blog.title;
    blog.content = req.body.content || blog.content;

    const updatedBlog = await blog.save();

    res.json(updatedBlog);
  } else {
    res.status(404);
    throw new Error("Blog not found");
  }
};

const deleteBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (blog) {
    await blog.deleteOne();
    res.json({ message: "Blog removed" });
  } else {
    res.status(404).json({ message: "Blog not found" });
  }
};

module.exports = {
  getBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
};
