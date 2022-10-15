import React from "react";
import play from "./img/play.png";
import "./Phonetics.css";

export default function Phonetic(props) {
  if (props.phonetic.audio) {
    const audio = new Audio(props.phonetic.audio);

    return (
      <div className="Phonetics">
        <span>{props.phonetic.text}</span>
        <span>
          <button
            className="playBytton"
            onClick={() => {
              audio.play();
            }}
          >
            <img src={play} width="40" alt="play-button" />
          </button>
        </span>
      </div>
    );
  } else {
    return <div className="Phonetics">{props.phonetic.text}</div>;
  }
}
