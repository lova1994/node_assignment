// Hämtar alla produkter i databasen
 async function getProduct(){
    console.log("Hämtar produkter...")
    try {
        let get = await fetch('http://localhost:3000/products');
        let response = await get.json();
        console.log(response);
        console.log(response[0].name);
        console.log(response[0].price);
    } catch {
        console.log("Error")
    }
};

// Hämtar allt i cart i DATABAS
 async function getCart(){
    console.log("Get stuff in cart...")
    try {
        let get = await fetch('http://localhost:4000/cart');
        let response = await get.json();
        console.log(response);
        console.log(response[0].name);
        console.log(response[0].price);
    } catch {
        console.log("Error")
    }
};




getProduct()