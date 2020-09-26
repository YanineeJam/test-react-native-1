import imageReducer from './imageReducer';
import {createStore, combineReducers} from 'redux';
//combine reducer เป็นการเอา reducer หลายๆตัวมารวมกัน
const rootReducer = combineReducers({
    imageStore: imageReducer,
});

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;