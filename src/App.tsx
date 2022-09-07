import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';
import { ProductFruits } from 'react-product-fruits';

function App() {
    // const [pf, setPf] = useState(false);

    const [userInfo, setUserInfo] = useState<any>();

    useEffect(() => {
        const t = setTimeout(() => {
            setUserInfo({ username: 'bab' });
        }, 2000);

        return () => {
            clearTimeout(t);
        }
    }, [])

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

                {/* <button onClick={() => setPf(v => !v)}>Toggle PF</button> */}
                <button onClick={() => setUserInfo({ username: 'ccc' })}>Change username</button>
            </nav>

            {userInfo && <ProductFruits language='en' user={userInfo} workspaceCode='UHf8gK434TsyGDjw' config={{ disableBannersAutoMargin: true }} />}

            <Outlet />
        </div>
    );
}

export default App;
