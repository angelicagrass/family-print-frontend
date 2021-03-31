import React from 'react'
import { Row, Col } from 'react-bootstrap'
import categories from '../categorytest.js'
import slugify from 'slugify'

const Links = () => {
  return (
    <div>
      <Row>
      {categories.map(category => (
        <Col>
          <a href={'/' + slugify(category.name, {
            lower: true,
           }
          )}>{category.name}</a>
        </Col>
      ))} 
      </Row>
    </div>
  )
}

export default Links



