import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { menu } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { StarsCanvas } from "./canvas";

const ServiceCard = ({ index, title, icon, url }) => (
  <Tilt className='xs:w-[350px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <a href={url} className='block'>
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt='web-development'
            className='w-20 h-20 object-contain'
          />

          <h3 className='text-white text-[30px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </a>
    </motion.div>
  </Tilt>
);

const Menu = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextCenter}>สวัสดีฮ๊าฟ ฟู่วววว~~</p>
        <h2 className={styles.sectionCenterText}>SOS CAMP 12th</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto text-center'
      >
        Hello, Welcome, Have Room, Have Condo
        Have K-Y, Good Take Care, Do Everything 
        Eat Chicken, Eat Duck
        Drink Cola, Drink fanta 
        Drink aLong the Way, Good Job, Programmer Job
        Steve Job, Job Job, Python Job, Dangerous Job
        Look into my eyes, Thank you xoxo
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
      {menu.map((service, index) => (
        <ServiceCard
          key={service.title}
          index={index}
          title={service.title}
          icon={service.icon}
          url={`/${service.title.replace(/\s+/g, '-').toLowerCase()}`}
        />
      ))}
      </div>
      <StarsCanvas />
    </>
  );
};

export default SectionWrapper(Menu, "about");
