import React, { useState, useEffect } from 'react'
import { Row, Col, NavDropdown } from 'react-bootstrap'
import fetch from 'node-fetch'
// import categories from '../categorytest.js'
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
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      let res = await fetch('https://family-print-backend-staging.herokuapp.com/getmaincategories')
      res = await res.json()
      setCategories(res)
    }
    fetchCategories()
  },[])

  return (
    <div>
      <Row>
      {categories.map(category => (
        <Col>
          <NavDropdown title={category.name} id="basic-nav-dropdown ">
            {category.subs.map((sub) => {
              return (
              <NavDropdown.Item>
                <StyledLink to= {`/${category.url}/${sub.url} `}>{sub.name}</StyledLink>
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



