import React from 'react';

import {
    AdminPageContainer, 
    AdminPageWarning, 
    WinterImageContainer, 
    WinterImageSmall,
    LoadShopDataDiv,
    ButtonContainer,
    TestButton1,
    TestButton2
  } from './admin-page.styles';

//import TestEffects from '../../effects/test-effects/test-effects.components';

import winter1 from '../../assets/images/winter-winter.jpeg';
import LoadShopData from '../../components/load-shop-data/load-shop-data.component';

import { 
  loadTestCityData, 
  getAllDocsFromCollection,
  getMultiDocsFromCollection 
} from '../../firebase/test-cities.utils';

import {
  WarningPopup,
  InfoPopup
 } from '../../agnostics/components/menu-and-popup/popups-component'

const AdminPage = () => (
  <AdminPageContainer>
    <AdminPageWarning>
      This page is intended for supervisors to perform administrative tasks. <br />
      USE WITH CAUTION.
    </AdminPageWarning>
    <LoadShopDataDiv>
      <LoadShopData />
    </LoadShopDataDiv>

    <WinterImageContainer>
      <WinterImageSmall style={{ backgroundImage: `url(${winter1})` }}></WinterImageSmall>
    </WinterImageContainer>

    <ButtonContainer>
      <TestButton1 
        onClick={ loadTestCityData } 
        disabled 
        title='Please do not click me. If you do, I will just ignore you'
      >
          Load Cities
      </TestButton1>
      
      <TestButton1 
        onClick={ getAllDocsFromCollection }
        title="Welcome to click me."
      >
        Get All Docs
      </TestButton1>
      
      <TestButton1 
        onClick={ getMultiDocsFromCollection }
        title="Welcome to click me."
      >
        Get Multi Docs
      </TestButton1>

      <TestButton2 
        onDoubleClick={ () => alert("you double clicked me.") }
        title="Welcome to click me."
      >
        Do Nothing
      </TestButton2>

    </ButtonContainer>

    <WarningPopup content="WARNING WARNING" /> 
    <br />
    <InfoPopup content="information information" />

  </AdminPageContainer>
);

export default AdminPage;