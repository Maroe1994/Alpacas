import styled, {createGlobalStyle} from "styled-components";

export const Global= createGlobalStyle`
body
{
margin: 0;
background-color:#23ab0e ;
}`


export const Textbox = styled.div`
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-size: 25px;
  margin-top: 50px;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    width: 90%; // Zmniejsz szerokość dla mniejszych ekranów
    margin-top: 20px; // Dostosuj margines na mniejszych ekranach
    font-size: 16px; // Zmniejsz rozmiar czcionki dla mniejszych ekranów
    overflow-x: hidden; // Wyłącz poziome przewijanie
  }
`;