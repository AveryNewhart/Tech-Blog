const router = require('express').Router();
const { Blogs } = require('../../models'); //getting Blogs from blogPost model
const userAuth = require('../../utils/auth');

router.post('/', userAuth, async (req, res) => {
    try {
      const newBlog = await Blogs.create({
        blog_title: req.body.blogTitle,
        blog_content: req.body.blogContent,
        blog_Creator: req.session.user_id,
      });
  
      res.status(200).json(newBlog);
    } catch (err) {
      res.status(400).json(err);
      console.log(err)
    }
  });

  module.exports = router;