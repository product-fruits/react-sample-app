import SampleContext from "../context/SampleContext";

export default function Expenses() {
    return (
        <main style={{ padding: "1rem 0" }}>
            <h2>Context API</h2>

            <div>
                This is sample page with Context API in use.
            </div>

            <button id="btn-nothing">A button that does nothing</button>

            <SampleContext.Consumer>
                {({ val, increment }) => (
                    <div style={{ marginTop: '50px' }}>
                        Value in Sample Context: {val}

                        <button onClick={() => increment()}>Increment</button>
                    </div>
                )}
            </SampleContext.Consumer>
        </main>
    );
}