import React, {Component} from 'react';
import News from "../News/News";
import './Home.scss';
class Home extends Component {
    render() {
        return (
            <div className="home-page">
                <News/>

            </div>
        );
    }
}

export default Home;