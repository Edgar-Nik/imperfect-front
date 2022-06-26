const initialState = {
  profile: null,
};

export const setProfileData = (payload) => ({
  type: "SET_PROFILE_DATA",
  payload,
});

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROFILE_DATA":
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
