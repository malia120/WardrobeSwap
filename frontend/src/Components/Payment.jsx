import React, { useEffect, useRef } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

/**
 * Component for processing payments via PayPal.
 * 
 * This component integrates with the PayPal SDK to provide a payment experience.
 * It renders PayPal buttons and handles the creation and capture of payment orders.
 * 
 * @component
 * @param {Object} props - The props passed to the component.
 * @param {number} props.totalPrice - The total price of the order to be paid.
 * @param {Function} props.onSuccess - A callback function to be called upon successful payment.
 * @param {Function} props.onError - A callback function to be called upon payment error.
 * @returns {JSX.Element} The JSX representation of the Payment component.
 */

function Payment({ totalPrice, onSuccess, onError }) {
    const paypalButtons = useRef();

    // Check if PayPal SDK is loaded

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
    }, [totalPrice, onSuccess, onError]);

    return <div ref={paypalButtons}></div>;
}

export default Payment;