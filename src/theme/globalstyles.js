import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
main {
  min-height: 80vh;
}

body {
  background-color: #ebebeb;
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

.mycontainer .mycard:hover {
  height: 420px;
}

.mycontainer .mycard:hover .mycontent {
  visibility: visible;
  opacity: 1;
  margin-top: -40px;
  transition-delay: 0.4s;
}
 



`
export default GlobalStyle