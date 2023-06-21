import styled from "styled-components";

export const Container = styled.div`
height: 100vh;
background: black;
// border-right: solid 3px #ccb120;
`

export const ContentButton = styled.div`
display: flex;
flex-direction: column;
padding: 5px;
gap: 10px;
margin-top: 4rem;
`

export const HeaderIcon = styled.div`
position: relative;
margin-top: 30px;
display: flex;
justify-content: flex-end;
`

export const ContainerIcon = styled.div`
position: absolute;
color: white;
`


export const ButtonSide = styled.button`
align-items: center;
display: flex;
height: 40px;
justify-content:center;
color:whitesmoke;
background: #050508;
border-radius:5px;
border: 1px solid #5d5d00;
  &:hover{
    background: #5d5d00;
  }
`
export const TextSide = styled.div`
align-items: center;
text-decoration: none;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  `

export const IconButton = styled.div`
  display: flex;
  margin-right: 10px;
  flex-direction: column;
  align-items: flex-end;
  text-decoration: none;
  color: #ccb120;
  `

export const IconButtonColapse = styled.div`
  display: flex;
  margin-left: 10px;
  flex-direction: column;
  align-items: flex-end;
  text-decoration: none;
  color: #FFD700;

  :hover{
    color: white;
  `

export const ButtonStyle = styled.button`
  display: flex;
  height: 45px;
  border-radius: 10px;
  align-items:center;
  flex-direction: row;
  text-decoration: none;
  gap: 10px;

  :hover{
    background: #1C1C1C;
    color: black;
  }
`

export const ButtonStyleColapse = styled.button`
  display: flex;
  height: 45px;
  border-radius: 10px;
  background: none;
  align-items:center;
  flex-direction: row;
  text-decoration: none;
  gap: 5px;

  :hover{
    background: #1C1C1C;
    color: black;
  }
`

export const TextButton = styled.div`
align-items: center;
color: #F0F8FF;
font-weight: bold;

:hover{
  color: #ccb120;
}
`