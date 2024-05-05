function sendAllGames(req, res) {
    res.header("Content-Type", "application/json");
    res.send(JSON.stringify(req.gamesArray));
}

module.exports = sendAllGames;