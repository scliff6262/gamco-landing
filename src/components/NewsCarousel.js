import React from 'react'
import Michael from '../MichaelG.jpeg'
import Brett from '../BrettH.png'
import Mario from '../mario-gabelli.jpg'
import { Carousel } from 'react-bootstrap'
import { css } from 'react-emotion';

const carouselCaption = css`
    background: rgba(81, 184, 217, 1);
    border-radius: 10px;
`

const NewsCarousel = () => {
  return(
    <Carousel style={{minHeight: "475px"}}>
      <Carousel.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.cnbc.com/video/2018/11/08/final-trades-amazon-tesla-albemarle-walmart.html">
          <img width={900} height={500} alt="900x500" style={{margin: "0 auto"}} src={Mario} />
        </a>
        <Carousel.Caption>
          <div className={carouselCaption}>
            <h3>Mario Gabelli</h3>
            <p>Final trades: Amazon, Tesla, Albemarle & Walmart</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.fundssociety.com/en/opinion/GAB18-Michael-Gabelli-when-spreads-widen-one-can-add-to-existing-positions-at-lower-prices-to-earn-greater-returns" >
          <img width={900} height={500} alt="900x500" style={{margin: "0 auto"}} src={Michael} />
        </a>
        <Carousel.Caption>
          <div className={carouselCaption}>
            <h3>Michael Gabelli</h3>
            <p>When Spreads Widen One Can Add to Existing Positions at Lower Prices to Earn Greater Returns</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          <a target="_blank" rel="noopener noreferrer" href="https://www.cnbc.com/video/2018/11/08/disneys-operating-performance-will-be-front-and-center-in-earnings-report-analyst-says.html">
            <img width={900} height={500} alt="900x500" style={{margin: "0 auto"}} src={Brett} />
          </a>
        <Carousel.Caption>
          <div className={carouselCaption}>
            <h3>Brett Harriss</h3>
            <p>Disney's operating performance will be "front and center" in earnings</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default NewsCarousel
