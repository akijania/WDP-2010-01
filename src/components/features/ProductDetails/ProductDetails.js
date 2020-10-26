import PropTypes from 'prop-types';
import React from 'react';

import ProductRating from '../ProductRating/ProductRatingContainer';

import styles from './ProductDetails.module.scss';

const ProductDetails = ({ id, stars, isStarred }) => {
  return (
    <div className='container'>
      <div className={`row ${styles.boxsecond}`}>
        <div className='col'>
          <nav className={styles.navigation}>
            <ul>
              <li>
                <button>Description</button>
              </li>
              <li>
                <button className={styles.second}>Reviews(0)</button>
              </li>
              <li>
                <button>Specification</button>
              </li>
              <li>
                <button>Custom tab</button>
              </li>
            </ul>
          </nav>
          <div className={styles.reviewBox}>
            <p>There are no reviews for this product.</p>
            <p>Add a review</p>
            <p>Your Rating</p>

            <div className={'d-flex'}>
              <span>Bad</span>
              <div className={`ml-4 mr-4 ${styles.stars}`}>
                <ProductRating
                  id={id}
                  stars={stars}
                  isStarred={isStarred}
                  className={styles.star}
                />
              </div>
              <span>Good</span>
            </div>
            <form className={styles.formReview}>
              <p>Yor review</p>
              <div className={styles.textareaWrapper}>
                <textarea className={`${styles.inputReview}`} rows='6'></textarea>
              </div>
              <div className={`${styles.spacing} row`}>
                <div className={'col-xs-12 col-md-5'}>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Name*'
                    required
                    className={'col-12 p-2'}
                  />
                </div>
                <div className={'col-xs-12 col-md-5'}>
                  <input
                    type='text'
                    name='mail'
                    id='mail'
                    placeholder='Email*'
                    required
                    className={'col-12 p-2'}
                  />
                </div>
                <div className={'col-md-2'}>
                  <button className={`${styles.buttonContinue} p-2`} type='submit'>
                    Continue
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductDetails.propTypes = {
  id: PropTypes.string.isRequired,
  stars: PropTypes.number,
  isStarred: PropTypes.bool,
};
export default ProductDetails;
