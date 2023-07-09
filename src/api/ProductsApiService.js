import axios from 'axios'


export const baseCategoryClient = axios.create({
    baseURL: 'http://localhost:8080/api/',
    headers: {
        "Access-Control-Allow-Origin": "http://localhost:8080/",
        'Content-Type': 'application/json'
    },
})

export const getProducts = async () => {
    console.log("Fetching products")
    const response = await baseCategoryClient.get('products');
    const products = response.data;

    console.log(products)
    return products
}