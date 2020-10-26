import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterByCategory.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const FilterByCategory = ({ numberOfProductsByCategory, activeCategory }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>
        <span>FILTER BY CATEGORIES</span>
      </p>
      <div className={styles.borderLine}>
        {numberOfProductsByCategory.map(({ name, quantity, id }, index) => (
          <div key={index}>
            {activeCategory === id ? (
              <p className={styles.textWrapper}>
                <span className={styles.activeText}>
                  <FontAwesomeIcon className={styles.icon} icon={faChevronRight} />
                  {name}
                </span>
                <span className={styles.categoriesCircleActive}>{quantity}</span>
              </p>
            ) : (
              <p className={styles.textWrapper}>
                <span className={styles.ordinaryText}>
                  <FontAwesomeIcon className={styles.icon} icon={faChevronRight} />
                  {name}
                </span>
                <span className={styles.categoriesCircle}>{quantity}</span>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

FilterByCategory.propTypes = {
  numberOfProductsByCategory: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      quantity: PropTypes.number,
      name: PropTypes.string,
    })
  ),
  activeCategory: PropTypes.string.isRequired,
};

export default FilterByCategory;
