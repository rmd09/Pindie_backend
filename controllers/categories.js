function sendAllCategories(req, res) {
    res.header("Content-Type", "application/json");
    res.send(JSON.stringify(req.categoriesArray));
}

function sendCategoryById(req, res) {
    res.header("Content-Type", "application/json");
    res.send(JSOM.stringify(req.game));
}

function sendCategoryUpdated(req, res) {
    res.header("Content-Type", "application/json");
    res.status(200).send({ message: "Категория обновлена" });
}

const sendCategoryCreated = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.category));
};

module.exports = { 
    sendAllCategories,
    sendCategoryCreated,
    sendCategoryById,
    sendCategoryUpdated
};