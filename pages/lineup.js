import Lineup from "../components/lineup/Lineup";
import { nanoid } from "nanoid";

export default function lineup({ data }) {
  return (
    <div>
      {data.slice(0, 5).map((item) => (
        <Lineup key={nanoid()} name={item.name} />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  // Get data from api
  const res = await fetch("http://localhost:8080/bands");
  const data = await res.json();
  console.log(data);
  // Return the data inside props
  return {
    props: {
      data: data,
    },
  };
}
