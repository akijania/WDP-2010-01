import { connect } from 'react-redux';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';
import { getViewport } from '../../../redux/viewportRedux';

import NewFurniture from './NewFurniture';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
  viewport: getViewport(state),
});

export default connect(mapStateToProps)(NewFurniture);
