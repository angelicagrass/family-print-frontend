import React, { useState, useEffect } from 'react'
import { Col, NavDropdown } from 'react-bootstrap'
import fetch from 'node-fetch'
import { StyledLink, MyRow } from './StyledLinks.js'

const Links = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      let res = await fetch(`${process.env.REACT_APP_SERVER_URL}/getmaincategories`)
      res = await res.json()
      setCategories(res)
    }
    fetchCategories()
  },[])

  return (
    <div>
      <MyRow> {categories.map((category, index) => (
        <Col key={index}>
          <NavDropdown key={index} className="" title={category.name} id="basic-nav-dropdown "> {category.subs.map((sub, index) => { return (
            <NavDropdown.Item key={index}>
              <StyledLink to={ `/${category.url}/${sub.url} `} key={index}>{sub.name}</StyledLink>
            </NavDropdown.Item> ) })} </NavDropdown>
        </Col> ))} </MyRow>
    </div>
  )
}

export default Links



