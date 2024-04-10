import React, { useState } from "react";

function Checkout() {
    const [checkout, setCheckout] = useState(false);

    return (
        <div className="App">
            {checkout ? (
                <div>
                    <h2>Payment Successful!</h2>
                    <p>Thank you for your purchase.</p>
                </div>
            ) : (
                <button onClick={() => setCheckout(true)}>Click here to pay</button>
            )}
        </div>
    );
}

export default Checkout;