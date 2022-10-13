import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map((definition, index) => {
        return (
          <div key={index}>
            <p>{definition.definition}</p>
            <br />
            <em>
              <p>{definition.example}</p>
            </em>
          </div>
        );
      })}
    </div>
  );
}
