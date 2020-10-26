import { connect } from 'react-redux';

import { setCompare, getCount } from '../../../redux/compareRedux';

import PromotedProductBox from './PromotedProductBox';

const mapStateToProps = state => ({
  count: getCount(state),
  compare: state.compare,
});

const mapDispatchToProps = dispatch => ({
  setCompare: value => dispatch(setCompare(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PromotedProductBox);
