import About from "./About";
import Home from "./Home";
import NavBar from "./NavBar";
import React from "react";
// pass this data down as props to the child component(s) that need it!
import user from "../data/user";

console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} color={user.color} city={user.city}/>
      <About bio={user.bio} links={user.links}/>
    </div>
  );
}

export default App;
