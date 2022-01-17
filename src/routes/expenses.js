import SampleContext from "../context/SampleContext";
// import ProductFruits from 'react-product-fruits';

export default function Expenses() {
  // const userInfo = {
  //   username: '==REPLACE==',
  //   email: '==REPLACE==',
  //   firstname: '==REPLACE==',
  //   lastname: '==REPLACE==',
  //   signUpAt: '==REPLACE==',
  //   role: '==REPLACE==',
  //   props: { customProp1: '==REPLACE==' }
  // };
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

        {/* <ProductFruits projectCode="UHf8gK434TsyGDjw" language="en" {...userInfo} /> */}
      </main>
    );
  }