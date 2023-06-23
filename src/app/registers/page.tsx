"use client"

import { BtnStyled, CardStyled, ContainerBtn, ContainerSum, SumStyled } from '@/components/styles/registers';
import SideBar from '@/components/sideBar';

export default function CardGeneral() {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <CardStyled style={{ gap: "30px", display: "flex", flexDirection: "column" }} >
        <ContainerSum>
          <SumStyled></SumStyled>
          <SumStyled></SumStyled>
          <SumStyled></SumStyled>
        </ContainerSum>
        <ContainerBtn>
            <BtnStyled>Novo Cliente</BtnStyled>
            <BtnStyled>Novo Condutor</BtnStyled>
            <BtnStyled>Novo Veiculo</BtnStyled>
        </ContainerBtn>
      </CardStyled>
    </div>
  )
}