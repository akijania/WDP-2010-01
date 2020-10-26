import { connect } from 'react-redux';

import { toggleCart, getCount } from '../../../redux/cartRedux';

import CompanyClaim from './CompanyClaim';

const mapStateToProps = state => ({
  cartCount: getCount(state),
  isOpen: state.cart.isOpen,
});

const mapDispatchToProps = dispatch => ({
  toggleCart: value => dispatch(toggleCart(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyClaim);
