import React, { useState } from 'react'
import axios from 'axios'

const Home = () => {
    const [breweries, setBreweries] = useState([])

    const handleClick = async () => {
        const response = await axios.get('http://localhost:8000')
        const resData = response.data
        // const parseRes = resData.json()
        // setBrewery(parseRes)
        console.log(resData)
        setBreweries(resData)
    }

    const renderBreweryNames = () => {
        return (
            breweries.map((brewery) => (
                <>
                    <div>Brewery name: {brewery.name}</div>
                    <div >Brewery location: {brewery.location}</div>
                </>
            ))
        )
        }

    return (
        <>
            <div>Hello from Home</div>
            <button onClick={handleClick}>connect</button>
            <div>{renderBreweryNames()}</div>
        </>
    )
}

export default Home