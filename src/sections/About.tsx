"use client";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `— The Groove brings you live music, karaoke, comedy nights, and big-screen game days. It’s all about good vibes, great company, and unforgettable nights.
`;
const words = text.split(" ");
export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" }); 
    const scrollTarget = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollTarget,
        offset: ["start end", "end end"],
    });
    const [currentWord, setCurrentWord] = useState(0);
    const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

    useEffect(() => {
        wordIndex.on("change", (latest) => {
            setCurrentWord(latest);
        });
    });
    return (
        <section className="py-28 lg:py-40 px-2" id="about">
            <div className="continer">
                <div className="sticky top-28 md:top-28 lg:top-40">
                    <div className="flex justify-center">
                        <motion.h1
                            ref={ref}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut",
                                delay: 0.2,
                            }}
                            className="text-5xl md:text-6xl font-extrabold text-white tracking-tight text-center"
                        >
                            Welcome to <br />
                            <span className="text-[#FF3D5A]">The Groove</span>
                        </motion.h1>
                    </div>
                    <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
                        <span>
                            Family-owned and full of energy 
                        </span>{" "}
                        <span className="">
                            {words.map((word, wordIndex) => (
                                <span
                                    key={wordIndex}
                                    className={twMerge(
                                        "transition duration-500 text-white/15",
                                        wordIndex < currentWord && "text-white"
                                    )}
                                >{`${word} `}</span>
                            ))}
                        </span>
                        <span className="text-[#FF3D5A] block font-bold">
                            Kick back, stay awhile — the night’s just getting started
                        </span>
                    </div>
                </div>
                <div className="h-[110vh]" ref={scrollTarget}></div>
            </div>
        </section>
    );
}
