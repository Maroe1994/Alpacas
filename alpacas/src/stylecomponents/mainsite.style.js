import styled, { createGlobalStyle, css } from "styled-components";

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
line-height: 200px;
font-size: 25px;
background-color:#558554 ;
font-weight: 700;
display: flex;
justify-content: space-around;

`
export const ThumbnailList = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;
  height: 15%;
`;
 export const Thumbnail = styled.div`
  cursor: pointer;
  opacity: ${({ active }) => (active ? 1 : 0.6)};
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  flex-grow: 1;

  :hover {
    opacity: 1;
  }
`;

export const NavButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 45%;
  padding: 5px;
  border-radius: 3px;
  border: none;
  background: rgba(255, 255, 255, 0.7);

  ${({ position }) =>
    position === 'left' &&
    css`
      left: 10px;
    `}

  ${({ position }) =>
    position === 'right' &&
    css`
      right: 10px;
    `}
`;

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
border: 3px solid black;
`
export const Media=styled.div`
width: 250px;
height: 400px;
border: 3px solid red;
`
export const Whatever=styled.div`
width:250px;
height:400px;
border:3px solid blue;

`
export const Boxinformation=styled.div`
width: 100%;
height:600px;
display: flex;
justify-content: space-between;
`
export const Aboutus=styled.div`
width: 50%;
height: 600px;
border: 3px solid violet;
font-size: 18px;

`
export const Photobox=styled.div`
width: 50%;
height:600px;
border: 5px solid black;
font-family: "Cambria",  sans-serif;
display: grid;
`