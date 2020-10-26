import { connect } from 'react-redux';
import {
  numberOfProductsByCategory,
  getActiveFilterCategory,
} from '../../../redux/categoriesRedux';
import FilterByCategory from './FilterByCategory';

const mapStateToProps = state => ({
  numberOfProductsByCategory: numberOfProductsByCategory(state),
  activeCategory: getActiveFilterCategory(state),
});

export default connect(mapStateToProps)(FilterByCategory);
