import React from "react";
import CampsSection from "../Components/info/CampsSection";
import InfoSection from "../Components/info/InfoSection";
import Map from "../Components/info/Map";
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
