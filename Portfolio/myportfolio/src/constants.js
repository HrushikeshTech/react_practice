// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';



// Project Section Logo's
import githubdetLogo from './assets/work_logo/user management.jpg';
import csprepLogo from './assets/work_logo/weather_app.png';
import movierecLogo from './assets/work_logo/mood_tracker.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  
  
  export const education = [
    {
      id: 0,
      
      school: "Trident Academy of Technology",
      date: "Dec 2022 - July 2024",
      grade: "7.81 CGPA",
      desc: "I have completed my Master's degree (MCA) in Computer Applications from Trident Academy of Technology. During my time at Trident, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at Trident has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      
      school: "Nimapada Autonomous College,Puri",
      date: "Sept 2018 - Aug 2021",
      grade: "69.2%",
      desc: "I completed my Bachelor's degree in Chemistry (B.Sc.) from BSA College, Puri. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of Chemistry. From exploring Data different tupes of element to diving bonding and compound, I gained practical insights into the world of elements. My time at Nimapada Autonomous College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Science - BSC (Chemistry)",
    },
    {
      id: 2,
     
      school: "Swadhin Residential College, Odisha",
      date: "Apr 2017 - March 2018",
      grade: "65%",
      desc: "I completed my class 12 education from Swadhin Residential College, Odisha, under the CHSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CHSE(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      
      school: "Saraswati sishu vidya mandir, Odisha",
      date: "Apr 2015 - March 2016",
      grade: "75.5%",
      desc: "I completed my class 10 education from Saraswati sishu vidya mandir, Odisha, under the BSE board, where I studied Science with Computer.",
      degree: "BSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "User Mamagement App",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed user  information. Simply enter a  username, and the app fetches comprehensive data, including Name, Email,Phone,Company,Website and User Post.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/HrushikeshTech/react_practice/tree/main/User%20management%20system/user_management_app",
     
    },
    {
      id: 1,
      title: "Weather dashboard",
      description:
        "A simple and responsive weather application that fetches real-time weather data using a free API. It allows users to search any city and instantly view temperature, humidity, wind speed, and weather conditions with a clean and user-friendly interface.",
      image: csprepLogo,
      tags: ["React JS", "HTML", "CSS", "JavaScript","API"],
      github: "https://github.com/HrushikeshTech/react_practice/tree/main/Weather_dashboard/weather_app",
      
    },
    {
      id: 2,
      title: "mood changer App",
      description:
        "A fun and interactive app that lets users choose different moods and instantly changes the screen’s visuals and emojis based on their selection. It’s a simple project focused on state management, UI updates, and creating an engaging user experience.",
      image: movierecLogo,
      tags: ["React JS","HTML", "CSS", "JavaScript"],
      github: "https://github.com/HrushikeshTech/react_practice/tree/main/mood_change/mood_tracker",
      
    },
    
  ];  