import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import NewItemListing from "./NewItemListing";

function App() {

  const [dataList, setDataList] = useState([])
  const [search, setSearch] = useState('')
  const [newItem, setNewItem] = useState('')

  console.log(search)

  console.log(dataList)


  useEffect(() => {
    fetch ('http://localhost:6001/listings')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setDataList(data)
    })
  }, [])

  // useEffect(() => {
  //   filterDataList();
  // }, [itemDelete])

  // function passListingToApp(listing) {
  //   setItemDelete(listing)
  // }

  // function filterDataList() {
  //   const newArray = dataList.filter((item) => item.includes(itemDelete))
  // }

  console.log(dataList)

  function setData(newArray) {
    setDataList(newArray)
  }

  function changeSearch(textInput) {
    // console.log(textInput)
    setSearch(textInput)
  }

  function bringNewItemUp(newData) {
    setNewItem(newData)
  }





  return (
    <div className="app">
      <Header changeSearch={changeSearch} />
      <NewItemListing bringNewItemUp={bringNewItemUp} newItem={newItem} setDataList={setDataList} dataList={dataList} />
      <ListingsContainer dataList={dataList} setData={setData} search={search}  />
    </div>
  );
}

export default App;
