import React, { useState } from "react";

function SelectTicketsForm() {
  const [numRegular, setNumRegular] = useState(0);
  const [numVIP, setNumVIP] = useState(0);

  return (
    <>
      <div>
        <h3>REG</h3>
        <ul>
          <li>Info about the Regular Ticket type</li>
          <li>More info about the Regular Ticket type</li>
        </ul>
        <span>799kr</span>
      </div>

      <div>
        <button
          disabled={numRegular === 0}
          onClick={() => setNumRegular((old) => old - 1)}
        >
          -
        </button>
        {numRegular}
        <button
          disabled={numRegular + numVIP > 3}
          onClick={() => setNumRegular((old) => old + 1)}
        >
          +
        </button>
      </div>

      <div>
        <h3>VIP</h3>
        <ul>
          <li>Info about the VIP Ticket type</li>
          <li>Even more info about the VIP Ticket type</li>
          <li>
            Exclusive thing that you get with the VIP ticket - stage pass or
            some shit
          </li>
        </ul>
        <span>1099kr</span>
      </div>

      <div>
        <button
          disabled={numVIP === 0}
          onClick={() => setNumVIP((old) => old - 1)}
        >
          -
        </button>
        {numVIP}
        <button
          disabled={numVIP + numRegular > 3}
          onClick={() => setNumVIP((old) => old + 1)}
        >
          +
        </button>
      </div>
    </>
  );
}

export default SelectTicketsForm;
