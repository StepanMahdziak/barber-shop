import React, {Component} from 'react';
import './NewsItem.scss';
import type {IItemProps} from "../../utils/types";

interface INewsItemProps extends IItemProps{
    className : String
}
export class NewsItem extends Component<INewsItemProps> {
    render() {
        const {title , img, desc} = this.props;
        return (
            <div className="news-item">
                <img className="news-item__img" src={img} alt="img"/>
                <div className="news-item__cnt">
                    <h3 className="news-item__title">{title}</h3>
                    <p className="news-item__description">{desc}</p>
                </div>

            </div>
        );
    }
}
NewsItem.defaultProps = {
    className: ""
};