import React from "react";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Acts from "../components/program/Acts";

export default function Schedule({ data }) {
  let [day, setDay] = useState("mon");
  // function getAct(item) {
  //   return (
  //     <>
  //       <li>{item.start}</li>
  //       <li>{item.end}</li>
  //       <li>{item.act}</li>
  //     </>
  //   );
  // }

  const stages = ["Tutti Frutti", "Wintergreen", "Sour Apple"];
  console.log(stages[0]);

  function getAct(item) {
    if (item.act === "break") {
      return <></>;
    } else {
      return (
        <li key={nanoid()}>
          {item.act}
          <span className="dotted-line"> ~~~ </span>
          {item.start} - {item.end}
        </li>
      );
    }
  }

  // let getMonday = data["Tutti Frutti"].mon.map((item) => {
  //   if (item.act === "break") {
  //     return <></>;
  //   } else {
  //     return (
  //       <li key={nanoid()}>
  //         {item.act}
  //         <span className="dotted-line"> ~~~ </span>
  //         {item.start} - {item.end}
  //       </li>
  //     );
  //   }
  // });

  return (
    <div>
      <h1>Program</h1>
      <button onClick={() => setDay("mon")}>Monday</button>
      <button onClick={() => setDay("tue")}>Tuesday</button>
      <button onClick={() => setDay("wed")}>Wednesday</button>
      <button onClick={() => setDay("thu")}>Thursday</button>
      <button onClick={() => setDay("fri")}>Friday</button>
      <button onClick={() => setDay("sat")}>Saturday</button>
      <button onClick={() => setDay("sun")}>Sunday</button>

      <section className="tutti-frutti">
        <h2>Tutti Frutti</h2>
        <ul>{data[stages[0]][day].map(getAct)}</ul>
      </section>
      <section className="wintergreen">
        <h2>Wintergreen</h2>
        {data[stages[1]][day].map(getAct)}
      </section>
      <section className="sour-apple">
        <h2>Sour Apple</h2>
        {data[stages[2]][day].map(getAct)}
      </section>
    </div>
  );
}

export async function getStaticProps() {
  // Get data from api
  const res = await fetch("http://localhost:8080/schedule");
  const data = await res.json();
  // setOptions(data);

  return {
    props: {
      data: data,
    },
  };
}
