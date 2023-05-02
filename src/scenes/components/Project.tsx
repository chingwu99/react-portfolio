import { motion } from "framer-motion";
import mmm from "../../assets/project-3.jpeg";

type Props = { title: string };

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title }: Props) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 hover:cursor-pointer transition duration-500
  bg-gray-200 z-30 flex flex-col justify-center items-center text-center p-16 text-blue-950 `;
  const projectTitle: string = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative ">
      <div className={overlayStyles}>
        <p className="font-playfair text-2xl">{title}</p>
        <p className="mt-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          repellat voluptas doloremque! Harum, itaque eveniet ipsa magni
        </p>
      </div>
      <img src={mmm} alt={projectTitle} />
    </motion.div>
  );
};

export default Project;
