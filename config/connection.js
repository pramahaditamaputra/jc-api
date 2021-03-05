const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const DB_USER = process.env.DB_USER;
const DB_NAME = process.env.DB_NAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_CONFIG = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.swton.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
mongoose.connect(DB_CONFIG, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Server database connect!");
});
