import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { PiFileSqlFill } from "react-icons/pi";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { RiVercelFill } from "react-icons/ri";
import { SiRender } from "react-icons/si";

const categories = ["Frontend", "Backend", "Tools", "Languages"];

const skills = [
  { name: "React", icon: <FaReact className="h-16 w-16 text-blue-500" />, category: "Frontend" },
  { name: "HTML", icon: <FaHtml5 className="h-16 w-16 text-orange-500" />, category: "Frontend" },
  { name: "CSS", icon: <FaCss3Alt className="h-16 w-16 text-blue-400" />, category: "Frontend" },
  { name: "Next.js", icon: <RiNextjsFill className="h-16 w-16 text-black dark:text-white" />, category: "Frontend" },
  { name: "Framer Motion", icon: <TbBrandFramerMotion className="h-16 w-16 text-pink-500"/>, category: "Frontend" },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill className="h-16 w-16 text-cyan-400"/>, category: "Frontend" },

  { name: "Node.js", icon: <FaNodeJs className="h-16 w-16 text-green-600" />, category: "Backend" },
  { name: "Express.js", icon: <SiExpress className="h-16 w-16 text-gray-800 dark:text-gray-300"/>, category: "Backend" },
  { name: "MongoDB", icon: <DiMongodb className="h-16 w-16 text-green-700"/>, category: "Backend" },
  { name: "PostgreSQL", icon: <BiLogoPostgresql className="h-16 w-16 text-blue-700"/>, category: "Backend" },

  { name: "Git", icon: <FaGithub className="h-16 w-16 text-black dark:text-white"/>, category: "Tools" },
  { name: "Docker", icon: <FaDocker className="h-16 w-16 text-blue-500"/>, category: "Tools" },
  { name: "Postman", icon: <SiPostman className="h-16 w-16 text-orange-600" />, category: "Tools" },
  { name: "VS Code", icon: <VscVscode className="h-16 w-16 text-blue-500"/>, category: "Tools" },
  { name: "Vercel", icon: <RiVercelFill className="h-16 w-16 text-gray-500 dark:text-white"/>, category: "Tools" },
  { name: "Render", icon: <SiRender className="h-16 w-16 text-red-500"/>, category: "Tools" },

  { name: "Java", icon: <FaJava className="h-16 w-16 text-red-600"/>, category: "Languages" },
  { name: "JavaScript", icon: <IoLogoJavascript className="h-16 w-16 text-yellow-400"/>, category: "Languages" },
  { name: "SQL", icon: <PiFileSqlFill className="h-16 w-16 text-blue-600"/>, category: "Languages" },

];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("Frontend");

  const filteredSkills = skills.filter((skill) => skill.category === selectedCategory);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 -z-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-600 to-black bg-[length:200%_200%] animate-gradient-x"></div>
      </div>

      {/* Skills Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-white">
        <div className="text-center mb-6">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-12 md:mb-20"
          >
            My Skills
          </motion.h2>
        </div>

        <motion.div 
          className="flex justify-center gap-3 mb-8 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full border-2 transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-white text-black font-bold border-white"
                  : "bg-transparent hover:bg-gray-800 border-white/50"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          <AnimatePresence mode="wait">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white text-black backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-lg flex flex-col items-center hover:shadow-xl hover:bg-black hover:text-white transition-all duration-300"
              >
                <div className="mb-4">
                  {skill.icon}
                </div>
                <p className="font-semibold text-lg">{skill.name}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}