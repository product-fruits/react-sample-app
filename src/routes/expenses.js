import SampleContext from "../context/SampleContext";

export default function Expenses() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Expenses</h2>

        <div>
          This is sample expenses page
        </div>

        <button id="invoices-sample">Sample button</button>

        <SampleContext.Consumer>
                {({ val, increment }) => (
                    <div>
                        Value in Sample Context: {val}

                        <button onClick={() => increment()}>Increment</button>
                    </div>
                )}
            </SampleContext.Consumer>
      </main>
    );
  }