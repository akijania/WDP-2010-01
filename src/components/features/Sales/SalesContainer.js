import { connect } from 'react-redux';

import Sales from './Sales';

const mapStateToProps = state => ({
  sales: state.sales,
});

export default connect(mapStateToProps)(Sales);
