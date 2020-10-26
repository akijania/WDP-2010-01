import { shallow } from 'enzyme';
import React from 'react';

import FeatureBoxes from './FeatureBoxes';

describe('Component FeatureBoxes', () => {
  it('should render without crashing', () => {
    const component = shallow(<FeatureBoxes />);
    expect(component).toBeTruthy();
  });
});
