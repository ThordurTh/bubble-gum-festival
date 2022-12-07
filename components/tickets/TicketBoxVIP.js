import React from "react";
import SelectTicketsForm from "./SelectTicketsForm";

function TicketBoxVIP() {
  return (
    <div>
      <h3>VIP</h3>
      <ul>
        <li>Info about the VIP Ticket type</li>
        <li>Even more info about the VIP Ticket type</li>
        <li>
          Exclusive thing that you get with the VIP ticket - stage pass or some
          shit
        </li>
      </ul>
      <span>1099kr</span>
      <SelectTicketsForm />
    </div>
  );
}

export default TicketBoxVIP;
