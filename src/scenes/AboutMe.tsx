import { motion } from "framer-motion";
import LinearGradient from "../components/LinearGradient";

const AboutMe = () => {
  //   const testimonialStyles = `mx-auto relative max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 `;
  return (
    <section id="about" className="pt-32">
      {/* HEADER */}
      <motion.div
        className="text-center md:w-1/3 md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="mb-5 font-playfair text-4xl font-semibold text-red-400">
          ABOUT ME
        </p>

        <LinearGradient width="mx-auto w-2/4" />

        {/* <p className=" mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit
          culpa aut aspernatur ex eligendi a ab eveniet voluptate numquam
        </p> */}
      </motion.div>

      {/* AboutMe */}
      <div className="flex justify-center items-center mt-20 mb-10">
        <motion.div
          className=" max-w-[950px] text-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p>
            &nbsp;&nbsp;I graduated with a bachelor’s degree in Communication
            Art from FJU and have prior experience working in the film and video
            industry. During this time, I gained valuable experience in
            executing video productions and providing exceptional customer
            service. These experiences have helped me develop strong
            collaboration skills, enabling me to work effectively with
            colleagues to complete video projects. Additionally, I have honed my
            communication and coordination abilities, which have proven crucial
            in meeting the needs of clients and supervisors. However, after
            careful consideration of my career expectations and discovering an
            interest in the front-end development field through exploration, I
            have decided to make a career change to become a front-end engineer.
            <br />
            <br />
            &nbsp;&nbsp;Throughout the process of self-learning front-end
            development, I have come to deeply appreciate the innovative nature
            of the front-end engineering field and the importance of
            continuously learning and self-studying. I enjoy this learning
            process as it allows me to constantly improve and grow. I am
            committed to continuing to improve in the front-end engineering
            field and aspire to become an engineer who writes clear code.
            <br />
            <br />
            &nbsp;&nbsp;If you have any job-related requirements or needs,
            please do not hesitate to contact me. Thank you for taking the time
            to read about my experience, and I hope you have enjoyed reviewing
            my work.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
