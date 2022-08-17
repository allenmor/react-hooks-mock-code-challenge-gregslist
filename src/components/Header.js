import React from "react";
import Search from "./Search";

function Header({setFiltered, listings}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search listings={listings} setFiltered={setFiltered}/>
    </header>
  );
}

export default Header;
