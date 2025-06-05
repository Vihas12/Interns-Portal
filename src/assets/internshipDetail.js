const internshipDetails = [
  {
    "_id": "1",
    "title": "Web Development Intern",
    "company": "TechCorp",
    "location": "Remote",
    "stipend": 5000,
    "duration": "3 Months",
    "description": "Join our frontend team to work on dynamic web applications using React.js, HTML5, and CSS3. You'll collaborate with UI/UX designers and backend developers to implement user-facing features, optimize performance, and ensure responsive design across devices. Ideal for students with basic JavaScript knowledge looking to gain hands-on experience."
  },
  {
    "_id": "2",
    "title": "Data Science Intern",
    "company": "DataWiz",
    "location": "Bangalore",
    "stipend": 10000,
    "duration": "6 Months",
    "description": "Assist our data science team in collecting, cleaning, and analyzing large datasets using Python, Pandas, and SQL. You'll support building machine learning models and creating visualizations and dashboards in Power BI or Tableau. Strong analytical skills and interest in predictive modeling are a plus."
  },
  {
    "_id": "3",
    "title": "Machine Learning Intern",
    "company": "AI Labs",
    "location": "Remote",
    "stipend": 8000,
    "duration": "4 Months",
    "description": "Collaborate on cutting-edge machine learning projects, including NLP and computer vision. Responsibilities include model training, evaluation, and fine-tuning using libraries like Scikit-learn, TensorFlow, and HuggingFace Transformers. You’ll work under the guidance of senior ML engineers on real-world problems."
  },
  {
    "_id": "4",
    "title": "UI/UX Designer Intern",
    "company": "DesignNest",
    "location": "Delhi",
    "stipend": 7000,
    "duration": "3 Months",
    "description": "Work closely with our design team to craft engaging user experiences for mobile and web applications. Tasks include creating wireframes, user flows, prototypes, and UI mockups using Figma or Adobe XD. You'll conduct user research and contribute to improving design systems."
  },
  {
    "_id": "5",
    "title": "Backend Developer Intern",
    "company": "CodeBase",
    "location": "Remote",
    "stipend": 6000,
    "duration": "2 Months",
    "description": "Contribute to backend development using Django and PostgreSQL. Responsibilities include creating RESTful APIs, integrating third-party services, and ensuring secure and scalable architecture. Basic knowledge of Python and databases is required."
  },
  {
    "_id": "6",
    "title": "Frontend Developer Intern",
    "company": "PixelSoft",
    "location": "Mumbai",
    "stipend": 5500,
    "duration": "3 Months",
    "description": "Build responsive user interfaces using React.js and Tailwind CSS. You'll collaborate with designers and backend engineers to create clean and efficient front-end logic, implement reusable components, and enhance user experience across browsers and devices."
  },
  {
    "_id": "7",
    "title": "Mobile App Developer Intern",
    "company": "Appsters",
    "location": "Remote",
    "stipend": 7000,
    "duration": "4 Months",
    "description": "Be part of a cross-functional mobile development team building apps in Flutter. You'll help implement UI components, manage state using Provider or Riverpod, and test app features for Android and iOS platforms. Prior experience with Dart is preferred."
  },
  {
    "_id": "8",
    "title": "Cloud Engineering Intern",
    "company": "CloudNova",
    "location": "Hyderabad",
    "stipend": 9000,
    "duration": "6 Months",
    "description": "Get hands-on experience in cloud infrastructure by assisting in provisioning, managing, and automating AWS resources. Tasks include writing Terraform scripts, setting up EC2, S3, and Lambda functions, and monitoring systems using CloudWatch."
  },
  {
    "_id": "9",
    "title": "DevOps Intern",
    "company": "BuildWorks",
    "location": "Remote",
    "stipend": 8000,
    "duration": "5 Months",
    "description": "Assist in designing and managing CI/CD pipelines using GitHub Actions and Jenkins. Learn Docker and Kubernetes basics, automate build and deployment processes, and contribute to improving system scalability and uptime monitoring."
  },
  {
    "_id": "10",
    "title": "Cybersecurity Intern",
    "company": "SecureTech",
    "location": "Chennai",
    "stipend": 6000,
    "duration": "3 Months",
    "description": "Support the security team in identifying vulnerabilities, performing penetration tests, and responding to incidents. You'll work with tools like Wireshark, Burp Suite, and Nessus while gaining exposure to real-world cyber threat mitigation."
  },
    {
    "_id": "11",
    "title": "Blockchain Intern",
    "company": "ChainCore",
    "location": "Remote",
    "stipend": 10000,
    "duration": "6 Months",
    "description": "Work on decentralized applications (DApps) and smart contracts using Solidity on Ethereum. Gain hands-on experience with tools like Truffle, Hardhat, and Web3.js. You'll assist in testing, debugging, and deploying smart contracts while learning about token standards and blockchain security practices."
  },
  {
    "_id": "12",
    "title": "AI Research Intern",
    "company": "MindML",
    "location": "Pune",
    "stipend": 9000,
    "duration": "4 Months",
    "description": "Support our R&D team in developing and training deep learning models using PyTorch and TensorFlow. Work on tasks such as dataset preparation, model experimentation, hyperparameter tuning, and performance evaluation for projects in vision, NLP, or recommendation systems."
  },
  {
    "_id": "13",
    "title": "Full Stack Developer Intern",
    "company": "StackMasters",
    "location": "Remote",
    "stipend": 11000,
    "duration": "5 Months",
    "description": "Join our product team to build full-stack web applications using the MERN stack (MongoDB, Express, React, Node.js). You’ll contribute to both frontend and backend features, write REST APIs, and manage deployments using tools like Docker and Vercel."
  },
  {
    "_id": "14",
    "title": "Digital Marketing Intern",
    "company": "MarketGurus",
    "location": "Kolkata",
    "stipend": 4000,
    "duration": "2 Months",
    "description": "Assist in planning and executing digital campaigns across SEO, SEM, email, and social media platforms. You will work on keyword research, content optimization, Google Ads setup, and performance analytics using tools like SEMrush and Google Analytics."
  },
  {
    "_id": "15",
    "title": "QA Testing Intern",
    "company": "TestLabs",
    "location": "Remote",
    "stipend": 5000,
    "duration": "3 Months",
    "description": "Work with the QA team to execute manual and automated test cases, identify bugs, and verify fixes across web and mobile platforms. Gain experience in tools like Selenium, Postman, and Jira. Familiarity with SDLC and STLC is preferred."
  },
  {
    "_id": "16",
    "title": "Game Developer Intern",
    "company": "PlayZone",
    "location": "Remote",
    "stipend": 7000,
    "duration": "4 Months",
    "description": "Join our game development team to create 2D/3D games in Unity. You’ll implement gameplay mechanics, work with assets and animations, and test game builds. Exposure to C# scripting and a passion for gaming is highly encouraged."
  },
  {
    "_id": "17",
    "title": "AR/VR Intern",
    "company": "ImmersiTech",
    "location": "Bangalore",
    "stipend": 9000,
    "duration": "5 Months",
    "description": "Contribute to building immersive AR/VR applications using Unity and Unreal Engine. Tasks include 3D modeling integration, gesture interactions, and XR environment setup. Prior knowledge of ARCore or ARKit is a bonus."
  },
  {
    "_id": "18",
    "title": "Business Analyst Intern",
    "company": "InsightPro",
    "location": "Noida",
    "stipend": 6000,
    "duration": "3 Months",
    "description": "Support business teams in collecting and analyzing data to derive actionable insights. Responsibilities include preparing dashboards using Excel or Power BI, identifying trends, and presenting findings. Strong communication and analytical thinking are essential."
  },
  {
    "_id": "19",
    "title": "IoT Intern",
    "company": "ThingzLab",
    "location": "Ahmedabad",
    "stipend": 8000,
    "duration": "4 Months",
    "description": "Work on prototyping IoT-based solutions using Raspberry Pi, Arduino, and various sensors. You'll help in circuit design, firmware programming, and real-time data transmission to cloud platforms like Firebase and AWS IoT."
  },
  {
    "_id": "20",
    "title": "Technical Content Writer Intern",
    "company": "WriteHub",
    "location": "Remote",
    "stipend": 5000,
    "duration": "2 Months",
    "description": "Create high-quality technical content, including tutorials, product documentation, and blog articles. Topics will range from software development, AI, and cloud to DevOps. Strong research and writing skills are essential."
  },
  {
    "_id": "21",
    "title": "Software Developer Intern",
    "company": "NextSoft",
    "location": "Pune",
    "stipend": 7500,
    "duration": "3 Months",
    "description": "Join our development team to work on enterprise software using Java, Spring Boot, and MySQL. You'll be involved in developing features, debugging issues, and participating in daily scrum meetings. Basic knowledge of OOPs and REST APIs required."
  },
  {
    "_id": "22",
    "title": "Computer Vision Intern",
    "company": "VisionAI",
    "location": "Remote",
    "stipend": 8500,
    "duration": "4 Months",
    "description": "Work on computer vision projects involving image classification, object detection, and OCR. You will assist in training deep learning models using OpenCV, TensorFlow, and LabelImg. Experience with Python and image processing libraries is expected."
  },
  {
    "_id": "23",
    "title": "Network Engineering Intern",
    "company": "NetCore",
    "location": "Hyderabad",
    "stipend": 6000,
    "duration": "3 Months",
    "description": "Assist our IT team in configuring routers, switches, and firewalls. Tasks include monitoring network performance, resolving connectivity issues, and ensuring network security policies are enforced. CCNA training is an added advantage."
  },
  {
    "_id": "24",
    "title": "Product Management Intern",
    "company": "ProdSpark",
    "location": "Remote",
    "stipend": 7000,
    "duration": "5 Months",
    "description": "Collaborate with cross-functional teams to define product features, conduct market research, and gather user feedback. Assist in preparing product documentation, user stories, and sprint planning. Excellent organizational and communication skills are a must."
  },
  {
    "_id": "25",
    "title": "Graphic Design Intern",
    "company": "DesignDome",
    "location": "Chandigarh",
    "stipend": 4500,
    "duration": "2 Months",
    "description": "Design visuals for marketing campaigns, social media, and web pages using Adobe Photoshop, Illustrator, and Canva. You'll work closely with content and marketing teams to create engaging and brand-consistent designs. Creativity and attention to detail are key."
  }
];

export default internshipDetails;
