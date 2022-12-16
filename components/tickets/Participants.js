import React from "react";
import { useState } from "react";
function Participants(props) {
  return (
    <>
      <label>Full Name</label>
      <input
        id="{props.fullName}"
        name="{props.fullName}"
        type="text"
        placeholder="Full Name..."
        value={props[props.participantKey]?.fullName}
        onChange={(e) =>
          props.setParticipantsInfo(
            props.participantKey,
            "fullName",
            e.target.value,
            props.ticketType
          )
        }
      />
      <br />
      <label>Email</label>
      <br />
      <input
        id="email"
        name="{props.email}"
        type="text"
        placeholder="Email..."
        value={props[props.participantKey]?.email}
        onChange={(e) =>
          props.setParticipantsInfo(
            props.participantKey,
            "email",
            e.target.value,
            props.ticketType
          )
        }
      />
    </>
  );
}

export default Participants;
