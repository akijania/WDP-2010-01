import { shallow } from 'enzyme';
import React from 'react';

import ProductSearch from './ProductSearch';

describe('Component ProductSearch', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductSearch />);
    expect(component).toBeTruthy();
  });
});
