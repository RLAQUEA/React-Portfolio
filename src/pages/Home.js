import React from "react";
import { Parallax } from 'react-parallax';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div>
      <h1 className="text-center">Rachel Elena LaQuea
        </h1>
        <h2 className="text-center">
        Software Engineer | Musician | Artist
        </h2>
      <Parallax bgImage={"https://images.unsplash.com/photo-1483793435732-7047c6f91194?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80"} bgImageAlt="the cat" strength={200} >
        <div style={{height: 1500}}>
        </div>
    </Parallax>
    <div>
    </div>
    </div>

  );
}

export default Home;
