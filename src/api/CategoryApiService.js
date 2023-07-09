import axios from 'axios'
import { useMutation } from 'react-query'


export const baseCategoryClient = axios.create({
    baseURL: 'http://localhost:8080/api/',
    headers: {
        "Access-Control-Allow-Origin": "http://localhost:8080/",
        'Content-Type': 'application/json'
    },

})

export const getCategories = async () => {
    console.log("Fetching categories")
    const response = await baseCategoryClient.get('category');
    const categories = response.data;

    console.log(categories)
    return categories
}

// export const addNewCategory = useMutation((newCategory) => {
//     console.log('Adding new category: ', newCategory)
//     return baseCategoryClient('/category/add', newCategory)
// })


export const getAllCategories = () => {
    baseCategoryClient.get('category').then(res => {
        return res.data
    })
}

export function addCategory(name, color) {
    baseCategoryClient.post('/category/add', {
        name: name,
        color: color
    }).then(res => {
        console.log(res)
    })
}