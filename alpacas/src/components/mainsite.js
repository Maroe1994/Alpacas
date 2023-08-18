import { Global,Boxinformation,Aboutus,Tel,Email,Adress,Facebook,Instagram,Tictok,Politic,Histories, Rules,Copyright,Firstphoto,Secondphoto,Thirdphoto,Fourthphoto,Fivephoto,
  Menu,Elementsul,Elementsli,Wrapperli,Logo,Wrapperlogomenu,Socialmedia,Fotter,SlideWrapper,ImageBox,Findinput,Title,Contact,Media,Whatever,Photobox} from "../stylecomponents/mainsite.style";
import {  useNavigate } from "react-router-dom";
import React from "react";

import { Slider } from "./slider";



export function Mainsite () {
    const navigate = useNavigate();
    const navigateToHistory = () => {
        navigate("/Historia");
      };
      const navigatetoMain= () => {
        navigate("/");
      };
      const navigatetoRules= () => {
        navigate("Regulamin");
      };
      const navigatetoPolitic= () => {
        navigate("Polityka_prywatności");
      };
      
      const navigatetoParrots= () => {
        navigate("/Papugi");
      };
      const navigatetoAlpacas= () => {
        navigate("/Alpaki");
      };
    
    return(
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
            <Elementsul>Nasze Oferty
            <Wrapperli>
            <Elementsli>Oferta grupowa</Elementsli>
            <Elementsli>Dla szkół</Elementsli>
            <Elementsli>Dla rodzin</Elementsli>
            <Elementsli>Oferta indywidualna</Elementsli>
            </Wrapperli>
            </Elementsul>
            <Elementsul>Galeria
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
        <Title>My Alpaca</Title>
        <SlideWrapper>
      <ImageBox>
      
      <Slider/>
      </ImageBox>
      
    </SlideWrapper>
<Boxinformation>
  <Aboutus>
  <h1><p>O nas</p></h1>
[32] Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?
[33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
</Aboutus>
<Photobox>
  <Firstphoto src="alpaca1.jpg"/>
  <Secondphoto src="alpaca2.jpg"/>
  <Thirdphoto src="alpaca3.jpg"/>
  <Fourthphoto src="alpaca4.jpg"/>
  <Fivephoto src="alpaca5.jpg" />
</Photobox>
</Boxinformation>
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
  <Politic>Polityka prywatności</Politic>
  <Histories>Historia </Histories>
  <Rules>Regulamin</Rules>
  <Copyright>Copyright © 2023 Marek Rogiński</Copyright>
</Whatever>
        </Fotter>

        </>
    )
}