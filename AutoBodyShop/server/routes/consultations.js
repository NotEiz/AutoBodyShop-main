require("dotenv").config();

const express = require("express");
const router = express.Router();
const { MongoClient } = require("mongodb");

const URI = process.env.DB_CONNECTION_URI;
const client = new MongoClient(URI);

router.post("/consultations", async (req, res) => {
  try {
    const newConsultation = {
      email: req.body.email,
      carMake: req.body.carMake,
      carModel: req.body.carModel,
      carYear: req.body.carYear,
    };

    if (!newConsultation.email) {
      return req.send({ error: "email is required" });
    }
    if (!newConsultation.carMake) {
      return req.send({ error: "Car make ir required" });
    }

    if (!newConsultation.carModel) {
      return req.send({ error: "Car model ir required" });
    }

    if (!newConsultation.carYear) {
      return req.send({ error: "Car year ir required" });
    }

    const con = await client.connect();

    await con
      .db("ManoDB")
      .collection("Consultations")
      .insertOne(newConsultation);

    await con.close();
    res.status(201).send({ success: "Consultations was successfully created" });
  } catch (error) {
    res.status(500).send({ error: "Something went wrong" });
  }
});

module.exports = router;
