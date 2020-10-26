import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './Feedback.module.scss';

const Feedback = ({ image, text, name, category }) => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon>
        </div>
        <div className={styles.text}>{text}</div>
        <div className={styles.photo}>
          <img src={image} alt={name} />
          <div>
            <h3>{name}</h3>
            <p>{category}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
Feedback.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string,
  name: PropTypes.string,
  category: PropTypes.string,
};

export default Feedback;
