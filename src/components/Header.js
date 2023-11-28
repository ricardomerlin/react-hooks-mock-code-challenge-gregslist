import React from "react";
import Search from "./Search";
// import NewItemListing from './NewItemListing'

function Header({ changeSearch }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search changeSearch={changeSearch} />
    </header>
  );
}

export default Header;
