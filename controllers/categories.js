function sendAllCategories(req, res) {
    res.header("Content-Type", "application/json");
    res.send(JSON.stringify(req.categoriesArray));
}

const sendCategoryCreated = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.category));
};

module.exports = { 
    sendAllCategories,
    sendCategoryCreated
};