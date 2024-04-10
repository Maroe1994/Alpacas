import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  body {
    margin: 0;
    background-color: darkgreen;
  }

  @media screen and (max-width: 600px) {
    body {
      background-color: lightblue; // Dostosuj kolor dla mniejszych ekranów
    }
  }
`;

export const Wrapperlogomenu = styled.div`
  width: 100%;
  height: 100px;
  background-color: #048500;
  justify-content: space-between;
  display: flex;
  position: relative;
  top: 0;
  position: sticky;
  z-index: 100;
  align-items: center;
 
  
  @media screen and (max-width: 768px){
width: 100%;
overflow-x:hidden;
height: 100px;

align-items: center;
justify-content:space-between;



  }
  @media screen and (max-width: 1380px){
width: 100%;
overflow-x:hidden;
height: auto;

  }
`;
export const Logo = styled.img`
  background-image: url("myaplaca.png");
  width: 230px;
  height: 120px;
  
  cursor: pointer;
  padding: 0;
  display: flex;
    align-items: center;
    justify-content: center;

  @media screen and (max-width: 580px) {
    width: 100px; // Dostosuj szerokość dla mniejszych ekranów
    height: 80px; // Dostosuj wysokość dla mniejszych ekranów
   
   
   
  }
`;
export const Socialmedia = styled.div`
  width: 230px;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  

  @media screen and (max-width: 768px) {
    width: 100px; // Dostosuj szerokość dla mniejszych ekranów
    height: 80px; // Dostosuj wysokość dla mniejszych ekranów
    align-items: center;
   
    
  }
`;
export const Menu = styled.div`
  width: 900px;
  height: 120px;
  margin-top: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  

  @media screen and (max-width: 768px) {
    width: auto; // Dostosuj szerokość dla mniejszych ekranów
    flex-direction: column;
    height: auto;
   
    
    align-items: center;
    
    
    width: auto;
    
    
  }

  @media screen and (min-width: 431px) and (max-width: 1380px) {
    width: auto; // Dostosuj szerokość dla mniejszych ekranów
     /* Poziome menu dla bardzo małych i średnich ekranów */
    flex-wrap: wrap; /* Pozwól elementom zawijać się, gdy brakuje miejsca */
    justify-content: center; /* Wyśrodkuj elementy w poziomie */
    height: auto;
  }

  @media screen and (min-width: 1381px) {
    flex-direction: row; /* Poziome menu dla większych ekranów */
  }
`;
export const HamburgerMenu = styled.div`
  display: none;
  

  @media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
    margin-top:90px;
    
    
  }
`;
export const Elementsul = styled.ul`
  width: 150px;
  height: 30px;
  
  text-align: center;
  font-size: 15px;
  line-height: 30px;
  padding-left: 0;
  background-color: greenyellow;
  border-radius: 7px;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  
  @media screen and (max-width: 540px) {
     // Dostosuj szerokość dla mniejszych ekranów
    margin-bottom: 5px; // Dodaj margines na dole dla lepszego rozdzielania elementów
    width:150px;
    height:20px;
    font-size: 15px;
    line-height: 20px;
    overflow: hidden;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
  }

  &:hover {
    li {
      display: block;
      opacity: 0.4;
      max-height: 300px;
    }
  }
`;
export const Elementsli = styled.li`
  background-color: #edca05;
  list-style-type: none;
  display: none;
  width: 150px;
  

  @media screen and (max-width: 768px) {
    width: 100%; // Dostosuj szerokość dla mniejszych ekranów
    
  }

  &:hover {
    ul {
      background-color: antiquewhite;
    }
  }
`;
export const Wrapperli = styled.div`
  width: 150px;
  border-radius: 10px;
  margin-top: 3px;

  @media screen and (max-width: 768px) {
    width: 100%; // Dostosuj szerokość dla mniejszych ekranów
    margin-bottom: 10px; // Dodaj margines na dole dla lepszego rozdzielania elementów
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export const Fotter = styled.div`
  width: 100%;
  height: 400px;
  text-align: center;
  font-size: 25px;
  background-color: #558554;
  font-weight: 700;
  display: flex;
  justify-content: space-around;
  
  @media screen and (max-width: 768px) {
    flex-direction: column; // Zmiana kierunku flexbox na kolumnowy dla mniejszych ekranów
    height: auto;// Automatyczna wysokość dla lepszego dostosowania do zawartości
    width: 100vw;
  }
`;





export const ImageCaption = styled.span`
  width: 100%;
  text-align: center;
  font-weight: bold;
  position: absolute;
  bottom: 0;
  padding: 8px;
  background: rgba(255, 255, 255, 0.7);

  @media screen and (max-width: 768px) {
    font-size: 14px; // Przykładowa zmiana rozmiaru tekstu dla mniejszych ekranów
    padding: 4px; // Przykładowa zmiana odstępu dla mniejszych ekranów
  }
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

  @media screen and (max-width: 768px) {
    height: 70%; // Przykładowa zmiana wysokości dla mniejszych ekranów
    border-radius: 10px; // Przykładowa zmiana promienia dla mniejszych ekranów
    justify-content: center;
    align-items: center;
    height: 400px;
  }
`;
export const SlideWrapper = styled.div`
  position: relative;
  width: 70vw;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;

  @media screen and (max-width: 768px) {
    width: 90vw; // Przykładowa zmiana szerokości dla mniejszych ekranów
    
    height: 400px;
    margin-top: 10px;
    
    
    
  }
`;
export const Images = styled.img`
  width: 70vw;
  height: 100vh;
  border-radius: 20px;
 

  @media screen and (max-width: 768px) {
    width: 90vw; // Przykładowa zmiana szerokości dla mniejszych ekranów
    
    display: flex;
    align-items: center;
    
  }
`;

export const Findinput = styled.input`
  width: 200px;
  height: 30px;
  -webkit-box-shadow: 9px 7px 40px -8px rgba(66, 68, 90, 1);
  -moz-box-shadow: 9px 7px 40px -8px rgba(66, 68, 90, 1);
  box-shadow: 9px 7px 40px -8px rgba(66, 68, 90, 1);
  border: 2px solid blue;
  border-radius: 10px;
  font-size: 20px;
  font-family: "Krub", sans-serif;
  

  ::placeholder {
    color: blueviolet;
    font-weight: 700;
    letter-spacing: 3px;
  }

  :hover {
    cursor: pointer;
    color: green;
    font-weight: 700;
  }

  @media screen and (max-width: 1024px) {
     // Przykładowa zmiana szerokości dla mniejszych ekranów
   
   font-size: 15px;
    height:20px;
    
   
  }
  @media screen and (max-width: 540px){
   width: 90px;
  }
`;
export const Title = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  height: 100px;
  font-family: "Verdana", sans-serif;
  text-align: center;
  line-height: 100px;
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 5px;
  padding: 0;
  color: olivedrab;
  text-decoration: underline;
  letter-spacing: 3px;
  -webkit-animation: slide-in-top 2.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-in-top 2.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
          /* ----------------------------------------------
 * Generated by Animista on 2024-2-25 15:36:8
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation slide-in-top
 * ----------------------------------------
 */
@-webkit-keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-1000px);
            transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-1000px);
            transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}

  @media screen and (max-width: 768px) {
    width: 90vw; // Przykładowa zmiana szerokości dla mniejszych ekranów
    font-size: 30px; // Przykładowa zmiana rozmiaru czcionki dla mniejszych ekranów
  }
`;
export const Contact = styled.div`
  width: 250px;
  height: 400px;

  @media screen and (max-width: 768px) {
    width: 90vw; // Przykładowa zmiana szerokości dla mniejszych ekranów
    /* Dodaj inne dostosowania stylu dla mniejszych ekranów */
    margin-left:auto;
    margin-right: auto;
    height: 200px;
    margin-top: 50px;
    
    
  }
`;
export const Media=styled.div`
width: 250px;
height: 400px;
@media screen and (max-width: 768px) {
    width: 90vw; // Przykładowa zmiana szerokości dla mniejszych ekranów
    /* Dodaj inne dostosowania stylu dla mniejszych ekranów */
    height:200px;
    margin-left:auto;
    margin-right: auto;
    margin-top: 50px;
    
  }
`
export const Whatever = styled.div`
  width: 250px;
  height: 400px;

  @media screen and (max-width: 768px) {
    width: 90vw; // Przykładowa zmiana szerokości dla mniejszych ekranów
    /* Dodaj inne dostosowania stylu dla mniejszych ekranów */
   margin-top: 50px;
    margin-left:auto;
    margin-right: auto;
    
  }

  a {
    text-decoration: none;
    color: black;
  }
`;
export const Boxinformation = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  margin-bottom: 100px;

  @media screen and (max-width: 1380px) {
    flex-direction: column; // Przykładowa zmiana układu dla mniejszych ekranów
    /* Dodaj inne dostosowania stylu dla mniejszych ekranów */
   height:auto ;
    h1{
      font-size: 12px;
    }
  }
  @media screen and (min-width: 280px){
    height: auto;
  }
`;
export const Aboutus = styled.div`
  width: 45%;
  height: 600px;
  margin-left: 30px;
  font-size: 17px;
  margin-right: 20px;

  @media screen and (max-width: 768px) {
    width: 100%; // Pełna szerokość na mniejszych ekranach
    margin-left: 0;
    margin-right: 0;
    display: flex;
    justify-content: center;
    font-size: 10px;
    height: 300px;
    flex-direction: column;
    
    
    
    
  }
`;
export const Photobox = styled.div`
  width: 60%;
  height: 600px;
  font-family: "Cambria", sans-serif;
  display: grid;
  grid-template-columns: 300px 200px 300px;
  grid-template-rows: 200px 250px 100px;
  column-gap: 10px;
  row-gap: 10px;
  margin-top: 50px;

  @media screen and (max-width: 1380px) {
    width: 100%; // Pełna szerokość na mniejszych ekranach
    flex-direction: column;
    display: flex;
    margin-bottom: 20px;
    height: auto;
  }
  @media screen and (max-width: 280px){
    height:auto;
  }
  
`;
export const Tel = styled.div`
  width: 250px;
  height: 50px;
  text-decoration: overline;
  display: flex;
  align-items: center;
  font-size: 13px;
  margin-top: 100px;

  @media screen and (max-width: 768px) {
    width: 100%; // Pełna szerokość na mniejszych ekranach
    margin-top: 20px; // Dostosuj margines na mniejszych ekranach
    
    display: flex;
    justify-content: center;
  }
`;
export const Email = styled.div`
  width: 250px;
  height: 50px;
  font-size: 13px;
  text-decoration: overline;
  display: flex;
  margin-top: 30px;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%; // Pełna szerokość na mniejszych ekranach
    margin-top: 20px; // Dostosuj margines na mniejszych ekranach
    display: flex;
    justify-content: center;
  }
`;
export const Adress = styled.div`
  width: 250px;
  height: 50px;
  font-size: 13px;
  text-decoration: overline;
  display: flex;
  margin-top: 30px;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%; // Pełna szerokość na mniejszych ekranach
    margin-top: 20px; // Dostosuj margines na mniejszych ekranach
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
   
    
  }
`;
export const Facebook = styled.div`
  width: 250px;
  height: 50px;
  font-size: 13px;
  margin-top: 100px;
  display: flex;
  margin-top: 100px;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%; // Pełna szerokość na mniejszych ekranach
    margin-top: 20px; // Dostosuj margines na mniejszych ekranach
    font-size: 16px; // Dostosuj rozmiar czcionki na mniejszych ekranach
    display: flex;
    justify-content: center;
  }

  :hover {
    cursor: pointer;
    color: whitesmoke;
    transform: scale(1.2);
  }
`;
export const Instagram = styled.div`
  width: 250px;
  height: 50px;
  font-size: 13px;
  display: flex;
  margin-top: 30px;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%; // Pełna szerokość na mniejszych ekranach
    margin-top: 20px; // Dostosuj margines na mniejszych ekranach
    font-size: 16px; // Dostosuj rozmiar czcionki na mniejszych ekranach
    display: flex;
    justify-content: center;
  }

  :hover {
    cursor: pointer;
    color: whitesmoke;
    transform: scale(1.2);
  }
`;
export const Tictok = styled.div`
  width: 250px;
  height: 50px;
  font-size: 13px;
  display: flex;
  margin-top: 30px;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%; // Pełna szerokość na mniejszych ekranach
    margin-top: 20px; // Dostosuj margines na mniejszych ekranach
    font-size: 16px; // Dostosuj rozmiar czcionki na mniejszych ekranach
    display: flex;
    justify-content: center;
  }

  :hover {
    cursor: pointer;
    color: whitesmoke;
    transform: scale(1.2);
  }
`;

export const Politic = styled.div`
  width: 150px;
  height: 50px;
  font-size: 15px;
  display: flex;
  margin-top: 50px;
  align-items: center;
  text-decoration: underline 0.2em rgba(0, 0, 0, 0);
  transition: opacity 300ms, transform 300ms;

  @media screen and (max-width: 768px) {
    width: 100%; // Pełna szerokość na mniejszych ekranach
    margin-top: 20px; // Dostosuj margines na mniejszych ekranach
    font-size: 16px; // Dostosuj rozmiar czcionki na mniejszych ekranach
    
    display: flex;
    justify-content: center;
  }

  :hover {
    color: white;
    text-underline-offset: 0.5em;
    cursor: pointer;
    text-decoration-color: greenyellow;
    transition: text-decoration-color 700ms;
  }
`;

export const Histories = styled.div`
  width: 70px;
  height: 50px;
  font-size: 15px;
  display: flex;
  margin-top: 20px;
  align-items: center;
  text-decoration: underline 0.2em rgba(0, 0, 0, 0);
  padding: 0;

  @media screen and (max-width: 768px) {
    width: 100%; // Pełna szerokość na mniejszych ekranach
    margin-top: 10px; // Dostosuj margines na mniejszych ekranach
    font-size: 14px; // Dostosuj rozmiar czcionki na mniejszych ekranach
    display: flex;
    justify-content: center;
  }

  :hover {
    color: white;
    text-underline-offset: 0.5em;
    cursor: pointer;
    text-decoration-color: greenyellow;
    transition: text-decoration-color 700ms;
  }
`;

export const Rules = styled.div`
  width: 80px;
  height: 50px;
  font-size: 15px;
  display: flex;
  margin-top: 20px;
  align-items: center;
  text-decoration: underline 0.2em rgba(0, 0, 0, 0);
  padding: 0;

  @media screen and (max-width: 768px) {
    width: 100%; // Pełna szerokość na mniejszych ekranach
    margin-top: 10px; // Dostosuj margines na mniejszych ekranach
    font-size: 14px; // Dostosuj rozmiar czcionki na mniejszych ekranach
    display: flex;
    justify-content: center;
  }

  :hover {
    color: white;
    text-underline-offset: 0.5em;
    cursor: pointer;
    text-decoration-color: greenyellow;
    transition: text-decoration-color 700ms;
  }
`;

export const Copyright = styled.div`
  width: 250px;
  height: 50px;
  font-size: 15px;
  display: flex;
  margin-top: 20px;
  align-items: center;
  text-decoration: underline 0.2em rgba(0, 0, 0, 0);
  padding: 0;

  @media screen and (max-width: 768px) {
    width: 100%; // Pełna szerokość na mniejszych ekranach
    margin-top: 10px; // Dostosuj margines na mniejszych ekranach
    font-size: 14px; // Dostosuj rozmiar czcionki na mniejszych ekranach
    display: flex;
    justify-content: center;
  }

  :hover {
    color: white;
    text-underline-offset: 0.5em;
    cursor: pointer;
    text-decoration-color: greenyellow;
    transition: text-decoration-color 700ms;
  }
`;

export const Firstphoto = styled.img`
  width: 100%;
  height: 100%;
  align-self: stretch;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    border-radius: 5px; // Dostosuj promień zaokrąglenia na mniejszych ekranach
    width: 200px;
    height: 200px;
  }
`;
export const Secondphoto = styled.img`
  width: 100%;
  height: 100%;
  align-self: stretch;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    border-radius: 5px; // Dostosuj promień zaokrąglenia na mniejszych ekranach
    width: 100px;
    height: auto;

  }
`;
export const Thirdphoto=styled.img`
width:100%;
height:100%;
align-self: stretch;
border-radius: 10px;
@media screen and (max-width: 768px) {
    border-radius: 5px; // Dostosuj promień zaokrąglenia na mniejszych ekranach
    width: 60px;
    height: auto;
  }
`
export const Fourthphoto=styled.img`
width:100%;
height:100%;
align-self: stretch;
border-radius: 10px;
@media screen and (max-width: 768px) {
    border-radius: 5px; // Dostosuj promień zaokrąglenia na mniejszych ekranach
    width: 200px;
  }
`
export const Fivephoto=styled.img`
width:100%;
height:100%;
align-self: stretch;
border-radius: 10px;
grid-row:2/3;
grid-column: 2/4;
@media screen and (max-width: 1366px) {
    border-radius: 5px; // Dostosuj promień zaokrąglenia na mniejszych ekranach
    width: 190px;
    height: auto;
  }
  @media screen and (min-width: 280px) {
    border-radius: 5px; // Dostosuj promień zaokrąglenia na mniejszych ekranach
    width: 170px;
    height: auto;
}
@media screen and (min-height: 600px) {
    border-radius: 5px; // Dostosuj promień zaokrąglenia na mniejszych ekranach
    width: 170px;
    height: auto;
  }
`