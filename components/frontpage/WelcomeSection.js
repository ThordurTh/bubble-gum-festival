import React from "react";
import Anchor from "../Anchor";
import { nanoid } from "nanoid";
import Lineup from "../lineup/Lineup";
import headerImage from "../../assets/header-image.png";
import Image from "next/image";

export default function WelcomeSection({ data }) {
  return (
    <section className="welcome-section">
      <Image src={headerImage} className="header-image"></Image>
      <h1>BUBBLE GUM FESTIVAL 2023</h1>
      <ul>
        {data.slice(0, 14).map((item) => (
          <Lineup key={nanoid()} name={item.name} />
        ))}
      </ul>
      <div className="countdown">123d9h34m22s</div>
    </section>
  );
}
