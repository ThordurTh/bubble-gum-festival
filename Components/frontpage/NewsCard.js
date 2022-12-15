import Anchor from "../Anchor";
import Image from "next/image";

function NewsCard(props) {
  return (
    <div>
      <Image src="" alt="something"></Image>
      <h3>{props.heading}</h3>
      <p>{props.paragraph}</p>
      <div className="buy-now">
        <Anchor href="/ticketflow">Read &#10132;</Anchor>
      </div>
    </div>
  );
}

export default NewsCard;
