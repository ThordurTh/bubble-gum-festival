import React from "react";
import Anchor from "../components/Anchor";
import Heading from "../components/tickets/Heading";
import Selections from "../components/tickets/Selections";
import SelectTicketsForm from "../components/tickets/SelectTicketsForm";
import Heading2 from "../components/tickets/Heading2";
import CampingOptions from "../components/tickets/CampingOptions";
import Selections2 from "../components/tickets/Selections2";

import { useState } from "react";

function Tickets() {
  const [step, setStep] = useState(0);
  const conditionalComponent = () => {
    switch (step) {
      case 0:
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
      case 1:
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
      case 2:
        return (
          <>
            <h1>YOOOOOOOOOOOOOOOOOOOOOO</h1>
          </>
        );

      default:
        return (
          <>
            <h1>FINISHLINE</h1>
          </>
        );
    }
  };
  function handleNext() {
    setStep(step + 1);
  }

  function handleSubmit() {
    console.log("SUCCESS");
  }
  return (
    <>
      {conditionalComponent()}
      {step > 0 && <button onClick={() => setStep(step - 1)}>Back</button>}
      {(step === 0 || step === 1 || step === 2) && (
        <button onClick={handleNext}>Next</button>
      )}
      {step === 3 && <button onClick={handleSubmit}>Submit</button>}
    </>
  );
}

export default Tickets;
