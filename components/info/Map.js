import React from "react";
import Image from "next/image";
import maps from "../../assets/map.webp";

function Map() {
  return (
    <section>
      <h1>MAP</h1>
      <Image src={maps} alt="map"></Image>
    </section>
  );
}

export default Map;
