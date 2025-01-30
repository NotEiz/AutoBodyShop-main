require("dotenv").config();

const express = require("express");
const router = express.Router();
const { MongoClient } = require("mongodb");
const bcrypt = require("bcrypt");
const cors = require("cors");

const URI = process.env.DB_CONNECTION_URI;
const client = new MongoClient(URI);
router.use(cors());

router.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = {
      username: req.body.username,
      password: hashedPassword,
    };

    if (!newUser.username) {
      return res.send({ error: "Username is required" });
    }
    if (!newUser.password) {
      return res.send({ error: "Password is required" });
    }
    const con = await client.connect();

    const existingUser = await con
      .db("ManoDB")
      .collection("Users")
      .findOne({ username: newUser.username });

    if (existingUser) {
      await con.close();
      return res.status(400).send({ error: "Username is already taken" });
    }

    await con.db("ManoDB").collection("Users").insertOne(newUser);
    await con.close();

    res.status(201).send({ success: "User was successfully created" });
  } catch {
    res.status(500).send({ error: "something went wrong" });
  }
});

module.exports = router;
