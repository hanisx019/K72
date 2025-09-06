import React, { useEffect } from "react"; 
import Video from "../components/home/Video";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
    import { women } from '../assets/assets.js';

const Home = () => {

  const [currentTime, setCurrentTime] = React.useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // move to top when this page loads
  }, []);

  return (
    <div className="text-white">
      <div className="fixed bottom-[12px] left-4 z-[1001]  text-white px-4 py-2 rounded-lg font-[font2]">
        MONTREAL_ {currentTime}
      </div>
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
