import React from "react";

function CampingOptions() {
  return (
    <section className="camping-wrapper">
      <div className="camping-options-form">
        <form>
          <input type="checkbox" id="camp1" name="camp1"></input>
          <label for="camp1">BlueBerry Beach</label>
          <input type="checkbox" id="camp2" name="camp2"></input>
          <label for="camp2">Cherry Camp</label>
          <input type="checkbox" id="camp3" name="camp3"></input>
          <label for="camp3">Licorice Lagoon</label>
          <input type="checkbox" id="camp4" name="camp4"></input>
          <label for="camp4">Minty Mountain</label>
          <input type="checkbox" id="camp5" name="camp5"></input>
          <label for="camp5">Watermelon Wonderland</label>
        </form>
        <p>
          When booking there is a flat fee of 99 ,- for camping, only paid once
          per purchase
        </p>
        <div>
          <p>Available spots</p>
          <p>5</p>
          <p>54</p>
          <p>0</p>
          <p>23</p>
          <p>69</p>
        </div>
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
