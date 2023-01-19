import LineGradient from "../components/LineGradient";
import React from 'react';

import Amigurumis from '../assets/Amigurumis.png';
import Mortal from '../assets/Mortal.png';
import Calculator from '../assets/Calculator.png';
import Semillas from '../assets/Semillas.png';
import Todo from '../assets/To-do.png';
import Tetris from '../assets/Tetris.png';
import Tributo from '../assets/Tributo.png';
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
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            THE EVOLUTION OF MY WORK
          </div>

          <div className="relative opacity: 1; transform: none" >
            <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
           bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue">
              <p className="text-2xl font-playfair">Amigurumis Land</p>
              <p className="mt-7"> Amigurumis land is a project created with react, it was focused on
               a real customer and on the promotion of economic growth within my environment. <br /> <br /> </p>

             <a target="_blank" href="https://amigurumis-land.vercel.app/home">
               <button className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500">
              View more
                </button>
            </a> 
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
               project in which the main language was javascript. <br /> <br /></p>

               <a target="_blank" href="https://mortal-dev-theta.vercel.app/">
                 <button className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500">
              View more
                 </button>
               </a>
               
            </div>
           <img className="flex justify-center text-center items-center p-10 
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
               src={Mortal} />
          </div>

          {/* ROW 2 */}

          <div className="relative opacity: 1; transform: none" >
            <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
           bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue">
              <p className="text-2xl font-playfair">Calculator</p>
              <p className="mt-7"> Calculator is an imitation project of a youtube video, the code is commented. <br /> <br /> </p>
            
              <a target="_blank" href="https://calculadora-five-rust.vercel.app/">
                 <button className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500">
              View more
                 </button>
               </a>

            </div>
            <img className="flex justify-center text-center items-center p-10 
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
               src={Calculator} />
          </div>


          <div className="relative opacity: 1; transform: none" >
            <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
           bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue"
           >
              <p className="text-2xl font-playfair">Dashboard Semillas</p>
              <p className="mt-7">Semillas is an emotion dashboard made from the frontend for a foundation that needed
               to know the status of their students. <br /> <br /></p>

               <a target="_blank" href="https://web-dasboard-semillas.vercel.app/">
                 <button className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500">
              View more
                 </button>
               </a>

            </div>
            <img className="flex justify-center text-center items-center p-10 
              max-w-[375px] max-h-[375px] text-2xl font-playfair font-semibold"
               src={Semillas} />
          </div>


          <div className="relative opacity: 1; transform: none" >
            <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
           bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue"
           >
              <p className="text-2xl font-playfair">Tetris</p>
              <p className="mt-7">Tetris is a project based on a Youtube tutorial in terms of its logic,
               this project is commented and shows my basic knowledge of javaScript. <br /> <br /></p>

               <a target="_blank" href="https://tetris-r85x.vercel.app/">
                 <button className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500">
              View more
                 </button>
               </a>
            </div>
            <img className="flex justify-center text-center items-center p-10 
              max-w-[375px] max-h-[375px] text-2xl font-playfair font-semibold"
               src={Tetris} />
          </div>
          
          {/* ROW 3 */}

          <div className="relative opacity: 1; transform: none" >
            <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
           bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue"
           >
              <p className="text-2xl font-playfair">Web tributo</p>
              <p className="mt-7">This project was based on a we tribute to the Mandalorian series and it was also my first project, this was 
              the beginning of my career in the wonderful world of programming.</p>

              <a target="_blank" href="https://fernanda2209.github.io/the-mandalorian/">
                 <button className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500">
              View more
                 </button>
               </a>

            </div>
            <img className="flex justify-center text-center items-center p-10 
              max-w-[375px] max-h-[375px] text-2xl font-playfair font-semibold"
               src={Tributo} />
          </div>


          <div className="relative opacity: 1; transform: none" >
            <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
           bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue"
           >
              <p className="text-2xl font-playfair">React To do list</p>
              <p className="mt-7">This todo list is a basic react project that is commented and
               evidences my knowledge of react. <br /> <br /></p>
               
            <a target="_blank" href="https://to-do-list-1-ubwk.vercel.app/">
            <button className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500">
              View more
            </button>
            </a> 
            
          
        
            </div>
            <img className="flex justify-center text-center items-center p-10 
              max-w-[345px] max-h-[345px] text-2xl font-playfair font-semibold"
               src={Todo} />
          </div>

          
          <div
            className="flex justify-center text-center items-center p-10 bg-yellow
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
