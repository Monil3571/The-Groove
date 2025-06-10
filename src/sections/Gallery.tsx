"use client";
import beerImage from "@/assets/images/BeerTheGroove.jpg";
import foodImage from "@/assets/images/FoodTheGroove.jpg";
import fireplaceImage from "@/assets/images/FireplaceTheGroove.jpg";
import stageImage from "@/assets/images/StageTheGroove.jpg";
import Image from "next/image";
import { Fragment } from "react";
import { motion } from "framer-motion";

const images = [
    { name: "Beer", image: beerImage },
    { name: "Food", image: foodImage },
    { name: "Fireplace", image: fireplaceImage },
    { name: "Stage", image: stageImage },
];
const keywords = ["Drinks.", "Food.","Music.", "Karaoke.", "Sports.","Vibes."];
export default function Gallery() {
    return (
        <section className="py-12 overflow-x-clip" id="gallery">
            <div className="container">
                
                <motion.h2
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-white hover:text-[#FF3D5A] text-4xl font-extrabold tracking-wide font-luckiestGuy"
                    style={{ wordSpacing: "0.8rem" }} 
                >
                    {keywords.join(" ")}
                </motion.h2>
                <div className="flex overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <motion.div
                        animate={{ x: "-50%" }}
                        transition={{
                            duration: 15,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                        className="flex flex-none gap-8 pr-24"
                    >
                        {Array.from({ length: 2 }).map((_, i) => (
                            <Fragment key={i}>
                                {images.map((image) => (
                                    <Image
                                        src={image.image}
                                        key={image.name}
                                        alt={image.name}
                                        className="w-48 object-cover rounded-xl"
                                    />
                                ))}
                            </Fragment>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
