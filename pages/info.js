import React from "react";
import CampsSection from "../components/info/CampsSection";
import InfoSection from "../components/info/InfoSection";
import Map from "../components/info/Map";
function info() {
  return (
    <>
      <InfoSection></InfoSection>
      <Map></Map>
      <CampsSection></CampsSection>
    </>
  );
}

export default info;
