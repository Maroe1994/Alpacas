import React, { useState, useEffect } from "react";
import StyledModal from 'react-modal';

export function Propsmodal({ arr }) {
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

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <StyledModal width={1400} height={690} isOpen={modalOpen} ariaHideApp={false}>
        {arr.length > 0 && (
          <img
            key={arr[image].src}
            className="Imgmodal"
            width={1360}
            height={560}
            src={arr[image].src}
            alt={arr[image].src}
          />
        )}
        <button className="btnnext" onClick={nextImage}>
          +
        </button>
        <button className="btnprevious" onClick={previousImage}>
          -
        </button>
        <button onClick={closeModal}>Close</button>
      </StyledModal>
    </div>
  );
}
