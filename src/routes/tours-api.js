import { useContext } from "react";
import SampleContext from "../context/SampleContext";
import { useProductFruits } from 'react-product-fruits';

export default function ToursApi() {
    const tourId = 1100;
    const contextVal = useContext(SampleContext);

    /*
     * If you want to call PF API, use this hook. It will ensure that Product Fruits is loaded.
     */
    useProductFruits(api => {
        if (contextVal.tourHit % 5 === 0) {
            api.tours.tryStartTour(tourId);
        }
    }, [contextVal.tourHit]);

    return (
        <main style={{ padding: "1rem 0" }}>
            <h2>Tours API in use</h2>

            <div>
                We will try to launch a tour when this page is loaded and then every fifth Button hit and on load. When running this example locally, you have to change the tourId variable.
            </div>

            <SampleContext.Consumer>
                {({ tourHit, incrementTourHit }) => (
                    <div style={{ marginTop: '50px' }}>
                        Button hit {tourHit} (launches the tour every 5th hit and on load)
                        <br />
                        <button onClick={() => incrementTourHit()}>Increment Button Hit</button>
                    </div>
                )}
            </SampleContext.Consumer>
        </main>
    );
}