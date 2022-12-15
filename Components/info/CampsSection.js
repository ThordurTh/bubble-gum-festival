import React from "react";
import CampsCard from "./CampsCard";
import lagoonImg from "../../assets/lagoon.webp";
import happy from "../../assets/happy.webp";
import camp from "../../assets/camp.webp";

const infocards = [
  {
    key: 1,
    infotitle: "Camp 1",
    img: lagoonImg,
    infotext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet tincidunt dui, consectetur aliquam felis. Sed nulla risus, fermentum vel laoreet in, cursus nec risus. Cras varius auctor vehicula. Cras fringilla risus vel metus mattis, pretium suscipit tortor porttitor. Nullam pharetra vulputate eleifend. Duis scelerisque sodales elit ut tempor. Integer ultrices urna et mauris dapibus lacinia. Vivamus scelerisque dui vitae metus auctor sagittis ac vel orci. Aliquam vel ultrices turpis",
  },
  {
    key: 2,
    infotitle: "Camp 2",
    img: happy,
    infotext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet tincidunt dui, consectetur aliquam felis. Sed nulla risus, fermentum vel laoreet in, cursus nec risus. Cras varius auctor vehicula. Cras fringilla risus vel metus mattis, pretium suscipit tortor porttitor. Nullam pharetra vulputate eleifend. Duis scelerisque sodales elit ut tempor. Integer ultrices urna et mauris dapibus lacinia. Vivamus scelerisque dui vitae metus auctor sagittis ac vel orci. Aliquam vel ultrices turpis",
  },
  {
    key: 3,
    infotitle: "Camp 3",
    img: camp,
    infotext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet tincidunt dui, consectetur aliquam felis. Sed nulla risus, fermentum vel laoreet in, cursus nec risus. Cras varius auctor vehicula. Cras fringilla risus vel metus mattis, pretium suscipit tortor porttitor. Nullam pharetra vulputate eleifend. Duis scelerisque sodales elit ut tempor. Integer ultrices urna et mauris dapibus lacinia. Vivamus scelerisque dui vitae metus auctor sagittis ac vel orci. Aliquam vel ultrices turpis",
  },
  {
    key: 4,
    infotitle: "Camp 4",
    img: happy,
    infotext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet tincidunt dui, consectetur aliquam felis. Sed nulla risus, fermentum vel laoreet in, cursus nec risus. Cras varius auctor vehicula. Cras fringilla risus vel metus mattis, pretium suscipit tortor porttitor. Nullam pharetra vulputate eleifend. Duis scelerisque sodales elit ut tempor. Integer ultrices urna et mauris dapibus lacinia. Vivamus scelerisque dui vitae metus auctor sagittis ac vel orci. Aliquam vel ultrices turpis",
  },
  {
    key: 5,
    infotitle: "Camp 5",
    img: happy,
    infotext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet tincidunt dui, consectetur aliquam felis. Sed nulla risus, fermentum vel laoreet in, cursus nec risus. Cras varius auctor vehicula. Cras fringilla risus vel metus mattis, pretium suscipit tortor porttitor. Nullam pharetra vulputate eleifend. Duis scelerisque sodales elit ut tempor. Integer ultrices urna et mauris dapibus lacinia. Vivamus scelerisque dui vitae metus auctor sagittis ac vel orci. Aliquam vel ultrices turpis",
  },
];
function CampsSection() {
  return (
    <div className="margin">
      <h1>CAMPS INFO</h1>
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
