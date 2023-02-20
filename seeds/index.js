const sequelize = require("../config/connection");
const seedUser = require('./preLoadUsers');
const seedBlogs = require('./preLoadBlogs')


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedBlogs()

  process.exit(0);
};

seedDatabase();