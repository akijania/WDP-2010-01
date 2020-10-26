import { connect } from 'react-redux';

import { getAllBrands } from '../../../redux/brandsRedux';
import { getViewport } from '../../../redux/viewportRedux';

import Brands from './Brands';

const mapStateToProps = state => ({
  brands: getAllBrands(state),
  viewport: getViewport(state),
});

export default connect(mapStateToProps)(Brands);
