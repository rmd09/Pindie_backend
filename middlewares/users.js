const { userModel } = require("../models");

async function findAllUsers(req, res, next) {
    req.usersArray = await userModel.find({});
    next();
}

const createUser = async (req, res, next) => {
    console.log("POST /users");
    try {
      console.log(req.body);
      req.user = await userModel.create(req.body);
      next();
    } catch (error) {
      res.setHeader("Content-Type", "application/json");
          res.status(400).send(JSON.stringify({ message: "Ошибка создания пользователя" }));
    }
}; 

module.exports = {
    findAllUsers,
    createUser
};