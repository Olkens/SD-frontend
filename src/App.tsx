import { useEffect, useState} from 'react'
import './App.css'

function App() {
    const [posts, setPosts] = useState([])

    const fetchPostsData = () => {
        fetch("http://localhost:3000/post")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setPosts(data)
            })
    }

    useEffect(() => {
        fetchPostsData()
    }, [])

    return (
        <>
            <div>
                {posts.length > 0 && (
                    <ul>
                        {posts.map(post => (
                            <li key={post.id}>{post.title}</li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )

}

export default App
