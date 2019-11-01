import React from 'react';

import {
  OrdersPageContainer, 
  WinterImageContainer, 
  WinterImageSmall,
} from './orders.styles';

import winter1 from '../../assets/images/winter-winter.jpeg';

const OrdersPage = () => (
  <OrdersPageContainer>
    <h2>Thank you for your Orders:</h2>
    <p> You have ordered the following items [still under construction] </p>
    <p>order #1</p>
    <p>order #1</p>
    <p>order #2</p>
    
    <a style={{textDecoration: 'underline', marginBottom: '20px'}} href = 'https://www.npmjs.com/package/redux-thunk'>Link to Redux Thunk</a>

    <WinterImageContainer>
      <WinterImageSmall style={{ backgroundImage: `url(${winter1})` }}></WinterImageSmall>
    </WinterImageContainer>

  </OrdersPageContainer>
);

export default OrdersPage;