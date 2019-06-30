import * as actions from './actions'
export const getNews = (dispatch) => () => {
    fetch('http://localhost:3000/Home').then(data=> dispatch(actions.getNews(data)))
};