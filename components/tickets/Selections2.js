import React from "react";

function Selections2(props) {
  return (
    <>
      <h3>YOUR SELECTION</h3>
      <ul>
        <li>TICKET REG x {props.ticketsNumber[0]}</li>
        <li>PRICE = {props.ticketsNumber[0] * 799}kr</li>
      </ul>
      <ul>
        <li>TICKET VIP x {props.ticketsNumber[1]}</li>
        <li>PRICE = {props.ticketsNumber[1] * 1299}kr</li>
      </ul>
      <ul>
        <li>Camping Spot selected - camp X</li>
        <li>2 person tent - 299kr</li>
        <li>2 person tent - 299kr</li>
        <li>3 person tent - 299kr</li>
        <li>I BROUGHT MY OWN TENT - 0kr</li>
      </ul>
      <ul>
        <li>Booking fee 99kr for camping</li>
        <li>
          {props.ticketsNumber[0] * 799 + props.ticketsNumber[1] * 1299}kr
        </li>
      </ul>
    </>
  );
}

export default Selections2;
