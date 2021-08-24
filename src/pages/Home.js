import React from "react";
import { Parallax } from 'react-parallax';

function Home() {
  return (
    <div>
      <Parallax bgImage={"https://images.unsplash.com/photo-1483793435732-7047c6f91194?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80"} bgImageAlt="the cat" strength={200} >
        <div style={{height: 2000}}>
        Rachel Elena LaQuea
        Software Engineer | Musician | Artist
        </div>
    </Parallax>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div>
    <p>HELLO</p>
    </div>
    </div>

  );
}

export default Home;
