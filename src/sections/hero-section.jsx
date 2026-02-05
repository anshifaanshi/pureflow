import { ArrowRight, Droplets } from "lucide-react";
import { motion } from "framer-motion";
import TiltedImage from "../components/tilt-image";

export default function HeroSection() {
    return (
        <section className="flex flex-col items-center -mt-18">
            {/* Background Glow */}
            <motion.svg
                className="absolute -z-10 w-full -mt-40 md:mt-0"
                width="1440"
                height="676"
                viewBox="0 0 1440 676"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <rect x="-92" y="-948" width="1624" height="1624" rx="812" fill="url(#a)" />
                <defs>
                    <radialGradient
                        id="a"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="rotate(90 428 292)scale(812)"
                    >
                        <stop offset=".63" stopColor="#4682B4" stopOpacity="0" />
                        <stop offset="1" stopColor="#4682B4" />
                    </radialGradient>
                </defs>
            </motion.svg>

            {/* Badge */}
            <motion.a
                className="flex items-center mt-48 gap-2 border border-[#4682B4]/50 text-gray-50 rounded-full px-4 py-2"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 320, damping: 70, mass: 1 }}
            >
                <Droplets className="size-4 text-[#4682B4]" />
                <span className="text-sm font-medium tracking-wide">Pure Flow: Wellness Starts from Water</span>
            </motion.a>

            {/* Heading */}
            <motion.h1
                className="text-center text-5xl leading-[60px] md:text-7xl md:leading-[85px] mt-6 font-bold max-w-4xl tracking-tight"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 240, damping: 70, mass: 1 }}
            >
                Elevating Your Health <br />
                <span className="text-[#4682B4]">Through Every Drop.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
                className="text-center text-lg max-w-2xl mt-4 text-gray-300 leading-relaxed"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 320, damping: 70, mass: 1 }}
            >
                As the dedicated wellness division of the Echo Futur group, Pure Flow provides 
                advanced hydration and heating solutions designed to optimize your health. 
                From cellular-level hydration to eco-friendly energy.
            </motion.p>

            {/* Buttons */}
            <motion.div
                className="flex items-center gap-4 mt-10"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 320, damping: 70, mass: 1 }}
            >
                <button className="flex items-center gap-2 bg-[#4682B4] hover:bg-[#3A6F9E] transition text-white font-semibold active:scale-95 rounded-lg px-8 h-12 shadow-lg">
                    Shop Wellness
                    <ArrowRight className="size-5" />
                </button>

                <button className="border border-[#4682B4]/60 text-gray-100 font-semibold active:scale-95 hover:bg-white/10 transition rounded-lg px-8 h-12">
                    Our Science
                </button>
            </motion.div>

            {/* Product Image */}
            <div className="mt-16">
                <TiltedImage />
            </div>

            <motion.p 
                className="mt-8 text-xs uppercase tracking-[0.25em] text-slate-500 font-bold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                A Proud Division of the Echo Futur Group
            </motion.p>
        </section>
    );
}
