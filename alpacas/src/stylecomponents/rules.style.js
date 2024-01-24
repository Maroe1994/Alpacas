import styled, {createGlobalStyle} from "styled-components";

export const Global= createGlobalStyle`
body
{
margin: 0;
background-color:#23ab0e ;
}`


export const Textrules=styled.div`
width: 1000px;

margin-left: auto;
margin-right: auto;
text-align: center;
border:3px solid rebeccapurple;
font-size: 20px;
margin-top: 50px;
font-weight: bold;
`
export const Wrappermodal=styled.div`
width: 1400px;
height:400px;
display: flex;
justify-content: space-between;
margin-left: auto;
margin-right: auto;
margin-top: 20px;
`

export const Titlephoto=styled.caption`
width: 400px;
text-align: center;

`
export const Figurephoto=styled.figure`


`
export const Figcaptionphoto=styled.figcaption`
text-align: center;
font-size: 20px;
font-weight: 600;
margin-top: 10px;
color: ivory;
`
export const Titlegalleries=styled.div`
margin-left: auto;
margin-right: auto;
width: 500px;
height:50px;
text-align: center;
font-size: 40px;
letter-spacing: 3px;
font-weight: 800;
margin-top: 30px;
`