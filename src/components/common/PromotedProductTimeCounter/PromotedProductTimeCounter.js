import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import styles from './../PromotedProductBox/PromotedProductBox.module.scss';

const PromotedProductTimeCounter = ({ endTime }) => {
  const productEndTime = new Date(endTime);

  const [timer, setTimer] = useState({
    sec: 0,
    min: 0,
    hours: 0,
    days: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      const diff = productEndTime - currentTime;
      setTimer({
        timeDiff: diff,
        sec: Math.floor(diff / 1000) % 60,
        min: Math.floor(diff / (60 * 1000)) % 60,
        hours: Math.floor(diff / (60 * 60 * 1000)) % 24,
        days: Math.floor(diff / (60 * 60 * 24 * 1000)),
      });
      if (diff <= 0) clearInterval(interval);
    }, 1000);
    return () => clearInterval(interval);
  }, [productEndTime, timer]);

  const { sec, min, hours, days, timeDiff } = timer;

  if (timeDiff <= 0) {
    return <p>Promotion is over</p>;
  }

  return (
    <div className='row'>
      <div className={`col-3 ${styles.dots}`}>
        <h5>{days}</h5>
        <p>DAYS</p>
      </div>
      <div className={`col-3 ${styles.dots}`}>
        <h5>{hours}</h5>
        <p>HRS</p>
      </div>
      <div className={`col-3 ${styles.dots}`}>
        <h5>{min}</h5>
        <p>MINS</p>
      </div>
      <div className={`col-3 ${styles.dots}`}>
        <h5>{sec}</h5>
        <p>SECS</p>
      </div>
    </div>
  );
};

PromotedProductTimeCounter.propTypes = {
  endTime: PropTypes.string.isRequired,
};

export default PromotedProductTimeCounter;
