import styled from "styled-components";

export const Tables=styled.table`
width:auto;
height:500px;

margin-left: auto;
margin-right: auto;
margin-top: 50px;
margin-bottom: 80px;
border:1px solid orange;
`
export const Tr=styled.tr`
width:100px;
height:50px;
border: 1px solid orange;

:first-child{
    background-color: gray;
    border-top: 1px solid orange;
    width: 100px;
    height: 100px;
}
&:last-child{
   
}

`
export const Th=styled.th`
width:200px;
height: 50px;
border:1px solid orange;
&:first-child{
    border-top:1px solid orange;
    
    
}
&:last-child{
    border-top: 1px solid orange;
}


`
export const Td=styled.td`
width:100px;
height:50px;
border:2px solid violet;
`
export const Titleoffer=styled.div`
width: 400px;
height: 80px;
margin-left: auto;
margin-right: auto;
text-align: center;
margin-top: 20px;
font-size:50px;
font-weight: 800;
background: linear-gradient(80deg,#bd1c4c,#bd1cbd);
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;
letter-spacing: 5px;
-webkit-animation: scale-in-hor-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: scale-in-hor-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
            /* ----------------------------------------------
 * Generated by Animista on 2024-2-24 17:19:9
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation scale-in-hor-left
 * ----------------------------------------
 */
@-webkit-keyframes scale-in-hor-left {
  0% {
    -webkit-transform: scaleX(0);
            transform: scaleX(0);
    -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleX(1);
            transform: scaleX(1);
    -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%;
    opacity: 1;
  }
}
@keyframes scale-in-hor-left {
  0% {
    -webkit-transform: scaleX(0);
            transform: scaleX(0);
    -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleX(1);
            transform: scaleX(1);
    -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%;
    opacity: 1;
  }
}

`
export const Titleicon=styled.img`
border-radius: 50%;
width: 100px;
height: 100px;
display: flex;
justify-content: center;
margin-top: 30px;
margin-right: 20px;
-webkit-animation: swirl-in-fwd 0.6s ease-out both;
	        animation: swirl-in-fwd 0.6s ease-out both;
 /* ----------------------------------------------
 * Generated by Animista on 2024-3-19 0:58:58
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation swirl-in-fwd
 * ----------------------------------------
 */
@-webkit-keyframes swirl-in-fwd {
  0% {
    -webkit-transform: rotate(-540deg) scale(0);
            transform: rotate(-540deg) scale(0);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotate(0) scale(1);
            transform: rotate(0) scale(1);
    opacity: 1;
  }
}
@keyframes swirl-in-fwd {
  0% {
    -webkit-transform: rotate(-540deg) scale(0);
            transform: rotate(-540deg) scale(0);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotate(0) scale(1);
            transform: rotate(0) scale(1);
    opacity: 1;
  }
}
`
export const Titlewrapper=styled.div`
width: 600px;
height: 150px;
display: flex;
justify-content: center;
margin-left: auto;
margin-right: auto;
`
export const Boxinformationoffer=styled.p`
margin-left: auto;
margin-right: auto;
width: 1400px;
height: auto;
color: darkolivegreen;
font-weight: 700;
font-size: 18px;
span{
        color:skyblue;
        font-weight: 800;
        font-size: 20px;
}
`