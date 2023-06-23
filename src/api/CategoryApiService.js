import axios from 'axios'

export const baseCategoryClient = axios.create({
        baseURL: 'http://localhost:8080/api/',
        headers: {"Access-Control-Allow-Origin": "*"}
    })


export const getAllCategories = () => {
    baseCategoryClient.get('category').then(res => {
        return res.data
    })
}

export function addCategory(name, color){
    baseCategoryClient.post('/category/add', {
        name: name,
        color: color
    }).then(res => {
        console.log(res)
    })
}