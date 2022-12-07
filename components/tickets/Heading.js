import React from "react";
import progressbar1 from "../../assets/progressbar1.png";
import Image from "next/image";

function Heading() {
  return (
    <>
      <Image src={progressbar1} alt="progressbar1"></Image>
      <h2>TICKETS</h2>
    </>
  );
}

export default Heading;
