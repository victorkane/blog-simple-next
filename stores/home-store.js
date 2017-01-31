import thunkMiddleware from 'redux-thunk'
import {
    REQUEST_POSTS, RECEIVE_POSTS
} from '../actions'

export const reducer = (state, action) => {
  switch (action.type) {
    case 'REQUEST_POSTS' : 
    case 'RECEIVE_POSTS' :
    default: return state
  }
}