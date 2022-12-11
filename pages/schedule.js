import React from "react";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Acts from "../components/program/Acts";

export default function Schedule({ data }) {
  // const [schedules, setSchedules] = useState([]);
  // useEffect(() => {
  //   async function getScheduleData() {
  //     const response = await fetch("http://localhost:8080/schedule");
  //     const data = await response.json();
  //     setSchedules(data);
  //     console.log(data);
  //   }
  //   getScheduleData();
  // }, []);

  return (
    <div>
      <h1>Program</h1>
      <button>Monday</button>
      <button>Tuesday</button>
      <button>Wednesday</button>
      <button>Thursday</button>
      <button>Friday</button>
      <button>Saturday</button>
      <button>Sunday</button>
      <ul>
        <Acts data={data}></Acts>

        {/* {Object.keys(data.Wintergreen).map((key) => (
          <div key={key}>
            <p>
              {key}: {data[key]}
            </p>
          </div>
        ))} */}
        {/* {data.map((item) => (
          <p key={nanoid()} name={item.name} />
        ))} */}
      </ul>
      {/* <p>{JSON.stringify(data.Wintergreen)}</p> */}
      {/* <button onClick={data}></button> */}
    </div>
  );
}

export async function getStaticProps() {
  // Get data from api
  const res = await fetch("http://localhost:8080/schedule");
  const data = await res.json();
  // setOptions(data);
  // console.log(data);

  return {
    props: {
      data: data,
    },
  };
}
