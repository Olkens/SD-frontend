import CategoryCreateForm from './CategoryCreateForm'
import { getCategories } from '../api/CategoryApiService.js'
import { useQuery } from 'react-query'


export default function CategoriesList() {
    const { data, status, error } = useQuery(
        ['categories'],
        getCategories
    )

    if (status === 'loading') {
        return <p>wait</p>
    }

    if (status === 'error') {
        return <p>{error.message}</p>
    }

    return (
        <>
        <CategoryCreateForm></CategoryCreateForm>
            <ul>
                {data.map(c => {
                    return <li>{c.name}</li>
                })}
            </ul>
        </>
    )
}