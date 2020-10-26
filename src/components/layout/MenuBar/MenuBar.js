import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';

const MenuBar = ({ children }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row align-items-center'>
        <div className='col'>
          <div className='productSearchWrapper'>
            <ProductSearch />
          </div>
        </div>
        <input type='checkbox' id='hamburger' className={styles.hamburger}></input>
        <label htmlFor='hamburger' className={styles.hamburger_label}>
          <FontAwesomeIcon className={styles.icon} icon={faBars} />
        </label>

        <div className={'col-md-12 col-lg-7 ' + styles.menu}>
          <ul>
            <li>
              <a href='/#' className={styles.active}>
                Home
              </a>
            </li>
            <li>
              <Link exact to={'/shop/furniture'}>
                Furniture
              </Link>
            </li>
            <li>
              <Link exact to={'/shop/chair'}>
                Chair
              </Link>
            </li>
            <li>
              <Link exact to={'/shop/table'}>
                Table
              </Link>
            </li>
            <li>
              <Link exact to={'/shop/sofa'}>
                Sofa
              </Link>
            </li>
            <li>
              <Link exact to={'/shop/bedroom'}>
                Bedroom
              </Link>
            </li>
            <li>
              <a href='/#'>Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
