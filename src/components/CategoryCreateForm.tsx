import { useState } from 'react'
import { addNewCategory, baseCategoryClient } from '../api/CategoryApiService.js'
import { useMutation, useQueryClient } from 'react-query'

export default function CategoryCreateForm() {
  const client = useQueryClient()

  const [category, setCategory] = useState({ name: '', color: '' })

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory({ ...category, name: e.target.value })
  }

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory({ ...category, color: e.target.value })
  }

  const addNewCategory = useMutation((newCategory) => {
    console.log('Adding new category: ', newCategory)
    return baseCategoryClient.post('/category/add', newCategory)
  }, {
    onSuccess: () => {
      client.invalidateQueries(["categories"])
      client.refetchQueries(["categories"], { force: true })
    }
  }
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    addNewCategory.mutate(category);
    setCategory({ ...category, name: "", color: "" })
  }

  return (
    <>
      <form>
        <label>Name:</label>
        <input type="text" value={category.name} onChange={handleNameChange}></input>
        <label>Color:</label>
        <input type="text" value={category.color} onChange={handleColorChange}></input>
        <button className="btn w-64 rounded-full" onClick={() => handleSubmit(event)}>Button</button>
      </form>
    </>
  )
}