import React from "react";
import {motion} from "framer-motion";

import {styles} from "../styles";
import {SectionWrapper} from "../hoc";
import {fadeIn, textVariant} from "../utils/motion";

const Preproblems = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubTextCenter}>ทำโจทย์หน่อย</p>
                <h2 className={styles.sectionCenterText}>Problems</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto text-center'
            >
                A <a className="underline decoration-pink-500"> fundamental</a> Python exercise often focuses on
                introducing and reinforcing core programming concepts and syntax in the Python programming language. It
                typically involves solving a specific problem or completing a task using Python code.
            </motion.p>
        </>
    );
};

export default SectionWrapper(Preproblems, "about");
