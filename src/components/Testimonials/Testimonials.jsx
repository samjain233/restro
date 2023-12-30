import React from "react";
import SwiperCards from "./SwiperCards";
import { motion } from "framer-motion";
const Testimonials = () => {
  return (
    <>
      <div className="px-4 md:px-[100px] py-[40px] md:py-[100px]">
        <div className="w-full mb-[70px]">
          <motion.div
            whileInView={{ y: [10, 0], opacity: [0, 1] }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-[48px] md:text-[100px] font_lily text-head text-center">
              Testimonials
            </p>
          </motion.div>
          <motion.div
            whileInView={{ y: [10, 0], opacity: [0, 1] }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-center text-[22px] md:text-[36px] font_poppins text-warm font-semibold">
              What our foody say !
            </p>
          </motion.div>
        </div>
        <motion.div
          whileInView={{ y: [10, 0], opacity: [0, 1] }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
        >
          <SwiperCards />
        </motion.div>
      </div>
    </>
  );
};

export default Testimonials;
