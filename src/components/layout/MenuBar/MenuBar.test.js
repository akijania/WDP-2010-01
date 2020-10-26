import { shallow } from 'enzyme';
import React from 'react';

import MenuBar from './MenuBar';

describe('Component MenuBar', () => {
  it('should render without crashing', () => {
    const component = shallow(<MenuBar />);
    expect(component).toBeTruthy();
  });
});
