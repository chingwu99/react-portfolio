import useMediaQuery from "../hook/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ProfileImage from "../assets/profile-image.png";

type Props = { setSelectedPage: (value: string) => void };

const Landing = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
      id="home"
      className="gap-16 py-10 md:flex md:h-full md:items-center md:justify-between"
    >
      {/* IMAGE SECTION */}
      <div className="z-10 mt-16 flex basis-3/5 justify-center md:order-2 md:mt-32 ">
        {isAboveMediumScreens ? (
          <div className="relative z-0 ml-20 before:absolute before:-left-20 before:-top-20 before:z-[-1] before:h-full before:w-full before:max-w-[400px] before:rounded-t-[400px] before:border-2 before:border-blue-400  ">
            <img
              src={ProfileImage}
              alt="profile"
              className="z-10 w-full max-w-[400px] transition duration-500 hover:saturate-200 hover:filter md:max-w-[600px]"
            />
          </div>
        ) : (
          <img
            src={ProfileImage}
            alt="profile"
            className="z-10 w-full max-w-[400px] transition duration-500 hover:saturate-200 hover:filter md:max-w-[600px]"
          />
        )}
      </div>

      {/* MAIN SECTION */}
      <div className="z-30 mt-12 basis-2/5 md:mt-32 ">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="z-10 text-center font-playfair text-6xl md:text-start ">
            Henry{""}
            <span
              className="z-20 before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]
            xs:relative xs:font-semibold xs:text-blue-800 xs:before:content-brush"
            >
              Wu
            </span>
          </p>

          <p className="mb-7 mt-10 text-center text-sm md:text-start ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In unde
            enim dicta inventore assumenda excepturi beatae modi animi ipsum
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
