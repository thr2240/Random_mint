import React from "react";
import NFTSelectPanel from "./NFTSelectPanel";
import NFTCountPanel from "./NFTCountPanel";
import TotalPricePanel from "./TotalPricePanel";

class PaymentModal extends React.Component {
  render() {
    return (
      <div id="payment-modal">
        <div id="payment-header">
          <div
            id="payment-header-text"
            style={{
              margin: "0 auto"
            }}
          >
            <h1
              className="heading-2-copy-copy-copy-copy"
              style={{
                margin: 0,
                padding: 0,
                fontStyle: "initial"
              }}
            >
              <span
                style={{
                  textTransform: "none"
                }}
              >
                Mint Here!
              </span>
            </h1>{" "}
          </div>
        </div>
        <div
          id="payment-info"
          style={{
            marginTop: "20px"
          }}
        >
          <NFTSelectPanel />
          <div id="payment-info-text">
            <p>Price Per NFT</p>
            <h5>0.22 ETH Each</h5>{" "}
          </div>
        </div>
        <NFTCountPanel></NFTCountPanel>
        <TotalPricePanel></TotalPricePanel>
      </div>
    );
  }
}

export default PaymentModal;
