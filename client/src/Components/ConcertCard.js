import React from 'react';
import { Link } from 'react-router-dom';
// import Navbar from "./Navbar";

function ConcertCard({key, id, band_name, name, image, date, time, genre}) {
   
    return (
      <>
      {/* <Navbar /> */}
      <section className="container">
        
          <div key={key} className="card">
            <img src={image} alt={name} />
            <h2>
              {name} featuring {band_name}
            </h2>
          <div>
            <p>Date: {date}</p>
            <p>Time: {time}</p>
            <p>Genre: {genre}</p>
            </div>
           <Link to={`/concerts/${id}`}><button>See More</button></Link>
          </div>
      </section>
      </>
    );
  }
  
  export default ConcertCard;