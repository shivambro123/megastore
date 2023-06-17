const initialState = {
  product: [],
  productcart: {},
  error: null,
  message: null,
  count: 0,
};

const featuredProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_FEATUREPRODUCT":
      return {
        ...state,
        product: action.payload,
      };
    case "GET_CART":
      return {
        cart: action.payload,
      };
    case "ADD_TOCART":
      console.log(action.message, "actionmess");
      return {
        ...state,
        message: action.message,
        cart: [...state.cart, action.payload],
        count: state.count + 1,
      };
    case "EDIT_QUANTITY":
      return {
        ...state,
        product: [...state.product, action.payload],
      };
    case "ADD_PRODUCT":
      return {
        product: [...state.product, action.payload],
      };
    case "REMOVE":
      console.log(state.cart, action.payload, "hii");
      return {
        productcart: state?.cart?.data.filter((val) => {
          console.log(val._id, "laxmi", action.payload, "id");
          return val._id !== action.payload;
        }),
      };
    case "REMOVEALL":
      console.log(state.cart);
      return {
        ...state,
        productcart: [],
        error: action.message,
      };
    default:
      return state;
  }
};

export default featuredProductReducer;
