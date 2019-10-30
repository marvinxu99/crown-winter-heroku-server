import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import SignedInUser from './components/signed-in-user/signed-in-user.component';

import { selectUserCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import { GlobalStyle } from './global.styles';

import { ReactComponent as LogoWinter } from './assets/images/winter-resized.svg';

//import PageNotFound from './pages/page-not-found/page-not-found.component';
import { default as PageNotFound } from './pages/page-not-found2/page-not-found2.component';

//import HomePage from './pages/homepage/homepage.component';
const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const AdminPage = lazy(() => import('./pages/admin-page/admin-page.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const ContactPage = lazy(() => import('./pages/contact/contact.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const ReduxFlowPage = lazy(() => import('./pages/redux-flow/redux-flow.component'));


const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  
  return (
    <div>
      <GlobalStyle />
      <Header />
      <SignedInUser />      
      <ErrorBoundary>
        <Switch>
          <Suspense fallback={ <Spinner /> }>
            <Route exact path='/' component={ HomePage } />
            <Route path='/shop' component={ ShopPage }  />
            <Route path='/home' render={ () => <Redirect to='/' /> } />
            <Route path='/admin' component={ AdminPage } />
            <Route path='/redux' component={ ReduxFlowPage } />
            <Route path='/checkout' component={ CheckoutPage } />
            <Route path='/contact' component={ ContactPage } />
            <Route path='/signin' 
              render={ () => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />) } 
            />
          </Suspense>
          <Route component={ PageNotFound } />
        </Switch>
      </ErrorBoundary>

      <div className='winter-beautiful'>
        <LogoWinter />
        <a href='https://css-tricks.com/using-svg/' target='_blank' rel='noopener noreferrer'>
          Winter Beautiful. <br />
          Regular anchor tags work great.
        </a>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectUserCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
