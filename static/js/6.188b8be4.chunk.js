(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[6],{173:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),i=n(5),o=n(21),s=function(e){var t=e.data;return Object(a.jsx)("article",{className:"degree-container",children:Object(a.jsxs)("header",{children:[Object(a.jsx)("h4",{className:"degree",children:t.degree}),Object(a.jsxs)("p",{className:"school",children:[Object(a.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},c=function(e){var t=e.data;return Object(a.jsxs)("div",{className:"education",children:[Object(a.jsx)("div",{className:"link-to",id:"education"}),Object(a.jsx)("div",{className:"title",children:Object(a.jsx)("h3",{children:"Education"})}),t.map((function(e){return Object(a.jsx)(s,{data:e},e.school)}))]})};c.defaultProps={data:[]};var l=c,u=function(e){var t=e.data;return Object(a.jsxs)("article",{className:"jobs-container",children:[Object(a.jsxs)("header",{children:[Object(a.jsxs)("h4",{children:[Object(a.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),Object(a.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),Object(a.jsx)("ul",{className:"points",children:t.points.map((function(e){return Object(a.jsx)("li",{children:e},e)}))})]})},d=function(e){var t=e.data;return Object(a.jsxs)("div",{className:"experience",children:[Object(a.jsx)("div",{className:"link-to",id:"experience"}),Object(a.jsx)("div",{className:"title",children:Object(a.jsx)("h3",{children:"Experience"})}),t.map((function(e){return Object(a.jsx)(u,{data:e},e.company)}))]})};d.defaultProps={data:[]};var p=d;function m(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=b(e);if(t){var r=b(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return g(this,n)}}var j=n(58),v=n(57),O=function(e){var t=e.handleClick,n=e.active,r=e.label;return Object(a.jsx)("button",{className:"skillbutton ".concat(n[r]?"skillbutton-active":""),type:"button",onClick:function(){return t(r)},children:r})},S=function(e){var t=e.data,n=e.categories,r=t.category,i=t.competency,o=t.title,s={background:n.filter((function(e){return r.includes(e.name)})).map((function(e){return e.color}))[0]},c=Object(v.a)(Object(v.a)({},s),{},{width:"".concat(String(Math.min(100,Math.max(i/5*100,0))),"%")});return Object(a.jsxs)("div",{className:"skillbar clearfix",children:[Object(a.jsx)("div",{className:"skillbar-title",style:s,children:Object(a.jsx)("span",{children:o})}),Object(a.jsx)("div",{className:"skillbar-bar",style:c}),Object(a.jsxs)("div",{className:"skill-bar-percent",children:[i," / 5"]})]})};S.defaultProps={categories:[]};var k=S,D=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(o,e);var t,n,r,i=h(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=i.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,a){return Object(v.a)(Object(v.a)({},n),{},Object(j.a)({},a,e===a&&!t.buttons[a]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return Object(v.a)(Object(v.a)({},e),{},Object(j.a)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=o,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return Object(a.jsx)(k,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return Object(a.jsx)(O,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"skills",children:[Object(a.jsx)("div",{className:"link-to",id:"skills"}),Object(a.jsxs)("div",{className:"title",children:[Object(a.jsx)("h3",{children:"Skills"}),Object(a.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),Object(a.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),Object(a.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&m(t.prototype,n),r&&m(t,r),o}(r.Component);D.defaultProps={skills:[],categories:[]};var x=D,w=function(e){var t=e.data,n=e.last;return Object(a.jsxs)("li",{className:"course-container",children:[Object(a.jsxs)("a",{href:t.link,children:[Object(a.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),Object(a.jsx)("p",{className:"course-name",children:t.title})]}),!n&&Object(a.jsx)("div",{className:"course-dot",children:Object(a.jsx)("p",{className:"course-name",children:" \u2022"})})]})};w.defaultProps={last:!1};var E=w,C=function(e){var t,n=e.data;return Object(a.jsxs)("div",{className:"courses",children:[Object(a.jsx)("div",{className:"link-to",id:"courses"}),Object(a.jsx)("div",{className:"title",children:Object(a.jsx)("h3",{children:"Selected Courses"})}),Object(a.jsx)("ul",{className:"course-list",children:(t=n,t.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(e,n){return Object(a.jsx)(E,{data:e,last:n===t.length-1},e.title)})))})]})};C.defaultProps={data:[]};var P=C,N=function(){return Object(a.jsxs)("div",{className:"references",children:[Object(a.jsx)("div",{className:"link-to",id:"references"}),Object(a.jsx)("div",{className:"title",children:Object(a.jsx)(i.b,{to:"/contact",children:Object(a.jsx)("h3",{children:"References are available upon request"})})})]})},M=[{title:"Convex Optimization",number:"EE 364a",link:"http://stanford.edu/class/ee364a/",university:"Stanford"},{title:"Machine Learning",number:"CS 229",link:"http://cs229.stanford.edu/",university:"Stanford"},{title:"Convolutional Neural Networks for Visual Recognition",number:"CS 231n",link:"http://cs231n.stanford.edu/",university:"Stanford"},{title:"Numerical Linear Algebra",number:"CME 302",link:"http://scpd.stanford.edu/search/publicCourseSearchDetails.do;jsessionid=561188A06434D7D97953C4706DE12831?method=load&courseId=11685",university:"Stanford"},{title:"Numerical Optimization",number:"CME 304",link:"http://web.stanford.edu/class/cme304/",university:"Stanford"},{title:"Discrete Mathematics and Algorithms",number:"CME 305",link:"http://stanford.edu/~rezab/discrete/",university:"Stanford"},{title:"PDE\u2019s of Applied Mathematics",number:"CME 303",link:"http://web.stanford.edu/class/math220/index.html",university:"Stanford"},{title:"Introduction to Linear Dynamical Systems",number:"EE 263",link:"http://ee263.stanford.edu/",university:"Stanford"},{title:"Introduction to Statistical Signal Processing",number:"EE 278B",link:"http://web.stanford.edu/class/ee278/",university:"Stanford"},{title:"Spacecraft Design",number:"AA 236A",link:"",university:"Stanford"},{title:"Advanced Programming",number:"CME 212",link:"",university:"Stanford"},{title:"Design Theory and Methodology",number:"MAE 397",link:"https://web.stanford.edu/group/designx_lab/cgi-bin/mainwiki/index.php/ME397_Design_Theory_%26_Methodology_Seminar",university:"Stanford"},{title:"Software Engineering Concepts",number:"CSE 442",link:"",university:"Buffalo"},{title:"Hardware/Software Integrated System Design",number:"CSE 453",link:"",university:"Buffalo"},{title:"Data Structures",number:"CS 250",link:"http://www.cse.buffalo.edu/~hungngo/classes/2013/Fall/250/",university:"Buffalo"},{title:"Introduction to Digital Signal Processing",number:"EE 516",link:"",university:"Buffalo"},{title:"Computer Vision and Image Processing",number:"CSE 573",link:"http://cubs.buffalo.edu/~inwogu/teaching/Coursepage573_fa14/",university:"Buffalo"},{title:"Realtime Embedded Systems",number:"CSE 321",link:"",university:"Buffalo"},{title:"Computer Architecture",number:"CSE 590",link:"http://www.cse.buffalo.edu/~stevko/courses/cse490/spring11/",university:"Buffalo"},{title:"Small Data",number:"MS&E 226",link:"http://web.stanford.edu/class/msande226/",university:"Stanford"},{title:"Stochastic Control",number:"EE 266",link:"http://ee266.stanford.edu/",university:"Stanford"},{title:"Simulation",number:"MS&E 223",link:"http://web.stanford.edu/class/msande223/handout.htm",university:"Stanford"},{title:"Deep Learning for Natural Language Processing",number:"CS 224d",link:"http://cs224d.stanford.edu/",university:"Stanford"}],A=[{school:"Stanford University",degree:"M.S. Computational and Mathematical Engineering",link:"https://stanford.edu",year:2016},{school:"University at Buffalo",degree:"B.S. Electrical Engineering, Computer Engineering",link:"https://buffalo.edu",year:2012}],L=[{company:"Arthena",position:"Co-founder, C.T.O.",link:"https://arthena.com",daterange:"January 2014 - Present",points:["Deployed quantitative strategies to predict the value of fine art in various pricing contexts.","Built production, on-line, end-to-end optimized machine learning pipelines with Pandas, Numpy, Scikit, Tensorflow, Dagster, Postgres, etc. on GCP with Kubernetes.","Designed micro-service architecture around: data collection, data integrity, feature engineering, research, strategy, backtesting, deployment, and reporting.","YC Alumn. Worked on everything. Built a 16-person team. Operated company for 6+ years."]},{company:"Skeptical Investments",position:"Co-founder",link:"http://skepticalinvestments.biz",daterange:"April 2017 - Present",points:["Founded a micro-vc fund to throw token amounts of money at problems I find interesting.","Created the InstaSafe. Fast, automated investment docs for YC companies."]},{company:"Enveritas",position:"Consultant",link:"http://enveritas.org",daterange:"September 2016 - 2018",points:["Trained a model for the Brazilian Coffee Scenes Dataset with better than state of the art accuracy.","Collected training sets on the ground in Uganda. Built dashboards to visualize work of surveyors using Flask, React, and D3.","Performed supporting analysis to ensure data integrity using Pandas, t-SNE, SVM\u2019s, and other techniques."]},{company:"Zenysis",position:"Consultant",link:"https://zenysis.com",daterange:"February 2016 - March 2016",points:["Worked in Addis Ababa for the Ethiopian Ministry of Health and built data visualization tools in React and Flask.","Ingested multiple databases with different alphabets, calendars, and without official spellings of geographic locations."]},{company:"Matroid",position:"Co-founder",link:"https://matroid.com",daterange:"July 2015 - January 2016",points:["Developed end to end machine learning pipeline to train visual classifiers from keywords using Node.JS, Express, Keystone, MongoDB, AWS, S3, Caffe, and other technologies.","Received Series A term sheets for 20M+ valuations."]},{company:"Planet",position:"Missions Intern",link:"https://planet.com",daterange:"June 2014 - January 2015",points:["Built models to improve image quality, signal to noise ratio, and dynamic range.","Performed statistical analysis of image quality in Matlab and Python.  Developed flight software in C++.","Organized first hackathon, prototyped hardware, and designed and built photography equipment for rocket launches."]},{company:"Planetary Resources",position:"Avionics Intern",link:"http://planetaryresources.com",daterange:"January 2014 - May 2014",points:["Developed simulations in Matlab for Attitude Determination and Control Subsystem.","Developed processes for in lab testing and characterization of various subsystems.","Assembled flight hardware in cleanroom."]},{company:"Facebook",position:"Intern",link:"https://facebook.com",daterange:"June 2013 - September 2013",points:["Developed software in python for automated testing of servers.","Performed statistical analysis with R, HIVE to assist in triage of malfunctioning servers.","Worked with vendors and ODM\u2019s during triage to assist in risk mitigation."]},{company:"SEDS-USA",position:"At Large Board Member",link:"http://seds.org",daterange:"October 2013 - October 2014",points:["Elected to Board of Directors of the USA\u2019s largest student space advocacy group based on 5+ years of work with SEDS.","Responsibilities included: organizational strategy, conference presentations, fundraising, special projects, promoting SEDS nationally and internationally, and photographing conferences."]},{company:"UB Nanosatellite Program",position:"Co-founder, Program Manager",link:"https://ubnl.space/",daterange:"October 2010 \u2013 June 2012",points:["Coauthored grant to build a multi-spectral imaging satellite as part of the AFRL University Nanosatellite Program.","Lead a team of 60 students through satellite development life cycle. Served as a technical expert, acquired intimate working knowledge of satellite subsystems.  Solicited funding through NASA, AFOSR, and several corporate sponsors."]}],R=n(17);var B=n(24);var J,W=[{title:"Javascript",competency:4,category:["Web Development","Languages","Javascript"]},{title:"Node.JS",competency:3,category:["Web Development","Javascript"]},{title:"React",competency:3,category:["Web Development","Javascript"]},{title:"Bash",competency:2,category:["Tools","Languages"]},{title:"Amazon Web Services",competency:4,category:["Web Development","Tools"]},{title:"Heroku",competency:2,category:["Web Development","Tools"]},{title:"MongoDB",competency:3,category:["Web Development","Databases"]},{title:"ElasticSearch",competency:2,category:["Web Development","Databases"]},{title:"PostgreSQL/SQLite3/SQL",competency:4,category:["Web Development","Databases","Languages"]},{title:"Redis",competency:3,category:["Web Development","Databases"]},{title:"Data Mining",competency:3,category:["Data Science"]},{title:"Express.JS",competency:2,category:["Web Development","Javascript"]},{title:"D3",competency:2,category:["Web Development","Javascript"]},{title:"Flask",competency:2,category:["Web Development","Python"]},{title:"Git/Mercurial",competency:3,category:["Tools"]},{title:"Kubernetes",competency:2,category:["Tools","Data Engineering"]},{title:"Google Cloud Compute",competency:2,category:["Tools","Web Development"]},{title:"Numpy",competency:3,category:["Data Science","Data Engineering","Python"]},{title:"Numba",competency:2,category:["Data Science","Data Engineering","Python"]},{title:"Tensorflow + Keras",competency:3,category:["Data Science","Python"]},{title:"Jupyter",competency:3,category:["Data Science","Python"]},{title:"Typescript",competency:2,category:["Web Development","Languages","Javascript"]},{title:"HTML + SASS/SCSS/CSS",competency:3,category:["Web Development","Languages"]},{title:"Python",competency:5,category:["Languages","Python"]},{title:"C++",competency:2,category:["Languages"]},{title:"Julia",competency:2,category:["Languages"]},{title:"MATLAB",competency:2,category:["Languages"]},{title:"R",competency:2,category:["Languages"]},{title:"Data Visualization",competency:3,category:["Data Science","Javascript"]},{title:"GraphQL",competency:2,category:["Web Development","Databases"]},{title:"Pandas",competency:5,category:["Data Engineering","Data Science","Python"]},{title:"Matplotlib",competency:3,category:["Data Engineering","Data Science","Python"]},{title:"Scikit-Learn",competency:4,category:["Data Engineering","Data Science","Python"]},{title:"Hadoop",competency:2,category:["Data Engineering","Data Science"]},{title:"Spark",competency:2,category:["Data Engineering","Data Science"]},{title:"Dagster",competency:2,category:["Data Engineering","Python"]},{title:"Mypy",competency:3,category:["Python"]},{title:"Pylint",competency:4,category:["Data Engineering","Python"]}].map((function(e){return Object(v.a)(Object(v.a)({},e),{},{category:e.category.sort()})})),I=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],T=(J=new Set(W.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return Object(R.a)(e)}(J)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(J)||Object(B.a)(J)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:I[t]}})),_=["Education","Experience","Skills","Courses","References"];t.default=function(){return Object(a.jsx)(o.a,{title:"Resume",description:"Michael D'Angelo's Resume. Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet Labs, and Facebook.",children:Object(a.jsxs)("article",{className:"post",id:"resume",children:[Object(a.jsx)("header",{children:Object(a.jsxs)("div",{className:"title",children:[Object(a.jsx)("h2",{"data-testid":"heading",children:Object(a.jsx)(i.b,{to:"resume",children:"Resume"})}),Object(a.jsx)("div",{className:"link-container",children:_.map((function(e){return Object(a.jsx)("h4",{children:Object(a.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object(a.jsx)(l,{data:A}),Object(a.jsx)(p,{data:L}),Object(a.jsx)(x,{skills:W,categories:T}),Object(a.jsx)(P,{data:M}),Object(a.jsx)(N,{})]})})}},57:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(58);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},58:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=6.188b8be4.chunk.js.map