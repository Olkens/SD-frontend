import {useState} from 'react'

export default function ProductCreateForm() {
    const [name, setName] = useState("")

    const [category, setCategory] = useState({})

    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    return(
        <>
            <form>
                <label>Name:</label>
                <input type="text" value={name} onChange={handleNameChange}></input>
            </form>
        </>
    )
}