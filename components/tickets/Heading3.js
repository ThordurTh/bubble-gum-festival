import React from "react";
import progressbar3 from "../../assets/progressbar3.png";
import Image from "next/image";

function Heading3() {
  return (
    <>
      <h2 className="underline tickets-h2">TICKETS</h2>
      <Image src={progressbar3} alt="progressbar3"></Image>
    </>
  );
}

export default Heading3;
