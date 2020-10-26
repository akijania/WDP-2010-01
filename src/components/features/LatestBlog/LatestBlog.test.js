import { shallow } from 'enzyme';
import React from 'react';

import LatestBlog from './LatestBlog';

describe('Component LatestBlog', () => {
  it('should render without crashing', () => {
    const posts = [
      {
        id: 'aaa',
      },
    ];
    const component = shallow(<LatestBlog posts={posts} />);
    expect(component).toBeTruthy();
  });
});
