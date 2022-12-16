import React from "react";
import CampsSection from "../components/info/CampsSection";
import InfoSection from "../components/info/InfoSection";
import Map from "../components/info/Map";
import BackgroundLines from "../components/BackgroundLines";
function info() {
  return (
    <>
      <BackgroundLines> </BackgroundLines>
      <InfoSection></InfoSection>
      <CampsSection></CampsSection>
    </>
  );
}

export default info;
