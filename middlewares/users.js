const { userModel } = require("../models");

async function findAllUsers(req, res, next) {
    req.usersArray = await userModel.find({});
    next();
}

const findUserById = async (req, res, next) => {
    console.log("GET /users/:id");
    try {
      req.user = await userModel.findById(req.params.id);
      next();
    } catch (error) {
      res.setHeader("Content-Type", "application/json");
          res.status(404).send(JSON.stringify({ message: "Пользователь не найден" }));
    }
}; 

async function updateUser(req, res, next) {
  try {
    req.game = await userModel.findByIdAndUpdate(req.params.id, req.body);
    next();
  } catch (error) {
    res.header("Content-Type", "application/json");
    res.status(400).send({ message: "Ошибка в обновлении пользователя" });
  }
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

const deleteUser = async (req, res, next) => {
  try {
    req.game = await userModel.findByIdAndDelete(req.params.id);
    next();
  } catch (error) {
    res.header("Content-Type", "application/json");
    res.status(400).send({ message: "Ошибка удаления пользователя"} );
  }
}

module.exports = {
    findAllUsers,
    findUserById,
    createUser,
    updateUser,
    deleteUser
};