import PropTypes from 'prop-types';
import React from 'react';

import LastPost from '../../common/LastPost/LastPost';

import styles from './LatestBlog.module.scss';

class LatestBlog extends React.Component {
  state = {
    activePage: 0,
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  render() {
    const { posts } = this.props;
    const { activePage } = this.state;

    const itemsPerPage = 3;

    const pagesCount = Math.ceil(posts.length / itemsPerPage);

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

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-11 ' + styles.heading}>
                <h3>Latest blog</h3>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <div className='row'>
            {posts
              .slice(activePage * itemsPerPage, (activePage + 1) * itemsPerPage)
              .map(item => (
                <div key={item.id} className={`col-md-12 col-lg-4`}>
                  <LastPost {...item} />
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

LatestBlog.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      date: PropTypes.string,
      comments: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

export default LatestBlog;
