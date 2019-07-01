import React, { Component } from "react";
import './JobsItem.scss';
import type {IJobsItemProps} from "../../utils/types";

 export class JobsItem extends Component<IJobsItemProps> {
  render() {
    const {
      jobRole,
      className,
      company,
      location,
      employment,
      startDate,
      salary,
      postedDate
    } = this.props;
    return (
      <div className="jobs-item">
        <h3 className="jobs-item__title">{jobRole}</h3>
        <div className="jobs-item__descriptions">
          <div className="jobs-item__company">{company}</div>
          <div className="jobs-item__job-role">{jobRole}</div>
          <div className="jobs-item__location">{location}</div>
          <div className="jobs-item__employment">{employment}</div>
          <div className="jobs-item__start-date">{startDate}</div>
          <div className="jobs-item__employment">{employment}</div>
          <div className="jobs-item__salary">{salary}</div>
          <div className="jobs-item__posted-date">{postedDate}</div>
        </div>
      </div>
    );
  }
}

JobsItem.defaultProps = {
  className: "",
  company: "",
  JobRole: "",
  Location: "",
  Employment: "",
  StartDate: "",
  Salary: "",
  Posted: ""
};
