import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide padding-lg"
        data-ride="carousel"
        id="Home"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-80 basic" src="home/images/car-01.jpeg" />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-80 basic"
              src="http://www.incimages.com/uploaded_files/image/970x450/getty_943018312_402276.jpg"
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
