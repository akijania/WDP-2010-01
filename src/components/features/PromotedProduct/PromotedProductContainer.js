import { connect } from 'react-redux';

import { getHotDeal } from '../../../redux/productsRedux.js';

import PromotedProduct from './PromotedProduct';

const mapStateToProps = state => {
  const promotedProduct = state.promotedProduct;

  return {
    promotedProduct,
    hotDeal: getHotDeal(state),
  };
};

export default connect(mapStateToProps)(PromotedProduct);
