import styled from 'styled-components'

export const GlassDiv = styled.div`
  position: relative;
  width: 400px;
  height: 200px;
  background-color: rgba(255,255,255,0.1);
  padding: 50px;
  margin-top: -380px;
  margin-left: -5vh;
  z-index: 100000;
  border-radius: 8px;
  backdrop-filter: blur(10px);
  border: 2px solid transparent;
  background-clip: padding-box;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
  line-height: 1.5;
  color: white;
  font-weight: 900;
  font-size: 3vh;

@-moz-document url-prefix() {
  background-color: rgba(255,255,255,0.1);
}

@media only screen and (max-width: ${props => props.theme.screen.medium}) {
  display: none;
  font-size:1px;
}
`