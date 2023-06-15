import {useState} from 'react'

export default function CategoryCreateForm() {
    const [name, setName] = useState("")
    const [color, setColor] = useState("")

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleColorChange = (e) => {
        setColor(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newCategory = {
            name: name,
            color: color
        }

        fetch("http://localhost:8080/category/add", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newCategory),
          }).then((response) => {
              if (response.status !== 200) {
                throw new Error('kupa');
              }
              return response.json();
            })
        }
    return(
        <>
            <form>
                <label>Name:</label>
                <input type="text" value={name} onChange={handleNameChange}></input>
                <label>Color:</label>
                <input type="text" value={color} onChange={handleColorChange}></input>
                <button onClick={handleSubmit}></button>
            </form>
        </>
    )
}