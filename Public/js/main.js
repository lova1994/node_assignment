// import { isMainThread } from "worker_threads";

export function addEventListenersProduct() {
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
            <p product-id="${product.id}"   >${product.name}</p>  
            <img src="${product.img}">
            <p product-id="${product.id}"  >${product.price}cp</p>  
           <img src="./img/pokeball.png" class="pokeball" id="product" product-id="${product.id}">
           
      
            
            
            
            
            `
            )
            addEventListenersProduct()

    } catch {
        console.log("Error")
    }
};
                 

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