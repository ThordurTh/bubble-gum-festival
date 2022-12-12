import React from "react";

function Test(props) {
  console.log(props.act);
  return (
    <>
      <li>{props.act}</li>
    </>
  );
}

export default Test;
