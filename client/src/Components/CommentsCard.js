import React from 'react';
import { Link } from 'react-router-dom';

function CommentsCard({key, concert, content, rating, username, concert_id, comment, deleteComment}) {
   
    return (
      <>
      {/* <Navbar /> */}
      <section className="container">
        
          <div key={key} className="card">
            <h2>
              {username}
            </h2>
          <div>
          <p>Concert: {concert}</p>
          <p>Excitement Level: {rating}</p>
            <p>Comment: {content}</p>
            
            </div>
           <button onClick={() => deleteComment(comment.id)}>Delete Comment</button>
          </div>
      </section>
      </>
    );
  }
  
  export default CommentsCard;