import './App.css';
import ProductFruits from 'react-product-fruits';
import { Link, Outlet } from "react-router-dom";
import SampleContext from "./context/SampleContext";
import { useState } from 'react';

function App() {
    /* !!!!!!!!!!!!!!!!!!!!!!!!!!
     THIS IS THE IMPORTANT PART
     You need to provide the ProductFruits component with current logged-in user information. */
    const userInfo = {
        username: '==REPLACE== !!!THIS IS REQUIRED!!!',
        email: '==REPLACE (optional)==',
        firstname: '==REPLACE (optional)==',
        lastname: '==REPLACE (optional)==',
        signUpAt: '==REPLACE (optional)==',
        role: '==REPLACE (optional)==',
        props: { customProp1: '==REPLACE (optional)==' }
    };
    const userInfoIsLoaded = true;

    const [val, setVal] = useState(0);
    const [tourHit, setTourHit] = useState(0);

    return (
        <SampleContext.Provider value={
            {
                val,
                tourHit,
                increment: () => { setVal(i => i + 1) },
                incrementTourHit: () => { setTourHit(i => i + 1) }
            }
        }>
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
                        <Link to="/context">React Context API test</Link> |{" "}
                        <Link to="/tours-api">PF Tours API</Link>
                    </nav>
                </header>

                <Outlet />

                {/* !!!!!!!!!!!!!!!!!!!!!!!!!! */}
                {/* THIS IS THE IMPORTANT PART */}
                {/* Insert your projectCode, language and user information */}
                {/* DO NOT insert the ProductFruits component before your userinfo is loaded, it will duplicate your users in Product Fruits */}
                {userInfoIsLoaded && <ProductFruits projectCode="UHf8gK434TsyGDjw" language="en" {...userInfo} />}
            </div>
        </SampleContext.Provider>
    );
}

export default App;
