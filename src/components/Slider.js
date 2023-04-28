import React from "react";

class Slider extends React.Component {
  render() {
    return (
      <div className="slider col-span-1">
        <img class="w-full aspect-square"
          src="/images/1.jpg"
          alt="slide"
        />
        <img class="w-full aspect-square"
          src="/images/2.jpg"
          alt="slide"
        />
        <img class="w-full aspect-square"
          src="/images/3.jpg"
          alt="slide"
        />
      </div>
    );
  }
}

export default Slider;
