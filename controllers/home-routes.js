const router = require('express').Router();
const { User, Blogs } = require('../models');

// GET all blogs for homepage
router.get('/', async (req, res) => {
  try {
    const blogData = await Blogs.findAll({ // getting all of the blogs and users(ref model)
      include: [
        {
          model: User
        },
      ],
    });

    const allCurBlogs = blogData.map((y) => y.get({ plain: true }));
    res.render('homepage', { // telling all off the cur blogs(if any) to render/show up on the homepage
      allCurBlogs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// The dashboard page, getting users data based off their login info.
router.get('/dashboard', userAuth, async (req, res) => {
    try {
      const userData = await User.findByPk(req.session.user_id, { // using session id, to get the currently logged in user, to display THEIR blogs.
        attributes: { exclude: ['password'] }, // excluding the password so nobody can see it.
        include: [{ model: Blogs }],
      });
      const users = userData.get({ plain: true });
      console.log(users)
      res.render('dashboard', { // rendering/sending all content(if any) to the dashboard page.
        ...users,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
      console.log(err)
    }
  });

  // the login page
  router.get('/login', (req, res) => {
    if (req.session.logged_in) { // using session id to see if logged in so the user can be redirected to the dashboard
      res.redirect('/dashboard');
      return;
    }
  
    res.render('login');
  });
  
  module.exports = router;
  