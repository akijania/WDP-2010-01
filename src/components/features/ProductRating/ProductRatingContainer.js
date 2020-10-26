import { connect } from 'react-redux';

import { setStars } from '../../../redux/productsRedux';

import ProductRating from './ProductRating';

const mapDispatchToProps = dispatch => ({
  setStars: value => dispatch(setStars(value)),
});

export default connect(null, mapDispatchToProps)(ProductRating);
