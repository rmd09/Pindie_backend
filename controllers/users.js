function sendAllUsers(req, res) {
    res.header("Content-Type", "application/json");
    res.send(JSON.stringify(req.usersArray));
}

function sendUserById(req, res) {
    res.header("Content-Type", "application/json");
    res.send(JSON.stringify(req.user));
}

const sendUserCreated = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.user));
};

module.exports = { 
    sendAllUsers, 
    sendUserCreated,
    sendUserById
};