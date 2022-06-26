const initialState = {
  data: null,
};

export const setSuccessAllert = (payload) => ({
  type: "SET_SUCCESS_ALERT",
  payload,
});
export const setErrorAllert = (payload) => ({
  type: "SET_ERROR_ALERT",
  payload,
});
export const clearAllert = () => ({ type: "CLEAR_ALERT" });

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SUCCESS_ALERT":
      return {
        ...state,
        data: { type: "success", message: action.payload },
      };
    case "SET_ERROR_ALERT":
      return {
        ...state,
        data: { type: "error", message: action.payload },
      };
    case "CLEAR_ALERT":
      return {
        ...state,
        data: null,
      };
    default:
      return state;
  }
};

export default alertReducer;
