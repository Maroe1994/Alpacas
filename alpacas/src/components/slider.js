
import { SlideWrapper,ImageBox,Images } from "../stylecomponents/mainsite.style"
import { useState,useEffect } from "react";


const Items= ["animala.jpg","animalb.jpg","animalc.jpg","animald.jpg","animale.jpg"]



export function Slider ()  {
    const[index,setIndex]=useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
          setIndex(Math.floor(Math.random()*Items.length));
        }, 2000);
    
        return () => {
          clearInterval(timer);
        };
      }, []);
 return(
<SlideWrapper>
<ImageBox>
<Images src={Items[index]} />

</ImageBox>
</SlideWrapper>
 )
}