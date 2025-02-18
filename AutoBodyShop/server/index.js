require("dotenv").config();

const express = require("express");
const cors = require("cors");
const users = require("./routes/users");
const Consultations = require("./routes/consultations");

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT;

app.use("/", users);
app.use("/consultations", Consultations);

app.listen(port, () => {
  console.log(`Server is running on http:/localhost:${port}`);
});
