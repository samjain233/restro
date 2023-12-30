const Footer = () => {
  const company = [
    { url: "#", item: "Abous Us" },
    { url: "#", item: "Our Services" },
    { url: "#", item: "Privacy Policy" },
  ];
  const categories = [
    { url: "#", item: "Home" },
    { url: "#", item: "About Us" },
    { url: "#", item: "Menu" },
    { url: "#", item: "Book a Table" },
    { url: "#", item: "Contact" },
    { url: "#", item: "Address" },
    { url: "#", item: "Testimonials" },
  ];

  const h4class =
    "text-white text-lg font-semibold relative mb-4 md:mb-8 before:content-[''] before:absolute before:left-0 before:bottom-[-10px] before:bg-primary before:h-[2px] before:w-[50px]";
  return (
    <>
      <footer className="font_poppins">
        <div className="mt-8 w-full bg-[#24262b]">
          <div className="w-full p-8">
            <div className="w-full row flex flex-col md:flex-row flex-wrap justify-evenly">
              <div className="company ">
                <h4 className={h4class}>Quibeez</h4>
                {/* <ul className="leading-relaxed text-[#bbbbbb]">
                  {company.map((element) => {
                    return (
                      <li
                        key={element.item}
                        className="mb-1 hover:text-white transition-all duration-200"
                      >
                        <a href={element.url}>{element.item}</a>
                      </li>
                    );
                  })}
                </ul> */}
                <div className="text-[#bbbbbb]">
                  <p>A Restro for your dear ones</p>
                </div>
              </div>
              <div className="Categories mt-8 md:mt-0">
                <h4 className={h4class}>Categories</h4>
                <div></div>
                <ul className="leading-relaxed text-[#bbbbbb]">
                  {categories.map((element) => {
                    return (
                      <li
                        key={element.item}
                        className="mb-1 hover:text-white transition-all duration-200"
                      >
                        <a href={element.url}>{element.item}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="follow mt-8 md:mt-0">
                <h4 className={h4class}>Follow Us</h4>
                <div className="social-icons mt-4 flex flex-row flex-wrap ">
                  <a
                    href="#"
                    className="flex mr-6 bg-gray-700 w-[60px] h-[60px] rounded-full items-center justify-center text-white hover:bg-white hover:text-[#24262b] transition-all duration-300"
                  >
                    <i className="fab fa-facebook-f "></i>
                  </a>
                  <a
                    href="#"
                    className="flex mr-6 bg-gray-700 w-[60px] h-[60px] rounded-full items-center justify-center text-white hover:bg-white hover:text-[#24262b] transition-all duration-300"
                  >
                    <i className="fab fa-instagram "></i>
                  </a>
                  <a
                    href="#"
                    className="flex mr-6 bg-gray-700 w-[60px] h-[60px] rounded-full items-center justify-center text-white hover:bg-white hover:text-[#24262b] transition-all duration-300"
                  >
                    <i className="fab fa-linkedin-in "></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="text-[#bbbbbb] text-center pt-4 md:pt-12">
              <p>&copy; Copyright 2023 | TrendByte Solution</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
