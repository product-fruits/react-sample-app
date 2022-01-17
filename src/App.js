import logo from './logo.svg';
import './App.css';
import ProductFruits from 'react-product-fruits';
import { Link, Outlet } from "react-router-dom";
import SampleContext from "./context/SampleContext";
import { useState } from 'react';

function App() {
  const userInfo = {
    username: '==REPLACE==',
    email: '==REPLACE==',
    firstname: '==REPLACE==',
    lastname: '==REPLACE==',
    signUpAt: '==REPLACE==',
    role: '==REPLACE==',
    props: { customProp1: '==REPLACE==' }
  };

  const [val, setVal] = useState(0);

  return (
    <SampleContext.Provider value={{ val: val, increment: () => { setVal(i => i + 1) } }}>
      <div className="App">
        <header className="App-header">
          <p>
            This is react-product-fruits sample application.
          </p>
          <nav
            style={{
              borderBottom: "solid 1px",
              paddingBottom: "1rem"
            }}
          >
            <Link to="/invoices">Invoices</Link> |{" "}
            <Link to="/expenses">Expenses</Link>
          </nav>
        </header>

        <Outlet />

        <ProductFruits projectCode="UHf8gK434TsyGDjw" language="en" {...userInfo} /> 
      </div>
    </SampleContext.Provider>
  );
}

export default App;
