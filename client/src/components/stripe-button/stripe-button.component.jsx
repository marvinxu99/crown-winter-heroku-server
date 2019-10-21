import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import winter from '../../assets/images/winter-resize28.png';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_LBnp367Zb5XklDLhtXFg1cgr00SIM9ArGv';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe, 
        token 
      }
    }).then(response =>{
      alert('Payment successful')
    }).catch(error => {
      console.log('Payment error: ', JSON.parse(error));
      alert(
        'There was an issue with your payment. Please use the provided credit card.'
      );
    })
  }
  
  return (
    <StripeCheckout 
      label='Pay Now'
      name='Crown Clothing Ltd'
      billingAddress
      shippingAddress
      image={ winter }
      description={ `Your total is $${price}` }
      amount={ priceForStripe }
      panelLabel='Pay Now'
      token={ onToken }
      stripeKey={ publishableKey }
    />
  );
};

export default StripeCheckoutButton;
