import { Global } from "../stylecomponents/history.style";
import React from "react";
import { Wrapperlogomenu,Logo,Menu,Elementsul,Elementsli,Wrapperli,Socialmedia,Findinput,Fotter,Contact,Email,Tel,Adress,Media,Facebook,Instagram,Tictok,Whatever,Politic,Histories,Rules,Copyright } from "../stylecomponents/mainsite.style";
import { useNavigate } from "react-router-dom";
import { Propsmodal } from "./propsmoda";
import { Wrappermodal,Figurephoto,Figcaptionphoto,Titlegalleries } from "../stylecomponents/rules.style";

export function Galeries() {
  const imagesArray =  [{ src: "animala.jpg",id:1},
  { src: "animald.jpg",id:2 },
  {src:"animalc.jpg",id:3}
];

const nextArray = [{ src: "animalb.jpg",id:1 },
  { src: "animala.jpg",id:2 },
  { src: "animalc.jpg",id:3 },
  {src:"animale.jpg", id:4}
];

const Firsttitlephoto="animala.jpg"
const Secondtitlephoto="animale.jpg"
const Thirdtitlephoto="animald.jpg"



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
      const navigatetoOffer= () => {
        navigate("/Nasza_oferta")
      };
      const navigatetoGaleries= () => {
        navigate("/Galeria")
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
        <Titlegalleries>Nasza Galeria:</Titlegalleries>
      <Wrappermodal>
    <Figurephoto> <Propsmodal src={Firsttitlephoto} arr={imagesArray}/>
    <Figcaptionphoto>Papugi</Figcaptionphoto>
    </Figurephoto> 
    <Figurephoto>  <Propsmodal src={Secondtitlephoto} arr={nextArray}/>
    <Figcaptionphoto>Orki</Figcaptionphoto>
    </Figurephoto>
    <Figurephoto>  <Propsmodal src={Thirdtitlephoto}  arr={nextArray}/>
    <Figcaptionphoto>Tukany</Figcaptionphoto>
    </Figurephoto>
      </Wrappermodal>
        
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