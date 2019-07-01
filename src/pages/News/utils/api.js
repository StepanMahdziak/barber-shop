import * as actions from './actions'

export const getNews = (dispatch) => () => {
    fetch('http://localhost:3001/home').then(data=> dispatch(actions.getNews(data)))
};