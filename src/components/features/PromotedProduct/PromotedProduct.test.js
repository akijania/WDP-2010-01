import { shallow } from 'enzyme';
import React from 'react';

import PromotedProduct from './PromotedProduct';

describe('Component PromotedProduct', () => {
  it('should render without crashing', () => {
    const image = [
      {
        image: 'abc',
        imageAlt: 'abc',
      },
    ];
    const products = [
      {
        id: 'abc',
      },
    ];
    const component = shallow(<PromotedProduct images={image} hotDeal={products} />);
    expect(component).toBeTruthy();
  });
});
