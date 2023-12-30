import { motion } from "framer-motion";
import React from "react";
const inputProperties = "w-full px-12 py-4 rounded-md text-black my-4";
const BookSeat = () => {
  return (
    <>
      <div className="w-full h-full">
        <div className="md:px-[200px] py-[50px] ">
          <motion.div
            whileInView={{ y: [10, 0], opacity: [0, 1] }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-light py-[50px] md:px-[100px] md:rounded-2xl shadow-lg">
              <div className="text-head w-full ">
                <h3 className="text-center font_lily text-[72px]  ">
                  Book a Table
                </h3>
                <div className="px-[20px]">
                  <div className="flex flex-col md:flex-row justify-between w-full">
                    <div className="w-full md:w-[45%]">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className={inputProperties}
                      />
                      <input
                        type="text"
                        placeholder="Persons"
                        className={inputProperties}
                      />
                      <input
                        type="text"
                        placeholder="Phone Number"
                        className={inputProperties}
                      />
                    </div>
                    <div className="w-full md:w-[45%]">
                      <input
                        type="date"
                        placeholder="Booking Date"
                        className={inputProperties}
                      />
                      <input
                        type="time"
                        placeholder="Time"
                        className={inputProperties}
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className={inputProperties}
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <a
                      href="/auth"
                      className="mt-8 px-12 py-4 bg-white text-head font-bold shadow-[inset_0_0_0_0_rgb(242,92,84)] hover:text-white hover:shadow-[inset_15em_0_0_0_rgb(242,92,84)] transition ease-in-out delay-50 duration-300 font_poppins"
                    >
                      Book your Seat
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default BookSeat;
