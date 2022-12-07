import Anchor from "../Anchor";

function TicketCard(props) {
  return (
    <div>
      <h3>{props.type}</h3>
      <ul>
        <li>{props.li1}</li>
        <li>{props.li2}</li>
      </ul>
      <span>{props.price}</span>
      <div className="buy-now">
        <Anchor href="/tickets">Buy now &#10132;</Anchor>
      </div>
    </div>
  );
}

export default TicketCard;
