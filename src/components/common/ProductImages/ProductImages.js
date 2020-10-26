import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './ProductImages.module.scss';

const ProductImages = ({ images }) => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={`row ${styles.wrapper}`}>
          <div className={styles.arrow}>
            <FontAwesomeIcon className={styles.icon} icon={faAngleLeft} />
          </div>
          <div className={styles.brandBox}>
            {images.map(item => (
              <div key={item.id} className={styles.box}>
                <img src={item.image} alt={item.name} />
              </div>
            ))}
          </div>
          <div className={styles.arrow}>
            <FontAwesomeIcon className={styles.icon} icon={faAngleRight} />
          </div>
        </div>
      </div>
    </div>
  );
};
ProductImages.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

export default ProductImages;
