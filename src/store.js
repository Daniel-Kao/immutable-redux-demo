import axios from 'axios';
import { fromJS } from 'immutable';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const initialState = fromJS({
  name: 'daniel',
  list: []
});

const actionTypes = {
  STORE_BLOGS: 'STORE_BLOGS',
  CHANGE_NAME: 'CHANGE_NAME'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_BLOGS:
      return state.merge({
        list: action.data
      });
    case actionTypes.CHANGE_NAME:
      return state.merge({
        name: action.name
      });
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export const getBlogs = () => async dispatch => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/todos'
  );

  return dispatch({ type: actionTypes.STORE_BLOGS, data: response.data });
};

export const changeName = ({ name }) => {
  return {
    type: actionTypes.CHANGE_NAME,
    name
  };
};

export default store;
