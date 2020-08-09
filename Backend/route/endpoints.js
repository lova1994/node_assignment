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
router.post("/addtocart", async (req, res) => {
    const events = await db.get("cart");
    const sending = await events.push(  {
        "id": 1,
        "name": "Alien",
        "img": "https://",
        "price": 108
      }).write();
    res.send(sending);
  });

// DELETE FROM CART 

// router.delete(`/removefromcart/:id`, async (req, res) => {
//     const events = await db.get('cart');
//     let id = await req.params.id;
//     console.log(id)
//     const send = await events.remove({id:id}) // funkar ej, varför inte ???????
//     .write()
//     res.send(send);
//     console.log(send)
//   });


//   DELETE FROM CART 
// Hur gör man här för att inte radera ALLT i hela cart?
router.delete("/removefromcart", async (req, res) => {

    const events = await db.get('cart');
    console.log(events)

    const send = await events.remove({id:1}) // raderar det som har id 1, hur gör jag för att skicka med värde från frontend hit så att jag raderar det man klickat på?
    .write()
    res.send(send);
  });


module.exports = router;
