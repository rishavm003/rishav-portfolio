export const portfolioData = {
  hero: {
    name: "Rishav Mishra",
    role: "AI/ML Engineer & Software Developer",
    tagline: "Bridging the gap between software development, artificial intelligence, and actionable data insights.",
    location: "Lucknow, India",
    education: "B.Tech in Computer Science and Engineering\n(Specialization in AI)\n BBD University, Lucknow",
  },
  about: {
    bio: [
      "I got into AI because I wanted to build things that actually think. Not rule-based scripts — real systems that reason, adapt, and solve hard problems. That curiosity turned into a CS degree specializing in AI, and a habit of building things before fully knowing how.",
      "I've shipped a brain tumor detection system using deep learning, an AI that converts documents into explainer videos, and a room design assistant that generates interior layouts from user preferences. My stack is Python, PyTorch, JavaScript, and SQL — and I work across the full pipeline from model training to the final product.",
      "Outside projects, I interned at Hindalco Industries where I got my first taste of real-world software at scale. I volunteered at Khelo India University Games 2022 — which, honestly, taught me more about staying calm under pressure than any exam did. Currently going deep on DSA, NLP, and intelligent automation."
    ],
  },
  skills: {
    technical: [
      { category: "Languages", items: "Python, C++" },
      { category: "AI / ML Frameworks", items: "TensorFlow, PyTorch, Scikit-learn, HuggingFace Transformers, Whisper" },
      { category: "AI Specializations", items: "Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), Agentic AI Systems, NLP (NLTK, SpaCy), Computer Vision (YOLO, CNNs), Sentiment Analysis, Speech Recognition" },
      { category: "Deep Learning", items: "Convolutional Neural Networks (CNNs), Transformer Architecture, Transfer Learning, Model Fine-tuning" },
      { category: "Backend & APIs", items: "FastAPI, REST APIs, Streaming Pipelines" },
      { category: "Frontend", items: "React.js (Dashboard Development)" },
      { category: "Databases", items: "MySQL, MongoDB" },
      { category: "Cloud Platforms", items: "AWS, Google Cloud" },
      { category: "MLOps & Tools", items: "Git, GitHub, Jupyter Notebook" }
    ],
    soft: [
      "Communication & Collaboration",
      "Critical Thinking",
      "Problem Solving",
      "Leadership & Teamwork",
      "Time Management"
    ],
    core: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Computer Networks"
    ]
  },
  projects: [
    {
      title: "NeuroScan Aid — Brain Tumor Detection",
      description: "Deep learning system for medical image analysis that detects and classifies brain tumors from MRI scans. Built using CNNs and advanced image processing techniques, achieving high accuracy to assist radiologists in faster and more reliable diagnosis.",
      tags: ["Deep Learning", "CNN", "Medical AI", "Python"],
      github: "https://github.com/rishavm003/Medical-Image-Analysis",
      accent: "#9d6fff",
      icon: "brain",
      category: "⚙️ Strong Applied AI Projects",
      floatDuration: "7s",
      floatDelay: "0s"
    },
    {
      title: "Real-Time AI Meeting Intelligence System",
      description: "AI system that transcribes meetings in real time, extracts action items, summarizes key decisions, and generates follow-up reports automatically. Built for productivity and team alignment.",
      tags: ["NLP", "Real-Time AI", "Automation", "Python"],
      github: "https://github.com/rishavm003/Real-Time-AI-Meeting-Intelligence-System",
      accent: "#00d4ff",
      icon: "meeting",
      category: "⚙️ Strong Applied AI Projects",
      floatDuration: "6s",
      floatDelay: "3s"
    },
    {
      title: "Autonomous Trading Bot",
      description: "AI-powered algorithmic trading bot that analyzes market data in real time, identifies patterns, and executes trades autonomously. Uses machine learning models for price prediction and risk management.",
      tags: ["AI", "ML", "Finance", "Python"],
      github: "https://github.com/rishavm003/Autonomous-Trading-Bot",
      accent: "#00ff88",
      icon: "trading",
      category: "⚙️ Strong Applied AI Projects",
      floatDuration: "8s",
      floatDelay: "1.2s"
    },
    {
      title: "AI-Powered Healthcare Triage System",
      description: "Intelligent triage system that uses AI to assess patient symptoms, prioritize cases by urgency, and recommend appropriate care pathways. Reduces wait times and improves hospital resource allocation.",
      tags: ["AI", "Healthcare", "NLP", "Python"],
      github: "https://github.com/rishavm003/AI-Powered-Healthcare-Triage-System",
      accent: "#00d4ff",
      icon: "health",
      category: "⚙️ Strong Applied AI Projects",
      floatDuration: "6s",
      floatDelay: "0.4s"
    },
    {
      title: "Mental Health Chatbot",
      description: "Empathetic conversational AI that detects signs of stress, anxiety, and depression from user text. Provides supportive responses, coping strategies, and recommends professional resources when needed.",
      tags: ["NLP", "LLM", "Healthcare", "Chatbot"],
      github: "https://github.com/rishavm003/Mental-Health-Chatbot",
      accent: "#6366f1",
      icon: "chatbot",
      category: "⚙️ Strong Applied AI Projects",
      floatDuration: "6.5s",
      floatDelay: "1.6s"
    },
    {
      title: "Drug Interaction Checker",
      description: "AI-powered medical tool where users input multiple medications and instantly receive a safety report on dangerous drug interactions. Uses a medical knowledge base combined with NLP to explain risks in plain language.",
      tags: ["AI", "NLP", "Healthcare", "Python"],
      github: "https://github.com/rishavm003/Drug-Interaction-Checker",
      accent: "#f43f5e",
      icon: "drug",
      category: "⚙️ Strong Applied AI Projects",
      floatDuration: "9s",
      floatDelay: "0.2s"
    },
    {
      title: "Stock Market Sentiment Analyzer",
      description: "Scrapes financial news and social media, runs NLP-based sentiment analysis, and correlates public sentiment with real stock price movements. Visualized as an interactive analytics dashboard for investors.",
      tags: ["NLP", "Sentiment Analysis", "Finance", "Dashboard"],
      github: "https://github.com/rishavm003/Stock-Market-Sentiment-Analyzer",
      accent: "#fbbf24",
      icon: "sentiment",
      category: "⚙️ Strong Applied AI Projects",
      floatDuration: "7.5s",
      floatDelay: "2s"
    },
    {
      title: "Emotion Detection from Facial Expressions",
      description: "Real-time emotion recognition system using CNN and OpenCV that detects 7 human emotions from live webcam feed — happy, sad, angry, surprised, fearful, disgusted, and neutral. Highly visual and impressive in live demos.",
      tags: ["Computer Vision", "CNN", "OpenCV", "Real-Time"],
      github: "https://github.com/rishavm003/Emotion-Detection-from-Facial-Expressions",
      accent: "#ff4d8d",
      icon: "emotion",
      category: "⚙️ Strong Applied AI Projects",
      floatDuration: "5.5s",
      floatDelay: "0.8s"
    },
    {
      title: "T20 World Cup Cricket Analytics",
      description: "End-to-end data analytics project on T20 World Cup cricket data. Analyzes player performance, team strategies, match outcomes, and batting/bowling statistics using Python and interactive visualizations.",
      tags: ["Data Analytics", "Python", "Sports Analytics"],
      github: "https://github.com/rishavm003/-T20-world-cup-cricket-data-analytics-",
      accent: "#00ff88",
      icon: "cricket",
      category: "📊 Data / Analytics + Mid-Level Projects",
      floatDuration: "8.5s",
      floatDelay: "1.8s"
    },
    {
      title: "Blinkit Sales Analysis Dashboard",
      description: "Comprehensive Power BI dashboard analyzing Blinkit's sales performance across item categories, outlet types, and key business metrics. Provides actionable insights for data-driven business decision-making.",
      tags: ["Power BI", "Data Analytics", "Dashboard"],
      github: "https://github.com/rishavm003/Blinkit-Sales-Analysis",
      accent: "#fbbf24",
      icon: "dashboard",
      category: "📊 Data / Analytics + Mid-Level Projects",
      floatDuration: "5s",
      floatDelay: "2.5s"
    },
    {
      title: "GitHub Automation Bot",
      description: "Advanced Python-based automation bot that manages GitHub workflows daily. Features automated commits, scans issues using Gemini AI to generate intelligent draft replies, and produces detailed daily performance reports.",
      tags: ["Python", "Gemini AI", "Automation", "GitHub Actions"],
      github: "https://github.com/rishavm003/Github-Automation",
      accent: "#6366f1",
      icon: "automation",
      category: "🧩 Supporting / Basic + Non-Core AI",
      floatDuration: "7s",
      floatDelay: "0.2s"
    },
    {
      title: "AI Room Design Assistant",
      description: "Generative AI application that creates personalized interior room layouts based on user preferences. Users input their style, budget, and room dimensions — the AI generates design recommendations and furniture arrangements.",
      tags: ["Generative AI", "UX", "HTML", "CSS"],
      github: "https://github.com/rishavm003/AI-Room-Design",
      accent: "#9d6fff",
      icon: "room",
      category: "🧩 Supporting / Basic + Non-Core AI",
      floatDuration: "7s",
      floatDelay: "1s"
    },
    {
      title: "Hospital Patient Records Management System",
      description: "Full-stack system for managing hospital patient records — includes patient registration, medical history tracking, appointment scheduling, and doctor assignment. Built for real-world healthcare workflow efficiency.",
      tags: ["Full Stack", "Healthcare", "Database", "SQL"],
      github: "https://github.com/rishavm003/Hospital-Patient-Records-Management-System",
      accent: "#6366f1",
      icon: "hospital",
      category: "🧩 Supporting / Basic + Non-Core AI",
      floatDuration: "7s",
      floatDelay: "0.6s"
    }
  ],
  experience: [
    {
      role: "WBL Intern",
      company: "NIELIT",
      date: "August 2025 – Present",
      location: "Lucknow (On-site)",
      points: [
        "Performed data analysis on the NIELIT education portal to evaluate course engagement and completion trends; delivered data-driven recommendations that increased overall output by 27% and course enrollments by 42%.",
        "Prepared technical documentation and reports in line with institutional standards."
      ]
    },
    {
      role: "Trainee – Software Development",
      company: "Hindalco Industries Ltd.",
      date: "November 2022 - February 2023",
      location: "Renukoot",
      points: [
        "Designed and implemented a reporting system to automate data management, improving decision-making speed and accuracy.",
        "Developed Python scripts to optimize repetitive processes, increasing efficiency by 20%.",
        "Collaborated with the IT department to integrate the solution into existing workflows, ensuring seamless adoption."
      ]
    }
  ],
  contact: {
    email: "rishavm003@gmail.com",
    phone: "+91 9101824025",
    github: "https://github.com/rishavm003",
    linkedin: "https://www.linkedin.com/in/rishav-mishra-rm"
  }
};

export const certifications = [
  {
    id: "01",
    title: "AI Fluency: Framework & Foundations",
    platform: "Anthropic Education",
    date: "March 2026",
    description: "Core AI concepts, frameworks, and foundational principles of modern artificial intelligence systems.",
    link: "http://verify.skilljar.com/c/3gfkxuacnvz9",
    accentColor: "#9d6fff",
  },
  {
    id: "02",
    title: "Software Engineering Job Simulation",
    platform: "JPMorgan Chase & Co. — Forage",
    date: "June 2024",
    description: "Real-world software engineering tasks — stock data feeds, JPMorgan frameworks, data visualization for traders, and open source contribution.",
    link: "https://ixnzwrhuekyyrqkrvlft.supabase.co/storage/v1/object/public/portfolio-assets/Certificate/Software%20Engineering%20Job%20Simulation.pdf",
    accentColor: "#00d4ff",
  },
  {
    id: "03",
    title: "Data Analytics and Visualization Job Simulation",
    platform: "Accenture — Forage",
    date: "April 2024",
    description: "End-to-end data analytics workflow — project understanding, data cleaning, modeling, visualization storytelling, and client presentation.",
    link: "https://ixnzwrhuekyyrqkrvlft.supabase.co/storage/v1/object/public/portfolio-assets/Certificate/Data%20Analytics%20And%20Visualization%20Job%20Simulation.pdf",
    accentColor: "#00ff88",
  },
  {
    id: "04",
    title: "Data Science & Analytics",
    platform: "HP LIFE — HP Foundation",
    date: "December 2024",
    description: "Data science practices, methodologies, analytics tools, and data-driven business decision making.",
    link: "https://ixnzwrhuekyyrqkrvlft.supabase.co/storage/v1/object/public/portfolio-assets/Certificate/HP%20Data%20Science%20&%20Analytics.pdf",
    accentColor: "#fbbf24",
  },
  {
    id: "05",
    title: "GoFr Summer of Code 2025",
    platform: "GoFr Open Source Program",
    date: "August 2025",
    description: "Open source contribution program focused on engineering excellence and collaborative software development.",
    link: "https://ixnzwrhuekyyrqkrvlft.supabase.co/storage/v1/object/public/portfolio-assets/Certificate/GoFr%20Summer%20Code.jpeg",
    accentColor: "#ff4d8d",
  },
  {
    id: "06",
    title: "AI/ML Hackathon 1.0 — Certificate of Appreciation",
    platform: "myOnsite Healthcare & Parul University",
    date: "July 2024",
    description: "Actively participated and made significant contributions at an AI/ML hackathon, recognized for innovative ideas, teamwork, and dedication.",
    link: "https://ixnzwrhuekyyrqkrvlft.supabase.co/storage/v1/object/public/portfolio-assets/Certificate/Parul%20Hackathon%20Certificate.jpg",
    accentColor: "#6366f1",
  },
];
