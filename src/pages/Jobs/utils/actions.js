import { createAction } from "redux-starter-kit";

export const getJobs = createAction("GET_JOBS");
export const getOneNews = createAction("GET_ONE_JOBS");
export const createNews = createAction("CREATE_JOBS");
export const deleteNews = createAction("DELETE_JOBS");
export const deleteOneNews = createAction("DELETE_ONE_JOBS");
