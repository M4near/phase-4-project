import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ConcertHomePage from "./Components/ConcertHomePage";
import Navbar from "./Components/Navbar";
import Comments from "./Components/Comments";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
// import Search from "./Components/Search";

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
         <Route exact path="/">
         {/* <Search />  */}
          <ConcertHomePage />
        </Route>
        <Route exact path="/concerts/:id">
          <Comments />
        </Route>  
      </Switch> 
    </Router>
  );
}}

export default App;
