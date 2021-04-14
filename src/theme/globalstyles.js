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

.dropdown-toggle {
  position: relative !important;
  text-decoration: none;
}


.dropdown-toggle::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: black;
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.4s ease-in-out 0s;
}
.dropdown-toggle:hover::before {
  visibility: visible;
  transform: scaleX(1);
}
`
export default GlobalStyle