import { nanoid } from "nanoid";
import Lineup from "../lineup/Lineup";
import headerImage from "../../assets/header-image.png";
import Image from "next/image";
import BackgroundLines from "../BackgroundLines";
import Countdown from "./Countdown";

// console.log(Date.parse("04 Jul 2023 00:12:00 GMT"));
// const date1 = new Date();
// const date2 = new Date("7/4/2023");
// const diffTime = Math.abs(date2 - date1);
// console.log(diffTime);

export default function WelcomeSection({ data }) {
  return (
    <section className="welcome-section">
      <BackgroundLines />
      <Image
        src={headerImage}
        className="header-image"
        alt="image of a stage and crowd"
      ></Image>
      <h1>BUBBLE GUM FESTIVAL 2023</h1>
      <ul className="lineup">
        {data.slice(0, 14).map((item) => (
          <Lineup key={nanoid()} name={item.name} />
        ))}
      </ul>
      <section className="countdown-wrapper">
        {/* <Countdown seconds={Date.parse("04 Jul 2023 00:12:00 GMT") / 100000} /> */}
        {/* <Countdown seconds={date / 1000} /> */}
        {/* <Countdown
          seconds={Math.abs(new Date("7/4/2023") - new Date()) / 1000}
        /> */}
      </section>
    </section>
  );
}
