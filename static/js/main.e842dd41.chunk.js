(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},65:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n(0),o=n.n(a),s=n(18),r=n.n(s),c=(n(58),n(59),n(48)),l=(n(60),n(39)),d=n(91),m=n(99),p=n(7),h=n(24);function u(e){var t=e.color,n=e.navItem,a=e.navIcon,o=e.isSelected,s=e.onClick;return Object(i.jsxs)("li",{className:"navItem",onClick:s,children:[o&&Object(i.jsx)(l.b.div,{layoutId:"outline",className:"outline",initial:!1,animate:{borderColor:t},transition:{type:"spring",stiffness:500,damping:30}}),Object(i.jsxs)(h.b,{className:"navLink",to:"/"+("About"===n?"":n.toLowerCase()),style:{color:t},children:[Object(i.jsx)(m.a,{smDown:!0,children:n}),Object(i.jsx)(m.a,{mdUp:!0,children:Object(i.jsx)("span",{class:"material-icons",children:a})})]},t+n)]},n)}var b=function(e){var t=[{name:"About",color:"#0099ff",icon:"perm_identity"},{name:"Projects",color:"#ff0055",icon:"handyman"},{name:"Education",color:"#22cc88",icon:"school"},{name:"Experience",color:"#ffaa00",icon:"work"}],n=Object(p.f)(),o=t[0].color;t.forEach((function(e){return e.name.toLowerCase()===n.pathname.substr(1)?o=e.color:""}));var s=Object(a.useState)(o),r=Object(c.a)(s,2),m=r[0],h=r[1];return Object(i.jsx)(l.a,{children:Object(i.jsx)("ul",{className:"navigation",id:"nav",children:Object(i.jsxs)(d.a,{container:!0,spacing:2,style:{justifyContent:"center"},children:[Object(i.jsx)(d.a,{item:!0,xs:!1,md:2}),t.map((function(e){return Object(i.jsx)(d.a,{item:!0,xs:2,children:Object(i.jsx)(u,{color:e.color,isSelected:m===e.color,navItem:e.name,navIcon:e.icon,onClick:function(){return h(e.color)}},e.color)},e.icon)})),Object(i.jsx)(d.a,{item:!0,xs:!1,md:2})]})})})},j=(n(65),n(98)),g=n(38),f=n(32);var x=function(e){return Object(a.useEffect)((function(){window.scrollTo(0,0)})),Object(i.jsx)("div",{className:"intro",children:Object(i.jsxs)(d.a,{container:!0,children:[Object(i.jsx)(d.a,{item:!0,xs:12,lg:!1,children:Object(i.jsx)(m.a,{lgUp:!0,children:Object(i.jsx)("div",{style:{marginTop:"6em"}})})}),Object(i.jsx)(d.a,{item:!0,md:2,xs:12}),Object(i.jsxs)(d.a,{item:!0,md:8,xs:12,children:[Object(i.jsxs)(d.a,{container:!0,children:[Object(i.jsx)(d.a,{item:!0,className:"picBox",style:{margin:"auto"},xs:12,lg:5,children:Object(i.jsxs)("div",{className:"par",children:[Object(i.jsx)(m.a,{smDown:!0,children:Object(i.jsx)("div",{class:"frame chl",children:Object(i.jsx)("div",{class:"clr"})})}),Object(i.jsx)("img",{className:"profilePic chl",src:"/portfolio/profilepic.jpg",alt:"Profile Pic"})]})}),Object(i.jsxs)(d.a,{item:!0,xs:12,lg:7,children:[Object(i.jsxs)("p",{className:"introText",children:["Hi",Object(i.jsx)("span",{class:"wave",role:"img","aria-label":"wave",children:" \ud83d\udc4b\ud83c\udffc "}),"I'm Sukhveer, a tech-enthusiast and self-driven individual with a passion for building things.",Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),"I'm interested in anything tech \u2014 especially ",Object(i.jsx)("span",{className:"textDec color1",children:"web development"})," and ",Object(i.jsx)("span",{className:"textDec color4",children:"machine learning"}),". I graduated from Kwantlen Polytechnic University in May 2020. My major was Computer Science and Information Systems.",Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),"In my free time, I love networking with people, listen to music, do some reading and sometimes enjoys cooking. I have a knack for bringing technology, business, science and philosophy in every discussion.",Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),"Browse the ",Object(i.jsx)("span",{className:"textDec color2",children:"projects"})," tab to see some of my work or feel free to ",Object(i.jsx)("a",{className:"textDec color3",href:"https://www.linkedin.com/in/sukhveersohi/",children:"reach out!"})]}),Object(i.jsx)(d.a,{item:!0,xs:12,children:Object(i.jsxs)("p",{className:"introText",children:[Object(i.jsx)(j.a,{className:"resumeBtn",style:{color:"white",fontWeight:"bold",fontSize:"1.7em"},href:"/portfolio/SukhveerResume.pdf",children:"Resume"}),Object(i.jsx)(g.a,{onClick:function(){window.open("https://www.linkedin.com/in/sukhveersohi/")},icon:f.b,size:"3x",pull:"left"}),Object(i.jsx)(g.a,{onClick:function(){window.open("https://github.com/IamSohi")},icon:f.a,size:"3x",pull:"right"})]})})]})]}),Object(i.jsx)(d.a,{item:!0,md:2,sm:!1})]})]})})},y=n(22),v=["#0099ff","#ff0055","#22cc88","#ffaa00"],O=function(e){return'<strong style="color:'.concat(v[0],'">').concat(e,"</strong>")},w=function(e){return'<strong style="color:'.concat(v[1],'">').concat(e,"</strong>")},S=function(e){return'<strong style="color:'.concat(v[2],'">').concat(e,"</strong>")},k=function(e){return'<strong style="color:'.concat(v[3],'">').concat(e,"</strong>")},C=[{id:"g",category:"Web DevOps",title:"DevOps - CI/CD with AWS",technology:["AWS-Cloud","CodePipeline","CodeCommit","CodeBuild","CodeDeploy"],description:"A hands-on experience with AWS solutions for CI/CD pipeline. I deployed a pre-build website to development and production environment on AWS-EC2 servers using Blue-Green deployment strategy.",img:"/aws_cicd_pipeline.png"},{id:"h",category:"Web DevOps",title:"DevOps - Website Transition",technology:["Docker","Docker-compose","RSpec","Capybara","Selenium","AWS-S3","Terraform","Jenkins"],description:"A hands-on experience with transitioning a traditional website to a more DevOps-friendly environment using Containerization, Infrastructure as Code, and Automated deployment pipeline.",link:"https://github.com/IamSohi/devops-website-transition",img:"/DevOps_Architecture_Diagram.jpg"},{id:"a",category:"Web Development",title:"Weather Today",technology:["React {Hooks}","Material-UI","JavaScript","HTML","CSS"],description:"An interactive Weather App in React that lets you have the up-to-date weather information of your favourite cities. Add as many cities as you like. It remembers all your preferences by taking advange of browser's local storage to store location and live weather information.",link:"https://iamsohi.github.io/WeatherApp-React/",img:"/weatherApp.JPG"},{id:"b",category:"Java Development",title:"TODS - Point of Sale system",technology:["Java","Java-FX","MySQL","Eclipse","XAMPP","SceneBuilder"],description:"TODS - Tiffin Order & Delivery System - is a POS system that allows the businesses to take orders, create and manage customers accounts, helps keep track of order delivery. This group project was developed in Java and MySQL in the Project Development course at KPU. We also took advantage of JavaFX Library to design Application Interfaces.",link:"https://www.github.com/IamSohi/TODS",img:"/tods.jpg"},{id:"c",category:"Web Development",title:"IdoToday",technology:["PHP","SQL","JavaScript","AWS","Noje.js","Web Sockets","HTML","Bootstrap"],description:"A real-time networking website integrated with instant messaging service that helps people connects. This was an individual project developed in PHP and MySQL. Front-end is desgined using HTML, CSS, JavaScript and BootStrap. The instant-messaging service was implimented in Express.js, using websockets and Node.js.",link:"https://www.github.com/IamSohi/idotoday",img:"/idotoday.JPG"},{id:"d",category:"Android Development",title:"EasyRoll",technology:["Java","Android Studio","LibGdx","Gradle","TexturePacker","Graphics","Google APIs"],description:"A fun and enjoyable andoid game in Java available on Google Play. Developed with LibGdx Game Engine, designed my own graphics and build from scratch in Android Studio.",link:"https://play.google.com/store/apps/details?id=com.sssproduction.naughtysofts.games",img:"/easyroll.jpg"},{id:"e",category:"Machine Learning",title:"Cat Classifier",technology:["Python","Jupyter Notebook","Numpy","Scipy","Matplotlib"],description:"ML modal in deep neural networks for cat classification and implemented hyperparameters tunning, regulatization, and optimization to achieve high accuracy and performance.",link:"https://www.github.com/IamSohi/Cat-Classifier",img:"/catclassifier.jpg"},{id:"f",category:"Linux Server",title:"LinuxNet",technology:["Linux Server","Windows 10","Command Line"],description:"Managed and troubleshoot a distributed network on Linux machine. SetUp and configured Linux system for DHCP Server, DNS Server, Apache Server, File Sharing and distributed directory.",link:"https://www.github.com/IamSohi/Managing-a-Network-Using-Linux",img:"/linuxnet.jpg"}],D=[{id:4,program:"Licenses & Cerifications",institution:"LinkedIn Learning",startDate:"",endDate:"",courses:["Advanced Design Patterns: Design Principles","Creating a Dev Environment in AWS with Terraform","DevOps with AWS","Docker for Developers","Learning Selenium","Node.js Essential Training","Running Jenkins on AWS"],description:"I enjoy taking online courses from LinkedIn learning and Coursera.org to stay relevant and up-to-date with the latest trends in the industry. Bellow are some ",link:"https://www.linkedin.com/in/sukhveersohi/details/certifications/"},{id:1,program:"Computer Science and Information Systems",institution:"Kwantlen Polytechnic University",startDate:"May 2018",endDate:"May 2020",courses:["Object-Oriented Programming","Data Structure","Database Sys.","Networking Tech.","Cyber Security","Server Operating Sys.","Project Development","System Analysis & Design","Professional Communication & Unversity Writing"],description:"This was my post-secondary Program from school of Business at KPU. Got introduced to a wide variety of subjects ranging from advanced software development to Server Management to Cybersecurity. Graduated with GPA of 3.87. Relished Building amazing projects with my colleagues.",link:"/SukhveerTranscript.pdf"},{id:2,program:"Deep Learning Specialization",institution:"Coursera",startDate:"Dec 2019",endDate:"Jun 2020",courses:["Tensorflow","Convolutional Neural Network","Artificial Neural Network","Deep Learning","Backpropagation","Python Programming","Hyperparameter","Hyperparameter Optimization","Machine Learning","Inductive Transfer","Multi-Task Learning","Facial Recognition System"],description:"I took this self-paced specialization on Coursera that is designed to prepare learners to participate in the development of cutting-edge AI technology, and to understand the capability, the challenges, and the consequences of the rise of deep learning. Developed projects in Deep Learning ranging from Simple Classification to Music Generation.",link:"https://www.coursera.org/account/accomplishments/specialization/certificate/YHPZ7SRC4Z5H"},{id:3,program:"Machine Learning with TensorFlow on Google Cloud Platform Specialization",institution:"Coursera",startDate:"Aug 2020",endDate:"Sep 2020",courses:["Tensorflow","Machine Learning","Feature Engineering","Cloud Computing","Application Programming Interfaces (API)","Inclusive ML","Google Cloud Platform","Bigquery","Data Cleansing","Python Programming","Build Input Data Pipeline","keras"],description:"This specialization helped me get a hands-on experience of Machine Learning on Google Cloud Platform. Experienced the power of Cloud computing, Big Query, Data Pipeline and Feature Engineering.",link:"https://www.coursera.org/account/accomplishments/certificate/VBXJWJNV4SGS"}],T=[{id:1,title:"Web & Cloud Engineer (Contractor)",company:"ezPT Technologies Ltd.",companyType:"Health Tech Startup",startDate:"Jan 2021",endDate:"Present",skills:["React (Hooks)","Material-UI","HTML5","CSS3","JavaScript ES6","Express.js","Node.js","Django (Python)","Firebase","SQL"],description:["Built a ".concat(O("full-stack web platform")," to better engage patients and therapists in the treatment of physical injuries through the web app and healthcare device providing ").concat(O("real-time analytics")),"Implemented a new ".concat(O("containerized deployment and CI/CD strategy")," using Docker and Jenkins, ").concat(O("reducing the production time by 96.7%"),". Also optimized resource usage by configuring a multi-container environment on a single EC2 instance using docker-compose."),"Successfully applied Kanban agile methodology and helped set up DevOps environment ".concat(O("reducing the lead time and increasing feedback iterations")),"Developed the front-end using React (Hooks), Material-UI, HTML5, CSS3, JavaScript ES6, and back-end using Express.js, Node.js, Django (Python), Firebase, SQL, test the application using JEST and Selenium."]},{id:2,title:"Full-Stack Web Developer",company:"Tellext Inc.",companyType:"Robotics Company",startDate:"Dec 2021",endDate:"May 2022",description:["Developed a WebRTC-based solution for teleoperating a Linux-based robot from the JavaScript front-end, which ".concat(w("decreased the latency by 90%")),"Lead the transition to ".concat(w("Automated Testing")," using tools such as JEST, React testing library, and Selenium to perform various tests as a part of the CI/CD pipeline. This increased the code quality and ").concat(w("slashed release time by 58%"),"</strong>"),"Built a ".concat(w("secure and scalable RESTful APIs")," using AWS API gateway and lambda services that served data to the front-end based on dynamically chosen user inputs."),"Enhanced the ".concat(w("security of video streaming service")," by developing AWS lambda to issue temporary STS tokens to access the streams."),"Worked on implementing a ".concat(w("Git flow strategy")," for frontend application that enabled better code control and decreased conflicts.")]},{id:3,title:"Web Developer-cum-Cabinet Designer",company:"Golden Villa Inc.",companyType:"Cabinets & Interior Design",startDate:"Jan 2021",endDate:"Oct 2021",skills:["Wix","Graphics","Editing"],description:["Designed and Developed a ".concat(S("website with Wix"),' for online business presence. available at <a href="https://www.goldenvilla.ca">').concat(S("www.goldenvilla.ca"),"</a>"),"Boosted Google page ranking with ".concat(S("Search Engine Optimization")," techniques"),"Understood cabinetry designs from scratch in days as well as teamed up with General Manager to develop and implement the plans to better organize inventory and improve efficiency in order pickups by 200%"]},{id:4,title:"Web Developer (Casual)",company:"High Voltage RoadShow",companyType:"Entertainment & Event Management",startDate:"",endDate:"",skills:["WordPress","Plug-ins"],description:["Designed, modified and configured ".concat(k("WordPress and Squarespace websites")," according to clients' needs."),"Worked closely with the marketing and graphics team.","Experienced with ".concat(k("WordPress Plugins and Theme packages"))]}],P=n(100),I=n(95),N=n(96),L=n(97),A=n(33),W=(n(69),n(94)),E=["#0099ff","#ff0055","#22cc88","#ffaa00"],M=Object(W.a)({imgbox:{width:"90%"},cardTile:{margin:"3em",backgroundColor:"black",color:"white"},projectTile:{border:"1px solid rgb(100, 100, 100)",borderRadius:"12px",marginBottom:"3em"},textColor:{color:"white"},subheader:{color:"white"},subTitle:{color:"white",fontSize:"4em",fontWeight:"bold"}});function J(e){var t=e.technology;return Object(i.jsx)("div",{children:Object(i.jsx)("ul",{className:"techItems",children:t.map((function(e,t){return Object(i.jsx)("li",{style:{color:t<4?E[t]:E[t-4],borderColor:t<4?E[t]:E[t-4]},children:e},e)}))})})}function B(e){var t=e.id,n=e.title,a=e.category,o=e.technology,s=e.description,r=e.link,c=e.img,l=M();return Object(i.jsxs)(d.a,{container:!0,className:l.projectTile,children:[Object(i.jsx)(d.a,{item:!0,sm:12,md:5,style:{margin:"auto"},children:Object(i.jsx)("div",{children:Object(i.jsx)("img",{className:l.imgbox,src:"/portfolio"+c,alt:n})})}),Object(i.jsx)(d.a,{item:!0,sm:12,md:7,children:Object(i.jsxs)(P.a,{className:l.cardTile,children:[Object(i.jsx)(I.a,{className:l.textColor,classes:{subheader:l.subheader},title:n,subheader:a}),Object(i.jsxs)(N.a,{children:[Object(i.jsx)(A.a,{className:l.textColor,variant:"body2",color:"textSecondary",component:"p",children:s}),Object(i.jsx)(J,{technology:o})]}),Object(i.jsx)(L.a,{style:{display:"block"},children:r&&Object(i.jsx)(j.a,{className:l.textColor,"aria-label":"settings",href:r,children:"View Project"})})]},t)})]})}var G=function(e){var t=M();return Object(a.useEffect)((function(){window.scrollTo(0,0)})),Object(i.jsx)("div",{className:"projects",children:Object(i.jsxs)(d.a,{container:!0,children:[Object(i.jsx)(d.a,{className:t.subTitle,item:!0,sm:12,children:"I love to build!"}),Object(i.jsx)(d.a,{item:!0,sm:!1,md:2}),Object(i.jsx)(d.a,{item:!0,sm:12,md:8,children:C.map((function(e){return Object(i.jsx)(B,Object(y.a)({},e),e.id)}))}),Object(i.jsx)(d.a,{item:!0,sm:!1,md:2})]})})},z=(n(70),["#0099ff","#ff0055","#22cc88","#ffaa00"]),R=Object(W.a)({cardTile:{backgroundColor:"black",color:"white",border:"1px solid rgb(100, 100, 100)",borderRadius:"12px",marginBottom:"3em"},textColor:{color:"white"},subheader:{color:"white"},subTitle:{color:"white",fontSize:"4em",fontWeight:"bold"}});function H(e){var t=e.courses;return Object(i.jsx)("div",{children:Object(i.jsx)("ul",{className:"courses",children:t.map((function(e,t){return Object(i.jsx)("li",{style:{color:t<4?z[t]:z[t-4*parseInt(t/4)],borderColor:t<4?z[t]:z[t-4*parseInt(t/4)]},children:e},e)}))})})}function F(e){var t=e.id,n=e.program,a=e.institution,o=e.startDate,s=e.endDate,r=e.courses,c=e.description,l=e.link,d=R();return Object(i.jsxs)(P.a,{className:d.cardTile,children:[Object(i.jsx)(I.a,{className:d.textColor,classes:{subheader:d.subheader},title:n,subheader:a}),Object(i.jsxs)(N.a,{children:[Object(i.jsx)(A.a,{className:d.textColor,variant:"body2",color:"textSecondary",component:"p",children:c}),Object(i.jsx)(H,{courses:r}),Object(i.jsx)("br",{}),Object(i.jsxs)("time",{children:[o," \u2014 ",s]})]}),Object(i.jsx)(L.a,{style:{display:"block"},children:Object(i.jsx)(j.a,{className:d.textColor,"aria-label":"settings",href:1===t?"/portfolio"+l:l,children:"View Certification"})})]},t)}var U=function(){var e=R();return Object(a.useEffect)((function(){window.scrollTo(0,0)})),Object(i.jsx)("div",{className:"education",children:Object(i.jsxs)(d.a,{container:!0,children:[Object(i.jsx)(d.a,{className:e.subTitle,item:!0,sm:12,children:"Can't Give Up Learning!"}),Object(i.jsx)(d.a,{item:!0,sm:!1,md:2}),Object(i.jsx)(d.a,{item:!0,sm:12,md:8,children:D.map((function(e){return Object(i.jsx)(F,Object(y.a)({},e),e.id)}))}),Object(i.jsx)(d.a,{item:!0,sm:!1,md:2})]})})},Q=Object(W.a)({experience:{marginTop:"7em"},cardTile:{backgroundColor:"black",color:"white",border:"1px solid rgb(100, 100, 100)",borderRadius:"12px",marginBottom:"3em"},textColor:{color:"white"},subheader:{color:"white"},subTitle:{color:"white",fontSize:"4em",fontWeight:"bold"}});function _(e){var t=e.title,n=e.company,a=e.companyType,o=e.description,s=e.startDate,r=e.endDate,c=e.id,l=Q();return Object(i.jsxs)(P.a,{className:l.cardTile,children:[Object(i.jsx)(I.a,{className:l.textColor,classes:{subheader:l.subheader},title:t,subheader:"".concat(n," [").concat(a,"]")}),Object(i.jsxs)(N.a,{children:[Object(i.jsx)(A.a,{className:l.textColor,variant:"body2",color:"textSecondary",component:"p",children:o.map((function(e){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{dangerouslySetInnerHTML:{__html:e}}),Object(i.jsx)("br",{})]})}))}),Object(i.jsx)("br",{}),Object(i.jsxs)("time",{children:[s," \u2014 ",r]})]})]},c)}var V=function(){var e=Q();return Object(a.useEffect)((function(){window.scrollTo(0,0)})),Object(i.jsx)("div",{className:e.experience,children:Object(i.jsxs)(d.a,{container:!0,children:[Object(i.jsx)(d.a,{className:e.subTitle,item:!0,sm:12,children:"Experiences Everyday"}),Object(i.jsx)(d.a,{item:!0,sm:!1,md:2}),Object(i.jsx)(d.a,{item:!0,sm:12,md:8,children:T.map((function(e){return Object(i.jsx)(_,Object(y.a)({},e),e.id)}))}),Object(i.jsx)(d.a,{item:!0,sm:!1,md:2})]})})};var q=function(){return Object(i.jsx)(h.a,{children:Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(b,{}),Object(i.jsxs)(p.c,{children:[Object(i.jsx)(p.a,{exact:!0,path:"/",component:x}),Object(i.jsx)(p.a,{path:"/projects",component:G}),Object(i.jsx)(p.a,{path:"/education",component:U}),Object(i.jsx)(p.a,{path:"/experience",component:V})]})]})})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,102)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),i(e),a(e),o(e),s(e)}))};r.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(q,{})}),document.getElementById("root")),K()}},[[71,1,2]]]);
//# sourceMappingURL=main.e842dd41.chunk.js.map