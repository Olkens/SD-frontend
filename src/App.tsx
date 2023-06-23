import { useEffect, useState, React } from 'react'
import './App.css'
import CategoryCreateForm from './components/CategoryCreateForm'
import { getAllCategories, baseCategoryClient } from './api/CategoryApiService.js'
import axios from 'axios'
import { useStore } from './stores/categoryStore/store.js'


function App() {
    const [products, setProducts] = useState([])

    // const fetchProductData = () => {
    //     baseCategoryClient.get('category').then(response => {
    //             setProducts(response.data)
    //         })
    // }

    useEffect(() => {
        baseCategoryClient.get('category').then(response => {
            setProducts(response.data)
        })
    }, [])

    const categories = useStore((state) => state.categories)
    console.log(categories)



    return (
        <>
            <div>
                <CategoryCreateForm></CategoryCreateForm>
                co jes
                {products.length > 0 && (
                    <ul>
                        {products.map(product => (
                            <li key={product.id}>{product.name}<p>{product.color}</p></li>
                        ))}
                    </ul>
                )}
                {categories.length > 0 &&  categories.map(c => (
                    <li key={c.name}>{c.name}</li>
                ))}

            </div>
        </>
    )

}

export default App
