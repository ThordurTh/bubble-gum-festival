import React from "react";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

export default function Acts({ data }) {
  const [scheduleData, setScheduleData] = useState([]);

  // useEffect(() => {
  //   async function getScheduleData() {
  //     const response = await fetch("http://localhost:8080/schedule");
  //     const data = await response.json();
  //     setScheduleData(data);
  //     console.log(data);
  //   }
  //   getScheduleData();
  // }, []);
  return (
    <div>
      <button>Monday</button>
      <button>Tuesday</button>
      <button>Wednesday</button>
      <button>Thursday</button>
      <button>Friday</button>
      <button>Saturday</button>
      <button>Sunday</button>
      <ul>
        {data.map((item) => (
          <p key={nanoid()} act={item.act} />
        ))}
      </ul>
      <button onClick={getStaticProps}></button>
    </div>
  );
}

export async function getStaticProps() {
  // Get data from api
  const res = await fetch("http://localhost:8080/schedule");
  const data = await res.json();
  // setOptions(data);
  console.log(data);

  return {
    props: {
      data: JSON.stringify(data),
    },
  };
}
