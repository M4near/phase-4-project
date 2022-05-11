// import { useEffect, useState } from "react";

// function Comments({ concertId, onAddContent }) {
//   const [concert, setConcert] = useState([]);
//   const [content, setContent] = useState("");
//   const [rating, setRating] = useState("");
//   const [formErrors, setFormErrors] = useState([]);

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

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="concert_id">Pizza:</label>
//       <select
//         id="concert_id"
//         name="concert_id"
//         value={concertId}
//         onChange={(e) => setConcertId(e.target.value)}
//       >
//         <option value="">Select a pizza</option>
//         {pizzas.map((pizza) => (
//           <option key={pizza.id} value={pizza.id}>
//             {pizza.name}
//           </option>
//         ))}
//       </select>
//       <label htmlFor="pizza_id">Price:</label>
//       <input
//         type="number"
//         value={price}
//         onChange={(e) => setPrice(e.target.value)}
//       />
//       {formErrors.length > 0
//         ? formErrors.map((err) => (
//             <p key={err} style={{ color: "red" }}>
//               {err}
//             </p>
//           ))
//         : null}
//       <button type="submit">Add To Restaurant</button>
//     </form>
//   );
// }

// export default Comments;