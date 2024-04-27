const { userModel } = require("../models");

async function findAllUsers(req, res, next) {
    req.usersArray = await userModel.find({});
    next();
}

module.exports = findAllUsers;