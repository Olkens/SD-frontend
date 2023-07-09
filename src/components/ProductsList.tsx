import { getProducts } from '../api/ProductsApiService.js'
import { useQuery } from 'react-query'

export default function ProductsList() {

    const { data, status, error } = useQuery(
        ['products'],
        getProducts
    )


    return (
        <>
            {status === 'loading' ? (
                <p>wait</p>
            ) : status === 'error' ? (
                <p> Nie udalo się połączyć z serwerem({error.message}) </p>
            ) :
                <ul>
                    {data.map(p => {
                        return <li>{p.name}</li>
                    })}
                </ul>}
        </>
    )
}