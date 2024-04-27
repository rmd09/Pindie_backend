function sendAllCategories(req, res) {
    res.header("Content-Type", "application/json");
    res.send(JSON.stringify(req.categoriesArray));
}

module.exports = sendAllCategories;