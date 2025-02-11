const apiUrl = "http://localhost:3000"

/*fetch(`${apiUrl}/products`)
    .then(response => response.json())
    .then(data => console.log(data))*/

async function fetchProducts(){
    const request = await fetch(`${apiUrl}/products`)
    const data = await request.json()
    return data
}

await fetchProducts().then(products => console.log(products))


