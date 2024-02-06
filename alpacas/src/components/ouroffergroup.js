import React from "react";
import {Titleicon, Tables,Th,Tr } from "../stylecomponents/ouroffergroup.style";
import styled from 'styled-components';


const StyledText = styled.div`
  
  font-size: 30px;
  color: #333;
 text-align: center;
 margin-top: 20px;
 background: linear-gradient(80deg,#bd1c4c,#bd1cbd);
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;
letter-spacing: 3px;
font-weight: 500;
`;

export function Offergroup (props,src) {
    return(
           
        <><Titleicon src={src}/>
        <StyledText>{props.text}</StyledText>
        <Tables>
    <Tr>
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
        
    </Tr>
    <Tr>
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
    </Tr>
    <Tr>
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