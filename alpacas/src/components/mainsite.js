import { Global,Menu,Elementsul,Elementsli,Wrapperli,Logo,Wrapperlogomenu} from "../stylecomponents/mainsite.style";
import { useNavigate } from "react-router-dom";


export function Mainsite () {
    const navigate = useNavigate();
    const navigateToHistory = () => {
        navigate("/Historia");
      };
    return(
        <>
        <Global/><Wrapperlogomenu>
        <Logo src="myaplaca.png"></Logo>
        <Menu>
            <Elementsul onClick={navigateToHistory}>O nas
            <Wrapperli>
            <Elementsli>coś tam</Elementsli>
            <Elementsli>coś tam</Elementsli>
            </Wrapperli>
            </Elementsul>
            <Elementsul>Nasze Zwierzaki
           <Wrapperli> 
            <Elementsli>coś tam</Elementsli>
            <Elementsli>coś tam</Elementsli>
            </Wrapperli>
            </Elementsul>
            <Elementsul>Nasze Oferty
            <Wrapperli>
            <Elementsli>coś tam</Elementsli>
            <Elementsli>coś tam</Elementsli>
            </Wrapperli>
            </Elementsul>
            <Elementsul>Galeria
            <Wrapperli>
            <Elementsli>coś tam</Elementsli>
            <Elementsli>coś tam</Elementsli>
            </Wrapperli>
            </Elementsul>
            <Elementsul>Nasze Oferty
            <Wrapperli>
            <Elementsli>coś tam</Elementsli>
            <Elementsli>coś tam</Elementsli>
            </Wrapperli>
            </Elementsul>
        </Menu></Wrapperlogomenu>
        </>
    )
}