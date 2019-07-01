import React, {Component} from 'react';
import {Loader} from "../../components/Loader/Loader"
import './About.scss'
class About extends Component {
    render() {
        return (
            <div className="about-page">
                <img className="about-img" src="https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/4585184/910/607/m2/fpnw/wm1/cover_1-.jpg?1532668910&s=973fd39c70c76412126b6d0fb05c78e8"/>
                {/*<Loader/>*/}

            </div>
        );
    }
}

export default About;