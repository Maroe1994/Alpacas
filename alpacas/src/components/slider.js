
import { SlideWrapper,ImageBox,Images } from "../stylecomponents/mainsite.style"
import { useState,useEffect } from "react";

const Items=[<Images src="zwierzę1.jpg"/>,<Images src="zwierzę2.jpg"/>,<Images src="zwierzę3.jpg"/>,<Images src="zwierzę4.jpg"/>,<Images src="zwierzę5.jpg"/>] 

export function Slider ()  {
    const[index,setIndex]=useState(Date.now());
    useEffect(() => {
        const timer = setInterval(() => {
          setIndex(Date.now());
        }, 3000);
    
        return () => {
          clearInterval(timer);
        };
      }, [index]);
 return(
<SlideWrapper>
<ImageBox>
<Images src={`${Items}?=${index}`} />
</ImageBox>
</SlideWrapper>
 )
}