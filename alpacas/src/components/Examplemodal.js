import React from "react";

import Modal from 'react-modal'
import { useState,useEffect } from "react";



const Galeries=["animala.jpg","animalb.jpg","animalc.jpg","animald.jpg","animale.jpg"]

const customStyles = {
    content: {
      
      background: "#52565c"
      
    },
    img:{
        border: "15px"
    }
  };

export function Examplemodal() {
     
   
    
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
          setimage(Math.floor(Math.random()*Galeries.length));
        }, 5000);
    
        return () => {
          clearInterval(timer);
        };
      }, []);
    function nextimage () {
        setimage(image+1) 
       
        if (image>= 4){
           setimage(0) 
        }
    
        }
    function previousimage (){
        setimage(image-1)
        
        if (image<= 0){
            setimage(4)
        }
    }
    return(
        <div>
            <button onClick={openModal}>open modal</button>
    <Modal width={1400} height={690} isOpen={modalopen} style={customStyles} >
        
        <button  onClick={nextimage}>+</button>
        <button onClick={previousimage}>-</button>
<img  width={1380} height={600} src={Galeries[image]}  alt=""/>
<button onClick={closeModal}>Zamknij</button>

    </Modal>
    </div>
)} ;
 