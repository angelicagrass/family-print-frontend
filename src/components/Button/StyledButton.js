import styled from 'styled-components'

export const StyledButton = styled.button`
  padding:0.6em 1.3em;
  width: ${props => props.block ? "100%" : "200px"};
  font-size: 1rem;
  background: ${props => props.theme.colors.main};
  outline: none;
  border: none;
  color: white;
  border-radius: 1px;
  transition: all 0.6s;
  height: 45px;

&:hover {
  background: ${props => props.theme.colors.lightmain};
}

&:active {
  background: black;
}


${props => props.buttonType === 'primary' && {
  minWidth: "280px",
  width: "fit-content",
  marginTop: "10px",
  marginLeft: "5px",
  marginRight: "5px",
  background: props.theme.colors.main,
  color: props.theme.fontColors.main,
  ":hover": {
    background: props.theme.colors.mainHover,
    color: props.theme.fontColors.mainHover,
  }
}}

${props => props.buttonType === 'close' && {

  width: "fit-content",
  marginTop: "-35px",
  marginRight: "-10px",
  background: "none",
  color: "red",
  float: "right",
  padding: "0",
  ":hover": {
    background: "none",
  }
}}

`