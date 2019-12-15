import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-ride="carousel"
        id="Home"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-80 basic" src="home/images/HoodYounos.png" />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-80 basic"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(33).jpg"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-80 basic"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
