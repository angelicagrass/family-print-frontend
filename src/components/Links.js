import React from 'react'
import { Row, Col, NavDropdown } from 'react-bootstrap'
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
          <NavDropdown title={category.name} id="basic-nav-dropdown">
            {category.sub.map((sub) => {
              return (
              <NavDropdown.Item>
                <StyledLink to={'/' + slugify(category.name, {lower: true}) + '/' + slugify(sub, {lower: true})
                  }>{sub}</StyledLink>
              </NavDropdown.Item>
              )
            })}
          </NavDropdown>
        </Col>
      ))} 
      </Row>
    </div>
  )
}

export default Links



