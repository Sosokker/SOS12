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

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto text-center'
            >
               {/*Day 1*/}
               <button className="slide-link">
                   <a
                       className="slide"
                       href="https://www.canva.com/design/DAFmtzSyMEU/iDO-l19EMxqTZuB6xiX56g/view?utm_content=DAFmtzSyMEU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink#1"
                       target="_blank"
                   >
                       <span className="underline decoration-pink-500">Day 1 Slides</span>
                   </a>
               </button>

                {/*# Day 2*/}
               <button className="slide-link">
                   <a
                       className="slide"
                       href=" https://www.canva.com/design/DAFnlHJWs8A/Fr7CmfQqTRXB_NkUSsop5g/view?utm_content=DAFnlHJWs8A&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink#1"
                       target="_blank"
                   >
                       <span className="underline decoration-pink-500">Day 2 Slides</span>
                   </a>
               </button>

                {/*# Day 3*/}
               <button className="slide-link">
                   <a
                       className="slide"
                       href="https://www.canva.com/design/DAFnjy2nh4g/aN8Wpiu8r_h4Sfr1hYEFLA/view?utm_content=DAFnjy2nh4g&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink#1"
                       target="_blank"
                   >
                     <span className="underline decoration-pink-500">Day 3 Slides</span>
               </a></button>

            </motion.p>

        </>
    );
};

export default SectionWrapper(Preproblems, "about");
