import React from 'react';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Search from "./Components/Search";

function ConcertHomePage() {
    const [concerts, setConcerts] = useState([]);
    // const [query, setQuery] = useState("");
  
    useEffect(() => {
      fetch("/concerts")
        .then((r) => r.json())
        .then(setConcerts);
    }, []);

    // const filterConcerts = concerts.filter((concert) => {
    //   return concert.toLowerCase().includes(query.toLowerCase());
    // });

    return (
      <section className="container">
      
        {concerts.map((concert) => (
          <div key={concert.id} className="card">
            <img src={concert.image} alt={concert.name} />
            <h2>
              {concert.name} featuring {concert.band_name}
            </h2>
          <div>
            <p>Date: {concert.date}</p>
            <p>Time: {concert.time}</p>
            <p>Genre: {concert.genre}</p>
            </div>
            <button onClick={<Link to={`/concerts/${concert.id}`}></Link>}>See More</button>
          </div>
        ))}
      </section>
    );
  }
  
  export default ConcertHomePage;