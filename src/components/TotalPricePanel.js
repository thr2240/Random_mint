import React from "react";

class TotalPricePanel extends React.Component {
  render() {
    return (
      <div id="ape-total">
        <p>Total</p>
        <h5>
          <span id="price">0.22</span> ETH
        </h5>
      </div>
    );
  }
}

export default TotalPricePanel;
