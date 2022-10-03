 const initialState = {
    cart: null,
  };

 const EDIT_CART = "EDIT_CART";

  export const editCart = {
    type: EDIT_CART
  };

  
  
  const reducer = (state=initialState, action) => {
    console.log(action);
  
    switch (action.type) {
      case EDIT_CART:
        return {
          ...state,
          cart: action.cart,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  