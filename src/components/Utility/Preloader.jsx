import React, { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      setLoading(false);
      document.body.style.overflowY = "scroll";
    }, 3000);
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);
  return (
    <>
      {loading && (
        <div className="absolute w-full h-full top-0 left-0 backdrop-blur-2xl z-[1000]">
          <div className="z-[1002] fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
            <HashLoader
              size={150}
              color={"#f14a41"}
              loading={loading}
              speedMultiplier={1.5}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Preloader;
