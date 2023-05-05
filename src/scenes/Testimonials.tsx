// import { motion } from "framer-motion";
// import LinearGradient from "../components/LinearGradient";

// const Testimonials = () => {
//   const testimonialStyles = `mx-auto relative max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 `;
//   return (
//     <section id="testimonials" className="pb-16 pt-32">
//       {/* HEADER */}
//       <motion.div
//         className="text-center md:w-1/3 md:text-left"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.5 }}
//         transition={{ duration: 0.5 }}
//         variants={{
//           hidden: { opacity: 0, x: -50 },
//           visible: { opacity: 1, x: 0 },
//         }}
//       >
//         <p className="mb-5 font-playfair text-4xl font-semibold text-red-400">
//           TESTI
//         </p>

//         <LinearGradient width="mx-auto w-2/4" />
//         <p className=" mt-10">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit
//           culpa aut aspernatur ex eligendi a ab eveniet voluptate numquam
//         </p>
//       </motion.div>

//       {/* Testimonials */}
//       <div className="gap-8 md:flex md:justify-between">
//         <motion.div
//           className={`bg-blue-400 ${testimonialStyles} before:content-person1`}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.5 }}
//           variants={{
//             hidden: { opacity: 0, scale: 0.8 },
//             visible: { opacity: 1, scale: 1 },
//           }}
//         >
//           <p className="font-player text-6xl"></p>
//           <p className="text-center text-xl ">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, ea.
//           </p>
//         </motion.div>

//         <motion.div
//           className={`bg-red-400 ${testimonialStyles} before:content-person2`}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ delay: 0.2, duration: 0.5 }}
//           variants={{
//             hidden: { opacity: 0, scale: 0.8 },
//             visible: { opacity: 1, scale: 1 },
//           }}
//         >
//           <p className="font-player text-6xl"></p>
//           <p className="text-center text-xl ">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, ea.
//           </p>
//         </motion.div>

//         <motion.div
//           className={`bg-yellow-400 ${testimonialStyles} before:content-person3`}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ delay: 0.4, duration: 0.5 }}
//           variants={{
//             hidden: { opacity: 0, scale: 0.8 },
//             visible: { opacity: 1, scale: 1 },
//           }}
//         >
//           <p className="font-player text-6xl"></p>
//           <p className="text-center text-xl ">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, ea.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
