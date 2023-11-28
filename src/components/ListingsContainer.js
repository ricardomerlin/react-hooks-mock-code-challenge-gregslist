import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ setData, passListingToApp, search, dataList }) {


  // function deleteListings(listingId) {
  //   setDataList(dataList.filter((item) => listingId !== item.id))
  // }

  


  const searchedText = dataList.filter((item) => item.description.toLowerCase().includes(search.toLowerCase()))

  searchedText.sort((a, b) => a.location.localeCompare(b.location))

  return (
    <main>
      <ul className="cards">
        {searchedText.map((listing) => <ListingCard dataList={dataList} setData={setData} listing={listing} key={listing.description} passArrayToApp={passListingToApp} />)
      }
      </ul>
    </main>
  );
}

export default ListingsContainer;
