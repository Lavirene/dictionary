import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
    console.log(keyword);
  }

  return (
    <form onSubmit={search}>
      <input
        type="search"
        placeholder="Type here... "
        onChange={handleKeyword}
      />
    </form>
  );
}
