import { shallow } from 'enzyme';
import React from 'react';

import Button from './Button';

describe('Component Button', () => {
  it('should render without crashing', () => {
    const component = shallow(<Button />);
    expect(component).toBeTruthy();
  });
});
