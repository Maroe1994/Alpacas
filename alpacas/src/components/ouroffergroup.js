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
        <Th>Bilet 3h</Th>
        <Th>Bez limitu</Th>
        <Th>bhgrs</Th>
        <Th >bhgjs</Th>
        <Th >bhgjs</Th>
        
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
        <Th>ulgowy</Th>
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