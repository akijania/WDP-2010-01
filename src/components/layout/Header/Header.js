import React from 'react';

import CompanyClaim from '../CompanyClaim/CompanyClaimContainer';
import MenuBar from '../MenuBar/MenuBar';
import TopBar from '../TopBar/TopBar';

const Header = () => (
  <header>
    <TopBar />
    <CompanyClaim />
    <MenuBar />
  </header>
);

export default Header;
