import React from "react";

class MintInfoPanel extends React.Component {
  render() {
    return (
      <div className="header_flex">
        <div className="dutch-detail-two-sides">
          <div className="dutch-det-left">
            <div className="text-block-13">Supply</div>
          </div>
          <div className="dutch-det-right">
            <div className="text-block-12">5000</div>
          </div>
        </div>
        <div className="dutch-detail-two-sides">
          <div className="dutch-det-left">
            <div className="text-block-13">Price</div>
          </div>
          <div className="dutch-det-right">
            <div className="text-block-12">0.22 ETH</div>
          </div>
        </div>
        <div className="dutch-detail-two-sides">
          <div className="dutch-det-left">
            <div className="text-block-13">Max</div>
          </div>
          <div className="dutch-det-right">
            <div className="text-block-12">3 per Wallet</div>
          </div>
        </div>
      </div>
    );
  }
}

export default MintInfoPanel;
