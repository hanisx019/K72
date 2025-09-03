import React, { useEffect } from "react"; 
import Video from "../components/home/Video";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // move to top when this page loads
  }, []);

  return (
    <div className="text-white">
      <div className="h-screen w-screen fixed">
        <Video />
      </div>
      <div className="h-screen w-screen relative flex flex-col justify-between ">
        <Header />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
