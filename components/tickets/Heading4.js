import React from "react";
import progressbar4 from "../../assets/progressbar4.png";
import Image from "next/image";

function Heading4() {
  return (
    <>
      <h2 className="underline tickets-h2">TICKETS</h2>
      <Image src={progressbar4} alt="progressbar4"></Image>
    </>
  );
}

export default Heading4;
