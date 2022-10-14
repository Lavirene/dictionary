import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.keyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function load() {
    setLoaded(true);
    search();
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <h1>What do you want to look up?</h1>
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Type here... "
              onChange={handleKeyword}
              defaultValue={keyword}
            />
          </form>
          <div className="hint">seggested keywords: life, love, infinity</div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
