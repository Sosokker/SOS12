import React from "react";
import {SectionWrapper} from "../hoc";
import Contact from "./Contacter.jsx"
import SocialMedia from "./SocialMedia.jsx";
import {styles} from "../styles.js";
import {StarsCanvas} from "./canvas";

const Contacts = () => {
    return (
        <div>
            <Contact/>
            <StarsCanvas/>

            <div className="mt-8">
                <h2 className={`${styles.sectionSubTextCenter}`}>SOS12 Social Media</h2>
                <SocialMedia/>

            </div>

        </div>
    );
};

export default SectionWrapper(Contacts, "");
