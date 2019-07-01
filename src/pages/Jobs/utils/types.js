export interface IJobsItemProps  {
    id:String;
    className: String;
    company: String;
    jobRole: String;
    location: String;
    employment: String;
    startDate: Date;
    salary: String;
    postedDate: Date;
}

export interface IJobsInitialState{
    jobs:[IJobsItemProps],
    job: IJobsItemProps
}