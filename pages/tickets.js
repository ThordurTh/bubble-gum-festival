import React from "react";
import Anchor from "../components/Anchor";
import Heading from "../components/tickets/Heading";
import Selections from "../components/tickets/Selections";
// import SelectTicketsForm from "../components/tickets/SelectTicketsForm";
import Heading2 from "../components/tickets/Heading2";
import CampingOptions from "../components/tickets/CampingOptions";
import Selections2 from "../components/tickets/Selections2";
import Heading3 from "../components/tickets/Heading3";
import Heading4 from "../components/tickets/Heading4";
import CounterTest from "../components/CounterTest";
import H2test from "../components/H2test";

import { useCallback, useState } from "react";

const ticketTypes = [
  {
    key: 1,
    type: "REG",
    li1: "some text and benefits",
    li2: "other stuff",
    price: "799kr",
  },
  {
    key: 2,
    type: "VIP",
    li1: "some text and more benefits",
    li2: "even more stuff",
    price: "1299kr",
  },
];

function Tickets() {
  const [count, setCount] = useState(0);

  const [numRegular, setNumRegular] = useState(0);
  const [numVIP, setNumVIP] = useState(0);
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
                {/* SELECTING TICKETS */}
                <>
                  <div>
                    <h3>REG</h3>
                    <ul>
                      <li>Info about the Regular Ticket type</li>
                      <li>More info about the Regular Ticket type</li>
                    </ul>
                    <span>799</span>
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
                        Exclusive thing that you get with the VIP ticket - stage
                        pass or some shit
                      </li>
                    </ul>
                    <span>1299</span>
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
                <Selections ticketsNumber={[numRegular, numVIP]} />
                <CounterTest parentCallback={setCount} />
                <H2test data={count}></H2test>
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
            <section className="step-3">
              <Heading3 />
              <h3>FILL IN PERSONAL INFO</h3>
              <section className="wrapper-step-3"></section>
            </section>
          </>
        );

      default:
        return (
          <>
            <section className="step-4">
              <Heading4 />
              <h3>FILL IN CREDIT CARD INFO</h3>
              <section className="wrapper-step-4"></section>
            </section>
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
