import React from 'react';
import { connect } from 'react-redux';

// If the compoenet is NOT rendered by React Router, then use HOC withRouter
// When a component is rendered by React Router, that component is passed three 
// different props: location, match, and history. You can use history.push() to
// redirect your page.
// https://tylermcginnis.com/react-router-programmatically-navigate/
import { withRouter } from 'react-router-dom'

import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import { clearCartAfterPayment } from '../../redux/cart/cart.actions';

import winter from '../../assets/images/winter-resize28.png';

const StripeCheckoutButton = ({ price, clearCartAfterPayment, history }) => {
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
      //alert('Payment successful. Thank you!');
      clearCartAfterPayment();      
      
      history.push('/orders');

    }).catch(error => {
      //console.log('Payment error: ', JSON.parse(error));
      console.log('Payment error: ', error);
      alert(
        'There was an issue with your payment. Please use the provided credit card.'
      );
    })
  }
  
  return (
    <StripeCheckout 
      label='Pay Now'
      name='Winter Saga Ltd'
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

const mapDispatchToProps = dispatch => ({
  clearCartAfterPayment: () => dispatch(clearCartAfterPayment()),
});

export default withRouter(
  connect(null, mapDispatchToProps)(StripeCheckoutButton)
);
