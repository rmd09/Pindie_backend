const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mainRoute = require("./routes/main");

const cors = require("./middlewares/cors");
const connectToDatabase = require("./database/connect");

const PORT = 3000;
const app = express();

connectToDatabase();

app.use(
    cors,
    bodyParser.json(),
    express.static(path.join(__dirname, "public")),
    mainRoute
);

app.listen(PORT, () => {
    console.log(`Server is running at PORT http://localhost:${PORT}`);
})