import React from "react";
import MenuItem from "./MenuItem";
import img1 from "../../asset/images/Menu/1.jpg";
import { motion } from "framer-motion";

const data = [
  {
    imgUrl: "./images/Menu/menu-1.png",
    ItemName: "Shahi Paneer",
    Cost: "Rs 550/-",
  },
  {
    imgUrl: "./images/Menu/menu-2.png",
    ItemName: "Shahi Paneer",
    Cost: "Rs 550/-",
  },
  {
    imgUrl: "./images/Menu/menu-3.png",
    ItemName: "Shahi Paneer",
    Cost: "Rs 550/-",
  },
  {
    imgUrl: "./images/Menu/menu-4.png",
    ItemName: "Shahi Paneer",
    Cost: "Rs 550/-",
  },
  {
    imgUrl: "./images/Menu/menu-5.png",
    ItemName: "Shahi Paneer",
    Cost: "Rs 550/-",
  },
  {
    imgUrl: "./images/Menu/menu-6.png",
    ItemName: "Shahi Paneer",
    Cost: "Rs 550/-",
  },
];

const Menu = () => {
  return (
    <>
      <div className="w-full h-full">
        <div className="md:px-[20px] pb-[50px]">
          <div className="bg-gradient-to-r from-light to-warm py-[100px] px-4 md:px-[100px] rounded-b-3xl md:rounded-b-2xl shadow-lg">
            <motion.div
              whileInView={{ y: [10, 0], opacity: [0, 1] }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[64px] md:text-[120px] text-primary font_lily text-center">
                Menu
              </h2>
              <div className="flex flex-col md:flex-row w-full mt-8">
                <div className="w-[30%] hidden md:block">
                  <img src={img1} className="w-full rounded-2xl shadow-lg" />
                </div>
                <div className="w-full md:w-[70%] ">
                  <div className="flex flex-row flex-wrap justify-evenly">
                    {data.map((element) => {
                      return <MenuItem {...element} />;
                    })}
                  </div>
                  <div className="flex justify-center mt-12">
                    <div className="">
                      <a
                        href="/auth"
                        className="mx-4 px-12 py-4 bg-white text-head font-bold shadow-[inset_0_0_0_0_rgb(247,178,103)] hover:text-white hover:shadow-[inset_15em_0_0_0_rgb(247,178,103)] transition ease-in-out delay-50 duration-300 font_poppins"
                      >
                        View Full Menu
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
