import { motion } from "framer-motion";
import LinearGradient from "../components/LinearGradient";
import Project from "./components/Project";
import projectImg1 from "../assets/project-1.png";
import projectImg2 from "../assets/project-2.png";
import projectImg3 from "../assets/project-3.png";

// type Props = {};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// const Projects = (props: Props) => {
const Projects = () => {
  return (
    <section className="pb-48 pt-48" id="projects">
      {/* HEADING */}
      <motion.div
        className="mx-auto text-center md:w-2/4"
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
          <p className=" font-playfair text-4xl font-semibold ">
            MY <span className=" text-red-500">PRO</span>JECTS
          </p>
          <div className="mt-5 flex justify-center">
            <LinearGradient width="w-1/3" />
          </div>
        </div>

        <p className="mb-10 mt-10">
          I continuously improve my Front-End skills <br />
          to keep up with the development trends.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className=" sm:grid sm:grid-cols-2 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          {/* ROW 1 */}
          <div className="flex max-h-[455px] min-h-[180px] items-center justify-center bg-yellow-500 p-10 text-center font-playfair text-2xl font-semibold ">
            BEAUTIFUL USER INTERFACES
          </div>

          <Project
            title="Mounting Taipei"
            projectImg={projectImg1}
            projectLink="https://earnest-zabaione-a4024c.netlify.app/"
            description="A comprehensive brand website combining the provision of mountain climbing information and the sale of climbing gear."
          />

          {/* ROW 2 */}
          <div className="sm:hidden flex max-h-[455px] min-h-[180px] items-center justify-center bg-red-400 p-10 text-center font-playfair text-2xl font-semibold ">
            CONTINUOUS SKILLS ADVANCEMENT
          </div>

          <Project
            title="Painting Life"
            projectImg={projectImg2}
            projectLink="https://capable-malasada-eae136.netlify.app/"
            description="An official website for a painting course classroom."
          />

          <div className="hidden sm:flex max-h-[455px] min-h-[180px] items-center justify-center bg-red-400 p-10 text-center font-playfair text-2xl font-semibold ">
            CONTINUOUS SKILLS ADVANCEMENT
          </div>

          {/* ROW 3 */}

          <div className="flex max-h-[455px] min-h-[180px] items-center justify-center bg-blue-400 p-10 text-center font-playfair text-2xl font-semibold">
            SMOOTH USER EXPERIENCE
          </div>
          <Project
            title="WhoCares Studio"
            projectImg={projectImg3}
            projectLink="https://chingwu99.github.io/WHOCARES-PROJECT/"
            description="An official website for an film production and lighting equipment rental service."
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
