import { Global,Menu,Elementsul,Elementsli } from "../stylecomponents/mainsite.style";
import { useNavigate } from "react-router-dom";


export function Mainsite () {
    const navigate = useNavigate();
    const navigateToHistory = () => {
        navigate("/Historia");
      };
    return(
        <>
        <Global/>
        <Menu>
            <Elementsul onClick={navigateToHistory}>O nas</Elementsul>
            <Elementsul>Aktualności
            <Elementsli>coś tam</Elementsli>
            <Elementsli>coś tam</Elementsli>  
            </Elementsul>
            <Elementsul>Kontakt</Elementsul>
        </Menu>
        </>
    )
}