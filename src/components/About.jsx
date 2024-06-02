
// import aboutImage from "../assets/about.jpg"
// import profilePic from "../assets/profile.jpg"
import { ABOUT_TEXT } from "../constants"
import { motion } from "framer-motion"
import Lottie from "lottie-react"
import animationData from "../assets/about.json"

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4  ">
            <h1 className="my-20 text-center text-4xl"> About <span className="text-neutral-500">Me</span> </h1>
            <div className="flex flex-wrap">
                <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className="w-full lg:w-1/2 p-8">
                    <div className="flex items-center justify-center">
                        {/* <img src={profilePic} alt="about" className=" rounded-2xl" /> */}
                        <Lottie animationData={animationData} loop={true} autoplay={true} className="w-[600px] h-[400px]" />
                    </div>
                </motion.div>
                <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 0.5 }} className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-10 max-w-xl py-6">{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>

        </div>
    )
}

export default About