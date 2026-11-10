/**
 * =========================================================================
 * ASHIKUL ISLAM KHAN - PORTFOLIO CONFIGURATION DATA STORE
 * =========================================================================
 * 
 * 💡 EDITING GUIDE:
 * Every segment of this website is dynamically driven by this file.
 * To add, remove, or modify any section:
 * 1. Simply edit the objects or arrays below.
 * 2. Save the file. The website updates automatically!
 * =========================================================================
 */

const PORTFOLIO_DATA = {
  // -----------------------------------------------------------------------
  // 1. PRIMARY PERSONAL PROFILE
  // -----------------------------------------------------------------------
  profile: {
    fullName: "MD. ASHIKUL ISLAM",
    preferredName: "Ashikul Islam Khan",
    headline: "Economics Undergraduate | Research Enthusiast | Aspiring Data Analyst | Climate Activist",
    location: "Shahbag, Dhaka, Bangladesh",
    email: "inboxashikulislam@gmail.com",
    academicEmail: "s-2022112154@econ.du.ac.bd",
    phone: "+880 1753-932582",
    institution: "Department of Economics, University of Dhaka",
    statusBadge: "Final Year Undergraduate · Available for Research & Analytics Roles",
    
    bio: "Economics undergraduate at the University of Dhaka with interests in development economics, public policy research, climate and environmental sustainability, and data analysis. Researcher with experience in policy analysis and evidence-based research, including authoring and presenting a policy paper on energy justice and equitable governance before national policymakers. Proficient in SQL, Python, and Power BI, supported by strong organizational and leadership skills. Seeking to apply analytical and research expertise to advance evidence-based policymaking, climate resilience, and sustainable socio-economic development in the international development sector.",
    
    socials: {
      linkedin: "https://linkedin.com/in/ashikul-islam-khan",
      github: "https://github.com/ashikulislamkhan",
      researchgate: "https://www.researchgate.net/profile/Ashikul-Islam-Khan",
      googlescholar: "https://scholar.google.com/citations?hl=en&authuser=3&user=39HR9nwAAAAJ",
      orcid: "https://orcid.org/0009-0001-2470-6484",
      calendly: "http://cal.com/ashikul-islam-khan",
      resumePdf: "https://drive.google.com/drive/folders/1A0wxWFheME4iqwdDmXPXaLomrhGNUptt?usp=sharing",
      instagram: "https://instagram.com/ashikplays19",
      xTwitter: "https://x.com/AshikulIslamK"
    },

    quickStats: [
      { label: "University", val: "Univ of Dhaka" },
      { label: "Program", val: "BSS Economics" },
      { label: "Research Papers", val: "3 Manuscripts" },
      { label: "English Score", val: "Duolingo 129" }
    ]
  },

  // -----------------------------------------------------------------------
  // 2. CORE COMPETENCIES & TOOLKIT
  // -----------------------------------------------------------------------
  competencies: [
    {
      category: "Economics & Research",
      icon: "trending-up",
      skills: ["Econometrics", "Policy Research", "Data Analysis", "Academic Writing", "Policy Advocacy", "Development Economics", "Environmental Economics", "Exchange Rate Pass-Through"]
    },
    {
      category: "Technical & Data Science",
      icon: "cpu",
      skills: ["Python", "SQL", "Power BI", "Advanced Excel", "Data Visualization", "Microsoft Office Applications", "Stata (Basic)", "QGIS (Spatial Analysis)"]
    },
    {
      category: "Creative & Media Production",
      icon: "film",
      skills: ["Graphic Designing", "Cinematography", "Video Editing", "Visual Storytelling", "Brand Identity", "Social Media Design", "Promotional Campaigns"]
    },
    {
      category: "Leadership & Civic Action",
      icon: "award",
      skills: ["Leadership", "Communication", "Project Management", "Public Speaking & Presentation", "Climate Activism", "Cross-team Collaboration", "Event Logistics"]
    }
  ],

  // -----------------------------------------------------------------------
  // 3. WORK & PROFESSIONAL EXPERIENCE
  // -----------------------------------------------------------------------
  workExperience: [
    {
      id: "iisppr-intern",
      role: "Research Intern",
      organization: "International Institute of SDGs & Public Policy Research (IISPPR)",
      location: "Aligarh, India (Remote)",
      period: "Joined Sep 2026",
      type: "Research & Policy",
      achievements: [
        "Selected as a Research Intern at the International Institute of SDGs & Public Policy Research.",
        "Engaged in research on sustainable development and public policy.",
        "Committed to strengthening research, analytical, and policy evaluation skills through practical experience."
      ],
      responsibilities: [
        "Support research activities related to the Sustainable Development Goals and public policy.",
        "Assist with literature reviews, data analysis, and research documentation.",
        "Collaborate with the research team on ongoing projects and policy initiatives."
      ]
    },
    {
      id: "cab-parliamentarian",
      role: "Youth Parliamentarian",
      organization: "Consumers Association of Bangladesh (CAB)",
      location: "Dhaka, Bangladesh",
      period: "Sep 2025 – Present",
      type: "Policy & Governance",
      achievements: [
        "Authored and published a policy paper on Energy Justice and Consumer Rights in the CAB Youth Parliament 2025 Handbook.",
        "Presented research findings before national leaders, policymakers, and stakeholders.",
        "Contributed to evidence-based policy discussions on CAB's 13-point Energy Justice agenda."
      ],
      responsibilities: [
        "Conducted policy research on energy justice, consumer rights, and sustainable energy governance.",
        "Participated in parliamentary sessions, seminars, press briefings, and stakeholder engagements.",
        "Collaborated with Youth Parliament members to develop and communicate policy recommendations."
      ]
    },
    {
      id: "ppsrf-designer",
      role: "Graphic Designer",
      organization: "Political and Policy Science Research Foundation (PPSRF)",
      location: "Dhaka, Bangladesh",
      period: "May 2025 – Present",
      type: "Design & Communications",
      achievements: [
        "Designed official visual materials for the 1st Political Science Conference.",
        "Selected as Graphic Designer for the World Democracy Congress.",
        "Contributed to the visual identity of PPSRF's flagship academic and policy events."
      ],
      responsibilities: [
        "Designed branding, promotional, and event materials for conferences and institutional activities.",
        "Collaborated with organizing committees to produce high-quality visual communications.",
        "Maintained design consistency across digital and print media."
      ]
    }
  ],

  // -----------------------------------------------------------------------
  // 4. LEADERSHIP EXPERIENCE
  // -----------------------------------------------------------------------
  leadershipExperience: [
    {
      id: "ecc-vp",
      role: "Vice President (Administration)",
      organization: "Economics Cultural Club, University of Dhaka",
      location: "Dhaka, Bangladesh",
      period: "Sep 2024 – Present",
      achievements: [
        "Promoted from Secretary (Talent Acquisition) to Vice President (Administration).",
        "Led talent selection for ECC Talent Hunt 2025 and 2026.",
        "Organized flagship events including ECC Freshers' Breeze and ECC Nobohorshe Noboborshe."
      ],
      responsibilities: [
        "Co-direct club administration, executive strategy, and daily operations with the President.",
        "Resolve internal administrative bottlenecks to maintain smooth organizational workflow.",
        "Direct organizing committees, volunteers, and stakeholders for seamless event execution."
      ]
    },
    {
      id: "esc-member",
      role: "Associate Member",
      organization: "Economics Study Center, University of Dhaka",
      location: "Dhaka, Bangladesh",
      period: "May 2024 – Oct 2026",
      achievements: [
        "Contributed to the successful organization of the 6th Bangladesh Economics Summit (2025) and 7th Bangladesh Economics Summit (2026).",
        "Supported the planning and execution of major academic programs and events at the Economics Study Center.",
        "Strengthened organizational effectiveness through logistics coordination and cross-team collaboration."
      ],
      responsibilities: [
        "Coordinated logistics and event operations for seminars, study circles, workshops, and flagship programs.",
        "Collaborated with internal teams and external stakeholders using leadership, communication, coordination, and public relations skills.",
        "Assisted in planning, organizing, and managing academic and policy-related events."
      ]
    },
    {
      id: "eca-associate",
      role: "Associate (Organizing)",
      organization: "Economics Career Alliance, University of Dhaka",
      location: "Dhaka, Bangladesh",
      period: "Oct 2023 – Oct 2026",
      achievements: [
        "Contributed to organizing ECA Quizverse, ECA Career Expo, and The Colosseum II.",
        "Supported the successful execution of career development and student engagement initiatives.",
        "Strengthened event operations through effective logistics and team coordination."
      ],
      responsibilities: [
        "Coordinated logistics and event management for career-focused programs.",
        "Collaborated with organizing teams to plan and execute departmental events.",
        "Communicated with participants, volunteers, and stakeholders to ensure smooth event operations."
      ]
    },
    {
      id: "aranyak-coordinator",
      role: "Joint Coordinator of E3F",
      organization: "ARANYAK",
      location: "Barishal, Bangladesh",
      period: "2021 – 2023",
      achievements: [
        "Led environmental awareness and conservation initiatives promoting climate action and sustainability.",
        "Organized tree plantation campaigns and environmental education programs for students and local communities.",
        "Designed and implemented conservation activities that strengthened youth engagement in environmental stewardship."
      ],
      responsibilities: [
        "Planned and coordinated environmental campaigns, seminars, and community outreach programs.",
        "Led tree plantation initiatives and promoted climate and environmental awareness among students and the public.",
        "Collaborated with volunteers and local stakeholders to implement conservation and sustainability initiatives."
      ]
    }
  ],

  // -----------------------------------------------------------------------
  // 5. RESEARCH PAPERS & PUBLICATIONS
  // -----------------------------------------------------------------------
  researchWorks: [
    {
      id: "inflation-targeting-2026",
      title: "Should Bangladesh Bank's Policy Move Towards Inflation Targeting?",
      genre: "Monetary Economics Paper",
      institution: "Department of Economics, University of Dhaka",
      date: "Jan 2026",
      location: "Dhaka, Bangladesh",
      status: "Unpublished Research Manuscript",
      description: "Analyzed 27 years of Bangladesh Bank data to evaluate the feasibility of inflation targeting using exchange rate pass-through (ERPT) econometric analysis.",
      methodology: ["Exchange Rate Pass-Through", "Time Series Econometrics", "27-Year Macro Dataset"],
      link: "https://www.researchgate.net/publication/414671158_Should_Bangladesh_Bank's_policy_move_towards_inflation_targeting_Should_Bangladesh_Bank's_policy_move_towards_inflation_targeting_Prepared_by_-_The_Rational_Minds",
      bibtex: `@article{khan2026inflation,
  title={Should Bangladesh Bank's Policy Move Towards Inflation Targeting?},
  author={Khan, Ashikul Islam},
  journal={Department of Economics, University of Dhaka Working Papers},
  year={2026},
  month={January},
  address={Dhaka, Bangladesh}
}`
    },
    {
      id: "cuban-development-puzzle-2025",
      title: "The Cuban Development Puzzle: Resilience, Human Capital, and the Dilemma of Reform",
      genre: "Development Economics Paper",
      institution: "Department of Economics, University of Dhaka",
      date: "Dec 2025",
      location: "Dhaka, Bangladesh",
      status: "Unpublished Research Manuscript",
      description: "Examined Cuba's development model by analyzing the relationship between human development, economic performance, institutional reforms, and sustainable development, with a focus on resilience, human capital, and policy challenges.",
      methodology: ["Comparative Development", "Human Capital Index", "Institutional Policy Analysis"],
      link: "https://www.researchgate.net/publication/414824231_The_Cuban_Development_Puzzle",
      bibtex: `@article{khan2025cuba,
  title={The Cuban Development Puzzle: Resilience, Human Capital, and the Dilemma of Reform},
  author={Khan, Ashikul Islam},
  journal={Department of Economics, University of Dhaka Working Papers},
  year={2025},
  month={December},
  address={Dhaka, Bangladesh}
}`
    },
    {
      id: "energy-justice-2025",
      title: "Energy Justice in Protecting Energy Rights",
      genre: "Conference Paper",
      institution: "CAB Youth Parliament 2025",
      date: "Nov 2025",
      location: "Dhaka, Bangladesh",
      status: "Published in Handbook",
      description: "Published in the CAB Youth Parliament 2025 Handbook. Examined energy justice, consumer rights, renewable energy governance, and climate justice in Bangladesh.",
      methodology: ["Policy Evaluation", "Consumer Equity Framework", "Renewable Energy Transition"],
      link: "https://www.researchgate.net/profile/Ashikul-Islam-Khan",
      bibtex: `@inproceedings{khan2025energyjustice,
  title={Energy Justice in Protecting Energy Rights},
  author={Khan, Ashikul Islam},
  booktitle={Consumers Association of Bangladesh (CAB) Youth Parliament 2025 Handbook},
  year={2025},
  month={November},
  address={Dhaka, Bangladesh}
}`
    }
  ],

  // -----------------------------------------------------------------------
  // 6. APPS & SOFTWARE PROJECTS
  // -----------------------------------------------------------------------
  projects: [
    {
      id: "airshare",
      name: "AirShare",
      tagline: "Free Cloud File Sharing Platform",
      description: "A lightweight, secure, and completely free web-based file-sharing cloud platform engineered for frictionless peer-to-peer file exchanges with automatic link expiration.",
      stack: ["Web Technologies", "Cloud Storage API", "JavaScript", "Responsive UI"],
      demoUrl: "https://ashikulislamkhan.github.io/portfolio",
      githubUrl: "https://github.com/ashikulislamkhan"
    },
    {
      id: "konvert",
      name: "KonVert",
      tagline: "100% Client-Side Offline File Converter",
      description: "A privacy-centric file conversion web application that processes files fully offline within the user's browser, eliminating data upload overhead and bandwidth usage.",
      stack: ["WebAssembly", "JavaScript (ES6)", "HTML5 File API", "Tailwind CSS"],
      demoUrl: "https://ashikulislamkhan.github.io/portfolio",
      githubUrl: "https://github.com/ashikulislamkhan"
    },
    {
      id: "framefuse",
      name: "FrameFuse",
      tagline: "Offline Social Media Frame Applicator",
      description: "A fast, offline-first canvas manipulation tool allowing organizations and conference attendees to seamlessly overlay campaign badges and event frames onto profile photos.",
      stack: ["HTML5 Canvas", "JavaScript", "Image Processing", "Offline-first"],
      demoUrl: "https://ashikulislamkhan.github.io/portfolio",
      githubUrl: "https://github.com/ashikulislamkhan"
    },
    {
      id: "a2y",
      name: "A2Y",
      tagline: "Anonymous Web-Based Texting Utility",
      description: "A minimalist anonymous communication web application prioritizing zero-log confidentiality and instantaneous ephemeral text transmissions.",
      stack: ["WebSockets / Serverless", "JavaScript", "Security Architecture"],
      demoUrl: "https://ashikulislamkhan.github.io/portfolio",
      githubUrl: "https://github.com/ashikulislamkhan"
    }
  ],

  // -----------------------------------------------------------------------
  // 7. EDUCATIONAL QUALIFICATIONS
  // -----------------------------------------------------------------------
  education: [
    {
      degree: "Bachelor of Social Science (BSS) in Economics",
      institution: "University of Dhaka",
      timeline: "Final Year Undergraduate",
      location: "Dhaka, Bangladesh",
      detail: "Specializing in Development Economics, Econometrics, and Public Policy Analysis."
    },
    {
      degree: "Higher Secondary Certificate (HSC) in Humanities",
      institution: "Amrita Lal Dey College, Barishal",
      timeline: "Graduated",
      location: "Barishal, Bangladesh",
      detail: "Result: GPA 5.00 / 5.00"
    },
    {
      degree: "Secondary School Certificate (SSC) in Humanities",
      institution: "Kaunia Govt. Secondary School, Barishal",
      timeline: "Graduated",
      location: "Barishal, Bangladesh",
      detail: "Result: GPA 5.00 / 5.00"
    }
  ],

  // -----------------------------------------------------------------------
  // 8. TRAINING & CERTIFICATIONS
  // -----------------------------------------------------------------------
  certifications: [
    {
      title: "Students in Energy Security and Just Energy Transition Workshop",
      issuer: "Consumers Association of Bangladesh (CAB)",
      year: "2026",
      location: "Dhaka, Bangladesh"
    },
    {
      title: "Climate and Environmental Policy 101",
      issuer: "AYO Academy | ASEAN Youth Organization",
      year: "2026",
      location: "International"
    },
    {
      title: "Air Diary Challenge",
      issuer: "Youth4Nature Fellowship Program",
      year: "2026",
      location: "Global"
    }
  ],

  // -----------------------------------------------------------------------
  // 9. VOLUNTEERING WORKS
  // -----------------------------------------------------------------------
  volunteering: [
    {
      role: "Volunteer (Public Relations)",
      organization: "South Asian Network on Economic Modeling (SANEM)",
      date: "Feb 2025",
      location: "Dhaka, Bangladesh",
      achievements: [
        "Supported public relations and participant engagement for the 8th SANEM Annual Economists' Conference (SAEC) 2025.",
        "Assisted in communication and coordination to ensure smooth event operations."
      ]
    },
    {
      role: "Volunteer (Logistics)",
      organization: "Economics Study Center, University of Dhaka",
      date: "Feb 2025, Apr 2026",
      location: "Dhaka, Bangladesh",
      achievements: [
        "Provided logistics support for the 6th and 7th Bangladesh Economics Summit (BES) 2025 & 2026.",
        "Assisted in coordinating event operations and participant management."
      ]
    }
  ],

  // -----------------------------------------------------------------------
  // 10. CREATIVE & MEDIA WORKS (SUMMITS & ECC)
  // -----------------------------------------------------------------------
  creativeWorks: [
    { title: "6th Bangladesh Economics Summit (BES 2025) Promo Campaign", role: "Cinematography & Editing" },
    { title: "BES 2025 EconQuest Economics Olympiad Promo Video", role: "Visual Direction & Editing" },
    { title: "ECC Freshers' Breeze 2025 Official Promo", role: "Direction & Video Production" },
    { title: "ECC Satyajit Ray Birthday Tribute Reel 2026", role: "Visual Storytelling & Editing" },
    { title: "ECC Nobohorshe Noboborshe 1432 Cultural Promo", role: "Motion Design & Video Editing" }
  ],

  // -----------------------------------------------------------------------
  // 11. LANGUAGES & PERSONAL
  // -----------------------------------------------------------------------
  languages: [
    { name: "Bangla", proficiency: "Native" },
    { name: "English", proficiency: "Fluent (Duolingo English Test Score: 129)" }
  ],

  personalInterests: ["Football", "Astrophotography", "Tree Plantation & Conservation", "Distance Running", "Music"]
};

// Export for browser global context
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
