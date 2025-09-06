
import React, { useEffect, useRef, useState } from "react"; 
import Video from "../components/home/Video";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const [mainReady, setMainReady] = useState(false);
  const [headerReady, setHeaderReady] = useState(false);
  const mainVideoRef = useRef(null);
  const headerVideoRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // move to top when this page loads
  }, []);

  // When both videos are ready, play both in sync
  useEffect(() => {
    if (mainReady && headerReady) {
      // Try to sync currentTime and play both
      try {
        const t = Math.max(
          mainVideoRef.current?.currentTime || 0,
          headerVideoRef.current?.currentTime || 0
        );
        if (mainVideoRef.current) mainVideoRef.current.currentTime = t;
        if (headerVideoRef.current) headerVideoRef.current.currentTime = t;
        mainVideoRef.current?.play();
        headerVideoRef.current?.play();
      } catch (e) {
        // ignore
      }
    }
  }, [mainReady, headerReady]);

  return (
    <div className="text-white">
      <div className="fixed bottom-[12px] left-4 z-[1001]  text-white px-4 py-2 rounded-lg font-[font2]">
        MONTREAL_ {currentTime}
      </div>
      <div className="h-screen w-screen fixed">
        <Video ref={mainVideoRef} onReady={() => setMainReady(true)} />
      </div>
      <div className="h-screen w-screen relative flex flex-col justify-between ">
        <Header videoRef={headerVideoRef} onVideoReady={() => setHeaderReady(true)} />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
