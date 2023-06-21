import { Global,Menu,Elementsul,Elementsli,Wrapperli,Logo,Wrapperlogomenu,Socialmedia,Fotter,SlideWrapper,ImageBox,Thumbnail,ThumbnailList,Images} from "../stylecomponents/mainsite.style";
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
            <Elementsli>coś tam</Elementsli>
            <Elementsli>coś tam</Elementsli>
            </Wrapperli>
            </Elementsul>
            <Elementsul>Nasze Zwierzaki
           <Wrapperli> 
            <Elementsli>coś tam</Elementsli>
            <Elementsli>coś tam</Elementsli>
            </Wrapperli>
            </Elementsul>
            <Elementsul>Nasze Oferty
            <Wrapperli>
            <Elementsli>coś tam</Elementsli>
            <Elementsli>coś tam</Elementsli>
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
        </Menu><Socialmedia></Socialmedia>
        </Wrapperlogomenu>
        <SlideWrapper>
      <ImageBox>
      
      <Slider/>
      </ImageBox>
      <ThumbnailList>
         
          <Thumbnail/>
       
      </ThumbnailList>
    </SlideWrapper>
        <Fotter>Copyright @2023 The Marek Rogiński</Fotter>

        </>
    )
}