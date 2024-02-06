/* eslint-disable react/style-prop-object */
import { Global } from "../stylecomponents/history.style";
import React from "react";
import { Wrapperlogomenu,Logo,Menu,Elementsul,Elementsli,Wrapperli,Socialmedia,Findinput,Rules ,Tel,Contact,Fotter,Email,Adress,Media,Facebook,Instagram,Tictok,Whatever,Politic,Histories,Copyright } from "../stylecomponents/mainsite.style";
import { useNavigate } from "react-router-dom";
import { Titlepolitic,Firstacapit,Secondacapit,Thirdacapit,Fouracapit, Fiveacapit,Sixacapit,Sevenacapit,Eightacapit, Nineacapit,Tenacapit,Elevenacapit,Tvelveacapit } from "../stylecomponents/politic.style";

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
        <Titlepolitic><h6>§4. Odbiorcy danych oraz zamiar przekazywania danych do Państwa spoza EOG lub organizacji międzynarodowej</h6></Titlepolitic>
        <Fiveacapit>
          <ol> Odbiorcami Twoich danych osobowych są:
            <li>Jeśli wyraziłeś zgodę na ciasteczka marketingowe, Twoje dane zapisane w plikach cookies będą przekazywane do naszych partnerów reklamowych.</li>
            <li>Jeśli wyraziłeś zgodę na ciasteczka analityczne, Twoje dane zapisane w plikach cookies, przetwarzane będą przez podmiot dostarczający oprogramowanie
              do analizy ruchu na naszej stronie (np. Google Analytics).
            </li>
            <li>Twoje dane nie są przekazywane do Państw spoza EOG lub organizacji miedzynarodowych, z wyjątkiem partnerów wymienionych poniżej:
              <ol>
              <span> 
                 <li>Google Inc. z siedzibą w USA w zakresie analityki ruchu na stronie w systemie Google Analytics oraz dostarczania nowych
                  dodatkowych funkcji(takich jak Google Maps,Google Search Console) związanych z prawidłowym funkcjonowaniem strony oraz wyświetlaniem 
                  wyników wyszukiwania. Zobacz jak Google przetwarz i chroni Twoje dane. Ten dodatek do przeglądarki umożliwi Ci zarządzanie zakresem
                  i poziomem dostępu do danych zbieranych przez Google Analytics.
                 </li>
                 <li>Google Inc. z siedzibą w USA w zakresie reklam i mierzenia ich skuteczności w systemie Google Ads. Zobacz jak Google przetwarza i chroni
                  Twoje dane. Tutaj możesz zarządzać swoimi preferencjami i informacjami w systemie reklamowym Google.
                 </li>
                 <li>Facebook Inc. z siedzibą w USA w zakresie obsługi konta i dostepu do danych w serwisach społecznościowych(Facebook,Instagram), reklam
                  i mierzenia ich skuteczności związanych z instalacją na stronie pkisela Facebooka  oraz API Konwersji. Zobacz jak Facebook przetwarza i chroni
                  Twoje dane.
                 </li>
              </span>
              </ol>
            </li>
          </ol>
        </Fiveacapit>
        <Titlepolitic><h6>§5. Termin przechowywania danych</h6></Titlepolitic>
        <Sixacapit>Nie jesteśmy w stanie ustalić w przez jaki okres będziemy przetwarzać Twoje dane osobowe.Jesli przekazałes nam
          swoje dane w formularzu lub w wiadomości e-mail w  celach kontaktowych to Twoje dane będziemy przechowywac do momentu złożenia
          przez Ciebie żądania usunięcia tych danych lub sprzeciwu wobec przetwarzania, ale również w przypadku, w którym uznamy, że 
          zrealizowaliśmy prawnie uzasadniony interes Administratora.
        </Sixacapit>
        <Titlepolitic><h6>§6. Prawa użytkowników</h6></Titlepolitic>
        <Sevenacapit>
      <ol>W związku z przetwarzaniem twoich danych przysługują Ci następujące prawa:
<li>Dostępu do treści swoich danych.</li>
<li>Prawo ich sprostowania, usunięcia, ograniczenia przetwarzania.</li>
<li>Prawo do przenoszenia danych.</li>
<li>Prawo wniesienia sprzeciwu.</li>
<li>Prawo do cofnięcia zgody na ich przetwarzanie w dowolnym momencie i w dwowlnej formie, chyba że przetwarzanie Państwa danych odbywa siew celu
  wykonywania umowy przez Administartora, w celu wywiązania się przez Administartora z obowiązków prawnych wzgledem instytucji państwowych lub w celu
  realizacji prawnie uzasadnionych interesów Administartora.
</li>
<li>Masz także prawo do wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych(na adres Urzędu Ochrony Danych Osobowych ul.Stawki 2, 00-193 Warszawa)</li>
<li>Więcej informacji w przedmiocie  ochrony danych osobowych mogą Państwo otrzymać na stronie internetowej Urzędu Ochrony Danych Osobowych
  <a href="www.uodo.pl.gov.pl" alt="">www.uodo.gov.pl</a>
</li>
</ol>
</Sevenacapit>
<Titlepolitic><h6>§7. Informacja o ciasteczkach</h6></Titlepolitic>
<Eightacapit>
  <ol>
<li>Na naszej stronie wykorzystujemy ciasteczka (pliki cookies).</li>
<li>Ciasteczka (pliki cookies) są niewielkimi plikami tekstowymi przechowywanymi na urządzeniach użytkowników podczas przeglądania
  strony internetowej. Są one wykorzystywane w celu ułatwienia korzystania z naszej strony, poprawienia jakości usług oraz umozliwienia analizy ruchu
  i zachowań uzytkowników.
</li>
<li>Ciasteczka mogą być stałe (trwałe) lub tymczasowe (sesyjne).Stałe ciasteczka sa przechowywane na urządzeniu uzytkownika przez określony czas  
lub do momentu usunięcia ich przez uzytkownika. Tymczasowe ciasteczka są usuwane po zamknięciu przeglądarki.
</li>
<li>Wykorzystujemy ciasteczka własne oraz ciasteczka stron trzecich. Ciasteczka własne sa wykorzystywane w celu zapewnienia prawidłowego
  działania strony, personalizacji treści, zapisywania preferencji użytkowników oraz analizy statystyk. Ciasteczka analityczne są wykorzystywane przez zewnętrznę
  narzędzia analityczne, reklamowe oraz do integracji z mediami społecznosciowymi.
</li>
<li>Użytkownicy maja prawo kontrolować i ograniczać sposób, w jaki ciasteczka są wykorzystywane na naszej stronie.  Większość przeglądarek internetowytch 
  umozliwia zarządzanie plikami cookies, w tym blokowanie, ograniczanie lub usuwanie ciasteczek. Szczegółowe informacje na temat zarządzania ciateczkami
  można znaleźć w ustwieniach przeglądarki użytkownika.
</li>
<li>Nateży pamietac że wyłączenie lub ograniczenie ciateczek może wpłynąć na funkcjonalność strony oraz jkakość świadczonych usług</li>
<li>Na naszej stronie wykorzystujemy rożne rodzaje ciasteczek, aby lepiej dostosować się do potzeb użytkowników i zapewnić optymalne korzystanie ze strony.</li>
<li>Ciasteczka techniczne: są niezbędne do prawidłowego funkcjonowania witryny. Umożliwiają utrzymanie sesji użytkownika, obsługę formularzy, 
  zapamiętywanie preferencji, oraz zapewnienie bezpieczeństwa strony.
</li>
<li>Ciasteczka marketingowe: Pozwalają na personalizacje reklam oraz prowadzenie działań remarketingowych, ktore są dostosowane do zainteresowań i
  preferencji uzytkowników. Służą również do mierzenia skuteczności kampani reklamowych oraz optymalizacji treści reklamowych
</li>
<li>Ciasteczka analityczne: Są wykorzystywane do zbierania informacji o sposobie korzystania z witryny przez użytkowników, takich jak liczba odwiedzin,
   strony odwiedzane, czas spędzony na stronie czy źródło ruchu.Uzyskane dane pomagaja w analizie optymalizacji strony, poprawiajac jej funkcjonowanie
   i dostosowując treści do potrzeb użytkowników.
</li>
  </ol>
</Eightacapit>
<Titlepolitic><h6>§8. Dlaczego korzystamy z ciasteczek?</h6></Titlepolitic>
<Nineacapit>
  <ol>
  <li>Komfort korzystania ze strony: Ciasteczka (pliki cookies) mogą znacząco wpłynąć na komfort korzystania ze strony internetowej.</li>
  <li>Personalizacja treści: Ciasteczka pozwalają na dostosowanie wybranych treści do preferencji i zainteresowań uzytkownika, co sprawia
     że strona staje sie bardziej atrakcyjna i użyteczna.
  </li>
  <li>Zapamiętywanie ustawień: Dzęki ciasteczkom strona może zapamiętywac wybrane przez użytkownika ustawienia, takie jak język, uklad czy kolorystyka
co pozwala na szybsze i wygodniejsze korzystanie z serwisu.
  </li>
  <li>Logowanie: Ciasteczka umozliwiają przechowywanie informacji o zalogowanym użytkowniku, co pozwala na łatwe przełączanie się między różnymi
    sekcjami bez konieczności ponownego logowania.
  </li>
  <li>Utrzymanie sesji: Dzięki ciasteczkom strona może śledzić aktywność użytkownika na różych podstronach, co pozwala na łatwe wracanie
    do ostatnio odwiedzonych sekcji lub kontynuowanie niedokończonych działań, takich jak wypełnianie formularzy.
  </li>
  <li>Optymalizacja wydajności: Ciasteczka mogą być wykorzystane do analizy ruchu i zachowań użytkownika na stronie, co pomaga w optymalizacji
    jej wydajności oraz dostarczeniu treści o wysokiej jakości.
  </li>
  <li>Reklamy: Ciasteczka umozliwiają wyswietlanie spersonalizowanych reklam, które sa dopasowane do zainteresowań i potrzeb uzytkownika.
    Dzięki temu rekalmy są mniej inwazyjne i bardziej adekwatne
  </li>
  <li>Integracja z mediami społecznosciowymi: Ciasteczka pozwalają na integrację z serwisami społecznosciowymi, takimi jak Facebook, Twitter czy 
Instagram, co umożliwia łatwe udostępnianie treśći oraz korzystanie z dodatkowych funkcji takich jak komentowanie czy polubienia.
  </li>
  </ol>
</Nineacapit>
<Titlepolitic><h6>§9. Funkcje ciasteczek technicznych</h6></Titlepolitic>
<Tenacapit>
  <ol>
    <li>Utrzymanie sesji użytkownika: Ciasteczka techniczne umożliwiają utrzymanie sesji
użytkownika podczas poruszania się po stronie, co pozwala na przechodzenie między różnymi
sekcjami witryny bez
konieczności ponow
nego logowania czy wprowadzania tych samych
informacji.</li>
    <li>Zapamiętywanie preferencji użytkownika: Dzięki ciasteczkom technicznym strona może przechowywać informacje na temat preferencji 
  użytkowników, takie jak wybrany język, wielkość czcionki, ustawienia kolorystyczneczy inne elementy personalizacji.
  </li>
    <li>
      Obsługa formularzy: Ciasteczka techniczne wspomagają funkcjonowanie formularzy na stronie,
takich jak formularze logowania, rejestracji czy kontaktowe, zapewniając prawidłowe przetwarzanie danych wprowadzanych przez użytkowników.
</li>
    <li>Optymalizacja wydajności strony: Użycie ciasteczek technicznych umożliwia monitorowanie
wydajności strony oraz szybkość ładowania poszczególnych elementów, co pozwala na
optymalizację i poprawę jakości świadczonych usług.
</li>
    <li>Bezpieczeństwo:Ciasteczka techniczne pomagają w zapewnieniu bezpieczeństwa witryny i jej użytkowników, na przykład poprzez weryfikację
       tożsamości użytkowników, wykrywanie prób włamań czy ochronę przed atakami typu CSRF (Cross-Site Request Forgery)
       </li>
  </ol>
</Tenacapit>
<Titlepolitic><h6>§10. Funkcje ciasteczek analitycznych</h6></Titlepolitic>
<Elevenacapit>
<ol>
  <li>Pomiar ruchu na stronie: Ciasteczka analityczne pozwalają na monitorowanie liczby odwiedzin, unikalnych użytkowników i wyświetleń 
    stron, co daje ogólny obraz popularności i wydajnościwitryny.
    </li>
  <li>Analiza zachowań użytkowników: Dzięki ciasteczkom analitycznymmożna zbierać informacjeo sposobie, w jaki użytkownicy poruszają się po stronie,
     na przykład czas spędzony naposzczególnych podstronach, ścieżki nawigacji oraz miejsca, w których opuszczają witrynę.</li>
  <li>Optymalizacja konwersji: Ciasteczka analityczne pomagają w identyfikowaniu elementów strony, które wpływają na skuteczność osiągania celów biznesowych,  
    takich jak rejestracja,złożenie zamówienia czy wypełnienie formularza kontaktowego.
    </li>
  <li>Segmentacja użytkowników: Użycie ciasteczek analitycznych umożliwia grupowanie użytkowników według różnych kryteriów co pozwala na lepsze 
    dostosowanie treści i oferty dopotrzeb poszczególnych segmentów.</li>
  <li>Testowanie A/B: Ciasteczka analityczne są wykorzystywane do przeprowadzania testów A/B,które polegają na porównaniu dwóch wersji strony internetowej, 
    aby sprawdzić, która z nich lepiej spełnia założone cele. Testy te pomagają w optymalizacji wyglądu, funkcjonalności i treści witryny.</li>
</ol>
</Elevenacapit>
<Titlepolitic><h6>§11. Funkcje ciasteczek reklamowych</h6></Titlepolitic>
<Tvelveacapit>
  <ol>
    <li>Spersonalizowane reklamy:Ciasteczka marketingowe umożliwiają wyświetlanie reklam dopasowanych do zainteresowań, preferencji i historii przeglądania użytkownika, 
      co sprawia, że są one bardziej atrakcyjne i efektywne.</li>
    <li>Remarketing: Dzięki ciasteczkom marketingowym można śledzić użytkowników, którzy odwiedzili witrynę, ale nie dokonali zakupu lub inne
j akcji, i ponownie kierować do nich reklamy, aby zachęcić do powrotu na stronę i finalizacji transakcji.
</li>
    <li>Pomiar skuteczności reklam: Ciasteczka marketingowe pozwalają na monitorowanie wynikówkampanii reklamowych, takich jakliczba kliknięć, konwersji czy
wyświetleń, co umożliwiaoptymalizację strategii marketingowej.</li>
    <li>Zarządzanie reklamami w wielu kanałach: Użycie ciasteczek marketingowych ułatwia koordynację i integrację działań reklamowych prowadzonych w
różnych kanałach, takich jakwyszukiwarki, media społecznościowe czy strony partnerskie.</li>
    <li>Testowanie i optymalizacja treści reklamowych: Ciasteczka marketingowe są wykorzystywanedo przeprowadzania testów A/B oraz innych metod analizy
      , które pozwalają na ocenę, jakie przekazy, formaty czy kreatywności reklamowe są najbardziej skuteczne i angażujące dlaużytkowników.</li>
  </ol>
</Tvelveacapit>
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