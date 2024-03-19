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
        <Th>15zł</Th>
        <Th>25zł</Th>
        <Th>35zł</Th>
        <Th>40zł</Th>
        <Th>50zł</Th>
        
    </Tr>
    <Tr>
        <Th>uczniowski</Th>
        <Th>10zł</Th>
        <Th>15zł</Th>
        <Th>20zł</Th>
        <Th>25zł</Th>
        <Th>30zł</Th>
    </Tr>
    <Tr>
        <Th>studencki</Th>
        <Th>12zł</Th>
        <Th>18zł</Th>
        <Th>24zł</Th>
        <Th>32zł</Th>
        <Th>40zł</Th>
    </Tr>
    <Tr>
        <Th>Dla Emerytów i Rencistów</Th>
        <Th>5zł</Th>
        <Th>10zł</Th>
        <Th>15zł</Th>
        <Th>20zł</Th>
        <Th>25zł</Th>
        
    </Tr>
        </Tables>
        </>
    )
}