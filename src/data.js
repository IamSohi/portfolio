const color = ['#0099ff', '#ff0055', '#22cc88', '#ffaa00'];
const boldBlue = (string) => (`<strong style="color:${color[0]}">${string}</strong>`)
const boldRed = (string) => (`<strong style="color:${color[1]}">${string}</strong>`)
const boldGreen = (string) => (`<strong style="color:${color[2]}">${string}</strong>`)
const boldYellow = (string) => (`<strong style="color:${color[3]}">${string}</strong>`)
export const items = [
    {
        id: "g",
        category: "Web DevOps",
        title: "DevOps - CI/CD with AWS",
        technology: ["AWS-Cloud", "CodePipeline", "CodeCommit", "CodeBuild", "CodeDeploy"],
        description: "A hands-on experience with AWS solutions for CI/CD pipeline. I deployed a pre-build website to development and production environment on AWS-EC2 servers using Blue-Green deployment strategy.",
        // link: "https://iamsohi.github.io/WeatherApp-React/",
        img: "/aws_cicd_pipeline.png"
    },
    {
        id: "h",
        category: "Web DevOps",
        title: "DevOps - Website Transition",
        technology: ["Docker", "Docker-compose", "RSpec", "Capybara", "Selenium", "AWS-S3", "Terraform", "Jenkins"],
        description: "A hands-on experience with transitioning a traditional website to a more DevOps-friendly environment using Containerization, Infrastructure as Code, and Automated deployment pipeline.",
        link: "https://github.com/IamSohi/devops-website-transition",
        img: "/DevOps_Architecture_Diagram.jpg"
    },
    {
        id: "a",
        category: "Web Development",
        title: "Weather Today",
        technology: ["React {Hooks}", "Material-UI", "JavaScript", "HTML", "CSS"],
        description: "An interactive Weather App in React that lets you have the up-to-date weather information of your favourite cities. Add as many cities as you like. It remembers all your preferences by taking advange of browser's local storage to store location and live weather information.",
        link: "https://iamsohi.github.io/WeatherApp-React/",
        img: "/weatherApp.JPG"
    },
    {
        id: "b",
        category: "Java Development",
        title: "TODS - Point of Sale system",
        technology: ["Java", "Java-FX", "MySQL", "Eclipse", "XAMPP", "SceneBuilder"],
        description: "TODS - Tiffin Order & Delivery System - is a POS system that allows the businesses to take orders, create and manage customers accounts, helps keep track of order delivery. This group project was developed in Java and MySQL in the Project Development course at KPU. We also took advantage of JavaFX Library to design Application Interfaces.",
        link: "https://www.github.com/IamSohi/TODS",
        img: "/tods.jpg"
    },
    {
        id: "c",
        category: "Web Development",
        title: "IdoToday",
        technology: ["PHP", "SQL", "JavaScript", "AWS", "Noje.js", "Web Sockets", "HTML", "Bootstrap"],
        description: "A real-time networking website integrated with instant messaging service that helps people connects. This was an individual project developed in PHP and MySQL. Front-end is desgined using HTML, CSS, JavaScript and BootStrap. The instant-messaging service was implimented in Express.js, using websockets and Node.js.",
        link: "https://www.github.com/IamSohi/idotoday",
        img: "/idotoday.JPG"
    },
    {
        id: "d",
        category: "Android Development",
        title: "EasyRoll",
        technology: ["Java", "Android Studio", "LibGdx", "Gradle", "TexturePacker", "Graphics", "Google APIs"],
        description: "A fun and enjoyable andoid game in Java available on Google Play. Developed with LibGdx Game Engine, designed my own graphics and build from scratch in Android Studio.",
        link: "https://play.google.com/store/apps/details?id=com.sssproduction.naughtysofts.games",
        img: "/easyroll.jpg"
    },
    {
        id: "e",
        category: "Machine Learning",
        title: "Cat Classifier",
        technology: ["Python", "Jupyter Notebook", "Numpy", "Scipy", "Matplotlib"],
        description: "ML modal in deep neural networks for cat classification and implemented hyperparameters tunning, regulatization, and optimization to achieve high accuracy and performance.",
        link: "https://www.github.com/IamSohi/Cat-Classifier",
        img: "/catclassifier.jpg"
    },
    {
        id: "f",
        category: "Linux Server",
        title: "LinuxNet",
        technology: ["Linux Server", "Windows 10", "Command Line"],
        description: "Managed and troubleshoot a distributed network on Linux machine. SetUp and configured Linux system for DHCP Server, DNS Server, Apache Server, File Sharing and distributed directory.",
        link: "https://www.github.com/IamSohi/Managing-a-Network-Using-Linux",
        img: "/linuxnet.jpg"
    },

];

export const education = [
    {
        id: 4,
        program: "Licenses & Cerifications",
        institution: "LinkedIn Learning",
        startDate: "",
        endDate: "",
        courses: ["Advanced Design Patterns: Design Principles", "Creating a Dev Environment in AWS with Terraform", "DevOps with AWS", "Docker for Developers", "Learning Selenium", "Node.js Essential Training", "Running Jenkins on AWS"],
        description: "I enjoy taking online courses from LinkedIn learning and Coursera.org to stay relevant and up-to-date with the latest trends in the industry. Bellow are some ",
        link: "https://www.linkedin.com/in/sukhveersohi/details/certifications/"
    },
    {
        id: 1,
        program: "Computer Science and Information Systems",
        institution: "Kwantlen Polytechnic University",
        startDate: "May 2018",
        endDate: "May 2020",
        courses: ["Object-Oriented Programming", "Data Structure", "Database Sys.", "Networking Tech.", "Cyber Security", "Server Operating Sys.", "Project Development", "System Analysis & Design", "Professional Communication & Unversity Writing"],
        description: "This was my post-secondary Program from school of Business at KPU. Got introduced to a wide variety of subjects ranging from advanced software development to Server Management to Cybersecurity. Graduated with GPA of 3.87. Relished Building amazing projects with my colleagues.",
        link: "/SukhveerTranscript.pdf"
    },
    {
        id: 2,
        program: "Deep Learning Specialization",
        institution: "Coursera",
        startDate: "Dec 2019",
        endDate: "Jun 2020",
        courses: ['Tensorflow', 'Convolutional Neural Network', 'Artificial Neural Network', 'Deep Learning', 'Backpropagation', 'Python Programming', 'Hyperparameter', 'Hyperparameter Optimization', 'Machine Learning', 'Inductive Transfer', 'Multi-Task Learning', 'Facial Recognition System'],
        description: "I took this self-paced specialization on Coursera that is designed to prepare learners to participate in the development of cutting-edge AI technology, and to understand the capability, the challenges, and the consequences of the rise of deep learning. Developed projects in Deep Learning ranging from Simple Classification to Music Generation.",
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/YHPZ7SRC4Z5H"
    },
    {
        id: 3,
        program: "Machine Learning with TensorFlow on Google Cloud Platform Specialization",
        institution: "Coursera",
        startDate: "Aug 2020",
        endDate: "Sep 2020",
        courses: ['Tensorflow', 'Machine Learning', 'Feature Engineering', 'Cloud Computing', 'Application Programming Interfaces (API)', 'Inclusive ML', 'Google Cloud Platform', 'Bigquery', 'Data Cleansing', 'Python Programming', 'Build Input Data Pipeline', 'keras'],
        description: "This specialization helped me get a hands-on experience of Machine Learning on Google Cloud Platform. Experienced the power of Cloud computing, Big Query, Data Pipeline and Feature Engineering.",
        link: "https://www.coursera.org/account/accomplishments/certificate/VBXJWJNV4SGS"
    },


]

export const experiences = [
    {
        id: 1,
        title: "Web & Cloud Engineer (Contractor)",
        company: "ezPT Technologies Ltd.",
        companyType: "Health Tech Startup",
        startDate: "Jan 2021",
        endDate: "Present",
        skills: ["React (Hooks)", "Material-UI", "HTML5", "CSS3", "JavaScript ES6", "Express.js", "Node.js", "Django (Python)", "Firebase", "SQL"],
        description: [`Built a ${boldBlue('full-stack web platform')} to better engage patients and therapists in the treatment of physical injuries through the web app and healthcare device providing ${boldBlue('real-time analytics')}`,
        `Implemented a new ${boldBlue('containerized deployment and CI/CD strategy')} using Docker and Jenkins, ${boldBlue('reducing the production time by 96.7%')}. Also optimized resource usage by configuring a multi-container environment on a single EC2 instance using docker-compose.`,
        `Successfully applied Kanban agile methodology and helped set up DevOps environment ${boldBlue('reducing the lead time and increasing feedback iterations')}`,
            `Developed the front-end using React (Hooks), Material-UI, HTML5, CSS3, JavaScript ES6, and back-end using Express.js, Node.js, Django (Python), Firebase, SQL, test the application using JEST and Selenium.`
        ]
    },
    {
        id: 2,
        title: "Full-Stack Web Developer",
        company: "Tellext Inc.",
        companyType: "Robotics Company",
        startDate: "Dec 2021",
        endDate: "May 2022",
        description: [`Developed a WebRTC-based solution for teleoperating a Linux-based robot from the JavaScript front-end, which ${boldRed('decreased the latency by 90%')}`,
        `Lead the transition to ${boldRed('Automated Testing')} using tools such as JEST, React testing library, and Selenium to perform various tests as a part of the CI/CD pipeline. This increased the code quality and ${boldRed('slashed release time by 58%')}</strong>`,
        `Built a ${boldRed('secure and scalable RESTful APIs')} using AWS API gateway and lambda services that served data to the front-end based on dynamically chosen user inputs.`,
        `Enhanced the ${boldRed('security of video streaming service')} by developing AWS lambda to issue temporary STS tokens to access the streams.`,
        `Worked on implementing a ${boldRed('Git flow strategy')} for frontend application that enabled better code control and decreased conflicts.`
        ]
    },
    {
        id: 3,
        title: "Web Developer-cum-Cabinet Designer",
        company: "Golden Villa Inc.",
        companyType: "Cabinets & Interior Design",
        startDate: "Jan 2021",
        endDate: "Oct 2021",
        skills: ["Wix", "Graphics", "Editing",],
        description: [`Designed and Developed a ${boldGreen('website with Wix')} for online business presence. available at <a href="https://www.goldenvilla.ca">${boldGreen('www.goldenvilla.ca')}</a>`,
        `Boosted Google page ranking with ${boldGreen('Search Engine Optimization')} techniques`,
            `Understood cabinetry designs from scratch in days as well as teamed up with General Manager to develop and implement the plans to better organize inventory and improve efficiency in order pickups by 200%`
        ]
    },
    {
        id: 4,
        title: "Web Developer (Casual)",
        company: "High Voltage RoadShow",
        companyType: "Entertainment & Event Management",
        startDate: "",
        endDate: "",
        skills: ["WordPress", "Plug-ins"],
        description: [`Designed, modified and configured ${boldYellow('WordPress and Squarespace websites')} according to clients' needs.`,
            `Worked closely with the marketing and graphics team.`,
        `Experienced with ${boldYellow('WordPress Plugins and Theme packages')}`
        ]
    },
]