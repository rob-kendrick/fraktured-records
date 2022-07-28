import React, { useState, useRef, useEffectw } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import styles from "../../styles/components/image-carousel/ImageCarousel.module.css";

const ImageCarousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageRef] = useAutoAnimate();
  //styles for individual slides
  const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  function goToPrevious() {
    const isFirstSlide = currentIndex === 0; // returns true if index = 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1; // return 0 or +1
    setCurrentIndex(newIndex);
  }

  function goToNext() {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <div className={styles.carousel__container} ref={imageRef}>
      <div className={styles.leftArrowStyles} onClick={goToNext}>
        ←
      </div>
      <div className={styles.rightArrowStyles} onClick={goToPrevious}>
        →
      </div>
      <div style={slideStyles}></div>
      <div>
        {slides.map((item, index) => {
          <div key={index}>●</div>;
        })}
      </div>
    </div>
  );
};

export default ImageCarousel;
