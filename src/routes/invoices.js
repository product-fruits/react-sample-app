import SampleContext from "../context/SampleContext";

export default function Invoices() {
    return (
        <main style={{ padding: "1rem 0" }}>
            <h2>Invoices</h2>

            <div>
                Invoices page.

                <button id="invoices-sample">Sample button</button>
            </div>

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