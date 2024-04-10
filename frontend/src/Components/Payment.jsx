import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function Payment({ onSuccess, onError }) {    
    const paypalButtons = useRef();

    useEffect(() => {
        if (!window.paypal) {
            console.error("PayPal SDK not loaded.");
            return;
        }
        
        window.paypal.Buttons({
            createOrder: (data, actions) => {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: "10.00", 
                            currency_code: "GBP" 
                        }
                    }]
                });
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                onSuccess(order);
}
        }).render(paypalButtons.current);
            }, [onSuccess, onError]);

            return (
                <div>
                    <div ref={paypalButtons}></div>
                </div>
            );
};
export default Payment;

