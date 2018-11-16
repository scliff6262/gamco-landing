import React, { Component } from 'react';
import NewsItem from '../components/NewsItem'
import { Well, Carousel, Jumbotron, ListGroup } from 'react-bootstrap'
import { css } from 'react-emotion';
import { BarLoader } from 'react-spinners';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

const carouselCaption = css`
    background: rgba(81, 184, 217, 0.5);
    border-radius: 10px;
`

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

          <Carousel style={{minHeight: "500px"}}>
            <Carousel.Item>
              <a target="_blank" href="https://www.fundssociety.com/en/opinion/GAB18-Michael-Gabelli-when-spreads-widen-one-can-add-to-existing-positions-at-lower-prices-to-earn-greater-returns" ><img width={900} height={500} alt="900x500" style={{margin: "0 auto"}} src="https://www.fundssociety.com/sites/default/files/styles/content_detail/public/opinion/screen_shot_2018-11-12_at_2.06.41_pm.png?itok=dAVbCAAb" /></a>
              <Carousel.Caption>
                <div className={carouselCaption}>
                  <h3>Michael Gabelli</h3>
                  <p>When Spreads Widen One Can Add to Existing Positions at Lower Prices to Earn Greater Returns</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <a target="_blank" href="https://www.cnbc.com/video/2018/11/08/disneys-operating-performance-will-be-front-and-center-in-earnings-report-analyst-says.html">
                  <img width={900} height={500} alt="900x500" style={{margin: "0 auto"}} src="https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2016/07/29/103829552-6ED3-SB-CBS2-07292016.1910x1000.jpg" />
                </a>
              <Carousel.Caption>
                <div className={carouselCaption}>
                  <h3>Brett Harriss</h3>
                  <p>Disneys operating performance will be "front and center" in earnings</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <a target="_blank" href="https://www.cnbc.com/video/2018/11/08/final-trades-amazon-tesla-albemarle-walmart.html">
                <img width={900} height={500} alt="900x500" style={{margin: "0 auto"}} src="https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2016/10/26/104051764-20161026-2786-2294.530x298.jpg?v=1477500381" />
              </a>
              <Carousel.Caption>
                <div className={carouselCaption}>
                  <h3>Mario Gabelli</h3>
                  <p>Final trades: Amazon, Tesla, Albemarle & Walmart</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

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
