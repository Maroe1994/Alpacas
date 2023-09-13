import styled, { createGlobalStyle} from "styled-components";

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
position: relative;
`
export const Logo=styled.img`

background-image:url("myaplaca.png"); 
width:230px;
height:120px;
margin-top: 10px;
cursor: pointer;
padding: 0;
`
export const Socialmedia=styled.div`
width: 230px;
height:130px;
display: flex;
justify-content: center;
align-items: center;


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
a{
      text-decoration: none;
    }
`
export const Wrapperli=styled.div`
width: 150px;
border-radius: 10px;
margin-top: 3px;
`


export const Fotter=styled.div`
width: 100%;
height:400px;
text-align: center;

font-size: 25px;
background-color:#558554 ;
font-weight: 700;
display: flex;
justify-content: space-around;

`
export const ImageCaption = styled.span`
  width: 100%;
  text-align: center;
  font-weight: bold;
  position: absolute;
  bottom: 0;
  padding: 8px;
  background: rgba(255, 255, 255, 0.7);
`;

export const ImageBox = styled.div`
  position: relative;
  background-color: #343434;
  width: 100%;
  height: 85%;
  border-radius: 15px;

  img {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    max-width: 100%;
    max-height: 100%;
  }
`;

export const SlideWrapper = styled.div`
  position: relative;
  width: 70vw;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
`;
export const Images=styled.img`
width:70vw;
height:100vh;
border-radius:20px;
border: 3px solid greenyellow;
`

export const Findinput=styled.input`
width: 200px;
height:30px;
-webkit-box-shadow: 9px 7px 40px -8px rgba(66, 68, 90, 1);
-moz-box-shadow: 9px 7px 40px -8px rgba(66, 68, 90, 1);
box-shadow: 9px 7px 40px -8px rgba(66, 68, 90, 1);
border:2px solid blue;
border-radius: 10px;
font-size: 20px;
font-family: "Krub",sans-serif;
::placeholder
{
  color: blueviolet;
  font-weight: 700;
  letter-spacing: 3px;
}
:hover{
  cursor: pointer;
  color:green;
  font-weight: 700;
}
`
export const Title=styled.div`
margin-left:auto;
margin-right: auto;
width:400px;
height: 100px;
font-family: "Verdana", sans-serif;
text-align: center;
line-height: 100px;
font-size: 50px;
font-weight: 700;
margin-bottom: 5px;
padding: 0;
color:olivedrab;
text-decoration: underline;
letter-spacing: 3px;
`
export const Contact=styled.div`
width:250px;
height: 400px;


`
export const Media=styled.div`
width: 250px;
height: 400px;

`
export const Whatever=styled.div`
width:250px;
height:400px;
a{
  text-decoration: none;
  color:black;
}
`
export const Boxinformation=styled.div`
width: 100%;
height:700px;
display: flex;
justify-content: space-between;
margin-top: 100px;
margin-bottom: 100px;
`
export const Aboutus=styled.div`
width: 45%;
height: 600px;
margin-left: 30px;
font-size: 17px;
margin-right: 20px;


`
export const Photobox=styled.div`
width: 60%;
height:600px;
font-family: "Cambria",  sans-serif;
display: grid;
grid-template-columns: 300px 200px 300px;
grid-template-rows: 200px 250px 100px;
column-gap: 10px;
row-gap: 10px;
margin-top: 50px;
`
export const Tel=styled.div`
width:250px;
height:50px;
text-decoration: overline;

display: flex;

align-items: center;
font-size: 13px;
margin-top: 100px;



`
export const Email=styled.div`
width: 250px;
height:50px;
font-size: 13px;
text-decoration: overline;
display: flex;
margin-top: 30px;
align-items: center;
`
export const Adress=styled.div`
width: 250px;
height:50px;
font-size: 13px;
text-decoration: overline;
display: flex;
margin-top: 30px;
align-items: center;

`
export const Facebook=styled.div`
width: 250px;
height:50px;
font-size: 13px;
margin-top: 100px;
display: flex;
margin-top: 100px;
align-items: center;
:hover{
  cursor: pointer;
  color:whitesmoke;
  transform: scale(1.2);
}
`
export const Instagram=styled.div`
width: 250px;
height:50px;
font-size: 13px;
display: flex;
margin-top: 30px;
align-items: center;
:hover{
  cursor: pointer;
  color:whitesmoke;
  transform: scale(1.2);
}
`
export const Tictok=styled.div`
width: 250px;
height:50px;
font-size: 13px;

display: flex;
margin-top: 30px;
align-items: center;
:hover{
  cursor: pointer;
  color:whitesmoke;
  transform: scale(1.2);
}
`

export const Politic=styled.div`
width: 150px;
height:50px;
font-size: 15px;
display: flex;
margin-top: 50px;
align-items: center;
text-decoration: underline 0.2em rgba(0, 0, 0, 0);
transition: opacity 300ms, transform 300ms;
:hover{
  color:white;
  text-underline-offset: 0.5em;
  cursor: pointer;
  text-decoration-color: greenyellow;
  transition: text-decoration-color 700ms;
  
}

`

export const Histories=styled.div`
width: 70px;
height:50px;
font-size: 15px;
display:flex;
margin-top: 20px;
align-items: center;
text-decoration: underline 0.2em rgba(0, 0, 0, 0);
padding: 0;
:hover{
  color:white;
  text-underline-offset: 0.5em;
  cursor: pointer;
  text-decoration-color: greenyellow;
  transition: text-decoration-color 700ms;
}
`

export const Rules=styled.div`
width: 80px;
height:50px;
font-size: 15px;
display: flex;
margin-top: 20px;
align-items: center;
text-decoration: underline 0.2em rgba(0, 0, 0, 0);
padding: 0;
:hover {
  color:white;
  text-underline-offset: 0.5em;
  cursor: pointer;
  text-decoration-color: greenyellow;
  transition: text-decoration-color 700ms;
  
}
`

export const Copyright=styled.div`
width: 250px;
height:50px;
font-size: 15px;
display: flex;
margin-top: 20px;
align-items: center;
text-decoration: underline 0.2em rgba(0, 0, 0, 0);
padding: 0;
:hover{
  color:white;
  text-underline-offset: 0.5em;
  cursor: pointer;
  text-decoration-color: greenyellow;
  transition: text-decoration-color 700ms;
}
`

export const Firstphoto=styled.img`
width:100%;
height:100%;
align-self: stretch;
border-radius: 10px;
`
export const Secondphoto=styled.img`
width:100%;
height:100%;
align-self: stretch;
border-radius:10px;
`
export const Thirdphoto=styled.img`
width:100%;
height:100%;
align-self: stretch;
border-radius: 10px;
`
export const Fourthphoto=styled.img`
width:100%;
height:100%;
align-self: stretch;
border-radius: 10px;
`
export const Fivephoto=styled.img`
width:100%;
height:100%;
align-self: stretch;
border-radius: 10px;
grid-row:2/3;
grid-column: 2/4;
`