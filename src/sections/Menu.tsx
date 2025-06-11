"use client"
import { motion } from "framer-motion";
import Image from "next/image";

const foodMenus = [
    { src: "/Menu1.jpg", alt: "Food Menu 1", href: "Menu1.jpg" },
    { src: "/Menu2.jpg", alt: "Food Menu 2", href: "Menu2.jpg" },
];

export default function MenuSection() {
    return (
        <section className="py-36" id="menu">
            <div className="container mx-auto px-4">
                <h2 className="font-luckiestGuy text-4xl uppercase tracking-wide mb-12 text-center text-white">
                    Eat. <span className="text-[#FF3D5A]">Drink.</span> Repeat.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {foodMenus.map(({ src, alt, href }) => (
                        <motion.a
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="group relative overflow-hidden rounded-xl cursor-pointer"
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={alt}
                        >
                            <div className="relative w-full h-64">
                                <Image
                                    src={src}
                                    alt={alt}
                                    fill
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110"
                                />
                            </div>
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                <span className="font-inter text-white text-lg font-medium">
                                    View {alt}
                                </span>
                            </div>
                        </motion.a>
                    ))}

                 <motion.a
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="group relative overflow-hidden rounded-xl cursor-pointer"
                            href="/Menu3.jpg"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                        <div className="relative w-full h-64">
                            <Image
                                src="/Menu3.jpg"
                                alt="Drinks Menu"
                                fill
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110"
                            />
                        </div>
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <span className="font-inter text-white text-lg font-medium">
                                View Drinks Menu
                            </span>
                        </div>
                    </motion.a>
                </div>
            </div>
        </section>
    );
}
