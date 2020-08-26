
const lowdb = require("lowdb");
const fileSync = require("lowdb/adapters/FileSync");
const adapter = new fileSync("db.json");
const db = lowdb(adapter);

// db init (ngl ive no clue what the point of this code is, prolly should remove it )

// const initiateDb = () => {
//     const hasProduct = db.has("products");
//     const hasCart = db.has("cart");

//     // add some more stuff here l8er
// }

// GET PRODUCTS
const getProducts = async () =>   {
return await db.get("products");
};


// GET CART
const getCart = async () =>   {
    return await db.get("cart");
    };


// // ADD TO CART
// const addToCart = async test => {
//     // const response = await db

//     return response;
//   };

  // REMOVE FROM CART
  const removeFromCart = async () => {
  }



 //check if the product exists 
 const hasProduct =  async id => {
    return await db
    .get('products')
    .find({id: 1})
    .value();
}

  // check if the product is already in the cart
  const hasProductInCart =  async id => {
      return await db
      .get('cart')
      .find({id: 1})
      .value();
  }




module.exports = {
    getProducts,
    // addToCart,
    getCart,
    removeFromCart,
    hasProductInCart,
    hasProduct
};