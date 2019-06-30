import {createAction} from "redux-starter-kit";

export const getNews = createAction('GET_NEWS');
export const getOneNews = createAction('GET_ONE_NEWS');
export const cteateNews = createAction('CREATE_NEWS');
export const deleteOneNews = createAction('DELETE_ONE_NEWS');
export const deleteAllNews = createAction('DELETE_ALL_NEWS');