const apiUrl = "http://localhost:3000"

/*fetch(`${apiUrl}/products`)
    .then(response => response.json())
    .then(data => console.log(data))*/

async function fetchProducts(){
    const request = await fetch(`${apiUrl}/products`)
    return await request.json()
}

async function fetchProduct(id){
    const request = await fetch(`${apiUrl}/products/${id}`)
    return await request.json()
}

//fetchProducts().then(products => console.log(products))

//fetchProduct(2).then(product => console.log(product))

const nameInput = document.querySelector('#name')
const priceInput = document.querySelector('#price')
const form = document.querySelector('#form')

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const productName = nameInput.value;
    const productPrice = priceInput.value;

    await fetch(`${apiUrl}/products`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            id: new Date().getTime().toString(),
            name: productName,
            price: productPrice,
        })
    })

    console.log(await fetchProducts())

})


