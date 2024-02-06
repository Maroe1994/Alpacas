import React, { useState, useEffect } from "react";

import styled from 'styled-components';

const ModalWrapper = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  border: 3px solid black;
  justify-content: center;
  z-index: 2; // Wartość z-index dla modala
  
`;


const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  border:4px solid red;
  width:50%;
  height:50%;
  justify-content: center;
  margin-left: auto;
  margin-right:auto;
  margin-top: 150px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  max-height: 50vh;
`;

const NextButton = styled.button`
  margin-top: 20px;
  cursor: pointer;
`;

const PreviousButton = styled.button`
  margin-top: 40px;
  cursor: pointer;
  margin-right: 20px;
`;
const Photomodal=styled.img`
width: 400px;
height: 300px;
border-radius: 10px;
cursor: pointer;
:hover{
  opacity: 0.8;
  scale: 0.8;
}

::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.3); /* Ustaw kolor tła z filtrem */
    pointer-events: none; /* Upewnij się, że pseudo-element nie przechodzi przez zdarzenia myszy */
    

  }
z-index: 1;
filter:saturate(40%)
`



export function Propsmodal({ arr,src, }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [image, setImage] = useState(0);
  
  

  
  function openModal() {
    setModalOpen(true);
    
  }

  function closeModal() {
    setModalOpen(false);
    
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setImage((prevImage) => (prevImage + 1) % arr.length);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [arr.length]);

  function nextImage() {
    setImage((prevImage) => (prevImage + 1) % arr.length);
  }

  function previousImage() {
    setImage((prevImage) => (prevImage - 1 + arr.length) % arr.length);
  }

  function handleWrapperClick(event) {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }
  
  

  return (
    <div>
      <Photomodal alt="titleimage" src={src} onClick={openModal}/>
      <ModalWrapper  isOpen={modalOpen}  onClick={handleWrapperClick}>
        <ModalContent  >
          {arr.length > 0 && (
            <Image 
              key={arr[image].src}
              src={arr[image].src}
              alt={arr[image].src}
            />
          )}
          <NextButton className="btnnext" onClick={nextImage}>
            Previous
          </NextButton>
          <PreviousButton className="btnprevious" onClick={previousImage}>
            Next
          </PreviousButton>
          <CloseButton onClick={closeModal}>X</CloseButton>
        </ModalContent>
      </ModalWrapper>
    </div>
  );
}
