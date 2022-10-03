 const initialState = {
    cart: null,
    total: null,
  };
  
 const actionType = {
    SET_CART: "SET_CART",
    SET_TOTAL: "SET_TOTAL",
  };
  
  const rootReducer = (state=initialState, action) => {
    console.log(action);
  
    switch (action.type) {
      case actionType.SET_CART:
        return {
          ...state,
          cart: action.cart,
        };
  
      case actionType.SET_TOTAL:
        return {
          ...state,
          total: action.total,
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  