import React, {Component} from 'react'
import { ListGroup } from 'react-bootstrap'
import PressItem from '../components/PressItem'

class PressReleases extends Component {

   releases = [
    {
      title: "The GDL Fund Announces Evaluation Of Potential Strategic Alternatives",
      date: "Nov 15, 2018",
      url: "https://www.gabelli.com/Gab_pdf/PRs/GDL_15Nov2018.pdf"
    },
    {
      title: "GAMCO Announces $0.20 per share Shareholder Designated Charitable Contribution",
      date: "Nov 12, 2018",
      url: "https://www.gabelli.com/Gab_pdf/PRs/GBL_12Nov2018.pdf"
    },
    {
      title: "GAMCO Investors, Inc. Reports Record Third Quarter Earnings",
      date: "Nov 6, 2018",
      url: "https://www.gabelli.com/Gab_pdf/PRs/GBL_6Nov2018.pdf"
    },
    {
      title: "Gabelli Global Utility & Income Trust Announces Rights Offering For Common And Preferred Shares Record Date And Summary Of Terms",
      date: "Nov 1, 2018",
      url: "https://www.gabelli.com/Gab_pdf/PRs/GLU_1Nov2018.pdf"
    },
    {
      title: "Theresa Pope Named Vice President, Head of Consultant Relations at Gabelli",
      date: "Oct 30, 2018",
      url: "https://www.gabelli.com/Gab_pdf/PRs/GBL_30Oct2018.pdf"
    },
    {
      title: "Gabelli Convertible And Income Securities Fund Completes Successful Rights Offering Raises $22.7 Million",
      date: "Oct 18, 2018",
      url: "https://www.gabelli.com/Gab_pdf/PRs/GCV_18Oct2018.pdf"
    },
  ]
  render(){
    return(
      <div>
        <h1 style={{marginLeft: "15px"}}>Press Releases</h1>
        <ListGroup>
          {this.releases.map( (article) => <PressItem article={article} /> )}
        </ListGroup>
      </div>
    )
  }
}

export default PressReleases
