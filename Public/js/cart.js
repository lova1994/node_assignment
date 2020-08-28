// import { removeFromCart } from "../../Backend/modules/db-operations";

export function addEventListeners() {
    //Hämtar alla produkter med id cart
    //Sätter en event listener på varje cart 
    const pickProduct = document.querySelectorAll("#cart");
    for(let i = 0; i < pickProduct.length; i++) {
        pickProduct[i].addEventListener('click', (event) => {
            //Hämtar product-id från det elementet man klickade på
            const id = event.srcElement.getAttribute('product-id');
            console.log("Hämtar cart ID: " + id)
            console.log("dslgkjvdosjfpskfdsojfosidjfvogfsjdfpoekfpojsofijaiosjfoiej" . id)
            removeFromCart(id)
            console.log("addeventlisteners")
        });
    }
}

getCart()


// Hämtar allt i cart i DATABAS
export async function getCart() {
// Count everything in the cart
    console.log("Get items in cart...")
    try {
        let get = await fetch('http://localhost:2000/cart');
        let response = await get.json();
        const cartElement = document.getElementById('cart');
        console.log(`${response.length}  items in cart`)
        console.log(response)

        // kollar om det finns något i cart
        if(response.length > 0) { // REMOVE THIS I THINK IT IS UNNECESSARY.

        // SKRIVER UT ALLA PRODUKTER I KUNDVADNEN I FRONTEND
        response.forEach(cartItem =>
            cartElement.innerHTML += `
            <img src="${cartItem.img}">
            <p cart-id="${cartItem.id}"   >${cartItem.name}</p>  
            <p cart-id="${cartItem.id}"  >${cartItem.price}kr</p>  
            <button id="cart" product-id="${cartItem.id}"  > Remove from cart </button>                `
            )

            addEventListeners()

        }

    } catch {
        console.log("Error")
    }
};

async function removeFromCart(id) {

    let productId = parseInt(id)
    let test = {
        id: productId
    }
    console.log("RemoveFromCart körs...")
    console.log(test)
    console.log("id from addToCart " + id + typeof(id))

    const url = 'http://localhost:2000/removefromcart';
    await fetch(url, {
            method: 'DELETE',
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








