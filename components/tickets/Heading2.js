import React from "react";
import progressbar2 from "../../assets/progressbar2.png";
import Image from "next/image";

function Heading2() {
  return (
    <>
      <h2>TICKETS</h2>
      <Image className="step-bar" src={progressbar2} alt="progressbar2"></Image>
    </>
  );
}

export default Heading2;
