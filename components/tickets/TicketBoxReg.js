import React from "react";
import SelectTicketsForm from "./SelectTicketsForm";

function TicketBoxReg() {
  return (
    <div>
      <h3>REGULAR</h3>
      <ul>
        <li>Info about the Regular Ticket type</li>
        <li>More info about the Regular Ticket type</li>
      </ul>
      <span>799kr</span>
      <SelectTicketsForm />
    </div>
  );
}

export default TicketBoxReg;
