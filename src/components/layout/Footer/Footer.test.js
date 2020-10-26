import { shallow } from 'enzyme';
import React from 'react';

import Footer from './Footer';

describe('Component Footer', () => {
  it('should render without crashing', () => {
    const component = shallow(<Footer />);
    expect(component).toBeTruthy();
  });
});
