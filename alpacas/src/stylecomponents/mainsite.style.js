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


export const Fotter=styled.div`
width: 100%;
height:200px;
text-align: center;
line-height: 200px;
font-size: 25px;
background-color:#558554 ;
font-weight: 700;

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
  margin-top: 90px;
`;
export const Images=styled.img`
width:70vw;
height:80vh;
border:10px
`


