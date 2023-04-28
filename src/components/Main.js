import React from "react";
import Slider from "./Slider";
import MintDate from "./MintDate";
import MintInfoPanel from "./MintInfoPanel";
import PaymentModal from "./PaymentModal";
import MintButton from "./MintButton";

class Main extends React.Component {
  render() {
    return (
      <main>
        <div className="main-flex container mx-auto grid grid-cols-3 gap-4">
          <Slider></Slider>
          <div className="header-cont">
            <MintDate></MintDate>
            <MintInfoPanel></MintInfoPanel>
            <div id="claim-text-wrapper">
              <PaymentModal></PaymentModal>
              <MintButton></MintButton>
              <div id="num">
                <span id="num_1" />
                <span className="num_c">/</span>
                <span id="num_2">5000</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
