import React from "react";

class MintDate extends React.Component {
  render() {    
    return (
      <div className="dutch-detail-two-sides">
        <div className="dutch-det-left">
          <div className="text-block-13">Public Mint Date</div>
        </div>
        <div className="dutch-det-right">
          <div className="text-block-12">
            February <span id="dateday2" /> <span id="datehour1" />
          </div>
        </div>
      </div>
    );
  }
}

export default MintDate;
