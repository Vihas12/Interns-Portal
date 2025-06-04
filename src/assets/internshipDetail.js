const internshipDetails = [
  {
    "_id": "1",
    "title": "Web Development Intern",
    "company": "TechCorp",
    "location": "Remote",
    "stipend": "₹5,000/month",
    "duration": "3 Months",
    "description": "Work on web development projects using React and Node.js."
  },
  {
    "_id": "2",
    "title": "Data Science Intern",
    "company": "DataWiz",
    "location": "Bangalore",
    "stipend": "₹10,000/month",
    "duration": "6 Months",
    "description": "Assist in building predictive models and dashboards."
  },
  {
    "_id": "3",
    "title": "Machine Learning Intern",
    "company": "AI Labs",
    "location": "Remote",
    "stipend": "₹8,000/month",
    "duration": "4 Months",
    "description": "Develop machine learning models for NLP tasks."
  },
  {
    "_id": "4",
    "title": "UI/UX Designer Intern",
    "company": "DesignNest",
    "location": "Delhi",
    "stipend": "₹7,000/month",
    "duration": "3 Months",
    "description": "Design user interfaces for web and mobile apps."
  },
  {
    "_id": "5",
    "title": "Backend Developer Intern",
    "company": "CodeBase",
    "location": "Remote",
    "stipend": "₹6,000/month",
    "duration": "2 Months",
    "description": "Build REST APIs using Django and PostgreSQL."
  },
  {
    "_id": "6",
    "title": "Frontend Developer Intern",
    "company": "PixelSoft",
    "location": "Mumbai",
    "stipend": "₹5,500/month",
    "duration": "3 Months",
    "description": "Create responsive interfaces using React.js."
  },
  {
    "_id": "7",
    "title": "Mobile App Developer Intern",
    "company": "Appsters",
    "location": "Remote",
    "stipend": "₹7,000/month",
    "duration": "4 Months",
    "description": "Build mobile apps using Flutter."
  },
  {
    "_id": "8",
    "title": "Cloud Engineering Intern",
    "company": "CloudNova",
    "location": "Hyderabad",
    "stipend": "₹9,000/month",
    "duration": "6 Months",
    "description": "Work with AWS services and infrastructure automation."
  },
  {
    "_id": "9",
    "title": "DevOps Intern",
    "company": "BuildWorks",
    "location": "Remote",
    "stipend": "₹8,000/month",
    "duration": "5 Months",
    "description": "Implement CI/CD pipelines and deployment strategies."
  },
  {
    "_id": "10",
    "title": "Cybersecurity Intern",
    "company": "SecureTech",
    "location": "Chennai",
    "stipend": "₹6,000/month",
    "duration": "3 Months",
    "description": "Monitor security threats and assist in penetration testing."
  },
  {
    "_id": "11",
    "title": "Blockchain Intern",
    "company": "ChainCore",
    "location": "Remote",
    "stipend": "₹10,000/month",
    "duration": "6 Months",
    "description": "Build and test smart contracts using Sol_idity."
  },
  {
    "_id": "12",
    "title": "AI Research Intern",
    "company": "MindML",
    "location": "Pune",
    "stipend": "₹9,000/month",
    "duration": "4 Months",
    "description": "Assist in building and training deep learning models."
  },
  {
    "_id": "13",
    "title": "Full Stack Developer Intern",
    "company": "StackMasters",
    "location": "Remote",
    "stipend": "₹11,000/month",
    "duration": "5 Months",
    "description": "Work on complete product development using MERN stack."
  },
  {
    "_id": "14",
    "title": "Digital Marketing Intern",
    "company": "MarketGurus",
    "location": "Kolkata",
    "stipend": "₹4,000/month",
    "duration": "2 Months",
    "description": "Manage SEO, SEM, and social media campaigns."
  },
  {
    "_id": "15",
    "title": "QA Testing Intern",
    "company": "TestLabs",
    "location": "Remote",
    "stipend": "₹5,000/month",
    "duration": "3 Months",
    "description": "Perform manual and automated testing for web applications."
  },
  {
    "_id": "16",
    "title": "Game Developer Intern",
    "company": "PlayZone",
    "location": "Remote",
    "stipend": "₹7,000/month",
    "duration": "4 Months",
    "description": "Develop 2D/3D games using Unity."
  },
  {
    "_id": "17",
    "title": "AR/VR Intern",
    "company": "ImmersiTech",
    "location": "Bangalore",
    "stipend": "₹9,000/month",
    "duration": "5 Months",
    "description": "Create immersive experiences using AR/VR technologies."
  },
  {
    "_id": "18",
    "title": "Business Analyst Intern",
    "company": "InsightPro",
    "location": "No_ida",
    "stipend": "₹6,000/month",
    "duration": "3 Months",
    "description": "Analyze business data and generate insights using Power BI."
  },
  {
    "_id": "19",
    "title": "IoT Intern",
    "company": "ThingzLab",
    "location": "Ahmedabad",
    "stipend": "₹8,000/month",
    "duration": "4 Months",
    "description": "Work on IoT solutions with Raspberry Pi and sensors."
  },
  {
    "_id": "20",
    "title": "Technical Content Writer Intern",
    "company": "WriteHub",
    "location": "Remote",
    "stipend": "₹5,000/month",
    "duration": "2 Months",
    "description": "Write blogs and documentation on tech topics."
  },
  {
    "_id": "21",
    "title": "Software Developer Intern",
    "company": "NextSoft",
    "location": "Pune",
    "stipend": "₹7,500/month",
    "duration": "3 Months",
    "description": "Work on software solutions with Java and Spring Boot."
  },
  {
    "_id": "22",
    "title": "Computer Vision Intern",
    "company": "VisionAI",
    "location": "Remote",
    "stipend": "₹8,500/month",
    "duration": "4 Months",
    "description": "Develop computer vision models for image recognition."
  },
  {
    "_id": "23",
    "title": "Network Engineering Intern",
    "company": "NetCore",
    "location": "Hyderabad",
    "stipend": "₹6,000/month",
    "duration": "3 Months",
    "description": "Manage and troubleshoot networking infrastructure."
  },
  {
    "_id": "24",
    "title": "Product Management Intern",
    "company": "ProdSpark",
    "location": "Remote",
    "stipend": "₹7,000/month",
    "duration": "5 Months",
    "description": "Collaborate on product roadmap and customer feedback."
  },
  {
    "_id": "25",
    "title": "Graphic Design Intern",
    "company": "DesignDome",
    "location": "Chandigarh",
    "stipend": "₹4,500/month",
    "duration": "2 Months",
    "description": "Design graphics for social media and website banners."
  }
]

export default internshipDetails;