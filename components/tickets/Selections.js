import React from "react";
import { nanoid } from "nanoid";

function Selections({
  regularTickets,
  vipTickets,
  campingSpot,
  greenCamping,
  tentSetup1,
  tentSetup2,
  ownTent,
  participantsFullName0,
  participantsFullName1,
  participantsFullName2,
  participantsFullName3,
  participantsEmail0,
  participantsEmail1,
  participantsEmail2,
  participantsEmail3,
}) {
  return (
    // participantsFullName.participantFullName0.fullName0
    // participantsFullName[participantFullName0]
    <section className="summary green-border">
      <h3>SUMMARY</h3>
      {
        <>
          <div className="participants-details">
            {participantsFullName0 !== undefined && (
              <>
                <h4>Participants</h4>
                <ul key={nanoid()}>
                  <li>Full Name: {participantsFullName0}</li>
                  <li>Email: {participantsEmail0}</li>
                </ul>
              </>
            )}
            {participantsFullName1 !== undefined && (
              <ul>
                <li>Full Name: {participantsFullName1}</li>
                <li>Email: {participantsEmail1}</li>
              </ul>
            )}
            {participantsFullName2 !== undefined && (
              <ul>
                <li>Full Name: {participantsFullName2}</li>
                <li>Email: {participantsEmail2}</li>
              </ul>
            )}
            {participantsFullName3 !== undefined && (
              <ul>
                <li>Full Name: {participantsFullName3}</li>
                <li>Email: {participantsEmail3}</li>
              </ul>
            )}
          </div>
        </>
      }
      <ul>
        {campingSpot !== "" && <li>Camping spot: {campingSpot}</li>}
        {regularTickets > 0 && (
          <li>
            TICKET REG x {regularTickets} = {regularTickets * 799},-
          </li>
        )}
        {vipTickets > 0 && (
          <li>
            TICKET VIP x {vipTickets} = {vipTickets * 1299},-
          </li>
        )}
        {greenCamping === true ? <li>Greencamping = 249,-</li> : ""}
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
        {ownTent && <li>Bringing own tent = 0,- </li>}
        {regularTickets + vipTickets > 0 ? <li>Booking fee = 99,-</li> : ""}
        {regularTickets + vipTickets > 0 ? (
          <>
            <li className="total-amount">
              TOTAL ={" "}
              {(regularTickets + vipTickets > 0 ? 99 : 0) +
                (regularTickets > 0 ? regularTickets * 799 : 0) +
                (vipTickets > 0 ? vipTickets * 1299 : 0) +
                (tentSetup1 > 0 ? tentSetup1 * 299 : 0) +
                (tentSetup2 > 0 ? tentSetup2 * 399 : 0) +
                (greenCamping === true ? 249 : 0)}
              ,-
            </li>
            <li className="disclaimer">
              A booking fee of 99,- wil be paid alongside of your purchase. This
              is in order for us to keep improving the experience of customers
            </li>
          </>
        ) : (
          ""
        )}
      </ul>
    </section>
  );
}

export default Selections;
