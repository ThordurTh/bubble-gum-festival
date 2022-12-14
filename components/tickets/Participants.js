import React from "react";
import { useState } from "react";
function Participants(props) {
  return (
    <>
      <label>Full Name</label>
      <input
        id={props.fullName}
        name={props.fullName}
        type="text"
        placeholder="Full Name..."
        value={
          props.participantsFullName[props.participantFullName[props.fullName]]
        }
        onChange={(e) =>
          props.updateStateFullName(
            props.participantFullName,
            props.fullName,
            e.target.value
          )
        }
      />
      <br />
      <label>Email</label>
      <br />
      <input
        id="email"
        name={props.email}
        type="text"
        placeholder="Email..."
        value={props.participantsEmail[props.participantEmail[props.email]]}
        onChange={(e) =>
          props.updateStateEmail(
            props.participantEmail,
            props.email,
            e.target.value
          )
        }
      />
    </>
  );
}

export default Participants;
