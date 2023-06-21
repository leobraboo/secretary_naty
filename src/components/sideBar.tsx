"use client"
import * as S from "./styles/sideBar";
import { useState } from "react";
import ArrowForwardIosTwoToneIcon from '@mui/icons-material/ArrowForwardIosTwoTone';
export default function SideBar() {
  const [open, setOpen] = useState(false);
  return (
    <S.Container  >
      <S.HeaderIcon style={{ width: open ? "13rem" : "3rem", transition: "ease-in 500ms" }} onClick={() => setOpen(!open)}>
        <S.ContainerIcon style={{ rotate: open ? "180deg" : "0deg", transition: "ease-in 500ms" }}>
          <ArrowForwardIosTwoToneIcon />
        </S.ContainerIcon>
      </S.HeaderIcon>
      <S.ContentButton >
        <S.ButtonSide >
          <S.TextSide style={{ fontSize: open ? "16px" : "0px", transition: "ease-in 500ms" }}>Início</S.TextSide>
        </S.ButtonSide>
        <S.ButtonSide >
          <S.TextSide style={{ fontSize: open ? "16px" : "0px", transition: "ease-in 500ms" }}>Cadastros</S.TextSide>
        </S.ButtonSide>
      </S.ContentButton>
    </S.Container>
  )
}