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
        <h1 class="logo-name">House of Flatiron</h1>
        <h5 class="logo-sub">"Can You Feel The Beat"</h5>
      </div>
      <nav class="nav-bar">
        <ul class="nav-line">
          <li class="li"><Link to="/">Home</Link></li>
          <li><Link to="/">Comments</Link></li>
          <li><Link to="/concerts">Concerts</Link></li>
          {/* <h1 onClick={handleLogout}>Logout</h1> */}
          <li><button onClick={handleLogout}>Logout</button></li>
        </ul>
        <div class="Welcome"> 
          {/* <h3>Welcome To House of Flatiron. Click On Our Concerts Link To See Our Upcoming Events. 
          Feel Free To Leave Comments About Different Events You May Up Attending, Or Even Wished You Could Attend.</h3> */}
        </div>

      </nav>
      
    </header>

  );
}}

export default Navbar;