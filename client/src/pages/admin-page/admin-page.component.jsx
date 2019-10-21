import React from 'react';

import {
    AdminPageContainer, 
    AdminPageWarning, 
    WinterImageContainer, 
    WinterImageSmall,
    LoadShopDataDiv
  } from './admin-page.styles';

import TestEffects from '../../effects/test-effects/test-effects.components';

import winter1 from '../../assets/images/winter-winter.jpeg';
import LoadShopData from '../../components/load-shop-data/load-shop-data.component';

const AdminPage = () => (
  <AdminPageContainer>
    <AdminPageWarning>
      This page is intended for supervisors to perform administrative tasks. <br />
      USE WITH CAUTION.
    </AdminPageWarning>
    <LoadShopDataDiv>
      <LoadShopData />
    </LoadShopDataDiv>
    <div>
      <h1>Custom Effects Example: useFetch()</h1>
      <TestEffects />
    </div>

    <WinterImageContainer>
      <WinterImageSmall style={{ backgroundImage: `url(${winter1})` }}></WinterImageSmall>
    </WinterImageContainer>

  </AdminPageContainer>
);

export default AdminPage;