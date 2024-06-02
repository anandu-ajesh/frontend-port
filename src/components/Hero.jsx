import { HERO_CONTENT } from "../constants"
// import profilePic from "../assets/profile.jpg"
import Lottie from "lottie-react"
import animationData from "../assets/mobile.json"
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } }
})


const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-9 lg:mb-35 ">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 variants={container(0)} initial="hidden" animate="visible" className="pb-6 text-5xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Anandu Ajesh</motion.h1>
                        <motion.span variants={container(0.5)} initial="hidden" animate="visible" className=" text-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text  tracking-tight text-transparent">FrontEnd Developer</motion.span>
                        <motion.p variants={container(1)} initial="hidden" animate="visible" className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center h-full">
                        {/* <motion.img initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.2 }} className="rounded-2xl" src={profilePic} alt="AnanaduAjesh" /> */}
                        <Lottie animationData={animationData} loop={true} autoplay={true} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero