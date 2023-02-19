const User = require('./user');
const Blogs = require('./blogPost');

User.hasMany(Blogs, {
  foreignKey: 'blog_creator',
  onDelete: 'CASCADE'
});

Blogs.belongsTo(User, {
  foreignKey: 'blog_creator',
});

module.exports = { User, Blogs };