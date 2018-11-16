import React from 'react'
import { ListGroupItem, Button } from 'react-bootstrap'

const NewsItem = (props) => {
  const article = props.article
  const date = new Date(article.publishedAt)
  return(
    <ListGroupItem>
      <h5>{article.title} <small>{date.toDateString()}</small></h5>
      <p>{article.source.name} - {article.author}</p>
      <Button bsStyle="info" target="_blank" href={article.url}>View Article</Button>
    </ListGroupItem>
  )
}

export default NewsItem
