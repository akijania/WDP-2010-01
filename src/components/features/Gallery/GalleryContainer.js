import { connect } from 'react-redux';

import {
  getGalleryTabs,
  getGalleryPromotedProduct,
  getFeatured,
  getTopSeller,
  getSalesOff,
  getTopRated,
} from '../../../redux/galleryRedux';

import Gallery from './Gallery';

const mapStateToProps = state => ({
  featured: getFeatured(state),
  topSeller: getTopSeller(state),
  saleOff: getSalesOff(state),
  topRated: getTopRated(state),
  galleryTabs: getGalleryTabs(state),
  galleryPromotedProduct: getGalleryPromotedProduct(state),
});

export default connect(mapStateToProps)(Gallery);
