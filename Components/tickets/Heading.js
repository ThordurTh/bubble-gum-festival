import React from "react";
import progressbar1 from "../../assets/progressbar1.png";
import Image from "next/image";

function Heading() {
  return (
    <>
      <h2 className="underline tickets-h2">TICKETS</h2>
      <Image className="step-bar" src={progressbar1} alt="progressbar1"></Image>
    </>
  );
}

export default Heading;
