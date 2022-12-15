import React from "react";
import Image from "next/image";
import logo from "../../assets/logo.png";

function CampsCard(props) {
  return (
    <article>
      <Image src={props.img} alt="img"></Image>
      <h2>{props.infotitle}</h2>
      <p>{props.infotext}</p>
    </article>
  );
}

export default CampsCard;
