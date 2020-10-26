import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';

import { useSlider } from '../../../hooks/useSlider';
import Button from '../../common/Button/Button';

import styles from './PromotedProduct.module.scss';

const PromotedProductSlider = ({ images, title, spanTitle, subTitle, button }) => {
  const { slider, prevSlide, nextSlide, currentSlide } = useSlider();
  return (
    <>
      <div className={styles.carousel}>
        <div className={styles.images} ref={slider}>
          {images.map((i, index) => (
            <div
              className={`${styles.image} ${
                currentSlide === index ? styles.fadeIn : styles.fadeOut
              }`}
              key={index}
            >
              <img src={images[index].image} alt={images[index].imageAlt} />
            </div>
          ))}
        </div>
        <div className={styles.description}>
          <h2>
            {title}
            <span>{` ${spanTitle}`}</span>
          </h2>
          <p>{subTitle}</p>
          <Button variant='big'>{button}</Button>
        </div>
      </div>
      <div className={styles.carouselButtonWrapper}>
        <div className='row'>
          <div className={`col ${styles.colLeft}`}>
            <span onClick={() => prevSlide()}>
              <div className={styles.carouselButton}>
                <FontAwesomeIcon className={styles.icon} icon={faChevronLeft} />
              </div>
            </span>
          </div>
          <div className={`col ${styles.colRight}`}>
            <span onClick={() => nextSlide()}>
              <div className={styles.carouselButton}>
                <FontAwesomeIcon className={styles.icon} icon={faChevronRight} />
              </div>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

PromotedProductSlider.propTypes = {
  title: PropTypes.string,
  spanTitle: PropTypes.string,
  subTitle: PropTypes.string,
  button: PropTypes.string,
  images: PropTypes.array.isRequired,
};

export default PromotedProductSlider;
