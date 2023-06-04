import styled, { createGlobalStyle } from "styled-components";

export const Global= createGlobalStyle`
body
{
margin: 0;
}`

export const Menu=styled.div`
width:800px;
height: 100px;
margin-left: auto;
margin-right: auto;
display:flex;
justify-content:space-around;
border:3px solid red;
align-items: center;
`
export const Elementsul=styled.ul`
width: 100px;
height:30px;
border:2px solid greenyellow;
text-align: center;
font-size: 10px;
line-height: 30px;
padding-left: 0;
background-color: greenyellow;
border-radius: 7px ;
cursor: pointer;
font-weight: 700;
`
export const Elementsli=styled.li`
background-color: aqua;
list-style-type: none;
border-radius: 7px;
`