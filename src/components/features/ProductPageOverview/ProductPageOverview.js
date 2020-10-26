import PropTypes from 'prop-types';
import React from 'react';

import styles from './ProductPageOverview.module.scss';

const ProductPageOverview = ({ description, availability, category }) => (
  <div>
    <div className={styles.overview}>
      <h5>Quick overview</h5>
      <p>{description}</p>
    </div>
    <div className={styles.line}></div>
    <div className={styles.overview}>
      <p>
        <span>Availability: </span>
        {availability}
      </p>
      <p>
        <span>Category: </span>
        {category}
      </p>
    </div>
  </div>
);

ProductPageOverview.propTypes = {
  description: PropTypes.string,
  availability: PropTypes.string,
  category: PropTypes.string,
};

export default ProductPageOverview;
