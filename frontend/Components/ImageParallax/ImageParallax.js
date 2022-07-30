import React from "react";
import { Parallax } from "react-parallax";
import styles from "../../styles/components/image-parallax/ImageParallax.module.css";

const ImageParallax = ({ url }) => {
  return (
    <Parallax
      blur={{ min: 10, max: -15 }}
      bgImage={url}
      strength={400}
      bgImageAlt="alt text"
      className={styles.parallax}
    >
      <div></div>
    </Parallax>
  );
};

export default ImageParallax;
