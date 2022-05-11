import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ConcertHomePage from "./Components/ConcertHomePage";
import Navbar from "./Components/Navbar";
// import Comments from "./Components/Comments";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
// import ConcertCard from "./Components/ConcertCard";
// import ConcertList from "./Components/ConcertList";
import './App.css';
import Concert from "./Components/Concert";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

    
  if (!user) 
    return (
      <Router>
      <Navbar  />
      <Switch>
      <Route exact path="/">
          <Login onLogin={setUser} />
          <Signup onLogin={setUser} />
        </Route>
      </Switch> 
    </Router>
  ); else {

  return (

    <Router>
      <Navbar user={user} setUser={setUser} />
      <Switch>
      {/* <Route exact path="/">
          <Login onLogin={setUser} />
        </Route> */}
         <Route exact path="/concerts">
         {/* <Search />  */}
          <ConcertHomePage />
        </Route>
        <Route exact path="/concerts/:id">
          <Concert />
        </Route>  
      </Switch> 
    </Router>
  );
}}

export default App;
