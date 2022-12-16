import Heading from "../components/tickets/Heading";
import Selections from "../components/tickets/Selections";
import Heading2 from "../components/tickets/Heading2";
import Heading3 from "../components/tickets/Heading3";
import Heading4 from "../components/tickets/Heading4";
import LastStepForm from "../components/tickets/LastStepForm";
import Participants from "../components/tickets/Participants";
import BackgroundLines from "../components/BackgroundLines";
import { useState } from "react";
import { nanoid } from "nanoid";
import clone from "just-clone";

function Tickets({ data }) {
  const [numRegular, setNumRegular] = useState(0);
  const [numVIP, setNumVIP] = useState(0);
  const [step, setStep] = useState(0);
  const [tentForTwo, setTentForTwo] = useState(0);
  const [tentForThree, setTentForThree] = useState(0);
  const [green, setGreen] = useState(false);
  const [ownTent, setOwnTent] = useState(false);
  const [campSelect, setCampSelect] = useState("");
  const [reserveID, setReserveID] = useState("");

  const [participantsInfo, setParticipantsInfo] = useState({});

  let numberOfTickets = numRegular + numVIP;
  const formElements = [];

  for (let x = 0; x < numRegular; x++) {
    // console.log(x);
    formElements.push(
      <div className="participant">
        <h3>REG</h3>
        <Participants
          setParticipantsInfo={updateStateParticipant}
          participantKey={x}
          participantsInfo={participantsInfo}
          ticketType="regular"
        />
      </div>
    );
  }
  for (let x = numRegular; x < numRegular + numVIP; x++) {
    formElements.push(
      <div className="participant">
        <h3>VIP</h3>
        <Participants
          setParticipantsInfo={updateStateParticipant}
          participantKey={x}
          participantsInfo={participantsInfo}
          ticketType="vip"
        />
      </div>
    );
  }

  function updateStateParticipant(key, property, value, ticketType) {
    setParticipantsInfo((old) => {
      const copy = clone(old);

      if (typeof copy[key] !== "object") {
        copy[key] = { ticketType };
      }
      copy[key][property] = value;
      return copy;
    });
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
      .then((response) => setReserveID(JSON.stringify(response.id)))
      .catch((err) => console.error(err));
    console.log(typeof reserveID);
  }

  const conditionalComponent = () => {
    switch (step) {
      case 0:
        return (
          <>
            <BackgroundLines></BackgroundLines>
            <section className="step-1">
              <Heading></Heading>

              <h3 className="underline tickets-h3">SELECT TICKET TYPES</h3>
              <section className="wrapper-step-1">
                {/* SELECTING TICKETS */}
                <div className="step-1-tickets">
                  <div className="ticket-card reg-ticket green-border">
                    <div className="tickets-wrapper-boxes">
                      <div className="head-price">
                        <h3>REG</h3>
                        <span>PRICE: 799,-</span>
                      </div>
                      <div>
                        <ul>
                          <li>Regular access to the Festival</li>
                          <li>
                            Regular access to Festival aminites and other
                            facilities
                          </li>
                        </ul>
                        <div className="tickets-buttons-wrapper">
                          <button
                            className="tickets-ticket-buttons"
                            disabled={numRegular === 0}
                            onClick={() => setNumRegular((old) => old - 1)}
                          >
                            -
                          </button>
                          <div>{numRegular}</div>
                          <button
                            className="tickets-ticket-buttons"
                            disabled={numRegular + numVIP > 3}
                            onClick={() => setNumRegular((old) => old + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ticket-card vip-ticket green-border">
                    <div className="tickets-wrapper-boxes">
                      <div className="head-price">
                        <h3 className="vip-ticket-name">VIP</h3>
                        <span>PRICE: 1299,-</span>
                      </div>
                      <ul>
                        <li>VIP access to the Festival</li>
                        <li>Backstage access on all scenes</li>
                        <li>
                          Meet and greet with artists & access to VIP lounge
                        </li>
                      </ul>
                    </div>

                    <div className="tickets-buttons-wrapper">
                      <button
                        className="tickets-ticket-buttons"
                        disabled={numVIP === 0}
                        onClick={() => setNumVIP((old) => old - 1)}
                      >
                        -
                      </button>
                      <div>{numVIP}</div>
                      <button
                        className="tickets-ticket-buttons"
                        disabled={numVIP + numRegular > 3}
                        onClick={() => setNumVIP((old) => old + 1)}
                      >
                        +
                      </button>
                    </div>
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
          <>
            <BackgroundLines></BackgroundLines>
            <section className="step-2">
              <Heading2 />
              <h3 className="underline tickets-h3">SELECT CAMPING OPTIONS</h3>
              <section className="wrapper-step-2">
                <div className="camping-options-form green-border">
                  <p>Available spots</p>
                  <form className="camping-spot-radio">
                    {data.map((item) => (
                      <div key={nanoid()}>
                        <label htmlFor={item.area.replaceAll(" ", "")}>
                          {item.area}
                          <span>{item.available}</span>
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
                      </div>
                    ))}

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
                        disabled={tentForTwo > 0 || tentForThree > 0}
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
          </>
        );
      case 2:
        return (
          <>
            <section className="step-3">
              <Heading3 />
              <h3 className="underline tickets-h3">FILL IN PERSONAL INFO</h3>
              <section className="wrapper-step-3">
                <form className="participant-form green-border">
                  {formElements}
                </form>

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

      default:
        return (
          <>
            <section className="step-4">
              <Heading4 />
              <h3 className="underline tickets-h3">FILL IN CREDIT CARD INFO</h3>
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
              participantsInfo={participantsInfo}
            />
          </>
        );
    }
  };
  function handleNext() {
    setStep(step + 1);
  }

  // function handleSubmit() {
  //   console.log("SUCCESS");
  // }
  return (
    <>
      {conditionalComponent()}
      <div className="nextback-buttons">
        {step > 0 && (
          <button className="back-button" onClick={() => setStep(step - 1)}>
            Back
          </button>
        )}

        {step === 0 && (
          <button
            className={`next-button first-next ${
              numVIP + numRegular === 0 ? " disabled" : " "
            }`}
            disabled={numVIP + numRegular === 0}
            onClick={handleNext}
          >
            Next
          </button>
        )}
        {step === 1 && (
          <button
            className={`next-button ${campSelect === "" ? " disabled" : " "}`}
            disabled={campSelect === ""}
            onClick={handleReservation}
          >
            Next
          </button>
        )}
        {step === 2 && (
          <button className="next-button" onClick={handleNext}>
            Next
          </button>
        )}
      </div>
      {/* {(step === 0 || step === 1 || step === 2) && (
        <button disabled={numVIP + numRegular === 0} onClick={handleNext}>
          Next
        </button>
      )} */}
      {/* {step === 3 && <button onClick={handleSubmit}>Submit</button>} */}
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
