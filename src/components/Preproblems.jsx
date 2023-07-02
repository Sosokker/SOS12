import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Preproblems = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextCenter}>เทสๆ</p>
        <h2 className={styles.sectionCenterText}>Problems</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto text-center'
      >
        Welcome to the 12th SOS camp, a preparation camp for SKE21 students. We hope that students will definitely gain knowledge and enjoyment.
      </motion.p>
    </>
  );
};

export default SectionWrapper(Preproblems, "about");
