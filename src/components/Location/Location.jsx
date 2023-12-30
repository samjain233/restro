import { motion } from "framer-motion";
import React from "react";

const h3Head = "text-secondary text-2xl";
const Location = () => {
  return (
    <>
      <div className="w-full my-[50px]">
        <motion.div
          whileInView={{ y: [10, 0], opacity: [0, 1] }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="w-full flex flex-col md:flex-row">
            <div className="w-full md:w-[50%] ">
              <p className="text-[42px] md:text-[72px] font_lily text-head text-center">
                Contact
              </p>
              <div className="px-4 md:px-[100px] font_poppins">
                {/* contact */}
                <div className="my-4">
                  <h3 className={h3Head}>Contact No :</h3>
                  <p>75523XXXXX</p>
                  <p>78021XXXXX</p>
                </div>

                {/* Email  */}
                <div className="mb-4">
                  <h3 className={h3Head}>Email</h3>
                  <p>Quebeez@abc.com</p>
                </div>

                {/* Address  */}
                <div className="mb-4">
                  <h3 className={h3Head}>Address</h3>
                  <p>3C, Tashkent Marg</p>
                  <p>Civil Lines</p>
                  <p>Prayagraj, Uttar Pradesh 211001</p>
                  <p>India</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[50%] mt-4 md:mt-0 flex justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.3483009290317!2d81.86614781266306!3d25.502447517200274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399ab5a88f84b1ab%3A0xd2e4714ee3157fcb!2sS%20K%20General%20Store!5e0!3m2!1sen!2sin!4v1696575025488!5m2!1sen!2sin"
                width="100"
                height="450"
                //   style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="w-full md:w-[80%]"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Location;
