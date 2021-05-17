import React, { useState } from 'react'
import { StateContext } from '../../globalstate/GlobalState.js'
import Button from '../Button/Button.js'
import { Form } from 'react-bootstrap'
import { Wrapper, DiscountDiv } from './StyledDiscountBox.js'

const DiscountBox = (props) => {
  const { animation, setAnimation } = React.useContext(StateContext)
  const { discount, setDiscount } = React.useContext(StateContext)
  const [formValue, setFormValue] = useState()

  const handleChange = (e) => {
    setFormValue(e.target.value)
  }

  const handleSubmit = (e) => {
    setDiscount(formValue)
    setAnimation(false)
  }


  return (
  <Wrapper> {animation &&
    <DiscountDiv>
      <Button buttonType='close' onClick={()=> {setAnimation(false)}}><i class="fas fa-times"></i></Button>
      <Form>
        
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Ange din värdekdod</Form.Label>
          <Form.Control type="value" onChange={handleChange} placeholder="" />
          <Form.Text className="text-muted"> Var noga med små och stora bokstäver. </Form.Text>
        </Form.Group>
      </Form>
      <Button onClick={() => {handleSubmit()}}>GE MIG RABATT</Button>
      
    </DiscountDiv>} 
  </Wrapper>
  )
}

export default DiscountBox