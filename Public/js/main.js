// import { isMainThread } from "worker_threads";

export function addEventListeners() {
    //Hämtar alla produkter med id product
    //Sätter en event listener på varje produkt 
    const pickProduct = document.querySelectorAll("#product");
    for(let i = 0; i < pickProduct.length; i++) {
        pickProduct[i].addEventListener('click', (event) => {
            //Hämtar product-id från det elementet man klickade på
            const id = event.srcElement.getAttribute('product-id');
            console.log("Hämtar produkt ID: " + id)
            addToCart(id)
            console.log("addeventlisteners")
        });
    }
}

getProduct()
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
            <p product-id="${product.id}"   >${product.name}</p>  
            <p product-id="${product.id}"  >${product.price}kr</p>  
            <button id="product" product-id="${product.id}"  > Catch </button>      
            `
            )
            addEventListeners()

    } catch {
        console.log("Error")
    }
};

// // Hämtar allt i cart i DATABAS
// export async function getCart() {
//     console.log("Get stuff in cart...")
//     try {
//         let get = await fetch('http://localhost:2000/cart');
//         let response = await get.json();
//         const cartElement = document.getElementById('cart');

//         // SKRIVER UT ALLA PRODUKTER I KUNDVADNEN I FRONTEND
//         response.forEach(cartItem =>
//             cartElement.innerHTML += `
//             <img src="${cartItem.img}">
//             <p id="${cartItem.id}">${cartItem.name}</p>  
//             <p id="${cartItem.id}">${cartItem.price}kr</p>  
//             `)

//     } catch {
//         console.log("Error")
//     }
// };

// Radera cart i DATABAS
// async function removeFromCart(id) {
//     console.log("Remove stuff in cart...")
//     try {
//         let get = await fetch('http://localhost:2000/removefromcart/:id');
//         let response = await get.json();
//         console.log(response);
//         // console.log(response[0].name);
//         // console.log(response[0].price);
//     } catch {
//         console.log("Error")
//     }
// };


// ADD PRODUCT TO CART
async function addToCart(id) {

    let productId = parseInt(id)
    let test = {
        id: productId
    }
    console.log("AddToCart körs...")
    console.log(test)
    console.log("id from addToCart " + id + typeof(id))

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
            console.log("FUNKADE EJ")
            console.error(error);
            console.log(`Status =  ${data.status}`)

        });
};

