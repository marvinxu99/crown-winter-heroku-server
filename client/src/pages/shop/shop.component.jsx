import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import Spinner from '../../components/spinner/spinner.component';

import PageNotFound from '../page-not-found/page-not-found.component';

const CollectionsOverviewContainer = lazy(() => 
  import('../../components/collections-overview/collections-overview.container'));
const CollectionPageContainer = lazy(() => import('../collection/collection.container'));


const ShopPage = ({ fetchCollectionsStart, match }) => { 
  // The following useEffect mimics componentDidMount method
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  if (process.env.NODE_ENV === 'development') console.log(match);

  return(
    <div>
      <Switch>
        <Suspense fallback={ <Spinner /> }>
          <Route 
            exact path={`${match.path}`} 
            component={ CollectionsOverviewContainer } 
          />
          <Route 
            path={`${match.path}/:collectionId`} 
            component={ CollectionPageContainer } 
          />
        </Suspense>
        <Route component={PageNotFound} /> 
      </Switch>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
