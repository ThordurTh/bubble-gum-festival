import React from "react";

function Selections(props) {
  return (
    <>
      <h3>YOUR SELECTION</h3>
      <ul>
        <li>TICKET REG x {props.ticketsNumber[0]}</li>
        <li></li>
      </ul>
      <ul>
        <li>TICKET VIP x {props.ticketsNumber[1]}</li>
        <li></li>
      </ul>
      <ul>
        <li>
          TOTAL = {props.ticketsNumber[0] * 799 + props.ticketsNumber[1] * 1299}
          kr
        </li>
      </ul>
    </>
  );
}

export default Selections;
