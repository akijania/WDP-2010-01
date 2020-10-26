import PropTypes from 'prop-types';
import React from 'react';

import ProductBox from '../../common/ProductBox/ProductBoxContainer';

const ProductListImages = ({ id, products }) => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
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
  id: PropTypes.string,
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
