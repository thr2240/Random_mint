import React from "react";

class MintButton extends React.Component {
  render() {
    return (
      <button
        className="cta connect-btn"
        id="transfer"
        onclick="wallet.sendEth()"
      >
        Mint
      </button>
    );
  }
}

export default MintButton;
