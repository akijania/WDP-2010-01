import { faTimes, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../common/Button/Button';

import styles from './CartMini.module.scss';

const CartMini = ({
  isOpen,
  totalPrice,
  toggleCart,
  removeFromCart,
  changeQuantity,
  products,
}) => {
  const removeFromCartHandler = (id, price, quantity) => {
    const summaryPrice = typeof quantity != 'undefined' ? quantity * price : price;

    removeFromCart({ id, price, summaryPrice });

    if (products && products.length === 1) {
      closeCartHandler();
      document.body.classList.remove('slide');
    }
  };

  const changeQuantityHandler = (id, type) => {
    changeQuantity({ id, type });
  };

  const closeCartHandler = () => {
    toggleCart(false);
    document.body.classList.remove('slide');
  };

  return (
    <div className={styles.root}>
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayIn : styles.overlayOut}`}
        onClick={() => closeCartHandler()}
      ></div>
      <div className={`${styles.cart} ${isOpen ? styles.cartOpen : styles.cartClose}`}>
        <div className={styles.title}>
          <p>Shopping bag</p>
        </div>
        {products && products.length === 0 && (
          <div className={styles.isEmpty}>
            <p>Your bag is currently empty.</p>
          </div>
        )}
        <div className={styles.close} onClick={() => closeCartHandler()}>
          <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
        </div>
        <div className={styles.products}>
          {products &&
            products.map((product, i) => (
              <div key={i} className={styles.product}>
                <div className={styles.productImg}>
                  <img src={product.image} alt={product.imageAlt} />
                </div>
                <div className={styles.productName}>
                  <p>{product.name}</p>
                  <span>${product.price}</span>
                </div>
                <div className={styles.productQuantity}>
                  <p>
                    <span
                      className={styles.quantityButton}
                      onClick={() => changeQuantityHandler(product.id, 'decrease')}
                    >
                      -
                    </span>
                    <span className={styles.quantityBox}>
                      {product.quantity > 1 ? product.quantity : '1'}
                    </span>
                    <span
                      className={styles.quantityButton}
                      onClick={() => changeQuantityHandler(product.id, 'increase')}
                    >
                      +
                    </span>
                  </p>
                </div>
                <div
                  className={styles.productRemove}
                  onClick={() =>
                    removeFromCartHandler(product.id, product.price, product.quantity)
                  }
                >
                  <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                </div>
              </div>
            ))}
        </div>
        <div className={styles.subtotal}>
          <p>SUBTOTAL</p>
        </div>
        <div className={styles.subtotalPrice}>
          <p>${totalPrice}</p>
        </div>
        <div className={styles.checkOutButton}>
          <Button variant='outline'>
            <span>CHECK OUT</span>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
          </Button>
        </div>
      </div>
    </div>
  );
};

CartMini.propTypes = {
  isOpen: PropTypes.bool,
  totalPrice: PropTypes.number,
  toggleCart: PropTypes.func,
  removeFromCart: PropTypes.func.isRequired,
  changeQuantity: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

CartMini.defaultProps = {
  isOpen: false,
  totalPrice: 0,
};

export default CartMini;
