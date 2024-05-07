const { categoryModel } = require("../models");

async function findAllCategories(req, res, next) {
    req.categoriesArray = await categoryModel.find({});
    next();
}

const findCategoryById = async (req, res, next) => {
    console.log("GET /categories/:id");
    try {
      req.category = await categories.findById(req.params.id);
      next();
    } catch (error) {
      res.setHeader("Content-Type", "application/json");
          res.status(404).send(JSON.stringify({ message: "Категория не найдена" }));
    }
}; 

const createCategory = async (req, res, next) => {
    console.log("POST /categories");
    try {
        console.log(req.body);
      req.category = await categoryModel.create(req.body);
      next();
    } catch (error) {
      res.setHeader("Content-Type", "application/json");
          res.status(400).send(JSON.stringify({ message: "Ошибка создания категории" }));
    }
}; 

module.exports = {
    findAllCategories,
    findCategoryById,
    createCategory
}