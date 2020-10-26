import { shallow } from 'enzyme';
import React from 'react';

import ProductBox from './ProductBox';

const props = {
  id: 'aa',
  setCompare: () => {},
  count: 2,
  compare: { products: [{ id: '1' }, { id: '2' }] },
  addToFavourite: () => {},
  addToCart: () => {},
};

describe('Component ProductBox', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductBox {...props} />);
    expect(component).toBeTruthy();
  });
});
