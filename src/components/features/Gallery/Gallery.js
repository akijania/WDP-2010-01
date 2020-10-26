import { faHeart, faEye } from '@fortawesome/free-regular-svg-icons';
import {
  faExchangeAlt,
  faShoppingBasket,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Button from '../../common/Button/Button';
import ProductRating from '../ProductRating/ProductRating';

import styles from './Gallery.module.scss';

const Gallery = props => {
  const { galleryTabs: categories, galleryPromotedProduct } = props;

  const defaultTab = categories.find(category => category.name === 'Top seller').id;

  const [activeCategory, setActiveCategory] = useState(defaultTab);

  const [pictureNumber, setPictureNumber] = useState(0);

  const [slideNumber, setSlideNumber] = useState(0);

  const categoryProducts = props[activeCategory];

  const handleCategoryChange = item => {
    setActiveCategory(item);
  };

  const handleProductChange = productId => {
    let productNo = 0;
    categoryProducts.forEach(function(element, index) {
      if (element.id === productId) {
        productNo = index;
      }
    });
    setPictureNumber(productNo);
  };

  const handleSlideChangeRight = event => {
    event.preventDefault();
    let newSlideNumber = slideNumber + 6;
    setSlideNumber(newSlideNumber);
  };

  const handleSlideChangeLeft = event => {
    event.preventDefault();
    let newSlideNumber = slideNumber - 6;
    setSlideNumber(newSlideNumber);
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={'col-6 ' + styles.leftPanel}>
            <div className={styles.heading}>
              <h3>Furniture gallery</h3>
            </div>
            <div className={styles.menu}>
              <ul>
                {categories.map(item => (
                  <li key={item.id}>
                    <button
                      className={item.id === activeCategory ? styles.active : ''}
                      onClick={() => handleCategoryChange(item.id)}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {categoryProducts.slice(pictureNumber, pictureNumber + 1).map(product => (
              <div key={product.id} className={styles.product}>
                <div className={styles.photo}>
                  <div className={styles.fadeIn}>
                    <img alt={product.name} src={product.image} />
                  </div>
                </div>
                <div className={styles.buttons}>
                  <div className={styles.buttonWrapper}>
                    <Button className={styles.button} variant='outline'>
                      <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                    </Button>
                    <span>Add To Wishlist</span>
                  </div>
                  <div className={styles.buttonWrapper}>
                    <Button className={styles.button} variant='outline'>
                      <FontAwesomeIcon icon={faExchangeAlt}></FontAwesomeIcon>
                    </Button>
                    <span>Add To Compare</span>
                  </div>
                  <div className={styles.buttonWrapper}>
                    <Button className={styles.button} variant='outline'>
                      <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                    </Button>
                    <span>Check The Product</span>
                  </div>
                  <div className={styles.buttonWrapper}>
                    <Button className={styles.button} variant='outline'>
                      <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
                    </Button>
                    <span>Add To Cart</span>
                  </div>
                </div>
                <div className={styles.priceWrapper}>
                  <div className={styles.price}>$ {product.price}.00</div>
                  <div className={styles.oldPrice}>
                    {product.oldPrice && <span>$ {product.oldPrice}.00</span>}
                  </div>
                </div>
                <div className={styles.stars}>
                  <h6>{product.name}</h6>
                  <ProductRating
                    id={product.id}
                    stars={product.stars}
                    isStarred={true}
                  />
                </div>
              </div>
            ))}
            <div className={styles.miniatures}>
              <Button
                className={styles.button}
                variant='small'
                onClick={handleSlideChangeLeft}
              >
                <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
              </Button>
              {categoryProducts.slice(slideNumber, slideNumber + 6).map(product => (
                <div
                  key={product.id}
                  className={styles.imgWrapper}
                  onClick={() => handleProductChange(product.id)}
                >
                  <img alt={product.name} src={product.image} />
                </div>
              ))}
              <Button
                className={styles.button}
                variant='small'
                onClick={handleSlideChangeRight}
              >
                <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
              </Button>
            </div>
          </div>
          <div className={'col-6 ' + styles.rightPanel}>
            <div className={styles.photo}>
              <img src={galleryPromotedProduct.src} alt={galleryPromotedProduct.alt} />
            </div>
            <div className={styles.content}>
              <div className={styles.contentPrice}>
                from <span>$50.80</span>
              </div>
              <h2>Bedroom Bed</h2>
              <div className={styles.button}>
                <Button variant='green'>shop now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Gallery.propTypes = {
  galleryPromotedProduct: PropTypes.object,
  galleryTabs: PropTypes.array,
};

export default Gallery;
