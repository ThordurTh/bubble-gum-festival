import { nanoid } from "nanoid";

function CampingOptions({ campingOptions }) {
  return (
    <section className="camping-wrapper">
      <div className="camping-options-form">
        <p>Available spots</p>
        <form>
          {campingOptions[0].map((item) => (
            <div key={nanoid()}>
              <label
                onClick={(e) => {
                  // campCallback((campSelect = [e.target]))
                  console.log(e);
                }}
                for={item.area.replaceAll(" ", "")}
              >
                {item.area}
                <input
                  type="radio"
                  id={item.area.replaceAll(" ", "")}
                  name="camping-area"
                  disabled={
                    item.available < campingOptions[1] + campingOptions[2]
                  }
                ></input>
              </label>

              <span>{item.available}</span>
            </div>
          ))}
          <p>
            When booking there is a flat fee of 99 ,- for camping, only paid
            once per purchase
          </p>
        </form>
      </div>
      <div className="additional-camping-options">
        <form>
          <p>Select this if you are pretentious</p>
          <input type="checkbox" id="greencamping" name="greencamping"></input>
          <label for="greencamping">Green camping 249kr </label>
        </form>
      </div>
      <div className="tents-wrapper">
        <p>2 person tent 299kr</p>
        <button>-</button>
        {/* selection on tents numbers, with dependencies on how many tickets were selected */}
        <button>+</button>
        <p>3 person tent 399kr</p>
        <button>-</button>
        {/* selection on tents numbers, with dependencies on how many tickets were selected */}
        <button>+</button>
        <form>
          <p>I brought my own tent POG</p>
          <input type="checkbox" id="owntent" name="owntent"></input>
          <label for="owntent">Already have a tent</label>
        </form>
      </div>
    </section>
  );
}

export default CampingOptions;
