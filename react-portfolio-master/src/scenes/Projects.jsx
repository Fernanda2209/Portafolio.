import LineGradient from "../components/LineGradient";
import React from 'react';
import Amigurumis from '../assets/Amigurumis.jpeg';
import Mortal from '../assets/Mortal.png';
import { motion } from "framer-motion";
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
        These are some of the projects that I have done throughout my learning process,
         these projects are adaptations, or my own personal or collaborative developments.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            THE EVOLUTION OF MY WORK
          </div>

          <div className="relative opacity: 1; transform: none" >
            <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
           bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue">
              <p className="text-2xl font-playfair">Amigurumis Land</p>
              <p className="mt-7"> Amigurumis land is a project created with react, it was focused on
               a real customer and on the promotion of economic growth within my environment. </p>
            </div>
           <img className="flex justify-center text-center items-center p-10 
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
               src={Amigurumis} />
          </div>


          <div className="relative opacity: 1; transform: none" >
            <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
           bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue">
              <p className="text-2xl font-playfair">Mortal Dev</p>
              <p className="mt-7"> Moratl dev is a game based on the sacrifice of developers, it was a collaborative
               project in which the main language was javascript. </p>
            </div>
           <img className="flex justify-center text-center items-center p-10 
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
               src={Mortal} />
          </div>

          {/* ROW 2 */}

          <div className="relative opacity: 1; transform: none" >
            <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
           bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue">
              <p className="text-2xl font-playfair">Amigurumis Land</p>
              <p className="mt-7"> Amigurumis Land is a react project</p>
            </div>
           <img src="../assets/project-1.jpeg" alt="MALDITA IMAGEN" />
          </div>


          <div className="relative opacity: 1; transform: none" >
            <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
           bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue">
              <p className="text-2xl font-playfair">Amigurumis Land</p>
              <p className="mt-7"> Amigurumis Land is a react project</p>
            </div>
           <img src="../assets/project-1.jpeg" alt="MALDITA IMAGEN" />
          </div>
          
          
          
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            THE PRACTICE AFTER THE PROCESS
          </div>
          
        </motion.div>
        
      </div>
    </section>
    
  );
};



export default Projects;
