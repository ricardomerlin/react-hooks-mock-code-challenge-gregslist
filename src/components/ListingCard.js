import React, { useState } from "react";

function ListingCard({ dataList, setData, listing, passArrayToApp }) {

  const [favorite, setFavorite] = useState(false)

  function star() {
    setFavorite(!favorite)
  }
  
  function handleDelete() {
    const newArray = dataList.filter(item => item.id !== listing.id)
    console.log(newArray)
    setData(newArray)

    fetch ('http://localhost:6001/listings/' + listing.id, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  }

  const mapDescription = listing.description

  const mapImage = listing.image

  const mapLocation = listing.location

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={mapImage} alt={mapDescription} />
      </div>
      <div className="details">
        {favorite === true ? (
          <button onClick={star} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={star} className="emoji-button favorite">☆</button>
        )}
        <strong>{mapDescription}</strong>
        <span> · {mapLocation}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
