import React, { useState } from "react";
import Payment from "../Components/Payment";

function Checkout() {
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