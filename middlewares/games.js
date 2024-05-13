const { gameModel } = require("../models");

async function findAllGames(req, res, next) {
    req.gamesArray = await gameModel.find({}).populate({path: "users", select: "-password"}).populate("categories");
    next();
}

const findGameById = async (req, res, next) => {
    try {
        req.game = await gameModel.findById(req.params.id).populate({path: "users", select: "-password"}).populate("categories");
        next();
    } catch (error) {
        res.setHeader("Content-Type", "application/json");
        res.status(404).send(JSON.stringify({ message: "Игра не найдена" }));
    }
};

const updateGame = async (req, res, next) => {
    try {
      req.game = await gameModel.findByIdAndUpdate(req.params.id, req.body);
      next();
    } catch (error) {
      res.setHeader("Content-Type", "application/json");
      res.status(400).send(JSON.stringify({ message: "Ошибка обновления игры" }));
    }
}; 

const createGame = async (req, res, next) => {
    try {
        console.log(req.body);
        req.game = await gameModel.create(req.body);
        next();
    } catch (error) {
        res.setHeader("Content-Type", "application/json");
            res.status(400).send(JSON.stringify({ message: "Ошибка создания игры" }));
    }
};

const deleteGame = async (req, res, next) => {
    try {
      req.game = await gameModel.findByIdAndDelete(req.params.id);
      next();
    } catch (error) {
      res.setHeader("Content-Type", "application/json");
      res.status(400).send(JSON.stringify({ message: "Ошибка удаления игры" }));
    }
}; 

const checkEmptyFields = async (req, res, next) => {
    if (
        !req.body.title ||
        !req.body.description ||
        !req.body.image ||
        !req.body.link ||
        !req.body.developer
    ) {
        res.setHeader("Content-Type", "application/json");
            res.status(400).send(JSON.stringify({ message: "Заполни все поля" }));
    } else {
        next();
    }
}; 

const checkIfCategoriesAvaliable = async (req, res, next) => {
    // Проверяем наличие жанра у игры
  if (!req.body.categories || req.body.categories.length === 0) {
    res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Выбери хотя бы одну категорию" }));
  } else {
    next();
  }
}; 

const checkIfUsersAreSafe = async (req, res, next) => {
    // Проверим, есть ли users в теле запроса
  if (!req.body.users) {
    next();
    return;
  }
  // Cверим, на сколько изменился массив пользователей в запросе
  // с актуальным значением пользователей в объекте game
  // Если больше чем на единицу, вернём статус ошибки 400 с сообщением
  if (req.body.users.length - 1 === req.game.users.length) {
    next();
    return;
  } else {
    res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Нельзя удалять пользователей или добавлять больше одного пользователя" }));
  }
}; 

function checkIsGameExists(req, res, next) {
  if (req.gamesArray.find((item) => item.title === req.body.title)) {
    res.header("Content-Type", "application/json");
    res.status(400).send({ message: "Игра с таким названием уже существует" });
  } else {
    next();
  }
}

module.exports = {
    findAllGames,
    findGameById,
    createGame,
    updateGame,
    deleteGame,
    checkEmptyFields,
    checkIfUsersAreSafe,
    checkIfCategoriesAvaliable,
    checkIsGameExists
}