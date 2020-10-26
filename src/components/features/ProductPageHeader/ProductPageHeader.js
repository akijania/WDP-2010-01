import PropTypes from 'prop-types';
import React from 'react';

import ProductRating from '../ProductRating/ProductRatingContainer';

import styles from './ProductPageHeader.module.scss';

const ProductPageHeader = ({ name, id, stars, isStarred }) => (
  <div className={styles.content}>
    <h5>{name}</h5>
    <div className={styles.stars}>
      <ProductRating
        id={id}
        stars={stars}
        isStarred={isStarred}
        className={styles.star}
      />
      <p>(0 reviews) | Add your review</p>
    </div>
  </div>
);

ProductPageHeader.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string.isRequired,
  stars: PropTypes.number,
  isStarred: PropTypes.bool,
};

export default ProductPageHeader;
