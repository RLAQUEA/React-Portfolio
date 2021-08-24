import React from "react";
import backgroundImg from "../Assets/background1.JPG"
import { Parallax } from 'react-parallax';

function Home() {
  return (
    <div>
      <Parallax bgImage={"https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=6&m=1093110112&s=612x612&w=0&h=uBH7Rj-Ew_ixjunRrD_U7alq2ZUPJ_5XgMpe9xO52QQ="} bgImageAlt="the cat" strength={1000} >
        <div style={{height: 600}}>
        Content goes here. Parallax height grows with content height.
        </div>
    </Parallax>
    <br></br>
    <div>this is between</div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <p>HELLO</p>
        </div>

  );
}

export default Home;
