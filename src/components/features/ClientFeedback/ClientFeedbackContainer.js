import { connect } from 'react-redux';

import ClientFeedback from './ClientFeedback';

const mapStateToProps = state => ({
  feedbacks: state.feedbacks,
});

export default connect(mapStateToProps)(ClientFeedback);
