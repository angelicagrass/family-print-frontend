import React from 'react'
import { Row, Col } from 'react-bootstrap'
import categories from '../categorytest.js'
import slugify from 'slugify'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const StyledLink = styled(Link)`
    text-decoration: none;
    white-space: nowrap;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }

  &:hover {
    color: grey;
  }

`

const Links = () => {
  return (
    <div>
      <Row>
      {categories.map(category => (
        <Col>
          <StyledLink to={'/' + slugify(category.name, {
            lower: true,
           }
          )}>{category.name}</StyledLink>
        </Col>
      ))} 
      </Row>
    </div>
  )
}

export default Links



