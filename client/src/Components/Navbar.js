import { Link } from "react-router-dom";

function Navbar({user, setUser}) {
  function handleLogout() {
    fetch("/logout",{
      method: "DELETE",
    }).then(() => setUser())
  }

  if(!user) 
    return(
      <header>
      <div class="logo">
        <h1 class="logo-name">House of Flatiron </h1>
        <h5 class="logo-sub">"Can You Feel The Beat"</h5>
      </div>
      
    </header>
    )
    else{
  return (
    <header>
      <div class="logo">

        <h1 class="logo-name">The House of Flatiron</h1>
        <h2 class="logo-sub">"Can You Feel The Beat"</h2>
      </div>
      <nav class="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/concerts">Concerts</Link>
        <Link to="/comments">Comments</Link>
        <Link to="/" onClick={handleLogout}>Logout</Link>
      </nav>
    </header>

  );
}}

export default Navbar;