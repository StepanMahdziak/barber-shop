import React, {Component} from 'react';
import JobsList from "./components/JobsList/JobsList";
import "./Jobs.scss"

 export const MockJobs = [
     {
     jobRole:"sdh",
     className:"fuddled",
     company:"sd",
     location:"sdf",
     employment:"dsd",
     startDate:"dwe",
     salary:"oip",
     postedDate:"03932032"

},
     {
         jobRole:"sdh",
         className:"fuddled",
         company:"sd",
         location:"sdf",
         employment:"dsd",
         startDate:"dwe",
         salary:"oip",
         postedDate:"03932032"

     },
     {
         jobRole:"sdh",
         className:"fuddled",
         company:"sd",
         location:"sdf",
         employment:"dsd",
         startDate:"dwe",
         salary:"oip",
         postedDate:"03932032"

     },
     {
         jobRole:"sdh",
         className:"fuddled",
         company:"sd",
         location:"sdf",
         employment:"dsd",
         startDate:"dwe",
         salary:"oip",
         postedDate:"03932032"

     },
     {
         jobRole:"sdh",
         className:"fuddled",
         company:"sd",
         location:"sdf",
         employment:"dsd",
         startDate:"dwe",
         salary:"oip",
         postedDate:"03932032"

     },
     {
         jobRole:"sdh",
         className:"fuddled",
         company:"sd",
         location:"sdf",
         employment:"dsd",
         startDate:"dwe",
         salary:"oip",
         postedDate:"03932032"

     },
     {
         jobRole:"sdh",
         className:"fuddled",
         company:"sd",
         location:"sdf",
         employment:"dsd",
         startDate:"dwe",
         salary:"oip",
         postedDate:"03932032"

     },
     {
         jobRole:"sdh",
         className:"fuddled",
         company:"sd",
         location:"sdf",
         employment:"dsd",
         startDate:"dwe",
         salary:"oip",
         postedDate:"03932032"

     }, {
         jobRole:"sdh",
         className:"fuddled",
         company:"sd",
         location:"sdf",
         employment:"dsd",
         startDate:"dwe",
         salary:"oip",
         postedDate:"03932032"

     },
     {
         jobRole:"sdh",
         className:"fuddled",
         company:"sd",
         location:"sdf",
         employment:"dsd",
         startDate:"dwe",
         salary:"oip",
         postedDate:"03932032"

     },
     {
         jobRole:"sdh",
         className:"fuddled",
         company:"sd",
         location:"sdf",
         employment:"dsd",
         startDate:"dwe",
         salary:"oip",
         postedDate:"03932032"

     },
     {
         jobRole:"sdh",
         className:"fuddled",
         company:"sd",
         location:"sdf",
         employment:"dsd",
         startDate:"dwe",
         salary:"oip",
         postedDate:"03932032"

     },
     {
         jobRole:"sdh",
         className:"fuddled",
         company:"sd",
         location:"sdf",
         employment:"dsd",
         startDate:"dwe",
         salary:"oip",
         postedDate:"03932032"

     },
     {
         jobRole:"sdh",
         className:"fuddled",
         company:"sd",
         location:"sdf",
         employment:"dsd",
         startDate:"dwe",
         salary:"oip",
         postedDate:"03932032"

     },

     {
         jobRole:"sdh",
         className:"fuddled",
         company:"sd",
         location:"sdf",
         employment:"dsd",
         startDate:"dwe",
         salary:"oip",
         postedDate:"03932032"

     },
     {
         jobRole:"sdh",
         className:"fuddled",
         company:"sd",
         location:"sdf",
         employment:"dsd",
         startDate:"dwe",
         salary:"oip",
         postedDate:"03932032"

     },{
         jobRole:"sdh",
         className:"fuddled",
         company:"sd",
         location:"sdf",
         employment:"dsd",
         startDate:"dwe",
         salary:"oip",
         postedDate:"03932032"

     },{
         jobRole:"sdh",
         className:"fuddled",
         company:"sd",
         location:"sdf",
         employment:"dsd",
         startDate:"dwe",
         salary:"oip",
         postedDate:"03932032"

     },

];

class Jobs extends Component {
    render() {
        return (
            <div className="jobs-page">
                <JobsList jobs={MockJobs}/>
                {/*<Loader/>*/}
            </div>
        );
    }
}

export default Jobs;