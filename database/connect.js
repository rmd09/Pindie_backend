const mongoose = require("mongoose");
const { DB_URL } = require("../api/config");

async function connectToDatabase() {
    try {
        await mongoose.connect(DB_URL);
        console.log("Успешно подключились к MongoDB");
    } catch (error) {
        console.log("При подключении возникла ошибка");
        console.log(error);
    }
}

module.exports = connectToDatabase;