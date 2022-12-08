import Lineup from "../components/lineup/Lineup";
import { nanoid } from "nanoid";
import BackgroundLines from "../components/BackgroundLines";

export default function lineup({ data }) {
  return (
    <section className="lineupSection">
      <h2>LINEUP</h2>
      <BackgroundLines />
      <div className="lineup-wrapper">
        <ul className="lineup">
          {data.slice(0, 34).map((item) => (
            <Lineup key={nanoid()} name={item.name} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  // Get data from api
  const res = await fetch("http://localhost:8080/bands");
  const data = await res.json();
  // Return the data inside props
  return {
    props: {
      data: data,
    },
  };
}
