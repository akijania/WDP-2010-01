import { shallow } from 'enzyme';
import React from 'react';

import PromotedProductBox from './PromotedProductBox';

describe('Component PromotedProductBox', () => {
  it('should render without crashing', () => {
    const component = shallow(<PromotedProductBox />);
    expect(component).toBeTruthy();
  });
});
