import TicketCard from "./TicketCard";

const ticketTypes = [
  {
    key: 1,
    type: "REG",
    li1: "some text and benefits",
    li2: "other stuff",
    price: "999kr",
  },
  {
    key: 2,
    type: "VIP",
    li1: "some text and more benefits",
    li2: "even more stuff",
    price: "1199kr",
  },
];

function TicketSection() {
  return (
    <section className="ticket-section">
      <h2>Tickets</h2>
      <div>
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
