import { shallow } from 'enzyme';
import React from 'react';

import ProductPage from './ProductPage';

describe('ProductPage', () => {
  it('renders without crashing', () => {
    shallow(<ProductPage />);
  });
});
