/* selectors */
export const getAll = ({ cart }) => cart.products;
export const getCount = ({ cart }) => cart.products.length;

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_TO_CART = createActionName('ADD_TO_CART');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');
const TOGGLE_CART = createActionName('TOGGLE_CART');
const CHANGE_QUANTITY = createActionName('CHANGE_QUANTITY');

/* action creators */
export const addToCart = payload => ({ payload, type: ADD_TO_CART });
export const removeFromCart = payload => ({ payload, type: REMOVE_FROM_CART });
export const toggleCart = payload => ({ payload, type: TOGGLE_CART });
export const changeQuantity = payload => ({ payload, type: CHANGE_QUANTITY });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_TO_CART: {
      const isInCart = statePart.products.reduce(
        (acc, product) => acc || product.id === action.payload.id,
        false
      );
      const newTotalPrice = statePart.totalPrice + action.payload.price;
      const newStatePart = isInCart
        ? statePart.products.map(product => {
            if (product.id === action.payload.id) {
              if (product.quantity == null) {
                product.quantity = 1;
              }
              product.quantity = product.quantity + 1;
            }
          })
        : [...statePart.products, action.payload];
      return {
        products: newStatePart,
        isOpen: true,
        totalPrice: newTotalPrice,
      };
    }
    case REMOVE_FROM_CART: {
      const newTotalPrice = statePart.totalPrice - action.payload.summaryPrice;
      return {
        ...statePart,
        products: statePart.products.filter(prod => prod.id !== action.payload.id),
        totalPrice: newTotalPrice,
      };
    }
    case TOGGLE_CART: {
      return {
        ...statePart,
        isOpen: action.payload,
      };
    }
    case CHANGE_QUANTITY: {
      let newTotalPrice;
      const newStatePart = statePart.products.map(product => {
        if (product.id === action.payload.id) {
          if (product.quantity == null) {
            product.quantity = 1;
          }

          if (action.payload.type === 'increase') {
            product.quantity = product.quantity + 1;
            newTotalPrice = statePart.totalPrice + product.price;
          }

          if (action.payload.type === 'decrease') {
            if (product.quantity > 1) {
              newTotalPrice = statePart.totalPrice - product.price;
              product.quantity = product.quantity - 1;
            } else {
              newTotalPrice = statePart.totalPrice;
            }
          }
        }
        return product;
      });
      return {
        products: newStatePart,
        isOpen: true,
        totalPrice: newTotalPrice,
      };
    }
    default:
      return statePart;
  }
}
