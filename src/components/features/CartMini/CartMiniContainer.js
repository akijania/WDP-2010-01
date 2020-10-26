import { connect } from 'react-redux';

import {
  addToCart,
  removeFromCart,
  toggleCart,
  changeQuantity,
  getCount,
  getAll,
} from '../../../redux/cartRedux';

import CartMini from './CartMini';

const mapStateToProps = state => ({
  products: getAll(state),
  cartCount: getCount(state),
  isOpen: state.cart.isOpen,
  totalPrice: state.cart.totalPrice,
});

const mapDispatchToProps = dispatch => ({
  addToCart: value => dispatch(addToCart(value)),
  removeFromCart: value => dispatch(removeFromCart(value)),
  toggleCart: value => dispatch(toggleCart(value)),
  changeQuantity: value => dispatch(changeQuantity(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartMini);
