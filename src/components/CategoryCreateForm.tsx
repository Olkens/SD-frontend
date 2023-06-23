import { useState } from 'react'
import { addCategory } from '../api/CategoryApiService.js'

export default function CategoryCreateForm() {
    const [category, setCategory] = useState({ name: '', color: '' })
    // const [name, setName] = useState("")
    // const [color, setColor] = useState("")

    const handleNameChange = (e) => {
        setCategory({ ...category, name: e.target.value })
    }

    const handleColorChange = (e) => {
        setCategory({ ...category, color: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addCategory(category.name, category.color)
    }

    return (
        <>
            <form>
                <label>Name:</label>
                <input type="text" value={category.name} onChange={handleNameChange}></input>
                <label>Color:</label>
                <input type="text" value={category.color} onChange={handleColorChange}></input>
                <button onClick={handleSubmit}></button>
            </form>
        </>
    )
}