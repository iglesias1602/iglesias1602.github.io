/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Carlos Iglesias' Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Carlos Iglesias Portfolio",
    type: "website",
    url: "ciglesias.be",
  },
};

//Home Page
const greeting = {
  title: "Carlos Iglesias",
  logo_name: "Carlos Iglesias",
  nickname: "iglesias1602",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/iglesias1602",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/iglesias1602",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/iglesiasc/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Mail",
    link: "mailto:iglesias1602@proton.me",
    fontAwesomeIcon: "fas fa-envelope", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#21052C", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React",
        "⚡ Developing mobile applications using React Native",
        "⚡ Creating application backend in Node & Express",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases for projects",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "DigitalOcean",
          fontAwesomeClassname: "simple-icons:digitalocean",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    /*{
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Bootstrap Studio",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#000000",
          },
        },
      ],
    },
        {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },*/
    {
      title: "Data Science & AI",
      fileName: "SysAdminImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    /*{
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },*/
  ],
};

const degrees = {
  degrees: [
    {
      title: "Information Technologies",
      subtitle: "B.Tech. in IT",
      logo_path: "ephec-logo.png",
      alt_name: "EPHEC",
      duration: "2021 - 2024",
      descriptions: [
        "My education has equipped me with technical skills and a deep understanding of current trends, making me adaptable to the rapid evolutions in the IT sector. Key points of my training:",
        "⚡ Programming (Javascript, Python, C)",
        "⚡ Web Development (React, Node, Express)",
        "⚡ Databases (PostgreSQL, SQLite)",
        "⚡ Scripting (Bash, PowerShell)",
        "⚡ Networking",
        "⚡ Machine Learning (Scikit-learn, Pandas, Numpy)",
        "⚡ Security",
        "⚡ Software Engineering (Agile, Scrum)",
        "⚡ Version Control & project collaboration (GitHub)",
        "⚡ Systems administration (Windows Server)",
        "⚡ Virtualization (VMWare)",
        "⚡ Containerization (Docker)",
      ],
      website_link: "https://www.ephec.be/",
    },
    {
      title: "Business Academy Aarhus",
      subtitle: "React Native Summer School",
      logo_path: "aarhus-logo.png",
      alt_name: "Business Academy Aarhus",
      duration: "Jun 2023 - Jul 2023",
      descriptions: [
        "⚡ React Native: Focused on intensive learning for mobile application development.",
        "⚡ Firebase: Database implementation with Firebase to efficiently manage and store real-time data.",
        "⚡ GitHub: Knowledge reinforcement in using GitHub for version control and project collaboration, aiming for a more organized and professional workflow methodology.",
      ],
      website_link: "https://www.baaa.dk/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Agile Requirements Foundations",
      subtitle: "- Angela Wick",
      logo_path: "linkedin-logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/6566a9db73075412edb4b67a4956475bffb4c1c6701a154b5f9b1d9d85743f09?u=2150804",
      alt_name: "LinkedIn Learning Certificate",
      color_code: "#0075B4",
    },
    {
      title: "Business Analysis Foundations",
      subtitle: "- Greta Blash",
      logo_path: "linkedin-logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/dbe280a9a494b2e8392ac43bc3e084a9cc823e9d54de90d2fd4a620dbcb66302?u=2150804",
      alt_name: "LinkedIn Learning Certificate",
      color_code: "#0075B4",
    },
    {
      title: "Customer Service: Problem-Solving and Troubleshooting",
      subtitle: "- Noah Fleming",
      logo_path: "linkedin-logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/3f89a517e91b39ed1c8da467dde718518f2c6558a2c975c14449d3e56a7c93fa?u=2150804",
      alt_name: "LinkedIn Learning Certificate",
      color_code: "#0075B4",
    },
    {
      title: "Agile Foundations",
      subtitle: "- Doug Rose",
      logo_path: "linkedin-logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/e4e730c501db0ff37be564ea5ab4c7f2f2f006648b80a43f5674f31f528dc4e8?u=2150804",
      alt_name: "LinkedIn Learning Certificate",
      color_code: "#0075B4",
    },
    {
      title: "Business Analysis Foundations: Business Process Modeling",
      subtitle: "- Haydn Thomas",
      logo_path: "linkedin-logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/d81e6f7b23060ea8b1d1eb31b59dd92d5178fcab0ec2bd95fcb5b9d2d8fa2fc8?u=2150804",
      alt_name: "LinkedIn Learning Certificate",
      color_code: "#0075B4",
    },
    {
      title: "ITIL® Foundation 4 First Look",
      subtitle: "- David Pultorak",
      logo_path: "linkedin-logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/66ca6204152f5d6467b95d671932646c223ec564024ecff748bf19ce27719344?u=2150804",
      alt_name: "LinkedIn Learning Certificate",
      color_code: "#0075B4",
    },
    {
      title: "Intro to Service Management with ITIL® 4",
      subtitle: "- Jason Dion",
      logo_path: "linkedin-logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/0970e0f4095485f14b27061bcc8367ddaa92f7a0b61ce22f13498920a624e3d9?u=2150804",
      alt_name: "LinkedIn Learning Certificate",
      color_code: "#0075B4",
    },
    {
      title: "Learning ITIL®",
      subtitle: "- David Pultorak",
      logo_path: "linkedin-logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/b2f0db2a1f1f538b39f611d26fa99bf316b8de080817760251ef032f6b22a46c?u=2150804",
      alt_name: "LinkedIn Learning Certificate",
      color_code: "#0075B4",
    },
    {
      title: "Business Process Improvement",
      subtitle: "- Eddie Davila",
      logo_path: "linkedin-logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/2b2f94885d54f103136cbd01d0af3694a991f6ec169fb1a6e4fed1b0f0d0d6b9?u=2150804",
      alt_name: "LinkedIn Learning Certificate",
      color_code: "#0075B4",
    },
    {
      title: "Process Improvement Foundations",
      subtitle: "- Chris Croft",
      logo_path: "linkedin-logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/4c6676547c3a4bdd07a7fc4fcc5f5e3f8551251ded519be713cd6476afe4f894?u=2150804",
      alt_name: "LinkedIn Learning Certificate",
      color_code: "#0075B4",
    },
    {
      title: "Tips for Writing Business Emails",
      subtitle: "- Daisy Lovelace",
      logo_path: "linkedin-logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/6b9501297e1e43d9dd4af4f10307bf2ffa8d43b744197732f4d6915489e7a0f7?u=2150804",
      alt_name: "LinkedIn Learning Certificate",
      color_code: "#0075B4",
    },
    {
      title: "Writing Formal Business Letters and Emails",
      subtitle: "- Tom Geller",
      logo_path: "linkedin-logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/90fa5a6f71b5d4663c16c8dac8a442e155fe7c436ad24908fe018c1cbe2a95c9?u=2150804",
      alt_name: "LinkedIn Learning Certificate",
      color_code: "#0075B4",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    /*{
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Android Developer",
          company: "FreeCopy Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
      ],
    },*/
    {
      title: "Internships",
      work: true,
      experiences: [
        {
          title: "IT Business Analyst Intern",
          company: "ADB Safegate",
          company_url: "https://adbsafegate.com/",
          logo_path: "adbsg-logo.jpg",
          duration: "Feb 2024 - May 2024",
          location: "Brussels, Belgium",
          description: [
            "I had the opportunity to work on a diverse set of tasks that provided me with hands-on experience of various aspects of the industry. ",
            "Participated in Business Process Modelling, Business Process Improvement and Data Modelling(Analyze, challenge and validate functional specifications provided by Internal Customers). ",
            "Translated the business needs of the client and the targets into design elements (Visio, Tree Structure, Interactions) or into specifications and ",
            "Build synergy between the different business actors (internal customers, IT Team, IT suppliers).",
          ],
          color: "#000000",
        },
        /*{
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },*/
      ],
    },
    /*{
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
      ],
    },*/
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    /*{
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },*/
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile-picture-logo.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Louvain-la-Neuve",
    //locality: "San Jose",
    country: "Belgium",
    region: "Walloon Brabant",
    postalCode: "1348",
    //streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/kShrLAKxMpsaptRF9",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
