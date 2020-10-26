import PropTypes from 'prop-types';
import React from 'react';

import ProductBox from '../../common/ProductBox/ProductBoxContainer';
import SwipeComponent from '../../common/SwipeComponent/SwipeComponent';
import ProductsCompare from '../ProductsCompare/ProductsCompareContainer';

import styles from './NewFurniture.module.scss';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    manualPageChange: false,
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage, manualPageChange: true });
  }

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory, activePage: 0 });
  }

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

  render() {
    const { categories, products, viewport } = this.props;
    const { activeCategory, activePage } = this.state;
    const itemsPerViewport = { desktop: 8, tablet: 6, mobile: 3 };
    const itemsPerPage = itemsPerViewport[viewport];
    const colsPerViewport = { desktop: 3, tablet: 6, mobile: 12 };
    const colsOnPage = colsPerViewport[viewport];
    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / itemsPerPage);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={i}>
          <div
            onClick={() => this.handlePageChange(i)}
            className={i === activePage ? styles.active : ''}
          >
            page {i}
          </div>
        </li>
      );
    }

    const swipeContent = [];
    for (let page = 0; page < pagesCount; page++) {
      swipeContent.push(
        <div key={page} className='row'>
          {categoryProducts
            .slice(activePage * itemsPerPage, (activePage + 1) * itemsPerPage)
            .map(item => (
              <div key={item.id} className={`col-${colsOnPage}`}>
                <ProductBox {...item} />
              </div>
            ))}
        </div>
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>New furniture</h3>
              </div>
              <div className={'col-12 col-sm ' + styles.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      <div
                        className={item.id === activeCategory ? styles.active : ''}
                        onClick={() => this.handleCategoryChange(item.id)}
                      >
                        {item.name}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={'col-12 col-lg-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <SwipeComponent
            activePage={this.state.activePage}
            rightAction={this.handleRightAction}
            leftAction={this.handleLeftAction}
          >
            {swipeContent}
          </SwipeComponent>
        </div>
        <ProductsCompare />
      </div>
    );
  }
}

NewFurniture.propTypes = {
  viewport: PropTypes.string.isRequired,
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
