import "./App.css";
import React from "react";
import About from "./components/About/About";
import BookSeat from "./components/BookSeat/BookSeat";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Location from "./components/Location/Location";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";
import Testimonials from "./components/Testimonials/Testimonials";
import Preloader from "./components/Utility/Preloader";

function App() {
  return (
    <>
      {/* <Preloader /> */}
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Testimonials />
      <BookSeat />
      <Location />
      <Footer />
    </>
  );
}

export default App;
