import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { SiPeerlist } from "react-icons/si";
import { motion, AnimatePresence, useInView } from "framer-motion";

// Custom hook for responsive window size
function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const handleResize = () => setSize([window.innerWidth, window.innerHeight]);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

const icons = [
  { icon: <FaLinkedin size={30} />, link: "https://www.linkedin.com/in/sundaram-katare5/" },
  { icon: <FaTwitter size={30} />, link: "https://x.com/sundaramkatare" },
  { icon: <FaGithub size={30} />, link: "https://github.com/Sundaram-Katare" },
  { icon: <FaEnvelope size={30} />, link: "mailto:sundaramkatare53@gmail.com" },
  { icon: <SiPeerlist size={30} />, link: "https://peerlist.io/sundaram_katare" },
];

export default function ContactPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [visibleIcons, setVisibleIcons] = useState([]);
  const [width] = useWindowSize();

  // Adjust radius based on screen width
  const radius = width >= 1024 ? 280 : width >= 768 ? 180 : 100;

  useEffect(() => {
    if (isInView) {
      icons.forEach((_, index) => {
        setTimeout(() => {
          setVisibleIcons((prev) => [...prev, index]);
        }, index * 500);
      });
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-black text-white relative overflow-hidden"
    >
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="text-3xl font-extrabold z-10 md:text-5xl"
      >
        Contact
      </motion.h1>

      <AnimatePresence>
        {visibleIcons.map((index) => {
          const angle = (360 / icons.length) * index;
          const radian = (angle * Math.PI) / 180;
          const x = radius * Math.cos(radian);
          const y = radius * Math.sin(radian);

          return (
            <motion.a
              key={index}
              href={icons[index].link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ x: 0, y: 0, opacity: 0, rotate: -180 }}
              animate={{ x, y, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="absolute text-white hover:text-pink-400"
              style={{
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              {icons[index].icon}
            </motion.a>
          );
        })}
      </AnimatePresence>

      <motion.div
        className="absolute bottom-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="w-[200%] h-[200%] animate-spin-slow bg-gradient-radial from-pink-600/10 via-purple-500/10 to-transparent rounded-full absolute top-[-50%] left-[-50%] z-0" />
      </motion.div>
    </div>
  );
}
