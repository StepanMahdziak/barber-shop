import React, { Component } from "react";
import "./News.scss";
import { NewsList } from "./components/NewsList/NewsList";
import {connect} from 'react-redux';
import {getNews} from './utils/api'

class News extends Component  {
    componentDidMount(): void {
        !this.props.news && this.props.getNews()
    }

    render() {
      const {news ,
          oneNews,
          getNews
      } = this.props;
    return (
      <div className="news">
        <NewsList news={news} />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
        news: state.news.news,
        oneNews : state.news.oneNews
});
const mapDispatchToProps = (dispatch) => ({
   getNews : dispatch(getNews())
});
export default connect(mapStateToProps, mapDispatchToProps)(News);
