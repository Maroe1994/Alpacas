import { Global } from "../stylecomponents/history.style";
import React from "react";
import { Wrapperlogomenu,Menu,Findinput,Elementsul,Elementsli,Wrapperli,Socialmedia,Logo,Fotter,Contact,Email,Tel,Adress,Media,Facebook,Instagram,Tictok,Whatever,Politic,Histories,Rules,Copyright } from "../stylecomponents/mainsite.style";
import { useNavigate } from "react-router-dom";
import {  Wrappercontent, Titlecontact,Paragraphtitle,Informationcontent,Textinformation,Maincontent,Wrapperinput,Inputdate,Inputmessage,Titleinput,Messagecheckbox,Sendquestion } from "../stylecomponents/contact.style";
export function Contactwithus (){
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
            <Elementsli>Papugi</Elementsli>
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
            <Elementsul onClick={navigatetocontact}>Kontakt</Elementsul>
        </Menu><Socialmedia> <Findinput placeholder="Szukaj"/></Socialmedia>
        </Wrapperlogomenu>
        <Wrappercontent>
        <Titlecontact>Kontakt z Zagroda Alpaki w Gdyni</Titlecontact>
        <Paragraphtitle> Zapraszamy do kontaktu z naszym Pomorskim Wojewódzkim Związkiem Piłki Siatkowej telefoniczne, mailowo oraz poprzez formularz kontaktowy zamieszony na stronie. Chętnie odpowiemy na wszystkie zadawane pytania. </Paragraphtitle>
        <Maincontent>
        <Informationcontent>
        <Textinformation><p>ul. Witosławy 12 </p>
        <p>81-601 Gdynia</p>
        </Textinformation>
        <Textinformation>
          <span>Nr NIP</span> 957-08-24-659
        </Textinformation>
        <Textinformation>
          <p><span>Nr konta</span></p>
          <p>55 1750 0012 0000 0000 3735 1679</p>
          <p>RAIFFEISEN BANK POLSKA SA</p>
          </Textinformation>
          <Textinformation>
            <p><span>Telefon:</span></p>
            <p>503 960 316-właściciel</p>
            <p>502 63 63 56-Sekretariat</p>
          </Textinformation>
          <Textinformation>
            <p><span>email:</span></p>
            <p>marekroginsski1994@gmail.com</p>
            <p>alpakigdynia@sekretariat.pl</p>
          </Textinformation>
          <Textinformation>
            <p><span>Godziny otwarcia:</span></p>
            <p>Poniedziałek-sobota: 9-18</p>
          </Textinformation>
        </Informationcontent>
        <Wrapperinput>
       <Titleinput>Imię:<Inputdate type="text"/> </Titleinput>
       <Titleinput>Nazwisko:<Inputdate type="text"/> </Titleinput>
       <Titleinput>Firma:<Inputdate type="text"/> </Titleinput>
       <Titleinput>Telefon:<Inputdate type="number"/> </Titleinput>
       <Titleinput>email:<Inputdate type="email"/> </Titleinput>
        </Wrapperinput>
       <Titleinput>Wiadomość:<Inputmessage type="message"/></Titleinput>
       
        </Maincontent>
        <Titleinput><Messagecheckbox type="checkbox"/>Zapoznałem się z Polityką prywatności serwisu www.pwzps.pl oraz wyrażam zgodę na przetwarzanie przez POMORSKI WOJEWÓDZKI ZWIĄZEK PIŁKI SIATKOWEJ, al. Zwycięstwa 51, 80-213 Gdańsk, udostępnionych przeze mnie danych osobowych na zasadach opisanych w Polityce prywatności dostępnej w Serwisie. Oświadczam, że są mi znane cele przetwarzania danych oraz moje uprawnienia. Niniejsza zgoda może być wycofana w dowolnym czasie poprzez kontakt z Administratorem pod adresem pwzps.gdansk@interia.pl, bez wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem.
Więcej informacji dotyczących przetwarzania danych osobowych - Obowiązek Informacyjny</Titleinput>
<Sendquestion>WYŚLIJ ZAPYTANIE</Sendquestion>
        </Wrappercontent>
        <Fotter>
          <Contact>
            <Tel><img src="tel.png" alt="" width="40" height="40" margin-right="10"/>+48 531-610-730</Tel>
            <Email><img src="email.png" alt="" width="40" height="40" />marekroginski1994@gmail.com</Email>
            <Adress><img src="map1.png" alt="" width="40" height="40"  />ul. Witosławy 12 81-601 Gdynia</Adress>
          </Contact>
        <Media>
         <Facebook> <img src="facebook.png" alt="" width="40" height="40"/>Facebook </Facebook>
         <Instagram> <img src="instagram.png" alt="" width="40" height="40"/>Instagram</Instagram>
         <Tictok> <img src="ticktok.png" alt="" width="40" height="40"/>Ticktock</Tictok>
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