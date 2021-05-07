
import styled from 'styled-components'

export const ContainerDiv = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: top;
  flex-wrap: wrap;
  padding: 30px;
  height: 400px;
`

export const CardDiv = styled.div`
  position: relative;
  max-width: 300px;
  height: 215px;
  background: #fff;
  margin-right: 10px;
  margin-left: 10px;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 20px rgba(0,0,0,0.5);
  transition: 0.3s ease-in-out;

&:hover {
  height: 420px;
}
`

export const ImgDiv = styled.div`
  position: relative;
  width: 260px;
  top: -60px;
  z-index: 1;
  box-shadow: 0 5px 20px rgba(0,0,0,0.2);
`

export const TheImg = styled.img`
  max-width: 100%;
  border-radius: 4px;
  padding: 10px 15px;
  text-align: center;
  filter: saturate(80%);
`

export const ContentDiv = styled.div`
  position: relative;
  margin-top: -140px;
  color: #111;
  visibility: hidden;
  opacity: 0;
  transition: 0.3 ease-in-out;
`