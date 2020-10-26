import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './ProductSearch.module.scss';

const ProductSearch = id => (
  <form action='' className={styles.root}>
    <div className={styles.category}>
      <FontAwesomeIcon className={styles.icon} icon={faListUl} />
      <ul className={styles.list}>
        <li className={styles.listCategory}>
          <span value=''>Select a category</span>
          <ul className={styles.listCategoryItems}>
            <li>
              <a href='/#' value=''>
                HOME
              </a>
            </li>
            <li>
              <a href='/#' value=''>
                FURNITURE
              </a>
            </li>
            <li>
              <a href='/#' value=''>
                CHAIR
              </a>
            </li>
            <li>
              <a href='/#' value=''>
                TABLE
              </a>
            </li>
            <li>
              <a href='/#' value=''>
                SOFA
              </a>
            </li>
            <li>
              <a href='/#' value=''>
                BEDROOM
              </a>
            </li>
            <li>
              <a href='/#' value=''>
                BLOG
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
    </div>
    <div className={styles.searchField}>
      <input placeholder='Search products...' type='text' />
      <button>
        <FontAwesomeIcon className={styles.icon} icon={faSearch} />
      </button>
    </div>
  </form>
);

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
