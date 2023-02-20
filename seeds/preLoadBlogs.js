const { Blogs } = require("../models");

const blogData = [
  {
    blog_title: "My First Blog Post",
    blog_message: "Wow, where do I even begin. Cheers to my first blog post.",
    blog_creator: 1,
  },
  {
    blog_title: "My Second Blog Post",
    blog_message:
    "You already know how we be doin. We do this for real. We some real coders.",
    blog_creator: 2,
  },
  {
    blog_title: "My Third Blog Post",
    blog_message: "Yesssssir, you already know that we seedin that blog_db with this data.",
    blog_creator: 3,
  },
];

const seedBlogs = () => Blogs.bulkCreate(blogData);

module.exports = seedBlogs;