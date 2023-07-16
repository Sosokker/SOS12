import React, {useState} from 'react';
import {styles} from "../styles";
import {motion} from "framer-motion";
import {textVariant} from "../utils/motion";
import {SectionWrapper} from "../hoc";
import {faqs} from '../constants';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [activeSection, setActiveSection] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleFAQ = (sectionIndex, faqIndex) => {
        setActiveIndex((prevIndex) => {
            if (
                prevIndex !== null &&
                prevIndex[0] === sectionIndex &&
                prevIndex[1] === faqIndex
            ) {
                return null; // Collapse the clicked FAQ
            }
            return [sectionIndex, faqIndex]; // Expand the clicked FAQ
        });
    };

    const toggleSection = (section) => {
        setActiveSection((prevSection) => {
            if (prevSection === section) {
                return null; // Close the clicked section
            }
            return section; // Open the clicked section
        });
    };

    const filteredFaqs = faqs.filter(
        (faq) =>
            faq.section.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const groupedFaqs = filteredFaqs.reduce((acc, curr) => {
        const foundIndex = acc.findIndex((item) => item.section === curr.section);
        if (foundIndex === -1) {
            acc.push({
                section: curr.section,
                faqs: [curr],
            });
        } else {
            acc[foundIndex].faqs.push(curr);
        }
        return acc;
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>ถามหน่อย</p>
                <h2 className={`${styles.sectionHeadText}`}>Frequently Asked Questions</h2>
            </motion.div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <form>
                <label htmlFor="default-search"
                       className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            ></path>
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>
            </form>

            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
                {groupedFaqs.map(({section, faqs}, sectionIndex) => (
                    <div key={sectionIndex} className="mb-8">
                        <div
                            className={`flex items-center justify-between cursor-pointer ${
                                activeSection === section ? 'text-blue-700' : 'text-white-900'
                            }`}
                            onClick={() => toggleSection(section)}
                        >
                            <h2 className="text-2xl font-semibold mb-4">{section}</h2>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`w-6 h-6 ${
                                    activeSection === section ? 'text-blue-700' : 'text-gray-500'
                                }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={
                                        activeSection === section
                                            ? 'M19 9l-7 7-7-7'
                                            : 'M9 5l7 7-7 7'
                                    }
                                />
                            </svg>
                        </div>
                        {activeSection === section && (
                            <div>
                                {faqs.map((faq, faqIndex) => (
                                    <a
                                        key={faqIndex}
                                        href="#"
                                        className={`block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ${
                                            activeIndex &&
                                            activeIndex[0] === sectionIndex &&
                                            activeIndex[1] === faqIndex
                                                ? 'mb-4'
                                                : 'mb-2'
                                        }`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            toggleFAQ(sectionIndex, faqIndex);
                                        }}
                                    >
                                        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                            {faq.question}
                                        </h5>
                                        {activeIndex &&
                                            activeIndex[0] === sectionIndex &&
                                            activeIndex[1] === faqIndex && (
                                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                                    {faq.answer}
                                                </p>
                                            )}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div className="invisible">blank</div>
            <div className="invisible">blank</div>
            <div className="invisible">blank</div>
        </div>
    );
};

export default SectionWrapper(Faq, "");
