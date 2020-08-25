
const express = require("express");
const router = express.Router();
const db = require("./db-operations");

// DETTA BÖR VARA EN MODUL // 

const findProduct = async id => {
  return await db
  .get("products")
  .find({ id: id })
  .value();
}

// TILL HIT :) :D // 

// GET PRODUCTS
router.get("/products", async (req, res) => {
  const events = await db.getProducts();
  res.send(events);
  console.log("Router.Get product runs...")
});

//GET CART
router.get("/cart", async (req, res) => {
  const events = await db.get("cart");
  res.send(events);
  console.log("router.Get cart runs...")

}); 


//GET SPECIFIC ITEM IN CART
router.get("/cart", async (req, res) => {
  const events = await db.get("cart");
  res.send(events);
  console.log("router.Get cart runs...")

}); 

// ADD TO CART
router.post("/addtocart", async (req, res) => {
    const test = req.body.test;
    console.log(test, 'it works!!!!!!!!!!!!!!!!!!!');
    // console.log(res.status)
    const events = await db.get("cart");

    // const product = await db.findProduct(id) // denna 1an ska hämtas från en annan funktion :) ?? va
    // if id = 1 (if id already exist, write error)
    // console.log(product)

    const sending = await events.push(  {
        "id": 1,
        "name": "Test",
        "img": "https://",
        "price": 108
      }).write();
    res.send(sending);
  });


//   DELETE FROM CART 
router.delete(`/removefromcart/:id`, async (req, res) => {
    const events = await db.get('cart');
    // let id =  req.params.id; // req.params funkar men den funkar inte där nere
    let id = 1;
    console.log("id från url = " + id)
    const send = await events.remove({id: id}) // HÄR funkar inte id om man använder req.params.id
    .write()
    res.send(send);
    console.log(send)
  });

module.exports = router;

