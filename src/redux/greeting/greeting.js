const ADD_GREETING = 'hello-react-front-end/greeting/ADD_GREETINGS';

const initialState = '';

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GREETING:
      return action.payload;
    default:
      return state;
  }
};

export default greetingReducer;

const addGreeting = (text) => ({
  type: ADD_GREETING,
  payload: text,
});

export { addGreeting };

const getGreeting = () => async (dispatch) => {
  const response = await fetch('https://jf-hello-rails-api.herokuapp.com/v1/greetings'); // Fetches from the deployed rails app
  const data = await response.json();
  dispatch(addGreeting(data.text));
};

export { getGreeting };
