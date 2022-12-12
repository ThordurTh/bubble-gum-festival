import React from "react";
import Heading from "./Heading";
import Selections from "./Selections";
import SelectTicketsForm from "./SelectTicketsForm";

function Step1() {
  return (
    <>
      <section className="step-1">
        <Heading></Heading>
        <h3>SELECT TICKET TYPES</h3>
        <section className="wrapper-step-1">
          <SelectTicketsForm />
          <Selections />
        </section>
      </section>
    </>
  );
}

export default Step1;
