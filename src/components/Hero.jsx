import React from "react";
import { useState } from "react";
import * as motion from "motion/react-client";
import { GrTwitter } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { SiPreact } from "react-icons/si";
import { FaDocker } from "react-icons/fa6";
import { SiAltiumdesigner } from "react-icons/si";
import emailjs from "emailjs-com";


export default function Hero() {
    const [isOpen, setIsOpen] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    {/* EmailJS configuration */}

    const handleSend = (e) => {
        e.preventDefault();
        emailjs.send("", "", form, "")
            .then(() => {
                alert("Message sent successfully!");
                setIsOpen(false);
                setForm({ name: "", email: "", message: "" });
            })
            .catch((err) => {
                console.error(err);
                alert("Failed to send message.");
            });
    };

    return (
        <>
            <div className="flex flex-col bg-[#E4E4E4] w-full lg:h-screen ">
                <div className="flex flex-row-reverse p-5 lg:p-8">
                    <h2 className="ml-4 text-xl font-bold text-monospace lg:text-2xl">Follow Me</h2>
                    <GrTwitter className="h-5 w-5 cursor-pointer lg:h-8 w-8" onClick={() => window.open("https://x.com/sundaramkatare", "_blank")} />
                </div>
                <div className="flex flex-col justify-center self-center h-full gap-10 mt-20 ml-10 mr-10 lg:flex-row gap-40 justify-center">
                    <div className=" ">
                        <h1 className="text-3xl font-bold text-black lg:text-4xl xl:text-6xl">Hello, I'm Sundaram Katare</h1>
                        <p className="text-xs font-bold text-[#3578DD] md:text-lg lg:text-xl xl:text-2xl">
                            Full Stack Developer, I’ve built modern web <br />
                            applications that solve real-world problems <br />
                            and enhance user experience. <br />
                            Open to freelance, collaboration, and new opportunities.
                        </p>

                        <motion.button
                            className="flex items-center justify-center gap-2 mt-5 mb-20 lg:mb-0 lg:mt-10 relative px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 text-base sm:text-lg lg:text-xl font-semibold text-white bg-black rounded-3xl overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setIsOpen(true)}
                        >
                            <MdEmail className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
                            <h1 className="text-base sm:text-lg lg:text-2xl">Get In Touch</h1>

                            {/* Animated Border */}
                            <motion.div
                                className="absolute inset-0 border-4 sm:border-6 lg:border-8 rounded-3xl pointer-events-none"
                                animate={{
                                    borderColor: ["#ff5733", "#33ff57", "#3357ff", "#ff33a6", "#ff5733"],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                style={{ borderStyle: "solid" }}
                            />
                        </motion.button>

                    </div>

                    <div className="flex flex-col hidden lg:flex">
                        <div className="flex flex-row">
                            <motion.div
                                className=" text-center p-6"
                                initial={{ y: 0 }}
                                animate={{ y: [0, -10, 0, 10] }}
                                transition={{
                                    repeat: Infinity,
                                    repeatType: "mirror",
                                    duration: 1,
                                    ease: "easeInOut",
                                }}
                                drag
                                dragConstraints={{ top: -10, left: -10, right: 10, bottom: 10 }}

                            >
                                <SiPreact className="h-20 w-20 text-red-500" />
                            </motion.div>
                        </div>

                        <div className="flex flex-row-reverse w-[310px] ">
                            <motion.div
                                className=" text-center p-6"
                                initial={{ y: 0 }}
                                animate={{ y: [0, -10, 0, 10] }}
                                transition={{
                                    repeat: Infinity,
                                    repeatType: "mirror",
                                    duration: 1,
                                    ease: "easeInOut",
                                }}
                                drag
                                dragConstraints={{ top: -10, left: -10, right: 10, bottom: 10 }}

                            >
                                <FaDocker className="h-20 w-20 text-blue-500" />
                            </motion.div>
                        </div>

                        <motion.div
                            className=" text-center p-6"
                            initial={{ y: 0 }}
                            animate={{ y: [0, -10, 0, 10] }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "mirror",
                                duration: 1,
                                ease: "easeInOut",
                            }}
                            drag
                            dragConstraints={{ top: -10, left: -10, right: 10, bottom: 10 }}

                        >
                            <SiAltiumdesigner className="h-20 w-20 text-gray-500" />

                        </motion.div>
                    </div>
                </div>

                {/* Modal */}
                {isOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50">
                        <div className="bg-white p-8 rounded-xl w-[400px] space-y-4 shadow-lg">
                            <h2 className="text-3xl font-bold text-center text-black">Send a Message</h2>
                            <form onSubmit={handleSend} className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full border p-3 rounded"
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full border p-3 rounded"
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    required
                                />
                                <textarea
                                    placeholder="Your Message"
                                    className="w-full border p-3 rounded h-32"
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    required
                                />
                                <button type="submit" className="w-full bg-black text-white p-3 rounded font-bold">
                                    Send
                                </button>
                            </form>
                            <button
                                className="absolute bg-white p-4 rounded-lg top-4 right-6 text-black text-xl"
                                onClick={() => setIsOpen(false)}
                            >
                                ✕
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </>
    )
}
