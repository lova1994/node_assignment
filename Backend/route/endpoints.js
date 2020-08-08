const express = require("express");
const router = express.Router();
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);

// GET PRODUCTS
router.get("/products", async (req, res) => {
  const events = await db.get("products");
  res.send(events);
});

//GET CART
router.get("/cart", async (req, res) => {
  const events = await db.get("cart");
  res.send(events);
});


// ADD TO CART
// router.post("/addToCart", async (req, res) => {
//     const events = await db.get("cart");
//     res.send(events);
//   });

router.post("/addtocart", async (req, res) => {
    const events = await db.get("cart");
    const sending = await events.push("22").write();
    res.send(sending);
  });


// DELETE FROM CART

router.delete("/removefromcart", async (req, res) => {

    const events = await db.get('cart');
    const send = await events.remove('alien')
    .write()
    res.send(send);
  });



module.exports = router;
