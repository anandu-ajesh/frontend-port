import { PROJECTS } from "../constants"
import { motion } from "framer-motion"

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }} className="my-20 text-center text-4xl">Projects</motion.h1>
            <div>{PROJECTS.map((project, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className="w-full lg:w-1/4">
                        <img src={project.image} width={150} height={150} className="mb-6 rounded" alt={project.title} />
                    </motion.div>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1 }} className="w-full max-w-xl lg:w-3/4">
                        <h4 className="text-2xl mb-2 font-semibold">{project.title}</h4>
                        <p className="text-lg mb-4 text-neutral-400">{project.description}</p>
                        {project.technologies.map((tech, index) => (<span key={index} className=" mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">{tech}</span>

                        ))}
                        <br />
                        <br />
                        <div className="flex text-center">
                            <button className="bg-violet-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                <a href={project.demo} target="_blank" className="flex items-center justify-center text-white no-underline">
                                    Live Demo
                                </a>
                            </button>
                        </div>
                    </motion.div>
                </div>
            ))}</div>
        </div>
    )
}

export default Projects