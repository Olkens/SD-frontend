import CategoryCreateForm from './CategoryCreateForm'
import { getCategories } from '../api/CategoryApiService.js'
import { useQuery } from 'react-query'


export default function CategoriesList() {
    const { data, status, error } = useQuery(
        ['categories'],
        getCategories
    )

    return (
        <>
            <CategoryCreateForm></CategoryCreateForm>
            {status === 'loading' ? (
                <p>wait</p>
            ) : status === 'error' ? (
                <p> Nie udalo się połączyć z serwerem </p>
            ) :
                <ul>
                    {data.map(c => {
                        return <li>{c.name}</li>
                    })}
                </ul>}
        </>
    )
}