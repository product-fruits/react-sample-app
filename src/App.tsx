import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';
import { ProductFruits } from 'react-product-fruits';

function App() {
    // console.log('app');
    // useEffect(() => {
    //     console.log('init');
    //     return () => {
    //         console.log('destroy');
    //     }
    // }, []);
    const [pf, setPf] = useState(false);

    return (
        <div style={{
            padding: '1rem'
        }}>
            <h1>Bookkeeper</h1>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >
                <Link to="/invoices">Invoices</Link> |{" "}
                <Link to="/expenses">Expenses</Link>

                <button onClick={() => setPf(v => !v)}>Toggle PF</button>
            </nav>

            {pf && <ProductFruits language='en' user={{ username: 'aa' }} workspaceCode='UHf8gK434TsyGDjw' debug={true} config={{ sda: true }} />}

            <Outlet />
        </div>
    );
}

export default App;
