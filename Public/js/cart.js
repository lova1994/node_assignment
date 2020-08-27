// Hämtar allt i cart i DATABAS
export async function getCart() {
    console.log("Get stuff in cart...")
    try {
        let get = await fetch('http://localhost:2000/cart');
        let response = await get.json();
        const cartElement = document.getElementById('cart');

        // SKRIVER UT ALLA PRODUKTER I KUNDVADNEN I FRONTEND
        response.forEach(cartItem =>
            cartElement.innerHTML += `
            <img src="${cartItem.img}">
            <p id="${cartItem.id}">${cartItem.name}</p>  
            <p id="${cartItem.id}">${cartItem.price}kr</p>  
            <button> Remove from cart </button>
            `)
    } catch {
        console.log("Error")
    }
};

getCart()
console.log(123)