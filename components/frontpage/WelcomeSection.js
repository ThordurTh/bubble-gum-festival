import React from "react";
import Anchor from "../Anchor";

function WelcomeSection() {
  return (
    <section>
      <h1>BUBBLE GUM FESTIVAL 2023</h1>
      <div className="frontLineup">
        <div className="headline1">Headline artist</div>
        <div className="headline2">
          <span>artist 1</span>
          <span>artist 2</span>
          <span>artist 3</span>
          <span>artist 4</span>
        </div>
        <div className="headline3">
          <span>artist 1</span>
          <span>artist 2</span>
          <span>artist 3</span>
          <span>artist 4</span>
          <span>artist 5</span>
          <span>artist 6</span>
          <span>artist 7</span>
          <span>artist 8</span>
          <span>artist 9</span>
        </div>
        <Anchor href="/lineup">FULL LINEUP</Anchor>
      </div>
      <div className="countdown">123d9h34m22s</div>
    </section>
  );
}

export default WelcomeSection;
