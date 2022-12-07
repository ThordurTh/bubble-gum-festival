import React from "react";
import Anchor from "../components/Anchor";
import Heading from "../components/tickets/Heading";
import Heading2 from "../components/tickets/Heading2";
import TicketBoxes from "../components/tickets/TicketBoxes";
import Selections from "../components/tickets/Selections";
import CampingOptions from "../components/tickets/CampingOptions";
import Selections2 from "../components/tickets/Selections2";

function tickets() {
  return (
    <>
      <section className="step-1">
        <Heading></Heading>
        <h3>SELECT TICKET TYPES</h3>
        <section className="wrapper-step-1"></section>
        <TicketBoxes />
        <Selections />
        <div className="next-step">
          <Anchor href="#">NEXT STEP &#10132;</Anchor>
        </div>
      </section>
      <section className="step-2">
        <Heading2 />
        <CampingOptions />
        <Selections2 />
      </section>
    </>
  );
}

export default tickets;
