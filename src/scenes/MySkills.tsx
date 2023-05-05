import { motion } from "framer-motion";
import LinearGradient from "../components/LinearGradient";
import useMediaQuery from "../hook/useMediaQuery";
import SkillsImage from "../assets/skills-image.png";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="skills" className="pb-24 pt-10">
      {/* HEADER AND IMAGE SECTION */}
      <div className="mt-32 md:flex md:justify-between md:gap-16 ">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="mb-5 font-playfair text-4xl font-semibold ">
            MY <span className=" text-red-500">SKILLS</span>
          </p>

          <LinearGradient width="w-1/3" />
          <p className="mb-7 mt-10">
            I am familiar with Responsive Web Design and React, while also
            learning frontend technologies such as TypeScript.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div className="relative z-0 ml-20 before:absolute before:-left-10 before:-top-10 before:z-[-1] before:h-full before:w-full   before:border-2 before:border-blue-400  ">
              <img src={SkillsImage} alt="skills" className="z-10 " />
            </div>
          ) : (
            <img src={SkillsImage} alt="skills" className="z-10 " />
          )}
        </div>
      </div>

      {/* skills */}
      <div className="mt-16 gap-32 md:flex md:justify-between">
        {/* EXPERIENCE */}
        <motion.div
          className="mt-10 md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className=" font-playfair text-5xl font-semibold">01</p>
              <p className=" mt-3 font-playfair text-5xl font-semibold">
                Web Layout
              </p>
            </div>
            <div className="absolute right-0 top-0 z-[-1] h-32 w-1/2 bg-blue-400 md:w-3/4"></div>
          </div>

          <p className="mt-5 ">
            -HTML 5 <br />
            -CSS 3 <br />
            -SCSS <br />
            -Bootstrap 5 <br />
            -Tailwind CSS
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="mt-10 md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className=" font-playfair text-5xl font-semibold">02</p>
              <p className=" mt-3 font-playfair text-5xl font-semibold">
                JS and React
              </p>
            </div>
            <div className="absolute right-0 top-0 z-[-1] h-32 w-1/2 bg-red-400 md:w-3/4"></div>
          </div>

          <div className=" flex justify-between">
            <div>
              <p className="mt-5 ">
                React: <br />
                -Redux Toolkit <br />
                -React Hook <br />
                -useContext and useReducer <br />
                -React Hook Form <br />
                -styled-components
              </p>
            </div>
            <div>
              <p className="mt-5">
                JavaScript:
                <br />
                -ES6
                <br />
                -DOM
                <br />
                -AJAX
              </p>
            </div>
          </div>
        </motion.div>

        {/* IMAGINATIVE */}
        <motion.div
          className="mt-10 md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className=" font-playfair text-5xl font-semibold">03</p>
              <p className=" mt-3 font-playfair text-5xl font-semibold">
                Others
              </p>
            </div>
            <div className="absolute right-0 top-0 z-[-1] h-32 w-1/2 bg-yellow-500 md:w-3/4"></div>
          </div>

          <div className=" flex justify-between">
            <div>
              <p className="mt-5 ">
                -npm <br />
                -Axios <br />
                -Swiper <br />
                -SweetAlert2 <br />
                -AOS <br />
              </p>
            </div>
            <div>
              <p className="mt-5 ">
                -Animate.css <br />
                -Google font <br />
                -Font Awesome <br />
                -Firebase <br />
                -Postman <br />
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
