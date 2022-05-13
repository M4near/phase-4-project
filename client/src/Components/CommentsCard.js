import React from 'react';
import { Link } from 'react-router-dom';

function CommentsCard({id, concert, content, rating, username, concert_id, comment, deleteComment}) {
   
    return (
      <>
      {/* <Navbar /> */}
      <section className="container">
        
          <div key={id} className="card">
            <h2>
              {username}
            </h2>
          <div>
          <p>Concert: {concert}</p>
          <p>Excitement Level: {rating}</p>
            <p>Comment: {content}</p>
            
            </div>
           <button onClick={() => deleteComment(id)}>Delete Comment</button>
           <Link to={`/comments/${id}/edit`}><button>Edit Comment</button></Link>
          </div>
      </section>
      </>
    );
  }
  
  export default CommentsCard;