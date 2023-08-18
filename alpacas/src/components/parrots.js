import { Global } from "../stylecomponents/history.style";
import React from "react";
import { Wrapperlogomenu,Logo,Menu,Elementsul,Elementsli,Wrapperli,Socialmedia,Findinput } from "../stylecomponents/mainsite.style";
import { useNavigate } from "react-router-dom";

export function Parrots() {
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
        </>
    )
}