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

    <div>
      <h2>Quotes</h2>
      <a href="https://www.youtube.com/watch?v=UvEiSa6_EPA" 
        target='_blank' rel='noopener noreferrer'>
        Nobody is smarter than you
      </a> 
      <br />
      <a href="https://www.youtube.com/watch?v=zkTf0LmDqKI" 
        target='_blank' rel='noopener noreferrer' >
        Ask and you shall receive; networking is crucial in business as relationships are more important than product knowledge:
      </a> 
    </div>
    
  </AdminPageContainer>
);

export default AdminPage;