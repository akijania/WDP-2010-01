import PropTypes from 'prop-types';
import React from 'react';

import Feedback from '../../common/Feedback/Feedback';
import SwipeComponent from '../../common/SwipeComponent/SwipeComponent';

import styles from './ClientFeedback.module.scss';

class ClientFeedback extends React.Component {
  state = {
    activePage: 0,
    manualPageChange: false,
  };

  handleLeftAction = () => {
    const { activePage, manualPageChange } = this.state;
    if (manualPageChange) {
      this.setState({ manualPageChange: false });
    } else {
      this.setState({ activePage: activePage + 1 });
    }
  };

  handleRightAction = () => {
    const { activePage, manualPageChange } = this.state;
    if (manualPageChange) {
      this.setState({ manualPageChange: false });
    } else if (activePage > 0) {
      this.setState({ activePage: activePage - 1 });
    }
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage, manualPageChange: true });
  }

  render() {
    const { feedbacks } = this.props;
    const { activePage } = this.state;

    const pagesCount = Math.ceil(feedbacks.length);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={i}>
          <button
            onClick={() => this.handlePageChange(i)}
            className={i === activePage ? styles.active : ''}
          >
            page {i}
          </button>
        </li>
      );
    }
    const swipeContent = [];
    for (let page = 0; page < pagesCount; page++) {
      swipeContent.push(
        feedbacks.slice(activePage, activePage + 1).map(item => (
          <div key={item.id} className={`col-12`}>
            <Feedback {...item} />
          </div>
        ))
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>Client Feedback</h3>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <div className='row'>
            {feedbacks.length ? (
              <SwipeComponent
                activePage={this.state.activePage}
                rightAction={this.handleRightAction}
                leftAction={this.handleLeftAction}
              >
                {swipeContent}
              </SwipeComponent>
            ) : (
              <div className={styles.noComent}>There is no client feedbacks</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

ClientFeedback.propTypes = {
  feedbacks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
    })
  ),
};

ClientFeedback.defaultProps = {
  feedback: [],
};

export default ClientFeedback;
