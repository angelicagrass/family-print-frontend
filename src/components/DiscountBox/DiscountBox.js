import React from 'react'
import { StateContext } from '../../globalstate/GlobalState.js'
import Button from '../Button/Button.js'
import { Form } from 'react-bootstrap'
import { Wrapper, DiscountDiv } from './StyledDiscountBox.js'

const DiscountBox = (props) => {
  const { animation, setAnimation } = React.useContext(StateContext)

  return (
  <Wrapper> {animation &&
    <DiscountDiv>
      <Form>
        <Button onClick={()=> {setAnimation(false)}}>close</Button>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Ange din värdekdod</Form.Label>
          <Form.Control type="value" placeholder="" />
          <Form.Text className="text-muted"> Var noga med små och stora bokstäver. </Form.Text>
        </Form.Group>
      </Form>
      <Button type='submit'>GE MIG RABATT</Button>
    </DiscountDiv>} 
  </Wrapper>
  )
}

export default DiscountBox