import { shallow } from 'enzyme';
import React from 'react';

import FeatureBox from './FeatureBox';

describe('Component FeatureBox', () => {
  it('should render without crashing', () => {
    const component = shallow(<FeatureBox />);
    expect(component).toBeTruthy();
  });
});
