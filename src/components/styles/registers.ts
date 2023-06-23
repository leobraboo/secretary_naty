import { Card } from '@mui/material'
import styled from "styled-components";
import Button from '@mui/material/Button';

export const CardStyled = styled(Card)`
background:#121214;
height: 95vh;
width: 100%;
border-radius: 20px 0 0 20px;
margin: auto;
border: 1px solid #5d5d00;
border-right: none;
`

export const BtnStyled = styled(Button)`
border: 1px solid #c1c109;
color: #c1c109;
width: 25%;
height: 40px;
`

export const ContainerBtn = styled.div`
height: 60px;
width: 100%;
gap: 30px;
display: flex;
justify-content: center;
align-items: center;
padding-bottom: 30px;
border-bottom: 1px dashed #c1c109;
`

export const SumStyled = styled(Button)`
border: 2px solid #c1c109;
color: #c1c109;
width: 25%;
height: 70px;
`

export const ContainerSum = styled.div`
height: 60px;
width: 100%;
margin-top: 50px;
gap: 30px;
display: flex;
justify-content: center;
align-items: center;
`

