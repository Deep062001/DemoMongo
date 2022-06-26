import { combineReducers } from 'redux';

import foodPosts from './foodPosts';
import shopPosts from './shopPosts';

export const reducers = combineReducers({ foodPosts , shopPosts});