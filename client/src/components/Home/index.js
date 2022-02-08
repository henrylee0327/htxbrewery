import React from 'react'
import axios from 'axios'

const Home = () => {
    const handleClick = async () => {
        const response = await axios.get('http://localhost:8000')
        
        console.log(response)
    }
    return (
        <>
        <div>Hello from Home</div>
        <button onClick={handleClick}>connect</button>
        </>
    )
}

export default Home