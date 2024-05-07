function sendAllGames(req, res) {
    res.header("Content-Type", "application/json");
    res.send(JSON.stringify(req.gamesArray));
}

const sendGameById = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.game));
};

const sendGameCreated = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.game));
};

module.exports = {
    sendAllGames,
    sendGameById,
    sendGameCreated
};