"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import heroImage from "@/assets/images/the-groove-bg.jpg";
export default function Hero() {
    return (
        <section id="home" className="h-screen relative">
            <div className="flex flex-col">
                <Image
                    src={heroImage}
                    alt="The Groove Bar"
                    fill
                    className="object-cover z-0 opacity-60"
                    priority
                />

                {/* Overlay content */}
                <div className="flex flex-col md:flex-row md:items-center items-start gap-4 justify-between z-10 max-w-3xl px-4 absolute bottom-24 right-10">
                    <div className="md:flex md:flex-col">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-5xl md:text-8xl font-bold py-4"
                        >
                        The Groove
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="text-lg md:text-xl pl-2"
                        >
                            Where good times and great company come together every night.
                        </motion.p>
                    </div>
                    <motion.a
                        href="#menu"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block bg-[#FF3D5A] hover:bg-amber-600 font-bold px-6 py-3 rounded-full transition"
                    >
                        View Menu
                    </motion.a>
                </div>
            </div>
        </section>
    );
}
