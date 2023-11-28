import React, { useState } from 'react'

function NewItemListing({ bringNewItemUp, newItem, dataList, setDataList }) {

const [description, setDescription] = useState('')
const [image, setImage] = useState('')
const [location, setLocation] = useState('')


function handleDescription (e) {
    setDescription(e.target.value)
}

function handleImage (e) {
    setImage(e.target.value)
}

function handleLocation (e) {
    setLocation(e.target.value)
}

function handleSubmit(e) {
    e.preventDefault()
    const newData = {
        description,
        image,
        location
    }
    
    fetch ('http://localhost:6001/listings', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: 
        JSON.stringify(newData)
    })
    .then(res => res.json())
    .then(data => {
        const updatedArray = [...dataList, newData]
        console.log(updatedArray)
        setDataList(updatedArray)

    })

}


    return (
        <div>
            <h3>New Item Listing
                <form onSubmit={handleSubmit}>
                    <li>Item description
                        <input type='text' placeholder='Tell us about your item!' value={description} onChange={handleDescription} ></input>
                    </li>
                    <li>Item Image Link
                        <input type='text' placeholder='Any pics of your item?' value={image} onChange={handleImage}></input>
                    </li>
                    <li>Location
                        <input type='text' placeholder='Where are you located?' value={location} onChange={handleLocation}></input>
                    </li>
                    <button type='submit'>Submit Item!</button>
                </form>
            </h3>
        </div>
)}



export default NewItemListing