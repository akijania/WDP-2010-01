import React from 'react';
import PropTypes from 'prop-types';
import ProductBox from '../../common/ProductBox/ProductBoxContainer';

const ProductListImages = ({ id, products, name}) => {
  return (
    <div>
      <h2>{name}</h2>
      <div className='container'>
        <div className='row'>
          <div className='col-9'>
            <div className='row'>
              {products &&
              products
                .filter(item => item.category === id)
                .map((product, i) => (
                  <div key={i} className='col-4'>
                    <ProductBox {...product} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductListImages.propTypes = {
  category: PropTypes.string,
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

export default ProductListImages;
