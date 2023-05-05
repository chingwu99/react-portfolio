import { motion } from "framer-motion";

type Props = {
  title: string;
  projectImg: any;
  projectLink: string;
  description: string;
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ projectImg, title, projectLink, description }: Props) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 hover:cursor-pointer transition duration-500
  bg-gray-200 z-30 flex flex-col justify-center items-center text-center p-16 text-blue-950 `;

  return (
    <a href={projectLink} target="_blank">
      <motion.div variants={projectVariant} className="relative ">
        <div className={overlayStyles}>
          <p className="font-playfair text-2xl">{title}</p>
          <p className="mt-7">{description}</p>
        </div>
        <img src={projectImg} alt={`${projectImg}`} />
      </motion.div>
    </a>
  );
};

export default Project;
