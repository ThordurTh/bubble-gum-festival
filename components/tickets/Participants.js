import React from "react";

function Participants({ setFirstName, setLastName, setEmail, firstName }) {
  const changeHandler = (e) => {
    setFirstName(e.target.value);
  };
  return (
    <>
      <div>
        <label htmlFor="firstName">First name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="First Name..."
          required
          onChange={changeHandler}
          // value={firstName}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Last Name..."
          required
          onChange={(e) => setLastName(e.target.value)}
          // onBlur={}
          // value={lastName}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="email..."
          required
          onChange={(e) => setEmail(e.target.value)}
          // onBlur={}
          // value={email}
        />
      </div>
    </>
  );
}

export default Participants;
