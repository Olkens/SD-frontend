import { useState } from 'react'
import { addNewCategory, baseCategoryClient } from '../api/CategoryApiService.js'
import { useMutation, useQueryClient } from 'react-query'

export default function CategoryCreateForm() {
    const client = useQueryClient()

    const [category, setCategory] = useState({ name: '', color: '' })

    const handleNameChange = (e) => {
        setCategory({ ...category, name: e.target.value })
    }

    const handleColorChange = (e) => {
        setCategory({ ...category, color: e.target.value })
    }

    const addNewCategory = useMutation((newCategory) => {
        console.log('Adding new category: ', newCategory)
        return baseCategoryClient.post('/category/add', newCategory)
    }, {
        onSuccess: () => {
            client.invalidateQueries(["categories"])
            client.refetchQueries(["categories"], { force: true})
        }
    }
    )

    const handleSubmit = (event) => {
        event.preventDefault()
        addNewCategory.mutate(category);
        setCategory({...category, name: "", color: ""})
    }

    return (
        <>
        <div className="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" checked="checked" />
  <div className="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
<div className="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" />
  <div className="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
<div className="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" />
  <div className="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
            <form>
                <label>Name:</label>
                <input type="text" value={category.name} onChange={handleNameChange}></input>
                <label>Color:</label>
                <input type="text" value={category.color} onChange={handleColorChange}></input>
                <button class="btn w-64 rounded-full" onClick={() => handleSubmit(event)}>Button</button>
            </form>
        </>
    )
}