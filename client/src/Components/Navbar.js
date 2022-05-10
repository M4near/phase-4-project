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
      <div className="logo">
        <h1>Flatiron Center for the Performing Arts</h1>
      </div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </header>
    )
    else{
  return (
    <header>
      <div className="logo">
        <h1>Flatiron Center for the Performing Arts</h1>
      </div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      
      <button onClick={handleLogout}>Logout</button>
    </header>
  );
}}

export default Navbar;