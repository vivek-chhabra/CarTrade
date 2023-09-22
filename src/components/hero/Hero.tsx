"use client";

import Image from "next/image";
import CustomButton from "../customButton/CustomButton";
import "./Hero.scss";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

export const animateTo = (val: "right" | "left") => {
    if (val === "right") {
        return {
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
        };
    } else {
        return {
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
        };
    }
};

export default function Hero({}: Props) {
    const handleClick = () => {
        // alert('works')
    };

    return (
        <div className="Hero">
            <div className="header">
                <Link href="/">
                    <Image src="/logo.svg" width={5} height={5} alt="logo" />
                </Link>
                <div className="sign-in">Sign in</div>
            </div>
            <div className="container flex gap-2">
                <motion.div variants={animateTo("right")} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} className="left flex-col">
                    <h1 className="head">Find, book, or rent a car - quickly and easily!</h1>
                    <p className="title">Streamline your car custom rental experience with our effortless booking process.</p>
                    <CustomButton variant="primary" onClick={handleClick}>
                        Explore Cars
                    </CustomButton>
                </motion.div>
                <motion.div variants={animateTo("left")} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} className="right flex-col">
                    <div className="img">
                        <Image src="/hero.png" layout="intrinsic" className="car-img" width={750} height={440} alt="hero-img" />
                        <Image src="/hero-bg.png" className="back-img" width={1100} height={750} alt="hero-img" />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
