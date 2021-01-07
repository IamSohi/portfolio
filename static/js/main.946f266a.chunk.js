(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{58:function(e,t,i){},59:function(e,t,i){},60:function(e,t,i){},65:function(e,t,i){},69:function(e,t,i){},70:function(e,t,i){},71:function(e,t,i){"use strict";i.r(t);var a=i(1),o=i(0),n=i.n(o),r=i(18),s=i.n(r),c=(i(58),i(59),i(48)),l=(i(60),i(39)),d=i(91),m=i(99),j=i(7),p=i(24);function h(e){var t=e.color,i=e.navItem,o=e.navIcon,n=e.isSelected,r=e.onClick;return Object(a.jsxs)("li",{className:"navItem",onClick:r,children:[n&&Object(a.jsx)(l.b.div,{layoutId:"outline",className:"outline",initial:!1,animate:{borderColor:t},transition:{type:"spring",stiffness:500,damping:30}}),Object(a.jsxs)(p.b,{className:"navLink",to:"/portfolio/"+("About"===i?"":i.toLowerCase()),style:{color:t},children:[Object(a.jsx)(m.a,{smDown:!0,children:i}),Object(a.jsx)(m.a,{mdUp:!0,children:Object(a.jsx)("span",{class:"material-icons",children:o})})]},t+i)]},i)}var b=function(e){var t=[{name:"About",color:"#0099ff",icon:"perm_identity"},{name:"Projects",color:"#ff0055",icon:"handyman"},{name:"Education",color:"#22cc88",icon:"school"},{name:"Experience",color:"#ffaa00",icon:"work"}],i=Object(j.f)(),n=t[0].color;t.forEach((function(e){return"portfolio/"+e.name.toLowerCase()===i.pathname.substr(1)?n=e.color:""}));var r=Object(o.useState)(n),s=Object(c.a)(r,2),m=s[0],p=s[1];return Object(a.jsx)(l.a,{children:Object(a.jsx)("ul",{className:"navigation",id:"nav",children:Object(a.jsxs)(d.a,{container:!0,spacing:2,style:{justifyContent:"center"},children:[Object(a.jsx)(d.a,{item:!0,xs:!1,md:2}),t.map((function(e){return Object(a.jsx)(d.a,{item:!0,xs:2,children:Object(a.jsx)(h,{color:e.color,isSelected:m===e.color,navItem:e.name,navIcon:e.icon,onClick:function(){return p(e.color)}},e.color)},e.icon)})),Object(a.jsx)(d.a,{item:!0,xs:!1,md:2})]})})})},u=(i(65),i(98)),g=i(38),x=i(32);var f=function(e){return Object(a.jsx)("div",{className:"intro",children:Object(a.jsxs)(d.a,{container:!0,children:[Object(a.jsx)(d.a,{item:!0,xs:12,lg:!1,children:Object(a.jsx)(m.a,{lgUp:!0,children:Object(a.jsx)("div",{style:{marginTop:"6em"}})})}),Object(a.jsx)(d.a,{item:!0,md:2,xs:12}),Object(a.jsxs)(d.a,{item:!0,md:8,xs:12,children:[Object(a.jsxs)(d.a,{container:!0,children:[Object(a.jsx)(d.a,{item:!0,className:"picBox",style:{margin:"auto"},xs:12,lg:5,children:Object(a.jsxs)("div",{className:"par",children:[Object(a.jsx)(m.a,{smDown:!0,children:Object(a.jsx)("div",{class:"frame chl",children:Object(a.jsx)("div",{class:"clr"})})}),Object(a.jsx)("img",{className:"profilePic chl",src:"/portfolio/images/profilepic.jpg",alt:"Profile Pic"})]})}),Object(a.jsxs)(d.a,{item:!0,xs:12,lg:7,children:[Object(a.jsxs)("p",{className:"introText",children:["Hi",Object(a.jsx)("span",{class:"wave",role:"img","aria-label":"wave",children:" \ud83d\udc4b\ud83c\udffc "}),"I'm Sukhveer, a tech-enthusiast and self-driven individual with a passion for building things.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"I'm interested in anything tech \u2014 especially ",Object(a.jsx)("span",{className:"textDec color1",children:"web development"})," and ",Object(a.jsx)("span",{className:"textDec color4",children:"machine learning"}),". I graduated from Kwantlen Polytechnic University in May 2020. My major was Computer Science and Information Systems.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"In my free time, I love networking with people, listen to music, do some reading and sometimes enjoys cooking. I have a knack for bringing technology, business, science and philosophy in every discussion.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"Browse the ",Object(a.jsx)("a",{className:"textDec color2",href:"./projects",children:"projects"})," tab to see some of my work or feel free to ",Object(a.jsx)("a",{className:"textDec color3",href:"https://www.linkedin.com/in/sukhveersohi/",children:"reach out!"})]}),Object(a.jsx)(d.a,{item:!0,xs:12,children:Object(a.jsxs)("p",{className:"introText",children:[Object(a.jsx)(u.a,{className:"resumeBtn",style:{color:"white",fontWeight:"bold",fontSize:"1.7em"},href:"/portfolio/SukhveerResume.pdf",children:"Resume"}),Object(a.jsx)(g.a,{onClick:function(){window.open("https://www.linkedin.com/in/sukhveersohi/")},icon:x.b,size:"3x",pull:"left"}),Object(a.jsx)(g.a,{onClick:function(){window.open("https://github.com/IamSohi")},icon:x.a,size:"3x",pull:"right"})]})})]})]}),Object(a.jsx)(d.a,{item:!0,md:2,sm:!1})]})]})})},O=i(22),y=[{id:"a",category:"Web Development",title:"Weather Today",technology:["React {Hooks}","Material-UI","JavaScript","HTML","CSS"],description:"An interactive Weather App in React that lets you have the up-to-date weather information of your favourite cities. Add as many cities as you like. It remembers all your preferences by taking advange of browser's local storage to store location and live weather information.",link:"https://www.github.com/IamSohi/WeatherApp-React",img:"/images/weatherApp.jpg"},{id:"b",category:"Java Development",title:"TODS - Point of Sale system",technology:["Java","Java-FX","MySQL","Eclipse","XAMPP","SceneBuilder"],description:"TODS - Tiffin Order & Delivery System - is a POS system that allows the businesses to take orders, create and manage customers accounts, helps keep track of order delivery. This group project was developed in Java and MySQL in the Project Development course at KPU. We also took advantage of JavaFX Library to design Application Interfaces.",link:"https://www.github.com/IamSohi/TODS",img:"/images/tods.jpg"},{id:"c",category:"Web Development",title:"IdoToday",technology:["PHP","SQL","JavaScript","AWS","Noje.js","Web Sockets","HTML","Bootstrap"],description:"A real-time networking website integrated with instant messaging service that helps people connects. This was an individual project developed in PHP and MySQL. Front-end is desgined using HTML, CSS, JavaScript and BootStrap. The instant-messaging service was implimented in Express.js, using websockets and Node.js.",link:"https://www.github.com/IamSohi/idotoday",img:"/images/idotoday.jpg"},{id:"d",category:"Android Development",title:"EasyRoll",technology:["Java","Android Studio","LibGdx","Gradle","TexturePacker","Graphics","Google APIs"],description:"A fun and enjoyable andoid game in Java available on Google Play. Developed with LibGdx Game Engine, designed my own graphics and build from scratch in Android Studio.",link:"https://play.google.com/store/apps/details?id=com.sssproduction.naughtysofts.games",img:"/images/easyroll.jpg"},{id:"e",category:"Machine Learning",title:"Cat Classifier",technology:["Python","Jupyter Notebook","Numpy","Scipy","Matplotlib"],description:"ML modal in deep neural networks for cat classification and implemented hyperparameters tunning, regulatization, and optimization to achieve high accuracy and performance.",link:"https://www.github.com/IamSohi/Cat-Classifier",img:"/images/catclassifier.jpg"},{id:"f",category:"Linux Server",title:"LinuxNet",technology:["Linux Server","Windows 10","Command Line"],description:"Managed and troubleshoot a distributed network on Linux machine. SetUp and configured Linux system for DHCP Server, DNS Server, Apache Server, File Sharing and distributed directory.",link:"https://www.github.com/IamSohi/Managing-a-Network-Using-Linux",img:"/images/linuxnet.jpg"}],v=[{id:1,program:"Computer Science and Information Systems",institution:"Kwantlen Polytechnic University",startDate:"May 2018",endDate:"May 2020",courses:["Object-Oriented Programming","Data Structure","Database Sys.","Networking Tech.","Cyber Security","Server Operating Sys.","Project Development","System Analysis & Design","Professional Communication & Unversity Writing"],description:"This was my post-secondary Program from school of Business at KPU. Got introduced to a wide variety of subjects ranging from advanced software development to Server Management to Cybersecurity. Graduated with GPA of 3.87. Relished Building amazing projects with my colleagues.",link:"/SukhveerTranscript.pdf"},{id:2,program:"Deep Learning Specialization",institution:"Coursera",startDate:"Dec 2019",endDate:"Jun 2020",courses:["Tensorflow","Convolutional Neural Network","Artificial Neural Network","Deep Learning","Backpropagation","Python Programming","Hyperparameter","Hyperparameter Optimization","Machine Learning","Inductive Transfer","Multi-Task Learning","Facial Recognition System"],description:"I took this self-paced specialization on Coursera that is designed to prepare learners to participate in the development of cutting-edge AI technology, and to understand the capability, the challenges, and the consequences of the rise of deep learning. Developed projects in Deep Learning ranging from Simple Classification to Music Generation.",link:"https://www.coursera.org/account/accomplishments/specialization/certificate/YHPZ7SRC4Z5H"},{id:3,program:"Machine Learning with TensorFlow on Google Cloud Platform Specialization",institution:"Coursera",startDate:"Aug 2020",endDate:"Sep 2020",courses:["Tensorflow","Machine Learning","Feature Engineering","Cloud Computing","Application Programming Interfaces (API)","Inclusive ML","Google Cloud Platform","Bigquery","Data Cleansing","Python Programming","Build Input Data Pipeline","keras"],description:"This specialization helped me get a hands-on experience of Machine Learning on Google Cloud Platform. Experienced the power of Cloud computing, Big Query, Data Pipeline and Feature Engineering.",link:"https://www.coursera.org/account/accomplishments/certificate/VBXJWJNV4SGS"}],w=[{id:1,title:"Junior Marketing Consultant",company:"The Acquisition Group",startDate:"Oct 2020",endDate:"Present",description:["Encourage people at the door and over the phone to sign up for the ongoing promotions.","Assisted customers in order process and booked appointments for service installation.","Actively took participation in Mall Events."]},{id:2,title:"Game Dealer",company:"Gateway Casinos",startDate:"Aug 2018",endDate:"Mar 2020",description:["Increased customer retention and satisfaction by establishing good customer relationships.","Improved game integrity and customer service by monitoring table game activity, recording player statistics.","Identify continual service improvement initiatives and implement these ideas in collaboration with the team and management."]}],S=i(100),k=i(95),C=i(96),N=i(97),D=i(33),P=(i(69),i(94)),I=["#0099ff","#ff0055","#22cc88","#ffaa00"],T=Object(P.a)({imgbox:{width:"90%"},cardTile:{margin:"3em",backgroundColor:"black",color:"white"},projectTile:{border:"1px solid rgb(100, 100, 100)",borderRadius:"12px",marginBottom:"3em"},textColor:{color:"white"},subheader:{color:"white"},subTitle:{color:"white",fontSize:"4em",fontWeight:"bold"}});function L(e){var t=e.technology;return Object(a.jsx)("div",{children:Object(a.jsx)("ul",{className:"techItems",children:t.map((function(e,t){return Object(a.jsx)("li",{style:{color:t<4?I[t]:I[t-4],borderColor:t<4?I[t]:I[t-4]},children:e},e)}))})})}function A(e){var t=e.id,i=e.title,o=e.category,n=e.technology,r=e.description,s=e.link,c=e.img,l=T();return Object(a.jsxs)(d.a,{container:!0,className:l.projectTile,children:[Object(a.jsx)(d.a,{item:!0,sm:12,md:5,style:{margin:"auto"},children:Object(a.jsx)("div",{children:Object(a.jsx)("img",{className:l.imgbox,src:"/portfolio"+c,alt:i})})}),Object(a.jsx)(d.a,{item:!0,sm:12,md:7,children:Object(a.jsxs)(S.a,{className:l.cardTile,children:[Object(a.jsx)(k.a,{className:l.textColor,classes:{subheader:l.subheader},title:i,subheader:o}),Object(a.jsxs)(C.a,{children:[Object(a.jsx)(D.a,{className:l.textColor,variant:"body2",color:"textSecondary",component:"p",children:r}),Object(a.jsx)(L,{technology:n})]}),Object(a.jsx)(N.a,{style:{display:"block"},children:Object(a.jsx)(u.a,{className:l.textColor,"aria-label":"settings",href:s,children:"View Project"})})]},t)})]})}var M=function(e){var t=T();return Object(a.jsx)("div",{className:"projects",children:Object(a.jsxs)(d.a,{container:!0,children:[Object(a.jsx)(d.a,{className:t.subTitle,item:!0,sm:12,children:"I love to build!"}),Object(a.jsx)(d.a,{item:!0,sm:!1,md:2}),Object(a.jsx)(d.a,{item:!0,sm:12,md:8,children:y.map((function(e){return Object(a.jsx)(A,Object(O.a)({},e),e.id)}))}),Object(a.jsx)(d.a,{item:!0,sm:!1,md:2})]})})},G=(i(70),["#0099ff","#ff0055","#22cc88","#ffaa00"]),B=Object(P.a)({cardTile:{backgroundColor:"black",color:"white",border:"1px solid rgb(100, 100, 100)",borderRadius:"12px",marginBottom:"3em"},textColor:{color:"white"},subheader:{color:"white"},subTitle:{color:"white",fontSize:"4em",fontWeight:"bold"}});function J(e){var t=e.courses;return Object(a.jsx)("div",{children:Object(a.jsx)("ul",{className:"courses",children:t.map((function(e,t){return Object(a.jsx)("li",{style:{color:t<4?G[t]:G[t-4*parseInt(t/4)],borderColor:t<4?G[t]:G[t-4*parseInt(t/4)]},children:e},e)}))})})}function z(e){var t=e.id,i=e.program,o=e.institution,n=e.startDate,r=e.endDate,s=e.courses,c=e.description,l=e.link,d=B();return Object(a.jsxs)(S.a,{className:d.cardTile,children:[Object(a.jsx)(k.a,{className:d.textColor,classes:{subheader:d.subheader},title:i,subheader:o}),Object(a.jsxs)(C.a,{children:[Object(a.jsx)(D.a,{className:d.textColor,variant:"body2",color:"textSecondary",component:"p",children:c}),Object(a.jsx)(J,{courses:s}),Object(a.jsx)("br",{}),Object(a.jsxs)("time",{children:[n," \u2014 ",r]})]}),Object(a.jsx)(N.a,{style:{display:"block"},children:Object(a.jsx)(u.a,{className:d.textColor,"aria-label":"settings",href:1===t?"/portfolio"+l:l,children:"View Certification"})})]},t)}var W=function(){var e=B();return Object(a.jsx)("div",{className:"education",children:Object(a.jsxs)(d.a,{container:!0,children:[Object(a.jsx)(d.a,{className:e.subTitle,item:!0,sm:12,children:"Can't Give Up Learning!"}),Object(a.jsx)(d.a,{item:!0,sm:!1,md:2}),Object(a.jsx)(d.a,{item:!0,sm:12,md:8,children:v.map((function(e){return Object(a.jsx)(z,Object(O.a)({},e),e.id)}))}),Object(a.jsx)(d.a,{item:!0,sm:!1,md:2})]})})},E=Object(P.a)({experience:{marginTop:"7em"},cardTile:{backgroundColor:"black",color:"white",border:"1px solid rgb(100, 100, 100)",borderRadius:"12px",marginBottom:"3em"},textColor:{color:"white"},subheader:{color:"white"}});function F(e){var t=e.title,i=e.company,o=e.description,n=e.startDate,r=e.endDate,s=e.id,c=E();return Object(a.jsxs)(S.a,{className:c.cardTile,children:[Object(a.jsx)(k.a,{className:c.textColor,classes:{subheader:c.subheader},title:t,subheader:i}),Object(a.jsxs)(C.a,{children:[Object(a.jsxs)(D.a,{className:c.textColor,variant:"body2",color:"textSecondary",component:"p",children:[o[0],Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),o[1],Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),o[2]]}),Object(a.jsx)("br",{}),Object(a.jsxs)("time",{children:[n," \u2014 ",r]})]})]},s)}var H=function(){var e=E();return Object(a.jsx)("div",{className:e.experience,children:Object(a.jsxs)(d.a,{container:!0,children:[Object(a.jsx)(d.a,{item:!0,sm:!1,md:2}),Object(a.jsx)(d.a,{item:!0,sm:12,md:8,children:w.map((function(e){return Object(a.jsx)(F,Object(O.a)({},e),e.id)}))}),Object(a.jsx)(d.a,{item:!0,sm:!1,md:2})]})})};var R=function(){return Object(a.jsx)(p.a,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(b,{}),Object(a.jsxs)(j.c,{children:[Object(a.jsx)(j.a,{exact:!0,path:"/portfolio/",component:f}),Object(a.jsx)(j.a,{path:"/portfolio/projects",component:M}),Object(a.jsx)(j.a,{path:"/portfolio/education",component:W}),Object(a.jsx)(j.a,{path:"/portfolio/experience",component:H})]})]})})},U=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,102)).then((function(t){var i=t.getCLS,a=t.getFID,o=t.getFCP,n=t.getLCP,r=t.getTTFB;i(e),a(e),o(e),n(e),r(e)}))};s.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(R,{})}),document.getElementById("root")),U()}},[[71,1,2]]]);
//# sourceMappingURL=main.946f266a.chunk.js.map