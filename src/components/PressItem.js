import React from 'react'
import { ListGroupItem, Button } from 'react-bootstrap'

const PressItem = (props) => {
  const article = props.article
  return(
    <ListGroupItem>
      <h5>{article.title} <small>{article.date}</small></h5>
      <Button bsStyle="info" target="_blank" href={article.url}>View Article</Button>
    </ListGroupItem>
  )
}

export default PressItem
