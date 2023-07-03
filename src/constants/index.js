import {
  contacts_pic,
  faq_pic,
  problems,
  github, 
  instagram_icon, 
  discord_icon,
} from "../assets";

export const navLinks = [
  {
    id: "problems",
    title: "Problems",
  },
  {
    id: "faq",
    title: "FAQ",
  },
  {
    id: "contact",
    title: "Contacts",
  },
];

const menu = [
  {
    title: "Problems",
    icon: problems,
  },
  {
    title: "FAQ",
    icon: faq_pic,
  },
  {
    title: "Contacts",
    icon: contacts_pic,
  },
];

const faqs = [
  {
    section: 'Python',
    question: 'How do I install Python?',
    answer: 'To install Python, you can follow the step-by-step tutorial in this guide: [Python Installation Tutorial](https://www.example.com/python-installation-tutorial). It will walk you through the process of installing Python on your system.',
    link: 'https://www.example.com/python-installation-tutorial'
  },
  {
    section: 'General',
    question: 'How do I brush my teeth?',
    answer: 'To brush your teeth, follow these steps:\n1. Wet your toothbrush with water.\n2. Apply toothpaste to the bristles.\n3. Hold the toothbrush at a 45-degree angle to your gums.\n4. Brush gently in circular motions for 2 minutes.\n5. Spit out the toothpaste and rinse your mouth with water.',
    link: null
  },
  {
    section: 'Miscellaneous',
    question: 'What is the capital of France?',
    answer: 'The capital of France is Paris.'
  }
];

const socialMediaData = [
  {
    title: 'Instagram',
    icon: instagram_icon,
    url: 'https://www.instagram.com/sos_camp12/',
    color: 'linear-gradient(to bottom right, #FF0080, #7928CA)',
  },
  {
    title: 'Discord',
    icon: discord_icon,
    url: 'https://discord.gg/wPAFD6qh',
    color: 'linear-gradient(to bottom right, #7289DA, #5865F2)',
  },
  {
    title: 'Github',
    icon: github,
    url: 'https://github.com/Rick-Lang/rickroll-lang',
    color: 'linear-gradient(to bottom right, #24292E, #444D56)',
  },
];

export { menu, faqs, socialMediaData };
