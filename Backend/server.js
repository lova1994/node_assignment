const express = require('express');
const app = express();
const port = 3000;
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);
const cors = require('cors');

app.use(cors());


// INIT GET PRODUCTS
const getCart = async () => {
    return await db.get('products')
 }

// Här ligger endpoints, alltså url 
app.get('/products', async (req, res) => {
    products = await getCart();
    res.send(products);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})  
