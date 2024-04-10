import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function Payment() {
    const paypalButtons = useRef();

    useEffect(() => {
        if (!window.paypal) {
            console.error("PayPal SDK not loaded.");
            return;
        }
        
        window.paypal.Buttons({
            createOrder: function () {
}
        }).render(paypalButtons.current);
            }, [onSuccess, onError]);

            return (
                <div>
                    <div ref={paypalButtons}></div>
                </div>
            );
};

