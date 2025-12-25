import SectionTitle from "../components/section-title";
import { motion } from "framer-motion";

export default function OurTestimonials() {
    const testimonials = [
        {
            quote: "Pure Flow has transformed our daily water experience. The water tastes so fresh and clean!",
            name: "Arjun Sharma",
            role: "Homeowner",
            image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
        },
        {
            quote: "Installation was seamless and the purifier’s design fits perfectly in our kitchen. Highly recommend!",
            name: "Neha Verma",
            role: "Interior Enthusiast",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
        },
        {
            quote: "I feel confident giving Pure Flow water to my kids. Safety and taste both are excellent.",
            name: "Rohit Mehta",
            role: "Parent",
            image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
        },
        {
            quote: "Stylish, efficient, and reliable. This water purifier is perfect for modern homes.",
            name: "Sanya Kapoor",
            role: "Designer",
            image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
        },
        {
            quote: "I love the taste and feel of purified water. Pure Flow really delivers on its promise!",
            name: "Aditya Joshi",
            role: "Software Engineer",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
        },
        {
            quote: "Compact, sleek, and efficient. Perfect addition to my kitchen.",
            name: "Anika Singh",
            role: "Home Decor Enthusiast",
            image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png",
        },
    ];

    return (
        <section className="flex flex-col items-center" id="testimonials">
            <SectionTitle
                title="Customer Reviews"
                description="Hear what our satisfied Pure Flow users have to say about our water purifiers."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-18 max-w-6xl mx-auto">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={testimonial.name}
                        className="group border border-[#4682B4] p-6 rounded-xl bg-[#F0F8FF]/30"
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: `${index * 0.15}`,
                            type: "spring",
                            stiffness: 320,
                            damping: 70,
                            mass: 1,
                        }}
                    >
                        <p className="text-[#1C3D5A] text-base">{testimonial.quote}</p>
                        <div className="flex items-center gap-3 mt-8 group-hover:-translate-y-1 duration-300">
                            <img
                                className="size-10 rounded-full"
                                src={testimonial.image}
                                alt={testimonial.name}
                            />
                            <div>
                                <h2 className="text-[#1C3D5A] font-medium">
                                    {testimonial.name}
                                </h2>
                                <p className="text-[#4682B4]">{testimonial.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
