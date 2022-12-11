import React from "react";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

export default function Acts({ data }) {
  // const [scheduleData, setScheduleData] = useState([]);
  // console.log(data.Wintergreen.mon);
  return (
    <div>
      {data.Wintergreen.mon.map((item) => {
        <li>{item.act}</li>;
      })}
    </div>
  );
}
