import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../common/Button/Button';
import SwipeComponent from '../../common/SwipeComponent/SwipeComponent';

import styles from './PromotedProduct.module.scss';

class PromotedProductSwipe extends React.Component {
  state = {
    activePage: 0,
  };

  handleLeftAction = () => {
    const { activePage } = this.state;
    this.setState({ activePage: activePage + 1 });
  };

  handleRightAction = () => {
    const { activePage } = this.state;
    if (activePage > 0) {
      this.setState({ activePage: activePage - 1 });
    }
  };

  render() {
    const { images, title, spanTitle, subTitle, button } = this.props;
    const pagesCount = Math.ceil(images.length);

    const swipeContent = [];
    for (let page = 0; page < pagesCount; page++) {
      swipeContent.push(
        <img src={images[page].image} alt={images[page].imageAlt} key={page} />
      );
    }

    return (
      <div>
        <div className={styles.carousel}>
          <div className={styles.images}>
            <div className={styles.image}>
              <SwipeComponent
                activePage={this.state.activePage}
                rightAction={this.handleRightAction}
                leftAction={this.handleLeftAction}
              >
                {swipeContent}
              </SwipeComponent>
            </div>
          </div>
          <div className={styles.description}>
            <h2>
              {title}
              <span>{` ${spanTitle}`}</span>
            </h2>
            <p>{subTitle}</p>
            <Button variant='big'>{button}</Button>
          </div>
        </div>
        <div className={styles.carouselButtonWrapper}>
          <div className='row'>
            <div className={`col ${styles.colLeft}`}>
              <span onClick={() => this.handleLeftAction()}>
                <div className={styles.carouselButton}>
                  <FontAwesomeIcon className={styles.icon} icon={faChevronLeft} />
                </div>
              </span>
            </div>
            <div className={`col ${styles.colRight}`}>
              <span onClick={() => this.handleRightAction()}>
                <div className={styles.carouselButton}>
                  <FontAwesomeIcon className={styles.icon} icon={faChevronRight} />
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PromotedProductSwipe.propTypes = {
  title: PropTypes.string,
  spanTitle: PropTypes.string,
  subTitle: PropTypes.string,
  button: PropTypes.string,
  images: PropTypes.array.isRequired,
};
PromotedProductSwipe.defaultProps = {
  images: [],
};

export default PromotedProductSwipe;
