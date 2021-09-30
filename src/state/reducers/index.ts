import {combineReducers } from 'redux';
import {articleReducer} from "./articleReducer";
const reducers = combineReducers({
    articles:articleReducer,
})
export default reducers;

export type State = ReturnType<typeof reducers>;
