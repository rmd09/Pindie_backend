function sendAllGames(req, res) {
    res.header("Content-Type", "application/json");
    res.send(JSON.stringify(req.gamesArray));
}

const sendGameCreated = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.game));
};

module.exports = {
    sendAllGames,
    sendGameCreated
};