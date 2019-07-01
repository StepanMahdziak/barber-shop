import type { IJobsInitialState } from "./types";
import { createReducer } from "redux-starter-kit";

const initialState: IJobsInitialState = {
  // jobs: mockJobs,
  // oneJob: mockJobs[0]
};

export const JobsReducer = createReducer(initialState, {
  CREATE_JOBS: (state, action) => {
      state.jobs.push(action.payload);
  },
    DELETE_ONE_JOBS : (state,action)=>{
        state.jobs.filter((jobs) => jobs.id !== action.payload.id)
    }
});
