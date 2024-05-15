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
  resumeLink: "https://drive.proton.me/urls/VK27JXGECM#ZcbLLUkcLA03",
  portfolio_repository:
    "https://github.com/iglesias1602/iglesias1602.github.io",
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
      logo_path: "logos/ephec-logo.png",
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
      logo_path: "logos/aarhus-logo.png",
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
      text: "Duration: 1h 43m",
      logo_path: "logos/linkedin-logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/6566a9db73075412edb4b67a4956475bffb4c1c6701a154b5f9b1d9d85743f09?u=2150804",
      alt_name: "LinkedIn Learning Certificate",
      color_code: "#0075B4",
    },
    {
      title: "Business Analysis Foundations",
      subtitle: "- Greta Blash",
      text: "Duration: 1h 25m",
      logo_path: "logos/linkedin-logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/dbe280a9a494b2e8392ac43bc3e084a9cc823e9d54de90d2fd4a620dbcb66302?u=2150804",
      alt_name: "LinkedIn Learning Certificate",
      color_code: "#0075B4",
    },
    {
      title: "Customer Service: Problem-Solving and Troubleshooting",
      subtitle: "- Noah Fleming",
      text: "Duration: 35m",
      logo_path: "logos/linkedin-logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/3f89a517e91b39ed1c8da467dde718518f2c6558a2c975c14449d3e56a7c93fa?u=2150804",
      alt_name: "LinkedIn Learning Certificate",
      color_code: "#0075B4",
    },
    {
      title: "Agile Foundations",
      subtitle: "- Doug Rose",
      text: "Duration: 1h 35m",
      logo_path: "logos/linkedin-logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/e4e730c501db0ff37be564ea5ab4c7f2f2f006648b80a43f5674f31f528dc4e8?u=2150804",
      alt_name: "LinkedIn Learning Certificate",
      color_code: "#0075B4",
    },
    {
      title: "Business Analysis Foundations: Business Process Modeling",
      subtitle: "- Haydn Thomas",
      text: "Duration: 1h 18m",
      logo_path: "logos/linkedin-logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/d81e6f7b23060ea8b1d1eb31b59dd92d5178fcab0ec2bd95fcb5b9d2d8fa2fc8?u=2150804",
      alt_name: "LinkedIn Learning Certificate",
      color_code: "#0075B4",
    },
    {
      title: "ITIL® Foundation 4 First Look",
      subtitle: "- David Pultorak",
      text: "Duration: 32m",
      logo_path: "logos/linkedin-logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/66ca6204152f5d6467b95d671932646c223ec564024ecff748bf19ce27719344?u=2150804",
      alt_name: "LinkedIn Learning Certificate",
      color_code: "#0075B4",
    },
    {
      title: "Intro to Service Management with ITIL® 4",
      subtitle: "- Jason Dion",
      text: "Duration: 1h 38m",
      logo_path: "logos/linkedin-logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/0970e0f4095485f14b27061bcc8367ddaa92f7a0b61ce22f13498920a624e3d9?u=2150804",
      alt_name: "LinkedIn Learning Certificate",
      color_code: "#0075B4",
    },
    {
      title: "Learning ITIL®",
      subtitle: "- David Pultorak",
      text: "Duration: 1h 38m",
      logo_path: "logos/linkedin-logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/b2f0db2a1f1f538b39f611d26fa99bf316b8de080817760251ef032f6b22a46c?u=2150804",
      alt_name: "LinkedIn Learning Certificate",
      color_code: "#0075B4",
    },
    {
      title: "Business Process Improvement",
      subtitle: "- Eddie Davila",
      text: "Duration: 58m",
      logo_path: "logos/linkedin-logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/2b2f94885d54f103136cbd01d0af3694a991f6ec169fb1a6e4fed1b0f0d0d6b9?u=2150804",
      alt_name: "LinkedIn Learning Certificate",
      color_code: "#0075B4",
    },
    {
      title: "Process Improvement Foundations",
      subtitle: "- Chris Croft",
      text: "Duration: 1h 18m",
      logo_path: "logos/linkedin-logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/4c6676547c3a4bdd07a7fc4fcc5f5e3f8551251ded519be713cd6476afe4f894?u=2150804",
      alt_name: "LinkedIn Learning Certificate",
      color_code: "#0075B4",
    },
    {
      title: "Tips for Writing Business Emails",
      subtitle: "- Daisy Lovelace",
      text: "Duration: 35m",
      logo_path: "logos/linkedin-logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/6b9501297e1e43d9dd4af4f10307bf2ffa8d43b744197732f4d6915489e7a0f7?u=2150804",
      alt_name: "LinkedIn Learning Certificate",
      color_code: "#0075B4",
    },
    {
      title: "Writing Formal Business Letters and Emails",
      subtitle: "- Tom Geller",
      text: "Duration: 36m",
      logo_path: "logos/linkedin-logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/90fa5a6f71b5d4663c16c8dac8a442e155fe7c436ad24908fe018c1cbe2a95c9?u=2150804",
      alt_name: "LinkedIn Learning Certificate",
      color_code: "#0075B4",
    },
  ],
};

const activities = {
  activities: [
    {
      title: "Cyber Security Challenge Belgium",
      subtitle: "- Capture The Flag",
      text:
        "This is an activity that took place during 2023. This activity consisted on a Capture The Flag competition where participants had to solve a series of challenges related to cyber security. The challenges were divided into different categories such as web security, cryptography, reverse engineering, etc.",
      logo_path: "logos/logo-cscbe.svg",
      media: [
        {
          type: "image",
          src: "activities/CSC/csc-1.png",
        },
        {
          type: "image",
          src: "activities/CSC/csc-3.png",
        },
      ],
      comments: [
        <h1>CyberSecurity Challenge Belgium 2023</h1>,
        <h2>Capture The Flag</h2>,
        <h3>Duration: 48h</h3>,
        <h3>Portfolio: 10h</h3>,
        "This is a transversal activity that evaluated skills in different areas of cyber security. Such as web security, cryptography, reverse engineering, stenography, among others. To find different hidden “flags” in the challenges.",
        "This required to use a lot of creativity and our knowledge to solve the challenges. My team and I never gave up until the end of the activity, and even though we didn't win, we were able to know our different strengths, in my case: Being strong at trying to find creative ways for the challenges.",
        "I admit that it was pretty difficult, but it was a great experience that I would like to repeat in the future.",
        "Something that I found pretty difficult was challenges that required a lot of theorical knowledge for some mathematical problems, but in problems like stenography I proved to be really good and this helped us to get more points.",
        "Overall, I was able to learn that I can trust my friends/teammates and that together we can use our different sets of knowledges to success in what we propose to do.",
      ],
      alt_name: "CyberSecurity Challenge Belgium",
      color_code: "#0075B4",
    },
    {
      title: "Capture The Flag EPHEC",
      subtitle: "- Capture The Flag",
      text: "Capture The Flag EPHEC",
      logo_path: "logos/ephec-tech-logo-white.svg",
      media: [
        {
          type: "image",
          src: "activities/CTF-EPHEC/ctf-ephec-1.png",
        },
        {
          type: "image",
          src: "activities/CTF-EPHEC/ctf-doc.jpg",
        },
      ],
      comments: [
        <h1>CTF EPHEC</h1>,
        <h2>Capture The Flag</h2>,
        <h3>Duration: 10h30h</h3>,
        <h3>Portfolio: 10h</h3>,
        "During my first year I participated to this event, which meant that I didn't have that much knowledge of the different tools that we can use to solve the challenges.",
        "I realised that I am capable of adapting to new situations and that I can learn quickly. I was able to solve some challenges and I learned a lot about web security vulnerabilities. I remember some of the challenges were a bit out of my understanding; and even though I didn't solve them, I learned a lot from them.",
        "At that time I relised that I had some trouble asking for help when I didn't understand something, but I learned that it is important to ask for help when you need it. Specially in events that require a team to share their experiences",
        "All in all, it was my first experience in a CTF and I learned a lot from it.",
      ],
      alt_name: "Capture The Flag EPHEC",
      color_code: "#1C1C1C",
    },
    {
      title: "LAN EPHEC",
      subtitle: "- LAN Organisation & Participation",
      text:
        "LAN organised at EPHEC. This event was a LAN party where participants could play video games together. The event was organised by IT professor Jonathan Noël and IT students of EPHEC: Dudley de Henau, Antoine Moens Pennewaert & me Carlos Iglesias Garcia.",
      logo_path: "logos/ephec-tech-logo-white.svg",
      media: [
        {
          type: "image",
          src: "activities/LAN-EPHEC/lan-doc.jpg",
        },
        {
          type: "image",
          src: "activities/LAN-EPHEC/lan-1.png",
        },
        {
          type: "image",
          src: "activities/LAN-EPHEC/lan-2.jpg",
        },
        {
          type: "image",
          src: "activities/LAN-EPHEC/lan-3.png",
        },
      ],
      comments: [
        <h1>CTF EPHEC</h1>,
        <h2>Capture The Flag</h2>,
        <h3>Duration: 15h</h3>,
        <h3>Portfolio: 10h</h3>,
        "At first I didn't plan to participate on the activity or even organise it. But I got motivation from my friends and we signed up to participate.",
        "First we had to prepare the server for some games that we planned to use for the game, at some point we had some problems with a server which didn't want to connect at all. We spent some time looking for a fix, and that's where I used my troubleshooting skills. Which proved to be good because I troubleshooted the problem and I found the solution to set up this server (The problem was linked to the virtual network card which was in the computer that was not letting the connexion from the client to the server).",
        "After that we also had to set up the network for the LAN, which was a bit tricky because we had to set up the network for the LAN. This wasn't that difficult since we had the switches and the routers we needed to create the access points to connect the devices among them.",
        "There was only one game in which we realised that the servers are private, so it was impossible to setup a local server for the LAN. So strictly speaking there was one game that was not in “the LAN”, but we managed to play it anyway.",
        "This event took place during all day and we managed to form 3 teams of 5 people. So we played games like: Counter Strike, League of Legends, among others.",
      ],
      alt_name: "LAN EPHEC",
      color_code: "#1C1C1C",
    },
    {
      title: "Luminus Generation Zero",
      subtitle: "Bootcamp",
      text: "Young IT Track - Luminus Generation Zero",
      logo_path: "logos/luminus-logo.jpg",
      media: [
        {
          type: "video",
          src: "https://www.youtube.com/embed/ZYWTAIliA9Y?si=vEKTiY-lS4VoFEe-",
        },
        {
          type: "image",
          src: "activities/LUMINUS/luminus-1.jpg",
        },
      ],
      comments: [
        <h1>Luminus Generation Zero</h1>,
        <h2>Bootcamp</h2>,
        <h3>Duration: 10h15m</h3>,
        <h3>Portfolio: 9h</h3>,
        "This was my first experience with a bootcamp. It was focused on trying to find a solution for an imaginary problem.",
        "They proposed 3 different problems and we had to chose one of them. We had to act as if we were a start up and we had to focus on 3 main objectives: The benefits for the company, for the environment and for Luminus.",
        "We chose to design the prototype of an application that connects to some sensors that will tell us the values of the energy consumption of the individual rooms of a company. With this we were trying to find a way to control the consumption to save some money of the bills.",
        "The main focus was to evaluate the soft skills of the participants, such as: Teamwork, creativity, problem solving, etc. Since at this point I was already feeling comfortable with my communicative soft skills, I felt that it was a personal success",
        "I made sure that I was telling my honest opinion in every step of bootcamp. Encouraging communication and making sure that everyone was on the same page. I also made sure that I was listening to the ideas of my teammates and that I was giving them the space to express themselves.",
      ],
      alt_name: "Luminus Generation Zero",
      color_code: "#FFF",
    },
    {
      title: "Kot Carrefour",
      subtitle: "Art Week - Organisation & Participation",
      text:
        "This is an ASBL project that focuses on the interculturation of young people and families from different countries. Different activities are organised during the academic year by students",
      logo_path: "logos/kotcarrefour-logo.png",
      media: [
        {
          type: "instagram-post",
          src:
            "https://www.instagram.com/p/C41W9SooHZ8/?utm_source=ig_embed&amp;utm_campaign=loading",
        },
      ],
      comments: [
        <h1>Art Week - Kot Carrefour</h1>,
        <h2>Activity organisation & participation</h2>,
        <h3>Duration: 2h30m</h3>,
        <h3>Portfolio: 2h30m</h3>,
        "This activity was organised in a kot which belongs to an ASBL Kot Carrefour VIncent Lebbe.",
        "The project of the kot is to make a place where people from different countries can meet and share their culture.",
        "With my team of organisers we decided that during the Art Week where different activities were organised. For the activity I organised we decided to make it about music.",
        "It consisted in a presentation of different music styles from different countries with some examples, followed by a demonstration of music with live instruments.",
        "And at the end with a small quiz about the presentation and about the music world in general.",
        "After the activity people could play some of the instruments that were brought to the event to experiment with them.",
      ],
      alt_name: "Kot Carrefour - Art Week",
      color_code: "#FFF",
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
          logo_path: "logos/adbsg-logo.jpg",
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
    "During the course of my studies I created and contributed to a number of projects. Here are a few of them.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "",
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
      "You can contact me in my social media using the following links or send me an email. I'm always looking forward to new opportunities and collaborations.",
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

const portfolioHeaders = ["Name", "Type", "Duration", "Portfolio", ""];

const portfolioRows = [
  [
    "Agile Requirements Foundations",
    "LinkedIn - Agile Certification",
    "1h 43m",
    "1h 43m",
    "",
  ],
  [
    "Agile Foundations",
    "LinkedIn - Agile Certification",
    "1h 35m",
    "1h 35m",
    "",
  ],
  [
    "Business Analysis Foundations",
    "LinkedIn - BA Certification",
    "1h 25m",
    "1h 25m",
    "",
  ],
  [
    "Business Analysis Foundations: Business Process Modeling",
    "LinkedIn - BA Certification",
    "1h 18m",
    "1h 18m",
    "",
  ],
  [
    "Business Improvement Foundations",
    "LinkedIn - BA Certification",
    "1h 18m",
    "1h 18m",
    "",
  ],
  [
    "Business Process Improvement",
    "LinkedIn - BA Certification",
    "58m",
    "58m",
    "",
  ],
  [
    "ITIL® Foundation 4 First Look",
    "LinkedIn - BA Certification",
    "32m",
    "32m",
    "",
  ],
  [
    "Intro to Service Management with ITIL® 4",
    "LinkedIn - BA Certification",
    "1h 38m",
    "1h 38m",
    "",
  ],
  ["Learning ITIL®", "LinkedIn - BA Certification", "1h 38m", "1h 38m", ""],
  [
    "Customer Service: Problem-Solving and Troubleshooting",
    "LinkedIn - Certification",
    "35m",
    "35m",
    "",
  ],
  [
    "Tips for Writing Business Emails",
    "LinkedIn - Certification",
    "35m",
    "35m",
    "",
  ],
  [
    "Writing Formal Business Letters and Emails",
    "LinkedIn - Certification",
    "36m",
    "36m",
    "",
  ],
  ["Cyber Security Challenge Belgium", "Capture The Flag", "48h", "10h", ""],
  ["CTF EPHEC 2022", "Capture The Flag", "10h 30m", "10h", ""],
  ["LAN EPHEC", "Organisation - Servers, Network setup", "7h", "7h", ""],
  ["Luminus Generation Zero", "Bootcamp", "10h 15m", "9h", ""],
  ["LAN EPHEC", "Soft Skills - Participation", "9h", "9h", ""],
  [
    "Art Week - Kot Carrefour",
    "Soft Skills - Organisation & Participation",
    "2h 30m",
    <b>1h</b>,
    "Soft Skills Hours Completed",
  ],
  [<b>Total</b>, "", <b>101h 6m</b>, <b>65h 51m</b>, ""],
];

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  activities,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  portfolioHeaders,
  portfolioRows,
};
