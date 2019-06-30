import {createReducer} from "redux-starter-kit";
const initialState = {
    news : [],
    oneNews : {},
}
export const newsReducer = createReducer([], {
    GET_NEWS: (state, action) => {
        // "mutate" the array by calling push()
        state.push(action.payload)
    },
    GET_ONE_NEWS: (state, action) =>{

    }
});