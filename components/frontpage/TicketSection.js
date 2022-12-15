import TicketCard from "./TicketCard";
import BackgroundLines from "../BackgroundLines";
const ticketTypes = [
  {
    key: 1,
    type: "REG",
    li1: "Entry to all stages",
    li2: "other stuff",
    price: "999kr",
  },
  {
    key: 2,
    type: "VIP",
    li1: "Exclusive discounts",
    li2: "Entry to the front row",
    price: "1199kr",
  },
];

function TicketSection() {
  return (
    <section className="ticket-section">
      <h2 className="underline">Tickets</h2>
      <div className="ticket-cards">
        {ticketTypes.map((item) => (
          <TicketCard
            key={item.key}
            type={item.type}
            li1={item.li1}
            li2={item.li2}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
}

export default TicketSection;
