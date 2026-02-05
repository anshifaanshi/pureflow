import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/section-title";

export default function OurLatestCreation() {
    const [isHovered, setIsHovered] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [className, setClassName] = useState("");

    const sectionData = [
        {
            title: "Alkaline Water Systems",
            description:
                "Balance your body’s pH levels with mineral-rich water that helps neutralize acidity, improves digestion, and boosts immunity.",
            image:
                "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=800&h=400&auto=format&fit=crop",
            align: "object-center",
        },
        {
            title: "Hydrogen Water Tech",
            description:
                "Experience the power of antioxidants. Our hydrogen-rich water helps reduce inflammation, increase energy, and speed up recovery.",
            image:
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&h=400&auto=format&fit=crop",
            align: "object-right",
        },
        {
            title: "Smart Water Purifiers",
            description:
                "Industrial-grade purification for your home. Multi-stage filtration removes toxins while retaining essential minerals.",
            image:
                "https://images.unsplash.com/photo-1628177142898-93e36e4e3f4c?q=80&w=800&h=400&auto=format&fit=crop",
            align: "object-center",
        },
    ];

    useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % sectionData.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [isHovered, sectionData.length]);

    return (
        <section className="flex flex-col items-center" id="creations">
            <SectionTitle
                title="Our Advanced Water Solutions"
                description="We go beyond standard filtration to bring you the science of superior hydration and cellular wellness."
            />

            <div
                className="flex items-center gap-4 h-100 w-full max-w-5xl mt-18 mx-auto"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {sectionData.map((data, index) => (
                    <motion.div
                        key={data.title}
                        className={`relative group flex-grow h-[400px] rounded-xl overflow-hidden
                        ${
                            isHovered && className
                                ? "hover:w-full w-56"
                                : index === activeIndex
                                ? "w-full"
                                : "w-56"
                        }
                        ${className}
                        ${!className ? "pointer-events-none" : ""}`}
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        onAnimationComplete={() =>
                            setClassName("transition-all duration-500")
                        }
                        transition={{
                            delay: index * 0.15,
                            type: "spring",
                            stiffness: 320,
                            damping: 70,
                            mass: 1,
                        }}
                    >
                        <img
                            className={`h-full w-full object-cover ${data.align}`}
                            src={data.image}
                            alt={data.title}
                        />

                        <div
                            className={`absolute inset-0 flex flex-col justify-end p-10 text-white
                            bg-gradient-to-t from-[#4682B4] via-[#4682B4]/40 to-transparent transition-all duration-300
                            ${
                                isHovered && className
                                    ? "opacity-0 group-hover:opacity-100"
                                    : index === activeIndex
                                    ? "opacity-100"
                                    : "opacity-0"
                            }`}
                        >
                            <h1 className="text-3xl font-semibold leading-tight">
                                {data.title}
                            </h1>
                            <p className="text-sm mt-3 leading-relaxed opacity-90">
                                {data.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
