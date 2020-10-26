import {
  faFacebookF,
  faGooglePlusG,
  faLinkedinIn,
  faTwitter,
  faPinterestP,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import Button from '../../common/Button/Button';

import styles from './ProductPageSocialMedia.module.scss';

const ProductPageSocialMedia = () => (
  <div className={styles.actions}>
    <div className={styles.buttons}>
      <Button variant='white' className={styles.buttonFacebook}>
        <FontAwesomeIcon icon={faFacebookF} className={styles.facebook}>
          Facebook
        </FontAwesomeIcon>{' '}
        Share
      </Button>
      <Button variant='white' className={styles.buttonGoogle}>
        <FontAwesomeIcon icon={faGooglePlusG} className={styles.google}>
          Google+
        </FontAwesomeIcon>
        Google+
      </Button>
      <Button variant='white' className={styles.buttonPinterest}>
        <FontAwesomeIcon icon={faPinterestP} className={styles.pinterest}>
          Pinterest
        </FontAwesomeIcon>
        Pinterest
      </Button>
      <Button variant='white' className={styles.buttonTwitter}>
        <FontAwesomeIcon icon={faTwitter} className={styles.twitter}>
          Twitter
        </FontAwesomeIcon>
        Tweet
      </Button>
      <Button variant='white' className={styles.buttonLinkedin}>
        <FontAwesomeIcon icon={faLinkedinIn} className={styles.linkedin}>
          Linkedin
        </FontAwesomeIcon>
        Linkedin
      </Button>
    </div>
  </div>
);

export default ProductPageSocialMedia;
