import { connect } from 'react-redux';

import { getAllPosts } from '../../../redux/postsRedux';

import LatestBlog from './LatestBlog';

const mapStateToProps = state => ({
  posts: getAllPosts(state),
});

export default connect(mapStateToProps)(LatestBlog);
