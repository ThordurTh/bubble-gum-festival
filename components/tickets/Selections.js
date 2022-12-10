import React from "react";

function Selections({
  regularTickets,
  vipTickets,
  campingSpot,
  greenCamping,
  tentSetup1,
  tentSetup2,
  ownTent,
  firstName,
  lastName,
}) {
  return (
    <section className="summary green-border">
      <h3>SUMMARY</h3>
      <h4>Participants</h4>
      <ul className="participants-details">
        <li>First Name: {firstName} </li>
        <li> Last Name: {lastName} </li>
      </ul>
      <ul>
        {campingSpot !== "" && <li>Camping spot: {campingSpot}</li>}
        {regularTickets > 0 && (
          <li>
            TICKET REG x {regularTickets} = {regularTickets * 799}
          </li>
        )}
        {vipTickets > 0 && (
          <li>
            TICKET VIP x {vipTickets} = {vipTickets * 1299}
          </li>
        )}
        {greenCamping === true ? <li>Greencamping = 249kr</li> : ""}
        {tentSetup1 > 0 && (
          <li>
            2 person tent x {tentSetup1} = {tentSetup1 * 299}
          </li>
        )}
        {tentSetup2 > 0 && (
          <li>
            3 person tent x {tentSetup2} = {tentSetup2 * 399}
          </li>
        )}
        {ownTent && <li>Bringing own tent = 0kr </li>}
        {regularTickets + vipTickets > 0 ? <li>Booking fee = 99kr</li> : ""}
        {regularTickets + vipTickets > 0 ? (
          <li className="total-amount">
            TOTAL ={" "}
            {(regularTickets + vipTickets > 0 ? 99 : 0) +
              (regularTickets > 0 ? regularTickets * 799 : 0) +
              (vipTickets > 0 ? vipTickets * 1299 : 0) +
              (tentSetup1 > 0 ? tentSetup1 * 299 : 0) +
              (tentSetup2 > 0 ? tentSetup2 * 399 : 0) +
              (greenCamping === true ? 249 : 0)}
            kr
          </li>
        ) : (
          "TOTAL = 0"
        )}
      </ul>
    </section>
  );
}

export default Selections;
