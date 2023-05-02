import { motion } from "framer-motion";
import LinearGradient from "../components/LinearGradient";
import Project from "./components/Project";

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
    <section className="pb-48 pt-48">
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit
          culpa aut aspernatur ex eligendi a ab eveniet voluptate numquam
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className=" sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          {/* ROW 1 */}
          <div className="flex max-h-[400px] max-w-[400px] items-center justify-center bg-red-400 p-10 text-center font-playfair text-2xl font-semibold">
            BEAUTIFUL USER INTERFACES
          </div>

          <Project title="Project 1" />
          <Project title="Project 2" />

          {/* ROW 2 */}
          <Project title="Project 3" />
          <Project title="Project 4" />
          <Project title="Project 5" />

          {/* ROW 3 */}
          <Project title="Project 6" />
          <Project title="Project 7" />

          <div className="flex max-h-[400px] max-w-[400px] items-center justify-center bg-blue-400 p-10 text-center font-playfair text-2xl font-semibold">
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
