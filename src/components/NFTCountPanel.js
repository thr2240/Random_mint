import React from "react";

class NFTCountPanel extends React.Component {
  render() {
    return (
      <div id="ape-number">
        <div id="minus" className="minuson">
          <svg
            width={12}
            height={2}
            viewBox="0 0 16 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              left: "11px"
            }}
          >
            <path
              d="M15 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2H15C15.2652 2 15.5196 1.89464 15.7071 1.70711C15.8946 1.51957 16 1.26522 16 1C16 0.734784 15.8946 0.48043 15.7071 0.292893C15.5196 0.105357 15.2652 0 15 0Z"
              fill="white"
            />
          </svg>
        </div>
        <h5
          id="pricex"
          style={{
            marginLeft: "13px",
            marginRight: "13px"
          }}
        >
          1
        </h5>
        <input
          name="eth"
          className="eth_input text-field-5 w-input"
          type="hidden"
          min={1}
          max={3}
          pattern="[A-z0-9]{2,50}"
          minLength={2}
          maxLength={50}
          required="required"
          defaultValue={1}
        />
        <div id="plus" className="pluson">
          <svg
            width={12}
            height={12}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              left: "11px"
            }}
          >
            <path
              d="M15 7H9V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V7H1C0.734784 7 0.48043 7.10536 0.292893 7.29289C0.105357 7.48043 0 7.73478 0 8C0 8.26522 0.105357 8.51957 0.292893 8.70711C0.48043 8.89464 0.734784 9 1 9H7V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V9H15C15.2652 9 15.5196 8.89464 15.7071 8.70711C15.8946 8.51957 16 8.26522 16 8C16 7.73478 15.8946 7.48043 15.7071 7.29289C15.5196 7.10536 15.2652 7 15 7Z"
              fill="white"
            />
          </svg>
        </div>
        <h5 id="ape-max">Max</h5>{" "}
      </div>
    );
  }
}

export default NFTCountPanel;
