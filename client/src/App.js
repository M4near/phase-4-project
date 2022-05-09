import { Route, Switch } from "react-router";
// import ConcertHomePage from "./Components/ConcertHomePage";
import Navbar from "./Components/Navbar";
// import Comments from "./Components/Comments";
// import Login from "./Components/Login";
// import Signup from "./Components/Signup";


function App() {
  return (
    <>
      <Navbar />
      {/* <Switch>
      <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/concerts">
          <ConcertHomePage />
        </Route>
        <Route exact path="/concerts/:id">
          <Comments />
        </Route>
      </Switch>  */}
    </>
  );
}

export default App;
