import React from "react";
import { nanoid } from "nanoid";

function Participants() {
  return (
    <div key={nanoid}>
      <div>
        <label htmlFor="firstName">First name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="First Name..."
          required
          pattern="[a-z A-Z]"
          onBlur={(e) => setFirstName(e.target.value)}
        />
        <div>
          <label htmlFor="lastName">Last name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last Name..."
            required
            pattern="[a-z A-Z]"
            onBlur={(e) => setLastName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email..."
            required
            onBlur={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Participants;
