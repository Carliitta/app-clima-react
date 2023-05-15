import React, { useState } from "react";
import "./Nav.css"
export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form className="form" onSubmit={(e) => {
      e.preventDefault();
      onSearch(city)
      setCity("")
    }}>
      <input className="form-control"
        type="text"
        placeholder="City..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input className=" btn btn-info" type="submit" value="Add" />
    </form>
  );
}
