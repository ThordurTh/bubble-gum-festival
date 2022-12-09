import React from "react";

function Selections(props) {
  return (
    <>
      <h3>YOUR SELECTION</h3>
      <ul>
        <li>TICKET REG - {props.ticketsNumber[0]}</li>
        <li></li>
      </ul>
      <ul>
        <li>TICKET VIP- {props.ticketsNumber[1]}</li>
        <li></li>
      </ul>
      <ul>
        <li>TOTAL = 99999kr</li>
      </ul>
    </>
  );
}

export default Selections;
