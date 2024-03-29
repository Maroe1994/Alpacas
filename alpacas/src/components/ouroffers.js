import { Global } from "../stylecomponents/history.style";
import React from "react";
import { Wrapperlogomenu,Logo,Menu,Elementsul,Elementsli,Wrapperli,Socialmedia,Findinput,Fotter,Contact,Email,Tel,Adress,Media,Facebook,Instagram,Tictok,Whatever,Politic,Histories,Rules,Copyright } from "../stylecomponents/mainsite.style";
import { useNavigate } from "react-router-dom";
import { Offergroup } from "./ouroffergroup";
import { Titleoffer, Boxinformationoffer } from "../stylecomponents/ouroffergroup.style";

export function Ouroffer() {
    const navigate = useNavigate();
    const navigateToHistory = () => {
        navigate("/Historia");
      };
      const navigatetoMain= () => {
        navigate("/");
      };
      const navigatetoRules= () => {
        navigate("/Regulamin");
      };
      const navigatetoPolitic= () => {
        navigate("/Polityka_prywatności");
      };
      const navigatetoParrots= () => {
        navigate("/Papugi");
      };
      const navigatetoAlpacas= () => {
        navigate("/Alpaki");
      };
      const navigatetoGaleries= () => {
        navigate("/Galeria")
      }
      const navigatetoOffer= () => {
        navigate("/Nasza_oferta")
      };
      const navigatetocontact= ( ) => {
        navigate("/Kontakt")
       }
      
    return (
        <>
        <Global/><Wrapperlogomenu>
        <Logo onClick={navigatetoMain} src="myaplaca.png"></Logo>
        <Menu>
            <Elementsul >O nas
            <Wrapperli>
            <Elementsli onClick={navigateToHistory}>Historia</Elementsli>
            <Elementsli onClick={navigatetoRules}>Regulamin</Elementsli>
            <Elementsli onClick={navigatetoPolitic}>Polityka prywatności</Elementsli>
            </Wrapperli>
            </Elementsul>
            <Elementsul>Nasze Zwierzaki
           <Wrapperli> 
            <Elementsli onClick={navigatetoAlpacas}>Alpaki</Elementsli>
            <Elementsli onClick={navigatetoParrots}>Papugi</Elementsli>
            </Wrapperli>
            </Elementsul>
            <Elementsul onClick={navigatetoOffer}>Nasze Oferty
            <Wrapperli>
            <Elementsli>Oferta grupowa</Elementsli>
            <Elementsli>Dla szkół</Elementsli>
            <Elementsli>Dla rodzin</Elementsli>
            <Elementsli>Oferta indywidualna</Elementsli>
            </Wrapperli>
            </Elementsul>
            <Elementsul onClick={navigatetoGaleries}>Galeria
           
            </Elementsul>
            <Elementsul onClick={navigatetocontact}>Kontakt
           
            </Elementsul>
        </Menu><Socialmedia>
        <Findinput placeholder="Szukaj"/>
        </Socialmedia>
        </Wrapperlogomenu>
       <Titleoffer>Cennik</Titleoffer>
        <Offergroup src="icongroup.jpg" text="Oferta indywidualna" />
        <Boxinformationoffer><span>Zniżka studencka</span>-po okazaniu ważnej legitymacji studenckiej 51% zniżki od biletu normalnego</Boxinformationoffer>
        <Boxinformationoffer><span>Zniżka uczniowska</span>-po okazaniu ważnej legitymacji studenckiej 37% zniżki od biletu normalnego</Boxinformationoffer>
        <Boxinformationoffer><span>Zniżka dla Emerytów i Rencistów</span>-po okazaniu ważnego dokumentu 70% zniżki od biletu normalnego, natomiast seniorzy od 70 roku życia wchodzą za darmo</Boxinformationoffer>
      <Fotter>
        <Contact>
          <Tel><img src="tel.png" alt="" width="40" height="40" margin-right="10"/>+48 531-610-730</Tel>
          <Email><img src="email.png" alt="" width="40" height="40" />marekroginski1994@gmail.com</Email>
          <Adress><img src="map1.png" alt="" width="40" height="40"  />ul. Witosławy 12 81-601 Gdynia</Adress>
        </Contact>
      <Media>
       <Facebook> <img src="facebook.png" alt="" width="40" height="40"/>Facebook </Facebook>
       <Instagram> <img src="instagram.png" alt="" width="40" height="40"/>Instagram</Instagram>
       <Tictok> <img src="ticktok.png" alt="" width="40" height="40"/>Ticktock</Tictok>
      </Media>
<Whatever>
<a href="/Polityka_prywatności" target="blank" > <Politic  onClick={navigatetoPolitic}>Polityka prywatności</Politic></a>
<a href="/Historia" target="blank"> <Histories onClick={navigateToHistory}>Historia</Histories></a>
<a href="/Regulamin" target="blank"> <Rules onClick={navigatetoRules}>Regulamin</Rules></a>
<Copyright>Copyright © 2023 Marek Rogiński</Copyright>
</Whatever>
      </Fotter>

        </>
    )
}