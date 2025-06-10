"use client";
import { type EventsType } from "@/sections/Events";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { Fragment } from "react";
export default function EventsColumn(props: {
    events: EventsType;
    className?: string;
    reverse?: boolean;
}) {
    const { events, className, reverse} = props;
    return (
        <motion.div
            initial={{
                y:reverse ? "-50%" : 0,
            }}
            animate={{ y: reverse ? 0 : "-50%" }}
            transition={{
                duration: 14,
                repeat: Infinity,
                ease: "linear",
            }}
            className={twMerge("flex flex-col gap-4 pb-4", className)}
        >
            {Array.from({length:2}).map((_,i)=>(
                <Fragment key={i}>

            {events.map((event) => (
                <div
                className="bg-neutral-900 border border-white/10 rounded-3xl p-6"
                key={event.name}
                >
                    <div className="flex justify-center">
                        <Image
                            src={event.icon}
                            alt={"${integration.name} icon"}
                            className="size-max"
                            />
                    </div>
                    <h3 className="text-xl mt-6">
                        {event.name}
                    </h3>
                    <p className=" text-white/50 mt-2">
                        {event.description}
                    </p>
                    <p className=" text-white/50 mt-2">
                        {event.day} {event.time}
                    </p>
                </div>
            ))}
            </Fragment>
        ))}
        </motion.div>
    );
}
