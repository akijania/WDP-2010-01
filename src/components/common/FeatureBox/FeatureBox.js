import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './FeatureBox.module.scss';

const FeatureBox = ({ active, icon, children }) => (
  <div className={styles.root + (active ? ' ' + styles.active : '')}>
    {icon && (
      <a href='/#' target='_blank'>
        <div className={styles.iconWrapper}>
          <FontAwesomeIcon className={styles.icon} icon={icon} />
        </div>
      </a>
    )}
    <div className={styles.content}>{children}</div>
  </div>
);

FeatureBox.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.object,
  active: PropTypes.bool,
};

export default FeatureBox;
