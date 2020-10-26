import PropTypes from 'prop-types';
import React from 'react';

import styles from './Sales.module.scss';

const Sales = ({ sales }) => {
  const { boxOne, boxTwo, boxThree } = sales;

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={`col-12 col-md-6 ${styles.big}`}>
            <div className={`${styles.wrapper} ${styles.box}`}>
              <img src={boxOne.image} alt={boxOne.category} />
              <div className={styles.descriptionOne}>
                <h2 className={styles.name}>{boxOne.name}</h2>
                <h2 className={styles.category}>{boxOne.category}</h2>
                <h2 className={styles.sale}>{boxOne.sale}</h2>
              </div>
            </div>
          </div>
          <div className={`col-12 col-md-6 ${styles.big}`}>
            <div className={`${styles.small} ${styles.wrapper}`}>
              <img src={boxTwo.image} alt={boxTwo.category} />
              <div className={styles.descriptionTwo}>
                <h2 className={styles.mainTitle}>
                  <span className={styles.bold}>{boxTwo.name} </span>
                  <span className={styles.thin}>{boxTwo.category}</span>
                </h2>
                <h2 className={styles.desc}>{boxTwo.title}</h2>
                <h2 className={styles.sale}>{boxTwo.price}</h2>
              </div>
            </div>
            <div className={`${styles.small} ${styles.wrapper}`}>
              <img src={boxThree.image} alt={boxThree.category} />
              <div className={styles.descriptionThree}>
                <h2 className={styles.mainTitle}>
                  {boxThree.title}
                  <span className={styles.thin}>{boxThree.subtitle}</span>
                </h2>
                <h2 className={styles.desc}>{boxThree.description}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Sales.propTypes = {
  sales: PropTypes.object,
};

export default Sales;
