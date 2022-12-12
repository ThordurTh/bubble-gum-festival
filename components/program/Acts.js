import React from "react";
import { nanoid } from "nanoid";
import Test from "./Test";

export default function Acts({ data }) {
  // const numbers = [4, 9, 16, 25];
  // const newArr =
  data["Tutti Frutti"].mon.map((item) => {
    console.log(item.act);
  });
  // console.log(newArr);

  return (
    <>
      {data["Tutti Frutti"].mon.map((item) => {
        console.log(item.act);
        <li>{item.act}</li>;
      })}
      {/* {data["Tutti Frutti"].mon.map((element) => {
        let x = 0;
        console.log(`${x++} ${element.act}`);
        <li key={nanoid()}>{element.act}</li>;
      })} */}
    </>
  );
}
