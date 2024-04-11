import React, { useEffect, useRef } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function Payment({ onSuccess, onError }) {
    const paypalButtons = useRef();

    useEffect(() => {
        if (!window.paypal) {
            console.error("PayPal SDK not loaded.");
            return;
        }

        window.paypal
            .Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                                value: totalPrice.toFixed(2), 
                                currency_code: "GBP" 
                            }
                        }]
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    onSuccess(order);
                },
                onError: (err) => {
                    onError(err);
                }
            })
            .render(paypalButtons.current);
    }, [onSuccess, onError]);

    return <div ref={paypalButtons}></div>;
}

export default Payment;