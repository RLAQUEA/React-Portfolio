import React, { Component } from 'react';
// import importedimage from "relative path to exact image"

class About extends Component {
  render() {
    return (
      <div>
      <div class="content body">
      <p>Originally from Orlando, Florida, I am a lover of nature, new experiences, a foodie and a little
        nerdy. For me, expansion of my awareness, compassion, innovation and creative problem solving, are
        crucial in my journey to become a better human.</p>
    </div>

    <div class="container">
      {/* src={importedimage} */}
      <img width="650" src="./assets/img/headshot.JPG" alt="headshot image"/>
    </div>

    <footer class="page-footer black">
      <h3 class="contact">Contact</h3>
      <ul>
        <li class="flex-item">rlaquea14@gmail.com</li>
        <li class="flex-item">(407)-923-7951</li>
      </ul>
    </footer>
    </div>
    );
  }
}

export default About;