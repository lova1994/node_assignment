// import { isMainThread } from "worker_threads";
import { hej } from './modules/hej.js'
// import {getProduct} from './modules/getProduct.js'


hej()



// Hämtar alla produkter i databasen
   async function getProduct() {
    console.log("Hämtar produkter...")
    try {
        let get = await fetch('http://localhost:2000/products');
        let response = await get.json();
        const productElement = document.getElementById('products');
    
        // SKRIVER UT ALLA PRODUKTER I FRONTEND
        response.forEach(product =>  
            productElement.innerHTML += `
            <img src="${product.img}">
            <p id="${product.id}">${product.name}</p>        
            `)


    } catch {
        console.log("Error")
    }
};

getProduct()


// Hämtar allt i cart i DATABAS
export async function getCart() {
    console.log("Get stuff in cart...")
    try {
        let get = await fetch('http://localhost:2000/cart');
        let response = await get.json();
        // console.log(response);
        // console.log(response[0].name);
        // console.log(response[0].price);
    } catch {
        console.log("Error")
    }
};

// Radera cart i DATABAS
async function removeFromCart() {
    console.log("Remove stuff in cart...")
    try {
        let get = await fetch('http://localhost:2000/removefromcart/:id');
        let response = await get.json();
        console.log(response);
        // console.log(response[0].name);
        // console.log(response[0].price);
    } catch {
        console.log("Error")
    }
};

// ADD PRODUCT TO CART
async function addToCart() {
    let test = {
        id: id
    }
    console.log("AddToCart körs...")
    console.log(test)

    const url = 'http://localhost:2000/addtocart';
    await fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                test
            }),
        })
        .then(data => {
            console.log(data);
            console.log(`Status =  ${data.status}`)
        })
        .catch(error => {
            console.error(error);
            console.log(`Status =  ${data.status}`)

        });
};

// addToCart()


