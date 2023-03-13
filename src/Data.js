import {
    SiCplusplus,
    SiCss3,
    SiFirebase,
    SiHtml5,
    SiJavascript,
    SiPython,
    SiReact,
    SiStyledComponents,
    SiBootstrap,
    SiPostman,
    SiC,
    SiGit,
    SiMongodb,
    SiHeroku,
    SiRedux,
    SiGithub,
    SiTypescript,
    SiKubernetes,
} from "react-icons/si";
import { DiMysql, DiSass } from "react-icons/di";
import { FaNode } from "react-icons/fa";

import { FaSchool } from "react-icons/fa";
import { MdSchool, MdWork } from "react-icons/md";

import { SiMaterialUi, SiNodeRed } from "react-icons/si";

// HeroSection

export const Name = "Nishant Saxena";

export const MainSkills = [
    "a Web Developer💻",
    1000,
    "a Computer Engineer👨‍💻",
    1000,
    "an Open Source Contributor",
    1000,
    "a ML enthusiast📖",
    1000,
];

export const githubURL = "https://github.com/phoenixx1";

export const linkedinURL = "https://www.linkedin.com/in/nishant-saxena-2609/";

export const mailtoURL = "mailto:nishantsaxena269@gmail.com";

export const fbURL = "https://www.facebook.com/N.S.T.G.21";

export const instagramURL = "https://www.instagram.com/nishant_21_/";

export const mediumURL = "https://medium.com/@nishantsaxena269";

export const resumeURL =
    "https://drive.google.com/file/d/1a8OEERo6VZbneOW52PRN19rJ34k89_ZI/view?usp=sharing";

// Skills

export const Languages = [
    {
        icon: <SiPython className="icon" />,
        name: "Python",
    },
    {
        icon: <SiJavascript className="icon" />,
        name: "Javascript",
    },
    {
        icon: <SiC className="icon" />,
        name: "C",
    },
    {
        icon: <SiCplusplus className="icon" />,
        name: "C++",
    },
    {
        icon: <SiTypescript className="icon" />,
        name: "Typescript",
    },
];

export const FrontendTools = [
    {
        icon: <SiHtml5 className="icon" />,
        name: "HTML5",
    },
    {
        icon: <SiCss3 className="icon" />,
        name: "Css3",
    },
    {
        icon: <SiReact className="icon" />,
        name: "ReactJS",
    },
    {
        icon: <SiStyledComponents className="icon" />,
        name: "Styled-components",
    },
    {
        icon: <DiSass className="icon" />,
        name: "Sass",
    },
    {
        icon: <SiRedux className="icon" />,
        name: "Redux",
    },
    {
        icon: <SiBootstrap className="icon" />,
        name: "Bootstrap",
    },
];

export const BackendTools = [
    {
        icon: <FaNode className="icon" />,
        name: "Node.JS",
    },
    {
        icon: <SiFirebase className="icon" />,
        name: "Firebase",
    },
    {
        icon: <SiPostman className="icon" />,
        name: "Postman",
    },
    {
        icon: <SiGit className="icon" />,
        name: "Git",
    },
    {
        icon: <SiKubernetes className="icon" />,
        name: "Kubernetes",
    },
    {
        icon: <SiHeroku className="icon" />,
        name: "Heroku",
    },
    {
        icon: <DiMysql className="icon" />,
        name: "MySQL",
    },
    {
        icon: <SiMongodb className="icon" />,
        name: "MongoDB",
    },
];

// Experience

export const experience = [
    {
        id: 1,
        type: "education",
        date: "April 2014 - May 2015",
        icon: <FaSchool />,
        bckgrnd: false,
        title: "Global Public School Kota, Rajasthan",
        subtitle: "Secondary Education",
        desc: "Obtained: 90.25%",
        workdesc: [],
    },
    {
        id: 2,
        type: "education",
        date: "April 2016 - May 2017",
        icon: <FaSchool />,
        bckgrnd: true,
        title: "Global Public School Kota, Rajasthan",
        subtitle: "Senior Secondary Education",
        desc: "Obtained: 69.60%",
        workdesc: [],
    },
    {
        id: 3,
        type: "education",
        date: "July 2017 - July 2021",
        icon: <MdSchool />,
        bckgrnd: false,
        title: "NMIMS - Mukesh Patel School of Technology Management & Engineering Shirpur, Maharashtra",
        subtitle: "B.Tech. Computer Science ",
        desc: "Overall CGPA: 3.35/4",
        workdesc: [],
    },
    {
        id: 4,
        type: "work",
        date: "May 2020 - June 2020",
        icon: <MdWork />,
        bckgrnd: true,
        title: "SmartBridge Educational Services Pvt. Ltd. Hyderabad, Telangana",
        subtitle: "Internship",
        desc: "Project Internship",
        workdesc: [
            "NodeRed to deploy the application.",
            "Used IBM Watson to write the ML code.",
        ],
    },
    {
        id: 5,
        type: "work",
        date: "May 2020 - June 2020",
        icon: <MdWork />,
        bckgrnd: false,
        title: "CodeSpeedy Technology Pvt. Ltd. Beldanga, West Bengal",
        subtitle: "Internship",
        desc: "C++ Programmer",
        workdesc: [
            "Wrote C++ code, with explanation and diagram for the website post related to DSA.",
        ],
    },
    {
        id: 6,
        type: "work",
        date: "February 2021 - May 2021",
        icon: <MdWork />,
        bckgrnd: true,
        title: "IotIot Pune, Maharashtra",
        subtitle: "Internship",
        desc: "Frontend Developer",
        workdesc: [
            "Worked on Backend to connect NodeJS to C++.",
            "Completed a frontend using ReactJS.",
        ],
    },
    {
        id: 7,
        type: "work",
        date: "July 2021 - July 2022",
        icon: <MdWork />,
        bckgrnd: false,
        title: "Piramal Capital & Housing Finance, Kurla Mumbai",
        subtitle: "Full-time",
        desc: "Graduate Engineer Trainee",
        workdesc: [
            "Basic development using Drupal.",
            "Using Kafka for data streaming from different sources and processing them.",
            "Deployed API via CI/CD (Python and NodeJS)",
            "Anomaly Detection & Ticket Automation on API Logs (Python, Elasticsearch, Kafka, MongoDB).",
            "Deploy code on AWS Lambda and EC2, also creating an API using API Gateway (Python, FastAPI, NodeJS)",
        ],
    },
    {
        id: 7,
        type: "work",
        date: "July 2022 - Present",
        icon: <MdWork />,
        bckgrnd: true,
        title: "Piramal Capital & Housing Finance, Kurla Mumbai",
        subtitle: "Full-time",
        desc: "Assistant Manager",
        workdesc: [
            "Extending Anomaly Detection for different applications and improving it's perfomance.",
            "HR Integration with different clients using Python",
        ],
    },
];

// Projects

export const projects = [
    {
        id: 1,
        title: "dev-portfolio",
        desc: "Personal dev portfolio build using ReactJS.",
        stacks: [<SiReact />, <SiStyledComponents />, <SiGithub />],
        source: "https://github.com/phoenixx1/website-clones/tree/master/amazon-clone",
        demo: "https://clone-4234e.web.app/",
    },
    {
        id: 2,
        title: "Amazon Clone",
        desc: "Clone of famous E-comm site Amazon with basic functionalities signup/login using mail and purchasing product.",
        stacks: [<SiReact />, <SiCss3 />, <SiFirebase />, <SiMaterialUi />],
        source: "https://github.com/phoenixx1/website-clones/tree/master/amazon-clone",
        demo: "https://clone-4234e.web.app/",
    },
    {
        id: 3,
        title: "COVID-19 Tracker",
        desc: "Case tracker for covid-19 showing active cases, deaths & recovery for whole world, with graph & map representation.",
        stacks: [
            <SiReact />,
            <SiStyledComponents />,
            <SiFirebase />,
            <SiMaterialUi />,
        ],
        source: "https://github.com/phoenixx1/website-clones/tree/master/covid-19-tracker",
        demo: "https://covid-19-tracker-f6549.web.app/",
    },
    {
        id: 4,
        title: "Life-Expectancy Prediction",
        desc: "Internship Project made on IBM Cloud, used Watson Studio for writing code, and Node-Red build front-end for it.",
        stacks: [<SiPython />, <SiNodeRed />],
        source: "https://github.com/phoenixx1/llSPS-INT-1684-Predicting-Life-Expectancy-using-Machine-Learning",
        demo: "https://github.com/phoenixx1/llSPS-INT-1684-Predicting-Life-Expectancy-using-Machine-Learning/blob/master/FullDemonstrationVideo.mp4",
    },
    {
        id: 5,
        title: "Disney+ Hotstar Clone",
        desc: "Disney clone, with functionality to login using Google account and showing some latest releases and it's description stored on Firestore.",
        stacks: [<SiReact />, <SiStyledComponents />, <SiFirebase />],
        source: "https://github.com/phoenixx1/website-clones/tree/master/disney-clone",
        demo: "https://disney-clone-dca88.web.app/home",
    },
    {
        id: 6,
        title: "HTML Code Editor",
        desc: "HTML Code editor, editor build using Ace-editor having dark-mode, theme option and variable font-size for code editor.",
        stacks: [<SiReact />, <SiStyledComponents />, <SiGithub />],
        source: "https://github.com/phoenixx1/html-code-editor",
        demo: "https://phoenixx1.github.io/html-code-editor/",
    },
];
