const express = require("express");
const router = express.Router();
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);

router.get("/products", async (req, res) => {
  const events = await db.get("products");
  res.send(events);
});

router.get("/cart", async (req, res) => {
  const events = await db.get("cart");
  res.send(events);
});

module.exports = router;
