/* file: index.js */
const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
const userRouters = require("./routes/userRouters");
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(userRouters);
app.listen(port, () =>
  console.log(`Server running at
http://localhost:${port}`)
);
