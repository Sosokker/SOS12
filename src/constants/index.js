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
    section: 'About SKE',
    question: 'What is SKE?',
    answer: 'Software and Knowledge Engineering or SKE (pronounce "ski") for short, is a branch in a Computer Engineering, Kasetsart University. Our branch is also a part of the international Undergraduate Program (IUP).'
  },
  {
    section: 'About SKE',
    question: 'What are the required courses for this branch?',
    answer: 'For freshmen it is required to learn the general engineering courses such as "Engineering Mathematics I", "General Physics I" and "Physics Lab I". You will also need to apply for essential Computer Engineering courses such as, "Computer Programming I" and "Discrete Mathematics and Algebra". For Computer Programming I, you will get to learn the fundamentals of programming with Python. For Discrete Mathematics and Algebra, you will learn about the basic of discrete mathematics and algebra, which is essential for programming.'
  },
  {
    section: 'About SKE',
    question: 'Are the courses difficult?',
    answer: 'The difficulty of each course varies on each learner, it depends on whether you have basics or not. You might need to adjust and may have to work harder than others, also try to learn by yourself and practice doing exercises.'
  },
  {
    section: 'About SKE',
    question: 'Is a computer requires? What about specifications?',
    answer: 'A computor is required though it is REALLY recommended to have a laptop. Portable computers will make your life easier and should always be taken to university. For windows, you should pick a laptop with medium specs such as, Core i5 or Ryzen 5 CPU, 8GB RAM, 512 HDD. Make sure to get teh latest generation of CPU to have faster performance. For Mac, it is recommended to get at least M1 CPU.'
  },
  {
    section: 'About SKE',
    question: 'When does the course start and what to prepare?',
    answer: 'The first semester\'s start date is 7th August. Though there will be events before that day like SKE tutorial camp'
  },
  {
    section: 'About SOS12 Camp',
    question: 'What is SOS Camp?',
    answer: 'SOS Camp is a preparation camp for freshmen to gain knowledge about the programming. It is also a camp to help you prepare for the first semester. The camp will be held on 18th-21th July.'
  },
  {
    section: 'About SOS12 Camp',
    question: 'What programming languages will be covered in the camp?',
    answer: 'This camp will cover Python.'
  },
  {
    section: 'About SOS12 Camp',
    question: 'Do I need prior programming experience to attend the camp?',
    answer: 'No, you do not need any prior programming experience to attend the camp. The camp will start from the very basics of programming.'
  },
  {
    section: 'Programming',
    question: 'What programming concepts will be taught during the camp?',
    answer: 'The programming concepts that will be taught during the camp are variables, data types, operators, conditional statements, loops, and functions.'
  },
  {
    section: 'Programming',
    question: 'Will the camp cover both theoretical and practical aspects of programming?',
    answer: 'Yes, the camp will cover both theoretical and practical aspects of programming. The camp will start with a lecture and then you will be given exercises to practice what you have learned.'
  },
  {
    section: 'Programming',
    question: 'Can I bring my own laptop or do I need to use university computers',
    answer: 'You can bring your own laptop. However, if you do not have a laptop, you can use the university computers.'
  },
  {
    section: 'Programming',
    question: 'What software do I need to install on my laptop?',
    answer: 'You will need to install Python 3.9.6 and PyCharm Community Edition 2021.1.3.'
  },
  ]



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
