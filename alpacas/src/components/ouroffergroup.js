import React from "react";
import {Titleicon, Tables,Th,Tr,Titlewrapper } from "../stylecomponents/ouroffergroup.style";
import styled from 'styled-components';


const StyledText = styled.div`
  
  font-size: 30px;
  color: #333;
 display: flex;
 justify-content: center;
 align-items: center;
 margin-top: 20px;
 background: linear-gradient(80deg,#bd1c4c,#bd1cbd);
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;
letter-spacing: 3px;
font-weight: 500;


`;

export function Offergroup (props) {
    return(
           
        <><Titlewrapper>
            <Titleicon src={props.src}/>
        <StyledText>{props.text}</StyledText>
        </Titlewrapper>
        <Tables>
    <Tr  >
        <Th rowSpan={"6"}>Codziennie</Th>
        <Th>Rodzaj biletu</Th>
        <Th>Bilet 1h</Th>
        <Th>Bilet 2h</Th>
        <Th>Bilet 3h</Th>
        <Th >Bilet 4h</Th>
        <Th >Bez limitu</Th>
        
    </Tr>
    <Tr>
        <Th >normalny</Th>
        <Th>bhgrs</Th>
        <Th>bhgrs</Th>
        <Th>bhgrs</Th>
        <Th>bhgrs</Th>
        <Th>bhgrs</Th>
        
    </Tr>
    <Tr>
        <Th>uczniowski</Th>
        <Th>bhgrs</Th>
        <Th>bhgrs</Th>
        <Th>bhgrs</Th>
        <Th>bhgrs</Th>
        <Th>bhgrs</Th>
    </Tr>
    <Tr>
        <Th>studencki</Th>
        <Th>bhgrs</Th>
        <Th>bhgrs</Th>
        <Th>bhgrs</Th>
        <Th>bhgrs</Th>
        <Th>bhgrs</Th>
    </Tr>
    <Tr>
        <Th>bhgrs</Th>
        <Th>bhgrs</Th>
        <Th>bhgrs</Th>
        <Th>bhgrs</Th>
        <Th>bhgrs</Th>
        <Th>bhgrs</Th>
        
    </Tr>
        </Tables>
        </>
    )
}