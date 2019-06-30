import React, { Component } from "react";
import type { IJobsItemProps } from "../JobsItem/JobsItem";
import { Loader } from "../../../../../../components/Loader/Loader";
import { JobsItem } from "../JobsItem/JobsItem";

interface IJobsListProps {
  jobs: [IJobsItemProps];
}

class JobsList extends Component<IJobsListProps> {
  render() {
    const { jobs } = this.props;
    return (
      <ul className="job-list">
        {jobs.length > 0 ? (
          jobs.map(item => (
            <li>
              {" "}
              <JobsItem
                company={item.company}
                jobRole={item.jobRole}
                location={item.location}
                employment={item.employment}
                startDate={item.startDate}
                salary={item.salary}
                postedDate={item.postedDate}
              />
            </li>
          ))
        ) : (
          <Loader />
        )}
      </ul>
    );
  }
}

export default JobsList;
