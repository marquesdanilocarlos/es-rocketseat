const apiUrl = "http://localhost:3000"

fetch(`${apiUrl}/products`)
    .then(response => response.json())
    .then(data => console.log(data))
