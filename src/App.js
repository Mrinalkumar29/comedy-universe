import React, { useState } from "react";
import "./styles.css";

var moviecollection = {
  Movies: [
    {
      name: "HERA PHERI",
      details: "IMDb rating: 8.2/10 ",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/en/a/a5/Hera_Pheri_2000_poster.jpg"
    },
    {
      name: "WELCOME",
      details: "IMDb rating: 7/10",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/en/f/f4/Welcome_poster_2007.jpg"
    },
    {
      name: "DHAMAAL",
      details: "IMDb rating: 8.5/10",
      imgUrl: "https://upload.wikimedia.org/wikipedia/en/6/60/Dhamaal_2007.jpg"
    },
    {
      name: "PHIR HERA PHERI",
      details: "IMDb rating: 8/10",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/en/3/3a/Still-phir-hera-phir.jpg"
    },
    {
      name: "GOLMAAL 3",
      details: "IMDb rating: 8.2/10",
      imgUrl: "https://upload.wikimedia.org/wikipedia/en/f/f4/Golmaal_3.jpg"
    },
    {
      name: "HOUSEFUL",
      details: "IMDb rating: 8.4/10",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/en/3/32/Housefull_Poster.jpg"
    },
    {
      name: "BHOOL BHULAIYA",
      details: "IMDb rating: 8.6/10",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/en/6/6f/Bhool_bhulaiyaa.jpg"
    },
    {
      name: "3 IDIOTS",
      details: "IMDb rating: 9/10",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg"
    }
  ]
};

export default function App() {
  var [artists, setArtists] = useState("Movies");
  function clickHandler(event) {
    setArtists(event);
  }
  return (
    <div className="App">
      <ul className="heading">
        <div>
          <h2>
            <a style={{ color: "white", textDecoration: "none" }}>
              COMEDY UNIVERSE
            </a>
          </h2>
        </div>

        {Object.keys(moviecollection).map((event) => {
          if (artists === event) {
            return (
              <li
                style={{ textDecoration: "underline" }}
                onClick={() => clickHandler(event)}
              >
                <b>{event}</b>
              </li>
            );
          }
          return <li onClick={() => clickHandler(event)}>{event}</li>;
        })}
      </ul>

      <div
        style={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap"
        }}
      >
        {moviecollection[artists].map((work) => (
          <div
            style={{
              width: "20%",
              padding: "20px",
              margin: "50px"
            }}
          >
            <h2 className="booksHead">{work.name}</h2>
            <img src={work.imgUrl} />
            <div className="detailed">{work.details}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
