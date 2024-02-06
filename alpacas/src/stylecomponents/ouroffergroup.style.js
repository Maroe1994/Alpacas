import styled from "styled-components";

export const Tables=styled.table`
width:800px;
height:500px;

margin-left: auto;
margin-right: auto;
margin-top: 50px;
margin-bottom: 80px;
`
export const Tr=styled.tr`
width:80px;
height:40px;

:first-child{
    background-color: gray;
    border-bottom: 3px dashed blue;
    width: 100px;
    height: 100px;
}
:nth-child(3){
    border-left: 3px dashed blue;
}
`
export const Th=styled.th`
width:50px;
height: 50px;
border:1px solid orange;
:nth-child(3){
    border-left: 3px dashed blue;
}
:first-child{
    border-bottom: 3px dashed blue;
    height: 100px;
}

`
export const Td=styled.td`
width:50px;
height:50px;
border:2px solid violet;
`
export const Titleoffer=styled.div`
width: 400px;
height: 80px;
margin-left: auto;
margin-right: auto;
text-align: center;
margin-top: 20px;
font-size:50px;
font-weight: 800;
background: linear-gradient(80deg,#bd1c4c,#bd1cbd);
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;
letter-spacing: 3px;
`
export const Titleicon=styled.img`
border:50%;
width: 100px;
height: 100px;
margin-left: 500px;


`