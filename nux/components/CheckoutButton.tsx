import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

import stripeConfig from '../config/stripeConfig';

const stripePromise = loadStripe(stripeConfig.publicKey);



const CheckoutButton: React.FC = () => {
  async function handleClick(event) {
    const stripe = await stripePromise;

    const { error } = await stripe.redirectToCheckout({
      lineItems: [{price: 'price_1L2hqnLOa865kXy67yX1Irup', quantity: 1 }],
      mode: 'subscription',
      successUrl: `http://localhost:3000/success`,
      cancelUrl: 'http://localhost:3000/cancel',
    });

    if (error) {
      console.log(error);
    }
  }
  return (
    <button role="link" onClick={handleClick}>
      Assinar Agora
    </button>
  );
};

export default CheckoutButton;