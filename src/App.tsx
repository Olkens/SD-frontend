import { useEffect, useState} from 'react'
import './App.css'
import CategoryCreateForm from './components/CategoryCreateForm'

function App() {
    const [products, setProducts] = useState([])

    const fetchProductData = () => {
        fetch("http://localhost:8080/")
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data)
                setProducts(data)
            })
    }

    useEffect(() => {
        fetchProductData()
    }, [])

    return (
        <>
            <div>
                <CategoryCreateForm></CategoryCreateForm>
                co jes
                {products.length > 0 && (
                    <ul>
                        {products.map(product => (
                            <li key={product.id}>{product.name}<p>{product.tags.map(tag => (<span>{tag.name} - {tag.color}</span>))}</p></li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )

}

export default App
