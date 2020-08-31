import React, { useRef, useState} from "react";
import useIntersectionObserver from "./use-intersection-observer";

const ImageContainer = props => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);
  useIntersectionObserver({
    target: ref,
    onIntersect: ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        setIsVisible(true);
        observerElement.unobserve(ref.current);
      }
    }
  });

  return (
    <div ref={ref} >
      <img 
        className="image" 
        loading="lazy" 
        src={props.src} 
        alt={props.alt} 
        height={props.height}
        width={props.width}
      />
      <div 
        className="image-fadeaway"
        style={{ background: `${ isVisible ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 1)' }`}}
      ></div>
    </div>
  );
};

export default ImageContainer;