import React, { Component } from 'react';
import headshot from "../Assets/img/headshot.JPG";
class About extends Component {
  render() {
    return (
      <div>
        <div color="light" class="content body">
      <p className="text-center">Hi, I'm Rachel.  <br></br>Originally, I'm from Orlando, Florida.  I'm a classically trained lyric soprano, but I also play piano and guitar and paint using acrylics, watercolors and oil.  For me, expansion of my awareness, compassion, innovation and creative problem solving are
        crucial in my journey to becoming a better human.</p>
    </div>
      <br></br>
      <br></br>
    <div class="container">
      <img width="650" src={ headshot } alt="headshot"/> 
      
    </div>

    <footer class="page-footer black">
      
    </footer>
    </div>
    );
  }
}

export default About;