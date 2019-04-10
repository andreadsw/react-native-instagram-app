import { combineReducers } from 'redux';
import PhotoReducer from './photo-reducer';

const rootReducer = combineReducers({
    photos: PhotoReducer
});

export default rootReducer;
