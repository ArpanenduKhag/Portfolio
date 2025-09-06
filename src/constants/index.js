import {
  mobile,
  backend,
  web,
  fullstack,
  javascript,
  java,
  html,
  css,
  reactjs,
  ubuntu,
  tailwind,
  postgresql,
  git,
  otu,
  BCREC,
  DAV,
  rhhs,
  wonderland,
  Capsitech_Technologies,
  mackenziehealth,
  DiMark_AI,
  privcurity,
  Celebal_Technologies,
  staples,
  GDG_dgp,
  google,
  whmis,
  aws,
  python,
  cplusplus,
  typescript,
  DoctorAI,
  Sanket,
  Assistant,
  PharmaPOS,
  Hockey,
  powershell,
  cisco,
  connectwise,
  virtualbox,
  kalilinux,
  wireshark,
  nmap,
  metasploit,
  johntheripper,
  hydra,
  aircrackng,
  photoshop,
  premiere,
  cinema4d,
  blender,
  connectwisecert,
  awsdbcert,
  figma,
  Canva,
  GIT_1,
  PowerBI,
  C,
  SQL,
  mysql,
  Teams,
  Slack,
  github,
  mongodb,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "extracurricular",
    title: "Certifications",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: fullstack,
  },
  {
    title: "Systems Infrastructure",
    icon: backend,
  },
  {
    title: "Cloud Automation",
    icon: mobile,
  },
  {
    title: "Workflows",
    icon: web,
  },
];

const education = [
  {
    title: "Bachelor of Technology in Computer Science",
    company_name: "Dr. B.C. Roy Engineering College",
    icon: BCREC,
    iconBg: "#fff",
    date: "2021 - 2025",
    points: [
      "Durgapur, West Bengal",
      // "Courses undertaken: Data Structures and Algorithms, OOP, REST API, Software Design, Python Data Analysis, Discrete Mathematics, Computer Architecture, Operating Systems, PostgreSQL.",
    ],
  },
  {
    title: "Higher Secondary School",
    company_name: "DAV PUBLIC SCHOOL ECL PANDAVESWAR",
    icon: DAV,
    iconBg: "#fff",
    date: "2019-2021",
    points: [
      "Pandaveswar, Paschim Bardhaman, West Bengal",
      "Science Stream with Computer Science",
      ,
    ],
  },
  {
    title: "Senior Secondary School",
    company_name: "DAV PUBLIC SCHOOL HETAMPUR RAJBATI",
    icon: DAV,
    iconBg: "#fff",
    date: "2019 - 2009",
    points: [
      "Hetampur, West Bengal",
      // "Courses undertaken: Data Structures and Algorithms, OOP, REST API, Software Design, Python Data Analysis, Discrete Mathematics, Computer Architecture, Operating Systems, PostgreSQL.",
    ],
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C",
    icon: C,
  },
  {
    name: "Powershell",
    icon: powershell,
  },
  {
    name: "SQL",
    icon: SQL,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostGreSQL",
    icon: postgresql,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
];

const itTools = [
  {
    name: "Github",
    icon: GIT_1,
  },
  {
    name: "Teams",
    icon: Teams,
  },
  {
    name: "Github",
    icon: GIT_1,
  },
];

const cybersecurityTools = [
  {
    name: "Kali Linux",
    icon: kalilinux,
  },
  {
    name: "Wireshark",
    icon: wireshark,
  },
  {
    name: "Nmap",
    icon: nmap,
  },
  {
    name: "Metasploit",
    icon: metasploit,
  },
  {
    name: "John the Ripper",
    icon: johntheripper,
  },
  {
    name: "Hydra",
    icon: hydra,
  },
  {
    name: "Aircrack-ng",
    icon: aircrackng,
  },
];

const designTools = [
  {
    name: "Canva",
    icon: Canva,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Cinema 4D",
    icon: cinema4d,
  },
  {
    name: "Blender",
    icon: blender,
  },
];

const experiences = [
  {
    title: "Assistant ML Engineer - L1",
    company_name: "Capsitech Technologies",
    icon: Capsitech_Technologies, // Assuming you have this icon variable
    iconBg: "#383E56",
    date: "June 2025 - Present",
    points: [
      "Developing an advanced deep learning model using BiLSTM to detect and classify email spoofing and phishing attacks from email content and header fields.",
      "Achieving high accuracy by validating the model's performance using key metrics such as Precision, Recall, F1-score, and AUC-ROC analysis.",
      "Conducted rigorous cross-dataset validation to ensure the model's robustness and generalizability for real-world scenarios.",
    ],
  },
  {
    title: "ML Intern",
    company_name: "Capsitech Technologies",
    icon: Capsitech_Technologies, // Assuming you have this icon variable
    iconBg: "#383E56",
    date: "January 2025 - May 2025",
    points: [
      "Completed an intensive, project-based training program covering the entire data science pipeline, from data analysis and visualization to advanced machine learning and deep learning.",
      "Gained hands-on experience with key technologies including Python, TensorFlow, Keras, Scikit-learn, NLTK, and SQL.",
      "Developed and deployed multiple industrial projects and a final capstone project, demonstrating practical application of learned concepts.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "DiMark AI",
    icon: DiMark_AI,
    iconBg: "#E6DEDD",
    date: "June 2024 - June 2025",
    points: [
      "Designed and developed full-stack features for web applications, contributing to both front-end and back-end systems.",
      "Collaborated in an agile team to meet project deadlines and deliver high-quality, maintainable code.",
      "Integrated a third-party REST API for payment processing, enhancing the platform's e-commerce capabilities.",
      "Wrote and optimized complex SQL queries to retrieve user data, improving dashboard loading times by 15%.",
    ],
  },
  {
    title: "Data Engineering Trainee",
    company_name: "COE Program - CELEBAL TECHNOLOGIES",
    icon: Celebal_Technologies,
    iconBg: "#FBC3A4",
    date: "May 2024 - August 2024",
    points: [
      "Engineered data processing pipelines using Python (Pandas) and SQL for data extraction, transformation, and loading (ETL).",
      "Performed data cleaning and manipulation on large datasets to ensure data quality and integrity for analysis.",
      "Automated a daily data aggregation task using a Python script, saving approximately 5 hours of manual work per week.",
    ],
  },
  {
    title: "Graphics Team Lead & Web Developer",
    company_name: "Google Developer Groups - Durgapur",
    icon: GDG_dgp,
    iconBg: "#FBC3A4",
    date: "Sept 2022 - August 2024",
    points: [
      "Spearheaded the graphics design team, directing the creation of visual content for events, workshops, and social media outreach.",
      "Developed new features and maintained the official GDG chapter website, enhancing the community's web presence.",
      "Collaborated with event organizers to ensure branding consistency across all promotional materials.",
    ],
  },
];

const extracurricular = [
  {
    title: "MongoDB Python Developer Path",
    type: "Proof of Completion",
    icon: mongodb,
    iconBg: "#000000",
    date: "Feb 2025",
    points: [
      "PyMongo, NoSQL Schema Design, Data Aggregation, MongoDB Query Optimization",
    ],
    credential: "https://learn.mongodb.com/c/tf2DSC7hTcyM3NBZjkLPoA",
  },
  {
    title: "Github Foundations",
    type: "Professional Certificate",
    icon: github,
    iconBg: "#000000",
    date: "Issued: Sep 2024 - Expires: Sep 2027",
    points: [
      "Version Control, Git, Actions, CI/CD, Repository Management, SAP Workflow",
    ],
    credential:
      "https://www.credly.com/badges/b6f69785-2da8-447e-b02c-3350bf9af803",
  },
  {
    title: "Certified Enterprise Scripting Architect",
    type: "Automate | Connectwise University",
    icon: connectwise,
    iconBg: "#748C7B",
    date: "Jul 2024",
    points: [
      "RMM, MDM, Powershell, Scripting, Windows Server, Enterprise Architecture, Query Optimization",
    ],
    credential: connectwisecert,
  },
  {
    title: "Google IT Automation With Python",
    type: "Professional Certificate",
    icon: google,
    iconBg: "#050C18",
    date: "Mar 2023",
    points: [
      "Configuration Management, Automation, Google Cloud Platform (GCP), Cloud Servers and VM's, Version Control Tools, Automation.",
    ],
    credential:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/82SZFUWF4B3T",
  },
  {
    title: "WHMIS (Worker Health and Safety)",
    type: "Government Workforce Requirement",
    icon: whmis,
    iconBg: "#CCCFD8",
    date: "Sep 2020",
    points: [
      "Hazard Awareness, Legal Compliance, Personal Protection, Accident Prevention",
    ],
  },
];

const projects = [
  {
    name: "Doctor AI – Healthcare Chatbot 🩺",
    description:
      "An AI-powered virtual medical assistant that interacts with users through text and voice to provide basic healthcare advice, preliminary symptom analysis, and appointment guidance. Built using NLTK, TensorFlow, and Speech Recognition, it processes natural language queries and responds in real time.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "NLTK", color: "green-text-gradient" },
      { name: "TensorFlow", color: "pink-text-gradient" },
      { name: "Speech Recognition", color: "blue-text-gradient" },
    ],
    image: DoctorAI, // Add project image path
    source_code_link: "", // Add GitHub repo link if available
    live_project_link: "", // Add live link if available
  },
  {
    name: "Sanket – The Voice of Unheard ✋",
    description:
      "A real-time sign language detection and translation system that converts sign gestures into text and vice versa. Implemented using Teachable Machine, TensorFlow.js, Keras, and OpenCV for gesture recognition.",
    tags: [
      { name: "TensorFlow.js", color: "blue-text-gradient" },
      { name: "Keras", color: "green-text-gradient" },
      { name: "OpenCV", color: "pink-text-gradient" },
      { name: "Teachable Machine", color: "blue-text-gradient" },
    ],
    image: Sanket, // Add project image path
    source_code_link: "", // Add GitHub repo link if available
    live_project_link: "", // Add live link if available
  },
  {
    name: "Voice Assistance 🎙️",
    description:
      "A sophisticated voice-controlled assistant developed in Python, leveraging speech recognition and NLP to interpret and execute user voice commands. It can perform tasks such as searching the web, opening applications, reading out information, and automating basic system operations.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Speech Recognition", color: "green-text-gradient" },
      { name: "NLP", color: "pink-text-gradient" },
      { name: "Automation", color: "blue-text-gradient" },
    ],
    image: Assistant, // Add project image path
    source_code_link: "", // Add GitHub repo link if available
    live_project_link: "", // Add live link if available
  },
  {
    name: "Pharmacy-POS App (PharmaSpot) 💊",
    description:
      "A pharmacy point-of-sale (POS) web application built with React Native, designed to manage pharmacy operations efficiently. It includes inventory management, sales tracking, prescription handling, and customer service with a user-friendly interface.",
    tags: [
      { name: "React Native", color: "blue-text-gradient" },
      { name: "POS System", color: "green-text-gradient" },
      { name: "Inventory Management", color: "pink-text-gradient" },
      { name: "Sales Tracking", color: "blue-text-gradient" },
    ],
    image: PharmaPOS, // Add project image path
    source_code_link: "", // Add GitHub repo link if available
    live_project_link: "", // Add live link if available
  },
  {
    name: "Air Hockey Game 🏒",
    description:
      "A dynamic Air Hockey game developed in Python using Tkinter for GUI development. Features smooth gameplay mechanics, scoring system, and interactive animations.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Tkinter", color: "green-text-gradient" },
      { name: "Game Development", color: "pink-text-gradient" },
    ],
    image: Hockey, // Add project image path
    source_code_link: "", // Add GitHub repo link if available
    live_project_link: "", // Add live link if available
  },
];

const testimonials = [
  {
    testimonial:
      "I highly recommend Sunny for his outstanding technical proficiency and professional approach as a System Support specialist at Mackenzie Hospital. His deep knowledge of iPad systems and troubleshooting abilities were instrumental in ensuring seamless operations and user satisfaction. Sunny's proactive attitude and problem-solving skills made him a reliable asset to our team, and he consistently exceeded expectations in resolving complex issues. I have no hesitation in endorsing him for any tech-related position, as I am confident he will excel in any challenge he takes on.",
    name: "Feda Abukhadrah, BIT | SaaS | Health Tech | MDM | ABM | POS | ITIL®V4 | CompTIA A+",
    designation: "Senior Service Desk Specialist",
    company: "Px Solutions LTD.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Sunny Patel's expertise in the technological domain is truly remarkable. Proficient in programming languages like Java, Python, and C++, and highly skilled in Microsoft's suite of tools, Sunny's grasp of networking concepts is extensive. What sets him apart is his experience in handling over 1000 devices remotely and on-site, along with a successful track record in troubleshooting and deploying various software and hardware upgrades. His dedication to tackling complex challenges, grounded in a strong foundation in software design and a rich academic background in computer science, positions Sunny as a valuable asset to any tech-driven team.",
    name: "Sanjay Sharma, MBA, CISSP, CISA, PMP®",
    designation: "Senior Vice-President and Head of Cybersecurity Services",
    company: "Pathway Communications / ex-Toronto Hydro",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Sunny's proficiency in data entry was impeccable, displaying meticulous attention to detail and accuracy. His commitment to maintaining organized and error-free records significantly improved our operational efficiency. In customer service, Sunny's phone etiquette was truly commendable. He communicated with a warm and professional demeanour, leaving customers with a positive impression and ensuring their needs were met. His ability to multitask and handle multiple customers simultaneously was impressive, showcasing his excellent time management and interpersonal skills. Sunny's dedication to his role and adeptness in data entry, customer service, and managing simultaneous customer interactions made him a valuable asset to our team at Lazer Runner.",
    name: "Michelle Ilizirov",
    designation: "Manager",
    company: "Lazer Runner",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export {
  services,
  technologies,
  itTools,
  cybersecurityTools,
  designTools,
  experiences,
  extracurricular,
  projects,
  education,
  testimonials,
};
