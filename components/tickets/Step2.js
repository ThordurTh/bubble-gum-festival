import React from "react";
import Heading2 from "./Heading2";
import CampingOptions from "./CampingOptions";
import Selections2 from "./Selections2";
import SelectTicketsForm from "./SelectTicketsForm";

function Step2() {
  return (
    <>
      <section className="step-2">
        <Heading2 />
        <h3>SELECT CAMPING OPTIONS</h3>
        <section className="wrapper-step-2">
          <CampingOptions />
          <Selections2 />
        </section>
      </section>
    </>
  );
}

export default Step2;
