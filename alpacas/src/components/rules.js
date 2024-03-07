import { Global } from "../stylecomponents/history.style";
import React from "react";
import { Wrapperlogomenu,Logo,Menu,Elementsul,Elementsli,Wrapperli,Socialmedia,Findinput,Fotter,Contact,Tel,Email,Adress,Media,Facebook,Instagram,Tictok,Whatever,Politic,Histories,Rules,Copyright } from "../stylecomponents/mainsite.style";
import { useNavigate } from "react-router-dom";
import { Titlerules,Rulesul } from "../stylecomponents/rules.style";
export function Ruless (){
  
  
  
  const navigate = useNavigate();
  const navigateToHistory = () => {
      navigate("/Historia");
    };
    const navigatetoMain= () => {
      navigate("/");
    };
    const navigatetoRules= () => {
      navigate("/Regulamin");
    };
    const navigatetoPolitic= () => {
      navigate("/Polityka_prywatności");

    };
    const navigatetoAlpacas= () => {
      navigate("/Alpaki");
    };
   const navigatetoOffer= () => {
      navigate("/Nasza_oferta")
    };
    const navigatetoParrots= () => {
      navigate("/Papugi")
    };
    const navigatetoGaleries= () => {
      navigate("/Galeria")
    }
    const navigatetocontact= ( ) => {
      navigate("/Kontakt")
     }
  return(
 <> <Global/> <Wrapperlogomenu>
      <Logo onClick={navigatetoMain} src="myaplaca.png"></Logo>
      <Menu>
          <Elementsul >O nas
          <Wrapperli>
          <Elementsli onClick={navigateToHistory}>Historia</Elementsli>
          <Elementsli onClick={navigatetoRules} >Regulamin</Elementsli>
          <Elementsli onClick={navigatetoPolitic}>Polityka prywatności</Elementsli>
          </Wrapperli>
          </Elementsul>
          <Elementsul>Nasze Zwierzaki
         <Wrapperli> 
         <Elementsli onClick={navigatetoAlpacas}>Alpaki</Elementsli>
          <Elementsli onClick={navigatetoParrots}>Papugi</Elementsli>
          </Wrapperli>
          </Elementsul>
          <Elementsul onClick={navigatetoOffer}>Nasze Oferty
          <Wrapperli>
          <Elementsli>Oferta grupowa</Elementsli>
          <Elementsli>Dla szkół</Elementsli>
          <Elementsli>Dla rodzin</Elementsli>
          <Elementsli>Oferta indywidualna</Elementsli>
          </Wrapperli>
          </Elementsul>
          <Elementsul onClick={navigatetoGaleries}>Galeria
         
          </Elementsul>
          <Elementsul onClick={navigatetocontact}>Kontakt
          
          </Elementsul>
      </Menu><Socialmedia> <Findinput placeholder="Szukaj"/></Socialmedia>
      </Wrapperlogomenu>
      <Titlerules>Regulamin "Alpaka Gdynia"</Titlerules>
      <Rulesul >1.Przepisy porządkowe dla zwiedzających
<li>Wejście na teren Rodzinnych Parków w Mini Zoo "Kucyk" odbywa się na podstawie zakupionego biletu wstępu lub posiadanego biletu wstępu,</li>
<li>Wykupione bilety należy zachować do kontroli</li>
<li>Dzieci do 10 roku życia mogą zwiedzać Rodzinne Parki w Alpaki Gdynia wyłącznie pod opieką dorosłych,</li>
<li>Opiekunowie dzieci i młodzieży odpowiadają za właściwe zachowanie swoich podopiecznych,</li>
<li>Fotografowanie i filmowanie na terenie Rodzinnych Parków w Mini Zoo „Kucyk” jest dozwolone do celów prywatnych. W przypadku użycia zdjęć do innych celów, prosimy zawsze umieszczać informację, gdzie zostały wykonane.</li>
      </Rulesul>
      <Rulesul>
        2.NA TERENIE RODZINNYCH PARKÓW W  ALPAKI gDYNIA OBOWIĄZUJE ZAKAZ:
        <li>Karmienia zwierząt oznakowanych tabliczką: „zakaz karmienia”, „zakaz wkładania rąk”,</li>
        <li>Drażnienia i niepokojenia zwierząt,</li>
        <li>Wrzucania na wybiegi zwierząt i podawania zwierzętom jakichkolwiek przedmiotów,</li>
        <li> Poruszania się poza alejkami i placami przeznaczonymi dla zwiedzających,</li>
        <li>Wchodzenia na bariery i ogrodzenia, przekraczania barier ochronnych,</li>
        <li>Wnoszenia artykułów pirotechnicznych tj. petard, rakiet, sztucznych ogni, pojemników z gazem, broni palnej i gazowej itp., </li>
        <li>Wchodzenia na zaplecza ekspozycji zwierząt, </li>
        <li>Dotykania elementów ogrodzeń będących pod napięciem elektrycznym tzw. pastuchów elektrycznych, </li>
        <li> Przebywania na terenie Rodzinnych Parków w Mini Zoo „Kucyk” poza godzinami otwarcia,</li>
        <li>Wjazdu samochodami bez odpowiednich upoważnień, </li>
        <li> Niszczenia zieleni, deptania trawników, zrywania kwiatów, wyrywania sadzonek i uszkadzania krzewów,</li>
        <li>Zaśmiecania terenu, </li>
        <li> Hałasowania i używania hałaśliwych urządzeń,</li>
        <li> Prowadzenia działalności handlowej, usługowej i akwizycyjnej, za wyjątkiem usług świadczonych na podstawie umów zawartych z Rodzinnymi Parkami w Mini Zoo „Kucyk”.</li>
      </Rulesul>
      <Rulesul>3.Sankcje
     <li> W przypadku złych warunków atmosferycznych niektóre atrakcje mogą być nieczynne,</li>
     <li>W razie niepogody czas pracy Rodzinnych Parków w Mini Zoo „Kucyk” może być skrócony (np. z powodu całodniowego deszczu),</li> 
     <li>Ograniczenia wiekowe do korzystania z atrakcji są bezwzględnie przestrzegane,</li>
     <li>Atrakcje są czynne tylko w godzinach otwarcia Parków.</li>
     </Rulesul>
   <Fotter>
    <Contact>
      <Tel><img src="tel.png" alt="" width="40" height="40" margin-right="10"/>+48 531-610-730</Tel>
      <Email><img src="email.png" alt="" width="40" height="40" />marekroginski1994@gmail.com</Email>
      <Adress><img src="map1.png" alt="" width="40" height="40"  />ul. Witosławy 12 81-601 Gdynia</Adress>
    </Contact>
   <Media>
   <Facebook><img src="facebook.png" alt="" width="40" height="40"/>Facebook</Facebook>
   <Instagram><img src="instagram.png" alt="" width="40" height="40"/>Instagram</Instagram>
   <Tictok><img src="ticktok.png" alt="" width="40" height="40"/>Ticktock</Tictok>
   </Media>
   <Whatever>
   <a href="/Polityka_prywatności" target="blank" > <Politic  onClick={navigatetoPolitic}>Polityka prywatności</Politic></a>
 <a href="/Historia" target="blank"> <Histories onClick={navigateToHistory}>Historia</Histories></a>
 <a href="/Regulamin" target="blank"> <Rules onClick={navigatetoRules}>Regulamin</Rules></a>
  <Copyright>Copyright © 2023 Marek Rogiński</Copyright>
   </Whatever>
   </Fotter>
   

      </>
  )
}