// // Hämtar alla produkter i databasen
//  async function getProduct(){
//     console.log("Hämtar produkter...")
//     try {
//         let get = await fetch('http://localhost:2000/products');
//         let response = await get.json();
//         console.log(response);
//         console.log(response[0].name);
//         console.log(response[0].price);
//     } catch {
//         console.log("Error")
//     }
// };

// // Hämtar allt i cart i DATABAS
//  async function getCart(){
//     console.log("Get stuff in cart...")
//     try {
//         let get = await fetch('http://localhost:2000/cart');
//         let response = await get.json();
//         console.log(response);
//         console.log(response[0].name);
//         console.log(response[0].price);
//     } catch {
//         console.log("Error")
//     }
// };

// // Radera cart i DATABAS
// async function removeFromCart(){
//     console.log("Remove stuff in cart...")
//     try {
//          let get = await fetch('http://localhost:2000/removefromcart/:id');
//         let response = await get.json();
//         console.log(response);
//         console.log(response[0].name);
//         console.log(response[0].price);
//     } catch {
//         console.log("Error")
//     }
// };

// function addToCart() {
//     let test = {id: 1, price: 10}
//     console.log("AddProduct körs...")
//     const url = 'http://localhost:2000/addtocart';
//   fetch(url, { method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({test}),
//     })
//     .then(data => {
//       console.log(data);
//       console.log("Status = " + data.status)
//     })
//     .catch(error => {
//         console.error(error); 
//     });
//   };  

// // getProduct()
// // addToCart()