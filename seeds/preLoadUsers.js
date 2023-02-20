const { User } = require('../models')

const userData = [
    {
        username: "AvNew",
        email: "newhartreeceavery@gmail.com",
        password: "thebestpassword11"
    },
    {
        username: "LilRo",
        email: "lilroyaknow@gmail.com",
        password: "decentpassword22"
    },
    {
        username: "BigAl",
        email: "bigalrunninit@gmail.com",
        password: "okaypassworkd33"
    }
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;