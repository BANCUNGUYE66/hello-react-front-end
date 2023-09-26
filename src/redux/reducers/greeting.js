const initialState = {
  greeting: '',
};

export const setGreeting = (greeting) => ({
  type: 'SET_GREETING',
  payload: greeting,
});

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GREETING':
      return {
        ...state,
        greeting: action.payload,
      };
    default:
      return state;
  }
};

export default greetingReducer;
