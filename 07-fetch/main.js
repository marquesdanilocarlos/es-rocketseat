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

fetchProducts().then(products => console.log(products))

fetchProduct(2).then(product => console.log(product))


