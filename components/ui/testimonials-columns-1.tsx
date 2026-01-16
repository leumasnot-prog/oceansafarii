"use client";
import React from "react";
import { motion } from "motion/react";

export const TestimonialsColumn = (props: {
    className?: string;
    testimonials: { text: string; image: string; name: string; role: string }[];
    duration?: number;
}) => {
    return (
        <div className={props.className}>
            <motion.div
                animate={{
                    translateY: "-50%",
                }}
                transition={{
                    duration: props.duration || 10,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                className="flex flex-col gap-6 pb-6"
            >
                {[
                    ...new Array(2).fill(0).map((_, index) => (
                        <React.Fragment key={index}>
                            {props.testimonials.map(({ text, image, name, role }, i) => (
                                <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl max-w-xs w-full" key={i}>
                                    <div className="text-slate-200 leading-relaxed italic">"{text}"</div>
                                    <div className="flex items-center gap-3 mt-5">
                                        <img
                                            width={40}
                                            height={40}
                                            src={image}
                                            alt={name}
                                            className="h-10 w-10 rounded-full object-cover border border-teal-500/50"
                                        />
                                        <div className="flex flex-col">
                                            <div className="font-semibold tracking-tight leading-5 text-white">{name}</div>
                                            <div className="leading-5 text-teal-400 text-sm tracking-tight">{role}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </React.Fragment>
                    )),
                ]}
            </motion.div>
        </div>
    );
};
