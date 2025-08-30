import React from "react";
import Video from "../components/home/Video";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";

const Home = () => {
  return (
    <div>
      <div className="h-screen w-screen fixed">
        <Video />
      </div>
      <div className="h-screen w-screen relative flex flex-col">
        <Header />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
