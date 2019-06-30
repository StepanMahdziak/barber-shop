import {createAction} from "redux-starter-kit";

const getNews = createAction('GET_NEWS');
const getOneNews = createAction('GET_ONE_NEWS');
const cteateNews = createAction('CREATE_NEWS');
const deleteOneNews = createAction('DELETE_ONE_NEWS');
const deleteAllNews = createAction('DELETE_ALL_NEWS');