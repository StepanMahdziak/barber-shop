import React, { Component } from "react";
import { Loader } from "../../../../../../components/Loader/Loader";
import { NewsItem } from "../NewsItem/NewsItem";
import "./NewsList.scss";
import type {IListProps} from "../../../../../../utils/types";
import type {IItemProps} from "../../utils/types";

interface INewListProps extends IListProps {
  news: [IItemProps];
}
export class NewsList extends Component<INewListProps> {
  render() {
    const { news } = this.props;

    return (
      <ul className="news-list">
        {news.length > 0 ? (
          news.map(item => (
            <li>
              {" "}
              <NewsItem title={item.title} img={item.img} desc={item.desc} />
            </li>
          ))
        ) : (
          <Loader />
        )}
      </ul>
    );
  }
}

NewsList.defaultProps = {
  news: [],
  className: "",
  onLoadMore: () => null,
  onClickItem: () => null
};
