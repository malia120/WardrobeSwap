import React, { useState } from "react";
import Payment from "../Components/Payment";

/**
 * Page componet for controling the cheakout process
 * this component gives use to initiate and cheakout process
 * and shows the payment component once the user decides to carry on wit hthe cheakout.
 * @component
 * @returns {JSX.Element} the JSX representaion of the cheakout page.
 */



function Checkout() {
    // reveal for tracking the cheakout status
    const [checkout, setCheckout] = useState(false);

    return (
        <div className="App">
            {checkout ? (
                <Payment
                    onSuccess={() => {
                    }}
                    onError={(error) => {
                    }}
                />
            ) : (
                <button onClick={() => setCheckout(true)}>Checkout</button>
            )}
        </div>
    );
}

export default Checkout;