import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import CommentsCard from "./CommentsCard";

function Comments() {
//   const [concert, setConcert] = useState([]);
//   const [content, setContent] = useState("");
//   const [rating, setRating] = useState("");
//   const [formErrors, setFormErrors] = useState([]);
    const history = useHistory();
    const location = useLocation();
    const [commentData, setCommentData] = useState([]);

    useEffect(() => {
        fetch('/comments')
          .then(res => res.json())
          .then((data) => setCommentData(data))
      }, [])

    const addComment = (formData) => {
        fetch('/comments', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(formData)
        })
          .then(res => res.json())
          .then(newComment => {
            setCommentData(commentData.concat(newComment))
          });
      }
    
      const updateComment = (id, formData) => {
        fetch(`/comments/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(formData)
        })
          .then(res => res.json())
          .then(updatedComment => {
            // pessimistically update the dog in state after we get a response from the api
            setCommentData(commentData.map((comment) => (comment.id === parseInt(id) ? updatedComment : comment)));
            history.push(`/comments`);
          });
      }
    
      const deleteComment = (comment_id) => {
          // optimistically update the ui
          setCommentData(commentData.filter(comment => comment.id !== parseInt(comment_id)))
          // update the API
          fetch(`/comments/${comment_id}`, {
            method: 'DELETE',
            headers: { Accept: 'application/json' }
          })
            .then(res => res.json())
            .then(deletedComment => {
              console.log('deleted', deletedComment.comment_id)
              if (location.pathname !== "/comments") {
                history.push("/comments")
                window.location.reload()
              }
            });
      }

//   useEffect(() => {
//     fetch("/concerts")
//       .then((r) => r.json())
//       .then(setConcert);
//   }, []);

//   function handleSubmit(e) {
//     e.preventDefault();
//     const formData = {
//       concert_id: concertId,
//       rating: rating,
//       content: content,
//     };
//     fetch("/comments", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     }).then((r) => {
//       if (r.ok) {
//         r.json().then((newContent) => {
//           onAddContent(newContent);
//           setFormErrors([]);
//         });
//       } else {
//         r.json().then((err) => setFormErrors(err.errors));
//       }
//     });
//   }

  return (
    // <form onSubmit={handleSubmit}>
    //   <label htmlFor="concert_id">Pizza:</label>
    //   <select>
    //     id="concert_id"
    //     name="concert_id"
    //     value={concertId}
    //     onChange={(e) => setConcertId(e.target.value)}
    // </select>
    //   <button type="submit">Share your thoughts</button>
    // </form>
    <div>
        {commentData.map((comment) => <CommentsCard comment={commentData} key={comment.id} content={comment.content} rating={comment.rating} username={comment.user.username} concert={comment.concert.name} deleteComment={deleteComment} />)}
    </div>
  );
}

export default Comments;