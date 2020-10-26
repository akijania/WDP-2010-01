import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../common/Button/Button';
import ProductImages from '../../common/ProductImages/ProductImages';
import ProductPageActions from '../ProductPageActions/ProductPageActions';
import ProductPageHeader from '../ProductPageHeader/ProductPageHeader';
import ProductPageOverview from '../ProductPageOverview/ProductPageOverview';
import ProductPagePrice from '../ProductPagePrice/ProductPagePrice';
import ProductPageSocialMedia from '../ProductPageSocialMedia/ProductPageSocialMedia';

import styles from './ProductPageMainPage.module.scss';

const ProductPageMainPage = ({
  id,
  name,
  image,
  price,
  oldPrice,
  stars,
  isStarred,
  setCompare,
  count,
  compare,
  addToFavourite,
  heart,
  description,
  availability,
  category,
  images,
}) => (
  <div className={`container ${styles.box}`}>
    <div className={styles.product}>
      <div className='row'>
        <div className='col-sm-12 col-md-5'>
          <div className={styles.photo}>
            <img src={image} alt={name} />
          </div>
          {typeof images == 'undefined' ? '' : <ProductImages images={images} />}
        </div>
        <div className='col-sm-12 col-md-7'>
          <div className='row'>
            <div className={`col-9 ${styles.content}`}>
              <ProductPageHeader
                id={id}
                name={name}
                stars={stars}
                isStarred={isStarred}
              />
            </div>
            <div className={`col-3 ${styles.changePage}`}>
              <Button variant='white'>
                <FontAwesomeIcon icon={faAngleLeft}>Left</FontAwesomeIcon>
              </Button>
              <Button variant='white'>
                <FontAwesomeIcon icon={faAngleRight}>Right</FontAwesomeIcon>
              </Button>
            </div>
          </div>
          <div className={styles.line}></div>
          <ProductPagePrice price={price} oldPrice={oldPrice} />
          <div className={styles.line}></div>
          <ProductPageActions
            id={id}
            image={image}
            setCompare={setCompare}
            count={count}
            compare={compare}
            addToFavourite={addToFavourite}
            heart={heart}
          />
          <div className={styles.line}></div>
          <ProductPageOverview
            description={description}
            availability={availability}
            category={category}
          />
          <div className={styles.line}></div>
          <ProductPageSocialMedia />
        </div>
      </div>
    </div>
  </div>
);

ProductPageMainPage.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.string,
  promo: PropTypes.string,
  stars: PropTypes.number,
  isStarred: PropTypes.bool,
  heart: PropTypes.bool,
  image: PropTypes.string,
  setCompare: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  compare: PropTypes.object.isRequired,
  addToFavourite: PropTypes.func.isRequired,
  description: PropTypes.string,
  availability: PropTypes.string,
  category: PropTypes.string,
  images: PropTypes.array,
};

export default ProductPageMainPage;
