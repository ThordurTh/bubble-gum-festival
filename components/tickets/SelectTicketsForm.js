import React, { useState } from "react";

function SelectTicketsForm() {
  const [numRegular, setNumRegular] = useState(0);
  const [numVIP, setNumVIP] = useState(0);

  return (
    <>
      <div>
        <button disabled={numRegular + numVIP === 0}>-</button>
        {numRegular}
        <button
          disabled={numRegular + numVIP > 3}
          onClick={() => setNumRegular((old) => old + 1)}
        >
          +
        </button>
      </div>
      <div>
        <button disabled={numRegular + numVIP === 0}>-</button>
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
