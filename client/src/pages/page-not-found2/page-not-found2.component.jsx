import React from 'react';

import {
  PageNotFoundOverlay,
  PageNotFoundImageContainer,
  PageNotFoundImageText,
  PageNotFoundHomeLink
} from './page-not-found2.styles';

const PageNotFound2 = () => (
  <PageNotFoundOverlay>
    <PageNotFoundImageContainer imageUrl='https://i.imgur.com/lKJiT77.png' />
    <PageNotFoundImageText>Ooops, the page is missing. The doggie was super hungry.</PageNotFoundImageText>
    <PageNotFoundHomeLink to='/'>
      Go back to home page
    </PageNotFoundHomeLink>
  </PageNotFoundOverlay>
);

export default PageNotFound2;
