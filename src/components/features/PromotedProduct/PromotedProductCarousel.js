import PropTypes from 'prop-types';
import React from 'react';

import { useSlider } from '../../../hooks/useSlider';
import PromotedProductBox from '../../common/PromotedProductBox/PromotedProductBoxContainer';

import styles from './PromotedProduct.module.scss';

const PromotedProductCarousel = ({ hotDeal }) => {
  const { slider, setSlide, setIsPause, currentSlide } = useSlider(3, 10);

  return (
    <>
      <div className={styles.hotDeals}>
        <div className='row'>
          <div className='col-8'>
            <p>Hot deals</p>
          </div>
          <div className={`col-4 ${styles.dots}`}>
            <ul>
              {hotDeal.map((i, index) => (
                <li key={index}>
                  <span
                    className={currentSlide === index ? styles.active : ''}
                    onClick={() => setSlide(index)}
                  ></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.slider} ref={slider}>
        {hotDeal.map((i, index) => (
          <div
            onMouseLeave={() => {
              setIsPause(false);
            }}
            onMouseOver={() => {
              setIsPause(true);
            }}
            className={`${styles.slide} ${
              currentSlide === index ? styles.fadeIn : styles.fadeOut
            }`}
            key={index}
          >
            <PromotedProductBox {...hotDeal[index]} />
          </div>
        ))}
      </div>
    </>
  );
};

PromotedProductCarousel.propTypes = {
  hotDeal: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
};

export default PromotedProductCarousel;
