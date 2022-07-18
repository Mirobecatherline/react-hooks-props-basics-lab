import Links from "./Links";
import React from "react";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
        {props.bio && props.bio.length>1 ? <p>{props.bio}</p> :null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github="https://github.com/liza" linkedin="https://www.linkedin.com/in/liza/"/>
      
    </div>
  );
}

export default About;
