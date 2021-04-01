import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
main {
  min-height: 80vh;
}

body {
  background-color: #ebebeb;
}

.navbar {
  
}

.darkcolor {
  color: ${props => props.theme.colors.dark};
}

footer {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
`
export default GlobalStyle