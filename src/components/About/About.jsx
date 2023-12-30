import React from "react";
import { motion } from "framer-motion";
import SwiperCards from "./SwiperCards";

const About = () => {
  return (
    <>
      <div className="w-full h-full">
        <div className="md:pt-[50px] md:px-[20px]">
          <motion.div
            whileInView={{ y: [10, 0], opacity: [0, 1] }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-light to-warm flex flex-col md:flex-row pt-[40px] md:pt-[80px] px-4 md:px-[100px] md:rounded-t-2xl">
              <div className="w-full md:w-[50%]">
                <motion.div
                  whileInView={{ y: [10, 0], opacity: [0, 1] }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
                  viewport={{ once: true }}
                >
                  <div>
                    <h2 className={`text-[64px] md:text-[120px] text-primary font_lily`}>
                      Welcome
                    </h2>
                    <h3 className="md:text-lg md:pr-[100px] font_poppins text-white">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. There are many
                      variations of passages of Lorem Ipsum available, but the
                      majority have suffered alteration in some form, by
                      injected humour, or randomised words which don't look even
                      slightly believable.
                    </h3>
                  </div>
                </motion.div>
              </div>
              <div className="w-full md:w-[50%]">
                <div className="mt-8 md:mt-0 md:px-[50px]">
                  <motion.div
                    whileInView={{ y: [10, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
                    viewport={{ once: true }}
                  >
                    <SwiperCards />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
