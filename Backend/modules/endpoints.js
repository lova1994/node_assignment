// const express = require("express");
// const router = express.Router();
// const db = require("./db-operations");

const express = require("express");
const router = express.Router();
const db = require("./db-operations");

router.use(express.static('public'))


// GET PRODUCTS
router.get("/products", async (req, res) => {
  const events = await db.getProducts();
  res.send(events);
  console.log("Router.Get product runs...")
});

//GET CART
router.get("/cart", async (req, res) => {
  const events = await db.getCart();
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
  const events = await db.getCart();
  const id = req.body.test.id; 
  const productExist = await db.hasProduct(id);
  // If the product exist, check if the product is already in the cart
  if (productExist) {
    const productExistInCart = await db.hasProductInCart(id)

    if (productExistInCart) {
      let message = {
        success: false,
        msg: 'the product is already in cart.',
      }
      res.send(message)
    }

    // if theres no product in the cart then add it to the cart ;) 
    if (!productExistInCart) {
      const sending = await events.push(
        productExist).write(); // Letar upp id från req-body.test.id i produkter och sparar produktId som läggs in i cart
      res.send(sending);
    } else {

      let message = {
        success: false,
        msg: 'try again dumbass.',
      }
      res.send(message)

    }
  }
});

//   DELETE FROM CART 
router.delete(`/removefromcart/:id`, async (req, res) => {
  const events = await db.getCart();
  // let id =  req.params.id; // req.params funkar men den funkar inte där nere
  let id = 1;
  const productExist = await db.hasProduct(id);
  if (productExist) {

    const send = await events.remove({
        id: id
      }) // HÄR funkar inte id om man använder req.params.id
      .write()
    res.send(send);
    console.log(send)
    console.log(req.query)

  } else if (!productExist) {
    let message = {
      success: false,
      msg: 'The product that you tried to remove doesnt exist.',
    }
    res.send(message)
  }
});

module.exports = router;