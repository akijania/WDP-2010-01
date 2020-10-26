import { faHeart } from '@fortawesome/free-regular-svg-icons';
import {
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';

import ProductRating from '../../features/ProductRating/ProductRatingContainer';
import Button from '../Button/Button';
import PromotedProductTimeCounter from '../PromotedProductTimeCounter/PromotedProductTimeCounter';

import styles from './PromotedProductBox.module.scss';

const PromotedProductBox = ({
  id,
  name,
  image,
  price,
  oldPrice,
  promo,
  stars,
  setCompare,
  count,
  compare,
  heart,
  isStarred,
  promotedProductEndTime,
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

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <img src={image} alt={name} />
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={styles.promoCounter}>
          <PromotedProductTimeCounter endTime={promotedProductEndTime} />
        </div>
        <div className={styles.buttons}>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <div className={styles.stars}>
          <ProductRating id={id} stars={stars} isStarred={isStarred} />
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button variant='outline'>
            <FontAwesomeIcon icon={faEye}>View more</FontAwesomeIcon>
          </Button>
          <Button variant='outline'>
            <FontAwesomeIcon icon={faHeart} className={heart ? styles.heart : ''}>
              Favorite
            </FontAwesomeIcon>
          </Button>
          <Button
            className={isProductAddedToCompare ? styles.productIsCompared : ''}
            variant='outline'
            onClick={compareHandler}
          >
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.oldPrice}>{oldPrice}</div>
        <div className={styles.price}>
          <Button noHover variant='small'>
            $ {price}
          </Button>
        </div>
      </div>
    </div>
  );
};

PromotedProductBox.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.string,
  promo: PropTypes.string,
  stars: PropTypes.number,
  heart: PropTypes.bool,
  addCompare: PropTypes.bool,
  image: PropTypes.string,
  setCompare: PropTypes.func,
  count: PropTypes.number,
  compare: PropTypes.object,
  isStarred: PropTypes.bool,
  promotedProductEndTime: PropTypes.string,
};

export default PromotedProductBox;
