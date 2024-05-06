const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const { cors } = require("./middlewares");
const connectToDatabase = require("./database/connect");

const { mainRouter, categoriesRouter, gamesRouter, usersRouter } = require("./routes");

const PORT = 3000;
const app = express();

connectToDatabase();

app.use(
    cors,
    bodyParser.json(),
    express.static(path.join(__dirname, "public")),
    mainRouter,
    gamesRouter,
    categoriesRouter,
    usersRouter
);

app.listen(PORT, () => {
    console.log(`Server is running at PORT http://localhost:${PORT}`);
})