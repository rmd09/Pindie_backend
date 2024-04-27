const { categoryModel } = require("../models");

async function findAllCategories(req, res, next) {
    req.categoriesArray = await categoryModel.find({});
    next();
}

module.exports = findAllCategories;