const ADD_PROFILE = 'ADD_PROFILE';
const initialState = {};

const profiles = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROFILE: {
      return {
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

export default profiles;
