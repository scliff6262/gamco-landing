import React from 'react'
import {Jumbotron, Carousel } from 'react-bootstrap'

const Welcome = () => {
  return(
    <Jumbotron style={{padding: "20px 20px"}}>

      <Carousel>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="https://www.gabelli.com/corporate/timeline/about_1976.jpg" />
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="https://www.gabelli.com/corporate/timeline/about_1997.jpg" />
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="https://www.gabelli.com/corporate/timeline/about_2011.jpg" />
        </Carousel.Item>
      </Carousel>
      <h5>Our Firm</h5>
      <p>Since our organization was founded in 1976 as an institutional research firm,
      GAMCO has evolved into a diversified global financial services company offering an
      extensive range of investment capabilities. The driving force of our success has
      been our intense research-driven culture. The keys to our success are the same
      today as they were in 1976: a focus on fundamental bottom-up research, a consistent
      investment process and a commitment to generating superior risk-adjusted returns.
      </p>

    </Jumbotron>
  )
}

export default Welcome
