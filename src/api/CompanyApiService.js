import axios from 'axios'

export const baseCompanyClient = axios.create({
        baseURL: 'http://localhost:8080/api/company',
        headers: {"Access-Control-Allow-Origin": "*"}
    })


export const getAllCategories = () => {
    baseCompanyClient.get().then(res => {
        return res.data
    })
}