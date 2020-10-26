import { faHeart } from '@fortawesome/free-regular-svg-icons';
import {
  faEnvelope,
  faExchangeAlt,
  faMinus,
  faPlus,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../common/Button/Button';

import styles from './ProductPageActions.module.scss';

const ProductPageActions = ({
  id,
  image,
  setCompare,
  count,
  compare,
  addToFavourite,
  heart,
}) => {
  const isProductAddedToCompare =
    compare &&
    compare.products &&
    compare.products.reduce(
      (accumulator, product) => accumulator || product.id === id,
      false
    );

  const compareHandler = event => {
    event.preventDefault();
    const maxProductsToCompare = 4;
    if (isProductAddedToCompare !== true) {
      count < maxProductsToCompare
        ? setCompare({ id, image })
        : alert(`You can compare maximum of ${maxProductsToCompare} products!`);
    }
  };

  const addToFavouriteHandler = event => {
    event.preventDefault();
    addToFavourite(id);
  };

  return (
    <div className={styles.actions}>
      <div className={styles.buttons}>
        <Button variant='white'>
          <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
        </Button>
        <Button
          className={heart ? styles.heart : ''}
          variant='white'
          onClick={addToFavouriteHandler}
        >
          <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
        </Button>
        <Button
          className={isProductAddedToCompare ? styles.productIsCompared : ''}
          variant='white'
          onClick={compareHandler}
        >
          <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
        </Button>
        <Button variant='white'>
          <FontAwesomeIcon icon={faEnvelope}>Post</FontAwesomeIcon>
        </Button>
      </div>
      <div className={styles.buttons}>
        <p>Quantity:</p>
        <input type='number' placeholder='1' step='1'></input>
        <Button variant='quantity'>
          <FontAwesomeIcon icon={faMinus}>Minus</FontAwesomeIcon>
        </Button>
        <Button variant='quantity'>
          <FontAwesomeIcon icon={faPlus}>Plus</FontAwesomeIcon>
        </Button>
      </div>
    </div>
  );
};

ProductPageActions.propTypes = {
  id: PropTypes.string,
  heart: PropTypes.bool,
  image: PropTypes.string,
  setCompare: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  compare: PropTypes.object.isRequired,
  addToFavourite: PropTypes.func.isRequired,
};

export default ProductPageActions;
