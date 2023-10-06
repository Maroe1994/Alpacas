/* eslint-disable react/style-prop-object */
import { Global } from "../stylecomponents/history.style";
import React from "react";
import { Wrapperlogomenu,Logo,Menu,Elementsul,Elementsli,Wrapperli,Socialmedia,Findinput,Rules ,Tel,Contact,Fotter,Email,Adress,Media,Facebook,Instagram,Tictok,Whatever,Politic,Histories,Copyright } from "../stylecomponents/mainsite.style";
import { useNavigate } from "react-router-dom";
import { Titlepolitic,Firstacapit,Secondacapit,Thirdacapit,Fouracapit } from "../stylecomponents/politic.style";

export function Politics() {
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
      const navigatetoParrots= () => {
        navigate("/Papugi");
      };
      const navigatetoGaleries= () => {
        navigate("/Galeria")
      }
      const navigatetoOffer= () => {
        navigate("/Nasza_oferta")
      };
    return (
        <>
        <Global/><Wrapperlogomenu>
        <Logo onClick={navigatetoMain} src="myaplaca.png"></Logo>
        <Menu>
            <Elementsul >O nas
            <Wrapperli>
            <Elementsli onClick={navigateToHistory}>Historia</Elementsli>
            <Elementsli onClick={navigatetoRules}>Regulamin</Elementsli>
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
            <Wrapperli>
            <Elementsli>coś tam</Elementsli>
            <Elementsli>coś tam</Elementsli>
            </Wrapperli>
            </Elementsul>
            <Elementsul>Kontakt
            <Wrapperli>
            <Elementsli>coś tam</Elementsli>
            <Elementsli>coś tam</Elementsli>
            </Wrapperli>
            </Elementsul>
        </Menu><Socialmedia>
        <Findinput placeholder="Szukaj..."/>
        </Socialmedia>
        </Wrapperlogomenu>
        <Titlepolitic><h3>Polityka prywatności</h3></Titlepolitic>
        <Firstacapit>Niniejsza polityka stanowi podstawową informację o celach, sposobach przetwarzania oraz bezpieczeństwie twoich danych osobowych, jako użytkownika strony zwanej<a href="myalpaca.pl"> <span>myalpaca.pl</span></a>zwanej dalej Stroną.
         Zapoznając się z polityką prywatnościdowiesz sie kto jest administratorem Twoich danych osobowych, jakie dane osobowe są przez Stronę zbierane, w jakich celach są wykorzystywane oraz jak są chronione. </Firstacapit>
        <Titlepolitic><h6>§1. Informacje podstawowe</h6> </Titlepolitic>
        <Secondacapit><ol>
          <li>Administratorem twoich danych osobowych jest:<span>Marek Rogiński przedsiębiorca wpisany do Centralnej Informacji i Ewidencji pod firmą :
            Marek Rogiński Alpaki Gdynia z siedzibą W Gdyni (81-601), ul.Witosławy 12, NIP:123-456-78-90 </span></li>
          <li>Kontakt z Administratorem jest możliwy za pośrednictwem:
            <ol>
              <li>poczty e-mail:marekroginski94@wp.pl</li>
              <li>telefonicznie: +48 503-960-316</li>
            </ol>
          </li>
          </ol></Secondacapit>
          <Titlepolitic><h6>§2. Zasady przetwarzania danych</h6></Titlepolitic>
          <Thirdacapit>
            <ol>Administrator przetwarza dane osobowe z poszanowaniem następujących zasad:
              <li>W oparciu o podstawę prawną i zgodnie z prawem (legaizm)</li>
              <li>Rzetelnie i uczciwie (uczciwość)</li>
              <li>W sposób przejrzysty dla osoby, ktorej dane dotyczą (transparentność)</li>
              <li>W konkretnych celach i nie "na zapas" (minimalizacja)</li>
              <li>Nie więcej niż trzeba (adekwatność)</li>
              <li>Z dbałością o prawidłowość danych (prawidłowość)</li>
              <li>Nie dłużej niż potrzeba(czasowość)</li>
              <li>Zapewniając odpowiednie bezpieczeństwo danych (bezpieczeństwo)</li>
            </ol>
          </Thirdacapit>
          <Titlepolitic><h6>§3. Cele, podstawy prawne i zakres przetwarzania danych.</h6></Titlepolitic>
        <Fouracapit>
        <p><span>Twoje dane będziemy przechowywać:</span></p>
        <ol>
        <li>W celach kontaktowych aby udzielic Ci odpowiedzi na Twoją wiadomość przesłaną nam bezpośrednio drogą e-mailową lub a pośrednictwem formularza
          na podstawie realizacji prawnie uzasadnionego interesu Administartora związanego z koniecznością udzielenia Ci odpowiedzi. </li>
        <li>W cleach technicznych przy uzyciu plików cookies (ciasteczka techniczne), na podstawie realizacji prawnie uzasadnionego interesu Administratora
          związanego z prawidłowym działaniem i funkcjonowaniem strony.
        </li>
        <li>W celach statystycznych i analitycznych jeśli wyraziłeś zgodę na wykorzystanie przez nas plików cookies do celów analitycznych(ciasteczka analityczne) </li>
        <li>W celach marketingowych jeśli wyraziłeś zgodę na wykorzystanie przez nas plików cookies do celów marketingowych (ciasteczka marketingowe)</li>
        <li>W celach związanych z prowadzeniem przez nas profilu firmowego w mediach społecznosciowych (takich jak Facebook/Instagram )na zasadach określonych przez właścicieli danego medium
          (portalu) i informowaniu w nim o naszych produktach, promocjach i innych wiadomościach dotyczących naszej działalności, co uważamy za nasz prawnie uzasadniony interes.
        </li>
        </ol>
        <p><span>Przetwarzamy twoje dane w zakresie:</span></p>
        <ol>
          <li>Jeśli prześlesz nam wiadomość e-mail to będziemy przetwarzać, dane które będą w niej zawarte.
            Przekazywanie nam danych w e-mailu następuje dobrowolnie. W każdym czasie możesz zwrócić się do nas  z prośbą o usunięcie tych danych
          </li>
          <li>Jesli skorzystasz z formularza kontaktowego na naszej stronie to będziemy przetwarzać dane w postaci twojego adresu e-mail oraz imienia.
            Podanie tych danych stanowi warunek udzielenia przez nas odpowiedzi na Twoje zapytanie
          </li>
          <li>Pozostałe dane, które Administrator przetwarza to adres IP i inne dane zapisywane w plikach cookies. To Ty decydujesz w jakim zakresie
            będziemy mogli wykorzystać pliki cookies z Twoimi danymi.Przekazanie nam danych w tensposób następuje dobrowolnie. W każdym czasie mozesz
            zmienić swoje preferencje.Możesz to zrobic w swojej przeglądarce internetowej lub tez po usunięciu  zapisanych plików cookies pochodzących 
            z naszej strony.
          </li>
          <li>Jeśli polubisz lub w inny sposób dołączysz do naszego profilu w mediach społecznościowych (np.Facebook) będziemy przetwarzać Twoje dane,
            które podałeś w danym medium i do których będziemy mieli dostęp.W celu zakończenia przetwarzania możesz zakończyc subskrybcję naszego
            profilu.
          </li>
          <li>API zewnętrznych partnerów: Nasza strona może korzystać z API(interfejsów programistycznych aplikacji) dostarczanych przez zewnetrznych partnerów
            w celu zintegrowania różnych funkcjonalności, takich jak mapy, usługi analityczne, reklamowe czy media społecznosciowe.Korzystanie z tych API
            może prowadzić do tworzenia nowych ciasteczek lub korzystania z instniejących ciasteczek w celu przetwarzania danych użytkowników. Zewnętrzni
            partnerzy mogą przechowywać i przetwarzać te dane zgodnie z własnymi politykami prywatności.
          </li>
        </ol>
        </Fouracapit>
        <Titlepolitic><h6>Odbiorcy danych oraz zamiar przekazywania danych do Państwa spoza EOG lub organizacji międzynarodowej</h6></Titlepolitic>
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