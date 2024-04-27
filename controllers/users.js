function sendAllUsers(req, res) {
    res.header("Content-Type", "application/json");
    res.send(JSON.stringify(req.usersArray));
}

module.exports = sendAllUsers;