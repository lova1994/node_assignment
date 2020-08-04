console.log(123)



async function getProduct(){
    let get = await fetch('http://localhost:3000/products');
    let response = await get.json();
    console.log(response);
};

getProduct()