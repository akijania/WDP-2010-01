import PropTypes from 'prop-types';
import React from 'react';

import CartMini from '../../features/CartMini/CartMiniContainer';
import ViewportListener from '../../features/ViewportListener/ViewportListener';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const MainLayout = ({ children }) => (
  <div>
    <ViewportListener />
    <CartMini />
    <Header />
    {children}
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
