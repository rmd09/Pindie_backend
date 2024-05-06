function sendAllUsers(req, res) {
    res.header("Content-Type", "application/json");
    res.send(JSON.stringify(req.usersArray));
}

const sendUserCreated = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.user));
};

module.exports = { 
    sendAllUsers, 
    sendUserCreated
};