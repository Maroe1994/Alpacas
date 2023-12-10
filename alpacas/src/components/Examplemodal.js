import React from "react";

import Modal from 'react-modal'
import { useState,useEffect } from "react";

const Galeries=["animala.jpg","animalb.jpg","animalc.jpg","animald.jpg","animale.jpg"]

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
        

        
    }
    function previousimage (){
        setimage(image-1)
        
    }
    return(
        <div>
            <button onClick={openModal}>open modal</button>
    <Modal width={1400} height={665} isOpen={modalopen} >
        <button  onClick={nextimage}>+</button>
        <button onClick={previousimage}>-</button>
<img width={1380} height={615} src={Galeries[image]}  alt=""/>
<button onClick={closeModal}>close modal</button>
    </Modal>
    </div>
)} ;
 