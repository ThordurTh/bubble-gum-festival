import React from "react";
import CampsCard from "./CampsCard";
import lagoonImg from "../../assets/lagoon.webp";
import happy from "../../assets/happy.webp";
import camp from "../../assets/camp.webp";

const infocards = [
  {
    key: 1,
    infotitle: "Licorice Lagoon",
    img: lagoonImg,
    infotext:
      "The best camping spot for people that love to just chill. For the attendants that choose this camping spots, small boat and canoes can be rented out for rides on our small lake. A bag of licorice flavored bubblegum will be provided to all attendants that choose to camp here. All camps are connected to each other, with a clear path for the aminities present at the festival.",
  },
  {
    key: 2,
    infotitle: "Cherry Camp",
    img: happy,
    infotext:
      "Cherry Camp is the go to camping spot for outgoing people that love being in a community. Gather around the campfire at each end of day for fun activities with the other campers. A bag of cherry flavored bubblegum will be provided to all attendants that choose to camp here. All camps are connected to each other, with a clear path for the aminities present at the festival.",
  },
  {
    key: 3,
    infotitle: "Minty Mountain",
    img: camp,
    infotext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A bag of minty flavored bubblegum will be provided to all attendants that choose to camp here. All camps are connected to each other, with a clear path for the aminities present at the festival.",
  },
  {
    key: 4,
    infotitle: "Blueberry Beach",
    img: happy,
    infotext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A bag of blueberry flavored bubblegum will be provided to all attendants that choose to camp here. All camps are connected to each other, with a clear path for the aminities present at the festival.",
  },
  {
    key: 5,
    infotitle: "Watermelon Wonderland",
    img: happy,
    infotext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A bag of watermelon flavored bubblegum will be provided to all attendants that choose to camp here. All camps are connected to each other, with a clear path for the aminities present at the festival.",
  },
];
function CampsSection() {
  return (
    <div className="margin">
      <h1 className="underline">CAMPS INFO</h1>
      <section className="info-cards">
        {infocards.map((item) => (
          <CampsCard
            key={item.key}
            img={item.img}
            infotitle={item.infotitle}
            infotext={item.infotext}
          />
        ))}
      </section>
    </div>
  );
}

export default CampsSection;
