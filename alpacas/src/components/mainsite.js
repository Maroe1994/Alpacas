import { Global,Menu,Elementsul,Elementsli,Wrapperli,Logo,Wrapperlogomenu,Socialmedia,Fotter,SlideWrapper,ImageBox,Findinput,Title} from "../stylecomponents/mainsite.style";
import {  useNavigate } from "react-router-dom";
import React from "react";

import { Slider } from "./slider";



export function Mainsite () {
    const navigate = useNavigate();
    const navigateToHistory = () => {
        navigate("/Historia");
      };
      const navigatetoMain= () => {
        navigate("/");
      }
      
      
  
    
    return(
        <>
        <Global/><Wrapperlogomenu>
        <Logo onClick={navigatetoMain} src="myaplaca.png"></Logo>
        <Menu>
            <Elementsul onClick={navigateToHistory}>O nas
            <Wrapperli>
            <Elementsli>Historia</Elementsli>
            <Elementsli>Regulamin</Elementsli>
            <Elementsli>Polityka prywatności</Elementsli>
            </Wrapperli>
            </Elementsul>
            <Elementsul>Nasze Zwierzaki
           <Wrapperli> 
            <Elementsli>Alpaki</Elementsli>
            <Elementsli>Papugi</Elementsli>
            </Wrapperli>
            </Elementsul>
            <Elementsul>Nasze Oferty
            <Wrapperli>
            <Elementsli>Oferta grupowa</Elementsli>
            <Elementsli>Dla szkół</Elementsli>
            <Elementsli>Dla rodzin</Elementsli>
            <Elementsli>Oferta indywidualna</Elementsli>
            </Wrapperli>
            </Elementsul>
            <Elementsul>Galeria
            <Wrapperli>
            <Elementsli>coś tam</Elementsli>
            <Elementsli>coś tam</Elementsli>
            </Wrapperli>
            </Elementsul>
            <Elementsul>Kontakt
            <Wrapperli>
            <Elementsli>coś tam</Elementsli>
            <Elementsli>coś tam</Elementsli>
            </Wrapperli>
            </Elementsul>
        </Menu><Socialmedia>
        <Findinput placeholder="Szukaj..."/>
        </Socialmedia>
        </Wrapperlogomenu>
        <Title>My Alpaca</Title>
        <SlideWrapper>
      <ImageBox>
      
      <Slider/>
      </ImageBox>
      
    </SlideWrapper>
        <Fotter>Copyright @2023 The Marek Rogiński</Fotter>

        </>
    )
}