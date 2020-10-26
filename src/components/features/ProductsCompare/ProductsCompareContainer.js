import { connect } from 'react-redux';

import { unsetCompare } from '../../../redux/compareRedux';

import ProductsCompare from './ProductsCompare';

const mapStateToProps = state => ({
  compare: state.compare,
});

const mapDispatchToProps = dispatch => ({
  unsetCompare: value => dispatch(unsetCompare(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsCompare);
