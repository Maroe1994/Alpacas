import styled from "styled-components";

export const Tables=styled.table`
width:auto;
height:500px;

margin-left: auto;
margin-right: auto;
margin-top: 50px;
margin-bottom: 80px;
`
export const Tr=styled.tr`
width:100px;
height:50px;

:first-child{
    background-color: gray;
 
    width: 100px;
    height: 100px;
}

`
export const Th=styled.th`
width:200px;
height: 50px;
border:1px solid orange;
:first-child{
    border-bottom: none;
    border-top: none;
    border-right: none;
}
:last-child{
    border-bottom: 1px solid orange;
}


`
export const Td=styled.td`
width:100px;
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
border-radius:50%;
width: 100px;
height: 100px;
display: flex;
justify-content: center;
margin-top: 30px;
`
export const Titlewrapper=styled.div`
width: 600px;
height: 150px;
display: flex;
justify-content: center;
margin-left: auto;
margin-right: auto;



`