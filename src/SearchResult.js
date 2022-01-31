import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function SearchResult(props) {
  if (props.results) {
    return (
      <div className="SearchResult">
        <div className="main">
          <h1 className="keyword">{props.results.word}</h1>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetics phonetics={phonetic} />
              </div>
            );
          })}
        </div>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
