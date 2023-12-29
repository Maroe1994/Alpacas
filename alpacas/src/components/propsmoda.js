import React from "react";

import StyledModal from 'react-modal'
import { useState,useEffect } from "react";



 



export function Propsmodal({arr}) {
     
  
    
    const[modalopen,setmodalopen]=useState(false);
    function openModal(){
        setmodalopen(true);
        }
    function closeModal(){
        setmodalopen(false);
    }
    const[image,setimage]=useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
          setimage(Math.floor(Math.random()*Array.length));
        }, 5000);
    
        return () => {
          clearInterval(timer);
        };
      }, []);
    function nextimage () {
        setimage((prevImage) => (prevImage + 1) % arr.length); 
       
        if (image> [arr].length){
           setimage(0) 
        }
    
        }
    function previousimage (){
        setimage((prevImage) => (prevImage - 1 + arr.length) % arr.length);
        
        if (image< 0){
            setimage([arr].length)
        }
    }
    return(
        <div>
            <button onClick={openModal}>open modal</button>
    <StyledModal  width={1400} height={690} isOpen={modalopen} ariaHideApp={false}  >
        
    {arr.map(({src}) => {
      return <img key={src} className="Imgmodal" width={1360} height={560} src={arr[image].src} alt={image.src} />;
    })} 
        <button className="btnnext" onClick={nextimage}>+</button>
        <button className="btnpreviuos" onClick={previousimage}>-</button>

<button onClick={closeModal}>Zamknij</button>

    </StyledModal>
    </div>
)} ;