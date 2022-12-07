import React from "react";
import Anchor from "./Anchor";

function Footer() {
  return (
    <footer>
      <div>
        <ul>
          <li>
            <Anchor href="inprogress">CONTACT</Anchor>
          </li>
          <li>
            <Anchor href="">INFO</Anchor>
          </li>
          <li>
            <Anchor href="inprogress">PRESS</Anchor>
          </li>
          <li>
            <Anchor href="inprogress">TERMS</Anchor>
          </li>
        </ul>
      </div>
      <div className="socials">
        <ul>
          <li>
            <Anchor href="">Insta</Anchor>
          </li>
          <li>
            <Anchor href="">fb</Anchor>
          </li>
          <li>
            <Anchor href="">twitter</Anchor>
          </li>
          <li>
            <Anchor href="">spotify</Anchor>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
