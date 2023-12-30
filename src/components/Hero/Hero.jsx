import React, { useState } from "react";
import heroImg from "../../asset/images/hero-min.jpg";
import "./scroll.css";
import { motion } from "framer-motion";
import Type from "./Type";
import Image from "../Utility/Image";

const Hero = () => {
  const [hide, setHide] = useState(true);
  const showImage = () => {
    console.log("onload called");
    setHide(false);
  };

  return (
    <>
      {/* <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.2, ease: "easeOut", delay: 0 }}
        viewport={{ once: true }}
      > */}
      <div className="w-full h-screen relative blur-load">
        <img
          src={heroImg}
          loading="eager"
          alt="Picture of the author"
          className={`w-full h-full object-cover transition-all duration-300 ${
            hide ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => {
            showImage();
          }}
        />
        <div className="absolute top-[50%] translate-y-[-50%] w-full">
          <motion.div
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[72px] md:text-[120px] text-head font_lily text-center">
              Quibeez
            </h2>
          </motion.div>
          <motion.div
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
            viewport={{ once: true }}
          >
            <h2
              className={`text-[24px] md:text-[42px] text-white font_poppins text-center my-[-20px]`}
            >
              <Type />
            </h2>
          </motion.div>
        </div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 2 }}
          viewport={{ once: true }}
        >
          <div className="scrolldown">
            <span className="scrolldown_span"></span>
            <span className="scrolldown_span scrolldown_span2"></span>
            <span className="scrolldown_span scrolldown_span3"></span>
          </div>
        </motion.div>
      </div>
      {/* </motion.div> */}
    </>
  );
};

export default Hero;
