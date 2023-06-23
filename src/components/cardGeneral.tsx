"use client"
import Image from 'next/image';
import truckBg from '../assets/fundo_brancotrucks-removebg-preview.png'
import { CardStyled } from '@/components/styles/registers';
export default function CardGeneral() {
  return (
    <CardStyled>
      <div style={{ color: "red", height: "65%", width: "100%" }}>home</div>
      <div style={{
        display: "flex", height: "200px", width: "100%", justifyContent: "flex-end",
        alignItems: "flex-end"
      }}>
        <Image src={truckBg} alt="truck bg" style={{ display: "flex", height: "100px", width: "50%" }} />
      </div>
    </CardStyled>
  )
}