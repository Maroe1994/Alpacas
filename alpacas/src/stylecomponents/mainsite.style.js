import styled, { createGlobalStyle } from "styled-components";

export const Global= createGlobalStyle`
body
{
margin: 0;
background-color:darkgreen ;
}`
export const Wrapperlogomenu=styled.div`
width: 100%;
height:150px;
background-color: #048500;
justify-content: space-between;
display: flex;

`
export const Logo=styled.img`

background-image:url("myaplaca.png"); 
width:230px;
height:120px;
margin-top: 10px;

padding: 0;
`
export const Socialmedia=styled.div`
width: 230px;
height:150px;

`
export const Menu=styled.div`
width:900px;
height: 120px;
margin-top: 5px;
display:flex;
justify-content:space-around;

align-items: center;

`
export const Elementsul=styled.ul`
width: 150px;
height:30px;
border:2px solid greenyellow;
text-align: center;
font-size: 10px;
line-height: 30px;
padding-left: 0;
background-color: greenyellow;
border-radius: 7px ;
font-size: 15px;
cursor: pointer;
font-weight: 700;
&:hover {
li{
display: block;
opacity: 0,4;

  }
}`
export const Elementsli=styled.li`
background-color: yellow;
list-style-type: none;
display: none;
width: 150px;
&:hover{
    ul{
        background-color: antiquewhite;
    }
}


`
export const Wrapperli=styled.div`
width: 150px;
border-radius: 10px;
margin-top: 3px;
`