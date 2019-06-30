import React, {Component} from 'react';
import {Loader} from "../../components/Loader/Loader"

const MockJobs = [{
    title: "Join to the collective",
    img:"https://www.londonschoolofbarbering.com/barber-jobs/wp-content/uploads/sites/3/2019/06/IMG_0804-300x200.jpg",

}];

class Jobs extends Component {
    render() {
        return (
            <div>
                <Loader/>
            </div>
        );
    }
}

export default Jobs;