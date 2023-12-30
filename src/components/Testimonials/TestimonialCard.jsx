import React from "react";

const TestimonialCard = () => {
  return (
    <>
      <div className="w-full m-[20px] md:m-[50px] mb-[70px]">
        <div className="bg-testimonial pt-[80px] pb-[40px] px-[10px] md:p-[50px] rounded-lg shadow-md">
          <div className="w-full flex justify-center mt-[-100px]">
            <div className="w-[100px]">
              <img
                src="./images/testimonials/4.png"
                className="rounded-full w-[100px] h-[100px] object-cover"
              />
            </div>
          </div>
          <div className="w-full">
            <p className="text-center font_poppins mt-1 text-xl font-semibold">Ram Kumar Badoria</p>
          </div>
          <div className="mt-[20px]">
          <h3 className="text-gray font_poppins font-thin text-sm md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, autem voluptas ad ipsam tempora ipsum, non
            perspiciatis a eveniet nulla minus, doloribus cumque harum ullam
            odit asperiores animi quas perferendis qui quasi modi nihil
            necessitatibus suscipit! Repellat saepe ullam magnam totam a
            consequuntur vel quisquam tenetur quibusdam, amet sunt expedita.
          </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
