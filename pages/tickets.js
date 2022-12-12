import React from "react";
import Heading from "../components/tickets/Heading";
import Selections from "../components/tickets/Selections";
// import SelectTicketsForm from "../components/tickets/SelectTicketsForm";
import Heading2 from "../components/tickets/Heading2";
import CampingOptions from "../components/tickets/CampingOptions";
import Selections2 from "../components/tickets/Selections2";
import Heading3 from "../components/tickets/Heading3";
import Heading4 from "../components/tickets/Heading4";
import LastStepForm from "../components/tickets/LastStepForm";
import Participants from "../components/tickets/Participants";
import { useState } from "react";
import { nanoid } from "nanoid";

function Tickets({ data }) {
  const [numRegular, setNumRegular] = useState(0);
  const [numVIP, setNumVIP] = useState(0);
  const [step, setStep] = useState(0);
  const [tentForTwo, setTentForTwo] = useState(0);
  const [tentForThree, setTentForThree] = useState(0);
  const [green, setGreen] = useState(false);
  const [ownTent, setOwnTent] = useState(false);
  const [campSelect, setCampSelect] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [reserveID, setReserveID] = useState("");

  let numberOfTickets = numRegular + numVIP;
  // console.log(numberOfTickets);
  const formElements = [];

  for (let x = 0; x < numberOfTickets; x++) {
    // console.log(x);
    formElements.push(<Participants />);
  }

  function handleReservation() {
    console.log("AMAZING");
    console.log(typeof campSelect);
    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: `{"area":${JSON.stringify(campSelect)},"amount":${JSON.stringify(
        numRegular
      )}}`,
    };
    handleNext();

    fetch("http://localhost:8080/reserve-spot", options)
      .then((response) => response.json())
      // .then((response) => console.log(response.id))
      .then((response) => setReserveID(JSON.stringify(response.id)))
      .catch((err) => console.error(err));
    console.log(typeof reserveID);
  }

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
                <div className="reg-ticket green-border">
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
                </div>
                <div className="vip-ticket green-border">
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
                </div>

                <Selections
                  regularTickets={numRegular}
                  vipTickets={numVIP}
                  campingSpot={campSelect}
                  greenCamping={green}
                  tentSetup1={tentForTwo}
                  tentSetup2={tentForThree}
                  ownTent={ownTent}
                />
              </section>
            </section>
          </>
        );
      case 1:
        return (
          <section className="step-2">
            <Heading2 />
            <h3>SELECT CAMPING OPTIONS</h3>
            <section className="wrapper-step-2">
              <div className="camping-options-form green-border">
                <p>Available spots</p>
                <form className="camping-spot-radio">
                  {data.map((item) => (
                    <div key={nanoid()}>
                      <label htmlFor={item.area.replaceAll(" ", "")}>
                        {item.area}
                        <input
                          type="radio"
                          id={item.area.replaceAll(" ", "")}
                          name="camping-area"
                          disabled={item.available < numRegular + numVIP}
                          value={item.area}
                          checked={campSelect === item.area}
                          onChange={() => {
                            setCampSelect(item.area);
                          }}
                        ></input>
                      </label>

                      <span>{item.available}</span>
                    </div>
                  ))}
                  <p>
                    When booking there is a flat fee of 99 ,- for camping, only
                    paid once per purchase
                  </p>
                  {/* IMAGE OF MAP */}
                </form>
              </div>
              <div className="additional-camping-options green-border">
                <form>
                  <p>Select this if you are pretentious</p>
                  <label
                    htmlFor="greencamping"
                    onChange={() => setGreen((prev) => !prev)}
                  >
                    <input
                      type="checkbox"
                      id="greencamping"
                      name="greencamping"
                      checked={green}
                      onChange={() => {
                        setGreen(green);
                      }}
                    ></input>
                    Green camping 249kr{" "}
                  </label>
                </form>
              </div>
              <div className="tents-wrapper green-border">
                <div className="two-person-tent">
                  <p>2 person tent 299kr</p>
                  <button
                    disabled={tentForTwo === 0}
                    onClick={() => setTentForTwo((old) => old - 1)}
                  >
                    -
                  </button>
                  {tentForTwo}
                  <button
                    disabled={
                      numRegular + numVIP < 2 ||
                      tentForTwo === 2 ||
                      (numRegular + numVIP === 2) & (tentForTwo === 1) ||
                      tentForThree === 1 ||
                      ownTent === true
                    }
                    onClick={() => setTentForTwo((old) => old + 1)}
                  >
                    +
                  </button>
                </div>
                <div className="three-person-tent">
                  <p>3 person tent 399kr</p>
                  <button
                    disabled={tentForThree === 0}
                    onClick={() => setTentForThree((old) => old - 1)}
                  >
                    -
                  </button>
                  {tentForThree}
                  <button
                    disabled={
                      numRegular + numVIP < 3 ||
                      tentForThree === 1 ||
                      tentForTwo >= 1 ||
                      ownTent === true
                    }
                    onClick={() => setTentForThree((old) => old + 1)}
                  >
                    +
                  </button>
                </div>
                <form>
                  <p>I brought my own tent POG</p>
                  <label
                    htmlFor="owntent"
                    onChange={() => setOwnTent((prev) => !prev)}
                  >
                    <input
                      type="checkbox"
                      id="owntent"
                      name="owntent"
                      checked={ownTent}
                      onChange={() => {
                        setOwnTent(ownTent);
                      }}
                    ></input>
                    Already have a tent
                  </label>
                </form>
              </div>
              <Selections
                regularTickets={numRegular}
                vipTickets={numVIP}
                campingSpot={campSelect}
                greenCamping={green}
                tentSetup1={tentForTwo}
                tentSetup2={tentForThree}
                ownTent={ownTent}
              />
            </section>
          </section>
        );
      case 2:
        return (
          <>
            <section className="step-3">
              <Heading3 />
              <h3>FILL IN PERSONAL INFO</h3>
              <section className="wrapper-step-3">
                <form>
                  <div className="participant-form">{formElements}</div>
                </form>

                <Selections
                  regularTickets={numRegular}
                  vipTickets={numVIP}
                  campingSpot={campSelect}
                  greenCamping={green}
                  tentSetup1={tentForTwo}
                  tentSetup2={tentForThree}
                  ownTent={ownTent}
                  firstName={firstName}
                  lastName={lastName}
                />
              </section>
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
            <LastStepForm responseID={reserveID} />
            <Selections
              regularTickets={numRegular}
              vipTickets={numVIP}
              campingSpot={campSelect}
              greenCamping={green}
              tentSetup1={tentForTwo}
              tentSetup2={tentForThree}
              ownTent={ownTent}
            />
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

      {step === 0 && (
        <button disabled={numVIP + numRegular === 0} onClick={handleNext}>
          Next
        </button>
      )}
      {step === 1 && (
        <button disable={campSelect === ""} onClick={handleReservation}>
          Next
        </button>
      )}
      {step === 2 && <button onClick={handleNext}>Next</button>}

      {/* {(step === 0 || step === 1 || step === 2) && (
        <button disabled={numVIP + numRegular === 0} onClick={handleNext}>
          Next
        </button>
      )} */}
      {step === 3 && <button onClick={handleSubmit}>Submit</button>}
    </>
  );
}

export default Tickets;

export async function getStaticProps() {
  // Get data from api
  const res = await fetch("http://localhost:8080/available-spots");
  const data = await res.json();
  // setOptions(data);

  return {
    props: {
      data: data,
    },
  };
}
