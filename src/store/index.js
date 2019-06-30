import { configureStore } from 'redux-starter-kit'
import {newsReducer} from "../pages/News/utils/reducer";

const store = configureStore({
    reducer: {
        news : newsReducer,
        // jobs : jobsReducer,
    }
});

export default store;
