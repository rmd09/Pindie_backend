const categoriesRouter = require("express").Router();
const { findAllCategories, createCategory, findCategoryById, updateCategory, deleteCategory } = require("../middlewares");
const { sendAllCategories, sendCategoryCreated, sendCategoryById, sendCategoryUpdated, sendCategoryDeleted } = require("../controllers");

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);

categoriesRouter.post(
    "/categories", 
    findAllCategories, 
    createCategory, 
    sendCategoryCreated
); 

categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);

categoriesRouter.put("/categories/:id", updateCategory, sendCategoryUpdated);

categoriesRouter.delete("/categories/:id", deleteCategory, sendCategoryDeleted);

module.exports = categoriesRouter;