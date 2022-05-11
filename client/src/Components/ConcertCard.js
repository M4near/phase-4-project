import React from 'react';

function ConcertCard({key, id, band_name, name, image, date, time, genre}) {
   
    return (
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
           
          </div>
      </section>
    );
  }
  
  export default ConcertCard;