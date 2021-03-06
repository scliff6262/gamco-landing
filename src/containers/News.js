import React, { Component } from 'react';
import NewsItem from '../components/NewsItem'
import NewsCarousel from '../components/NewsCarousel'
import { ListGroup } from 'react-bootstrap'
import { css } from 'react-emotion';
import { BarLoader } from 'react-spinners';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class News extends Component {
  constructor(){
    super()

    this.state = {
      loading: true,
      articles: []
    }

    fetch("https://newsapi.org/v2/everything?q='gabelli'&sortBy=publishedAt&language=en&excludeDomains=spoilertv.com&apiKey=864e7e6732e043e3a23f183e3829d1c3")
    .then( r => r.json() )
    .then( json => setTimeout( () => {
      this.setState({ articles: json.articles })
      this.setState({ loading: false })
    }, 1000) )
  }
  //864e7e6732e043e3a23f183e3829d1c3

  render(){
    return(
      <div>
        <NewsCarousel />
        <h1 style={{marginLeft: "15px"}}>NewsFeed</h1>
        <BarLoader
          className={override}
          sizeUnit={"px"}
          size={150}
          color={'#123abc'}
          loading={this.state.loading}
        />
        <ListGroup>
          {this.state.articles && this.state.articles.map( (article) => <NewsItem article={article} /> )}
        </ListGroup>
      </div>
    )
  }

}

export default News
