import styled, {createGlobalStyle} from "styled-components";

export const Global= createGlobalStyle`
body
{
margin: 0;
background-color:#23ab0e ;
}`



export const Titlepolitic=styled.div`
justify-content: center;
display: flex;
font-weight: 700;
font-size: 40px;
font-family: Georgia, sans-serif;
text-decoration: underline;
margin-top: 30px;
margin-bottom: 30px;
h3{
    margin-bottom:10px;
}
h6{
    margin-top: 10px;
    font-family: Georgia, sans-serif ;
    font-size: 25px;
}
`
export const Firstacapit=styled.div`
margin-left: auto;
margin-right: auto;
width: 1200px;
font-size: 20px;

font-weight: 500;
font-family: Verdana, sans-serif ;
span{
    color:#003d75;
    font-weight: 600;
    }
a{
    text-decoration: none;
}
`
export const Secondacapit=styled.div`
width: 1200px;
font-size: 20px;
font-family: Verdana, sans-serif ;
margin-left: auto;
margin-right: auto;
font-weight: 500;
li :first-child span {
    color:blue;
    
}
`
export const Thirdacapit=styled.div`
width:1200px;
margin-left: auto;
margin-right: auto;
font-size: 20px;
font-weight: 500;

`
export const Fouracapit=styled.div`
width:1200px;
margin-left: auto;
margin-right: auto;
font-size: 20px;
font-weight:500 ;
color:#003d75;
span{
    font-weight: 800;
    font-size: 25px;
}
`