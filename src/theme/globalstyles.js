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
  color: ${props => props.theme.colors.main};
}

footer {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

.nav-item {
  margin-right: 0px;
  padding: 0px;
  min-width: 100px;
}

.navbar-toggler {
  border: none;
}

`
export default GlobalStyle