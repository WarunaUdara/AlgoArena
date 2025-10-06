"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface TimelineEntry {
    title: string;
    date: string;
    content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 20%", "end 60%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div className="w-full font-sans" ref={containerRef}>
            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-start pt-10 md:pt-32 md:gap-10"
                    >
                        {/* Timeline Dot and Date */}
                        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black flex items-center justify-center border-2" style={{ borderColor: 'rgba(0, 46, 186, 0.3)' }}>
                                <div className="h-4 w-4 rounded-full shadow-lg" style={{ backgroundColor: '#002EBA', boxShadow: '0 10px 15px -3px rgba(0, 46, 186, 0.5)' }} />
                            </div>
                            <h3 className="hidden md:block text-lg md:pl-20 md:text-2xl font-bold text-white">
                                {item.date}
                            </h3>
                        </div>

                        {/* Content */}
                        <div className="relative pl-20 pr-4 md:pl-4 w-full">
                            <h3 className="md:hidden block text-xl mb-4 text-left font-bold text-white">
                                {item.date}
                            </h3>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group"
                            >
                                {item.content}
                            </motion.div>
                        </div>
                    </div>
                ))}
                
                {/* Animated Timeline Line */}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px]"
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                            backgroundColor: '#002EBA',
                            boxShadow: '0 10px 15px -3px rgba(0, 46, 186, 0.5)'
                        }}
                        className="absolute inset-x-0 top-0 w-[2px] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Timeline;
