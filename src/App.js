import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import './styles/bootstrap.scss';
import './styles/global.scss';
import MainLayout from './components/layout/MainLayout/MainLayout';
import BlogArticle from './components/views/BlogArticle/BlogArticle';
import Homepage from './components/views/Homepage/Homepage';
import NotFound from './components/views/PageNotFound/PageNotFound';
import ProductList from './components/views/ProductList/ProductList';
import ProductPage from './components/views/ProductPage/ProductPageContainer';
import store, { persistor } from './redux/store';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path={'/'} component={Homepage} />
            <Route exact path={'/shop/:categoryId'} component={ProductList} />
            <Route exact path={'/product/:productId'} component={ProductPage} />
            <Route exact path={'/blog/:blogId'} component={BlogArticle} />
            <Route path='*' component={NotFound} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
export default App;
