import { faExchangeAlt, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../common/Button/Button';

import styles from './ProductsCompare.module.scss';

const ProductsCompare = ({ compare, unsetCompare }) => {
  const products = compare && compare.products;

  if (products && products.length > 0) {
    return (
      <div className={styles.container}>
        <h3>Product comparison</h3>
        <div className={styles.thumbs}>
          {products &&
            products.map(product => (
              <div
                className={styles.thumb}
                key={product.id}
                onClick={() => unsetCompare(product.id)}
              >
                <div className={styles.close}>
                  <FontAwesomeIcon icon={faWindowClose}></FontAwesomeIcon>
                </div>
                <div className={styles.image}>
                  <img src={product.image} alt='' />
                </div>
                <div className={styles.button}>
                  <Button variant='small'>
                    <FontAwesomeIcon icon={faExchangeAlt}>
                      Add to compare
                    </FontAwesomeIcon>
                  </Button>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

ProductsCompare.propTypes = {
  compare: PropTypes.object.isRequired,
  unsetCompare: PropTypes.func.isRequired,
};

export default ProductsCompare;
