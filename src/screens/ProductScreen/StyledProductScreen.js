import styled from 'styled-components'

export const MyDiv = styled.div`
  float: left;
  margin-top: -4vh;
  cursor: pointer;
  color: ${props => props.theme.colors.main};
  transition: all 0.4s;

&:hover {
  color: ${props => props.theme.colors.lightmain};
}
`

export const ThumbImagesDiv = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  cursor: pointer;
  margin: 10px;
  justify-content: center;
`

export const MyImage = styled.img`
  width: 90px;
  height: 100%;
  display: block;
  object-fit: cover;
  border: 1px solid #ddd;
  margin: 5px 5px;
  opacity: 0.7;
  border-radius: 5px;
  
  &:active {
    opacity: 1;
    border: 3px solid ${props => props.theme.colors.main};
  }
  &:hover {
    opacity: 1;
  }
`
export const InfoDiv = styled.div`
  padding-top: 40px;
`