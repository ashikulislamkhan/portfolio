/**
 * =========================================================================
 * ASHIKUL ISLAM KHAN - PORTFOLIO CONFIGURATION DATA STORE
 * =========================================================================
 * 
 * 💡 EDITING GUIDE (GitHub-First):
 * You can edit this file directly on GitHub by pressing the pencil icon or '.'!
 * Every segment of the portfolio renders dynamically from this configuration.
 * =========================================================================
 */

const PORTFOLIO_DATA = {
  // -----------------------------------------------------------------------
  // 1. PRIMARY PERSONAL PROFILE
  // -----------------------------------------------------------------------
  profile: {
    fullName: "Ashikul Islam Khan",
    headline: "Economics Undergraduate | Research Enthusiast | Aspiring Data Analyst | Graphic Designer | Video Editor | Climate Activist",
    location: "Shahbag, Dhaka, Bangladesh",
    email: "inboxashikulislam@gmail.com",
    academicEmail: "s-2022112154@econ.du.ac.bd",
    phone: "+880 1753-932582",
    institution: "Department of Economics, University of Dhaka",
    statusBadge: "Final Year Undergraduate · Available for Research, Analytics & Creative Roles",
    
    avatarImage: "https://lh3.googleusercontent.com/d/1Z7pPWIxV9gye9s76BSakGmEKOqz_btL1",
    coverImage: "https://lh3.googleusercontent.com/d/1Dk0RN3GHEtjhmo3mSIWDaxehFmhE5TpN",
    localAvatarFallback: "images/profile.jpg",
    localCoverFallback: "images/cover.jpg",

    googleDriveSync: {
      folderId: "1FuAj4eRImQEsglTggJXU5qlPPM1onbFq",
      folderUrl: "https://drive.google.com/drive/folders/1FuAj4eRImQEsglTggJXU5qlPPM1onbFq?usp=sharing",
      dpFileId: "1Z7pPWIxV9gye9s76BSakGmEKOqz_btL1",
      coverFileId: "1Dk0RN3GHEtjhmo3mSIWDaxehFmhE5TpN"
    },
    
    summary: "Analytical and creative Economics undergraduate at the University of Dhaka. Combines a strong foundation in development economics and data analysis (SQL, Python, Power BI) with advanced skills in graphic design, cinematography, and video editing. Recognized for published policy research on energy justice and organizational leadership. Seeking roles that leverage both evidence-based research and impactful visual storytelling.",
    
    socials: {
      portfolio: "https://ashikulislamkhan.github.io/portfolio/",
      linkedin: "https://linkedin.com/in/ashikul-islam-khan",
      github: "https://github.com/ashikulislamkhan",
      researchgate: "https://www.researchgate.net/profile/Ashikul-Islam-Khan",
      googlescholar: "https://scholar.google.com/citations?hl=en&authuser=3&user=39HR9nwAAAAJ",
      orcid: "https://orcid.org/0009-0001-2470-6484",
      calendly: "http://cal.com/ashikul-islam-khan",
      resumeDrive: "https://drive.google.com/drive/folders/1A0wxWFheME4iqwdDmXPXaLomrhGNUptt?usp=drive_link"
    },

    quickStats: [
      { label: "University", val: "University of Dhaka" },
      { label: "Program", val: "BSS Economics (Final Year)" },
      { label: "Research Manuscripts", val: "3 Papers" },
      { label: "English Proficiency", val: "Duolingo 129" }
    ]
  },

  // -----------------------------------------------------------------------
  // 2. CORE COMPETENCIES (Categorized)
  // -----------------------------------------------------------------------
  competencies: [
    {
      category: "Research & Economics",
      icon: "trending-up",
      skills: ["Policy Research", "Development Economics", "Econometrics", "Data Analysis", "Academic Writing", "Policy Analysis"]
    },
    {
      category: "Technical Skills",
      icon: "cpu",
      skills: ["SQL", "Python", "Power BI", "Advanced Excel", "Microsoft Office Suite", "Data Visualization"]
    },
    {
      category: "Creative & Design Skills",
      icon: "film",
      skills: ["Graphic Design", "Video Editing", "Cinematography", "Visual Storytelling", "Branding & Social Media Design"]
    },
    {
      category: "Professional Skills",
      icon: "award",
      skills: ["Leadership", "Communication", "Project Management", "Public Speaking & Presentation", "Team Collaboration", "Climate Advocacy"]
    }
  ],

  // -----------------------------------------------------------------------
  // 3. PROFESSIONAL EXPERIENCE (Workplaces)
  // -----------------------------------------------------------------------
  workExperience: [
    {
      id: "iisppr-intern",
      role: "Research Intern",
      organization: "International Institute of SDGs & Public Policy Research (IISPPR)",
      location: "Remote",
      period: "September 2026 – Present",
      type: "Research & Public Policy",
      responsibilities: [
        "Conduct research on Sustainable Development Goals and public policy.",
        "Assist in literature reviews, policy analysis, and research documentation.",
        "Collaborate with researchers on policy evaluation projects.",
        "Strengthen analytical and evidence-based research skills."
      ]
    },
    {
      id: "cab-parliamentarian",
      role: "Youth Parliamentarian",
      organization: "Consumers Association of Bangladesh (CAB)",
      location: "Dhaka, Bangladesh",
      period: "September 2025 – Present",
      type: "Policy & Energy Governance",
      achievements: [
        "Authored and published a policy paper on Energy Justice and Consumer Rights in the CAB Youth Parliament 2025 Handbook.",
        "Presented research findings before national leaders, policymakers, and stakeholders."
      ],
      responsibilities: [
        "Conduct policy research on consumer rights, energy justice, and sustainable governance.",
        "Participate in parliamentary sessions, seminars, press briefings, and policy discussions.",
        "Collaborate with Youth Parliament members on CAB's 13-point Energy Justice agenda."
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
        "Selected as Graphic Designer for the World Democracy Congress."
      ],
      responsibilities: [
        "Designed branding, promotional, and event materials for conferences and institutional activities.",
        "Collaborated with organizing committees on digital and print communications.",
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
      period: "September 2024 – Present",
      tagline: "Previously served as Secretary (Talent Acquisition)",
      responsibilities: [
        "Lead club administration and executive operations.",
        "Coordinate large-scale university events.",
        "Manage organizing committees and volunteers."
      ]
    },
    {
      id: "esc-member",
      role: "Associate Member",
      organization: "Economics Study Center",
      location: "Dhaka, Bangladesh",
      period: "May 2024 – October 2026",
      responsibilities: [
        "Organized Bangladesh Economics Summit.",
        "Coordinated seminars, workshops, and academic events.",
        "Worked with internal and external stakeholders."
      ]
    },
    {
      id: "eca-associate",
      role: "Associate (Organizing)",
      organization: "Economics Career Alliance",
      location: "Dhaka, Bangladesh",
      period: "October 2023 – October 2026",
      responsibilities: [
        "Assisted in organizing career expos, competitions, and departmental events.",
        "Managed logistics and participant coordination."
      ]
    },
    {
      id: "aranyak-coordinator",
      role: "Joint Coordinator of E3F",
      organization: "ARANYAK",
      location: "Barishal, Bangladesh",
      period: "2021 – 2023",
      responsibilities: [
        "Led environmental awareness initiatives.",
        "Organized tree plantation and sustainability campaigns.",
        "Coordinated community outreach activities."
      ]
    }
  ],

  // -----------------------------------------------------------------------
  // 5. RESEARCH WORKS & MANUSCRIPTS
  // -----------------------------------------------------------------------
  researchWorks: [
    {
      id: "inflation-targeting-2026",
      title: "Should Bangladesh Bank's Policy Move Towards Inflation Targeting?",
      genre: "Monetary Economics Paper (2026)",
      institution: "Department of Economics, University of Dhaka",
      location: "Dhaka, Bangladesh",
      status: "Unpublished",
      description: "Analyzed 27 years of Bangladesh Bank data using exchange rate pass-through analysis to evaluate the feasibility of inflation targeting.",
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
      genre: "Development Economics Paper (2025)",
      institution: "Department of Economics, University of Dhaka",
      location: "Dhaka, Bangladesh",
      status: "Unpublished",
      description: "Examined Cuba's development model, institutional reforms, human development, resilience, and policy challenges.",
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
      genre: "Conference Paper (Nov 2025)",
      institution: "CAB Youth Parliament 2025",
      location: "Dhaka, Bangladesh",
      status: "Published, CAB Youth Parliament 2025 Handbook",
      description: "Examined energy justice, renewable energy governance, and consumer rights in Bangladesh.",
      link: "https://www.researchgate.net/publication/415124221_Energy_Justice_in_Protecting_Energy_Rights",
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
  // 6. APPLICATIONS BUILT (Software / Code Projects)
  // -----------------------------------------------------------------------
  projects: [
    {
      name: "AirShare",
      tagline: "Free Cloud File Sharing Platform",
      description: "A fast, fully free web-based file-sharing cloud utility designed for effortless peer-to-peer file transfer.",
      stack: ["JavaScript", "Cloud API", "Web Application"],
      liveUrl: "https://ashikulislamkhan.github.io/airshare/",
      githubUrl: "https://github.com/ashikulislamkhan"
    },
    {
      name: "KonVert",
      tagline: "100% Client-Side Offline File Converter",
      description: "A secure, privacy-first file converting website that processes documents and media fully offline within your browser.",
      stack: ["WebAssembly", "JavaScript", "HTML5 API"],
      liveUrl: "https://ashikulislamkhan.github.io/Konvert/",
      githubUrl: "https://github.com/ashikulislamkhan"
    },
    {
      name: "FrameFuse",
      tagline: "Offline Social Media Frame Applicator",
      description: "A fully offline canvas tool for overlaying campaign badges, graduation borders, and event frames onto profile pictures.",
      stack: ["HTML5 Canvas", "JavaScript", "Image Processing"],
      liveUrl: "https://ashikulislamkhan.github.io/framefuse/",
      githubUrl: "https://github.com/ashikulislamkhan"
    },
    {
      name: "A2Y",
      tagline: "Anonymous Web-Based Texting App",
      description: "A minimalist anonymous communication web application focused on instant, privacy-conscious ephemeral text messages.",
      stack: ["WebSockets", "JavaScript", "Responsive UI"],
      liveUrl: "https://anonymous2you.github.io/anonymous2you/",
      githubUrl: "https://github.com/ashikulislamkhan"
    }
  ],

  // -----------------------------------------------------------------------
  // 7. CREATIVE & MEDIA WORKS (Branding, Graphic Design & Video Campaigns)
  // -----------------------------------------------------------------------
  creativeWorks: [
    {
      type: "design",
      title: "1st Political Science Conference organized by PPSRF",
      category: "Graphics Design and Branding",
      role: "Lead Graphic Designer",
      year: "2025",
      description: "Designed every conference material, worked for branding, press releases, banner graphics, and comprehensive printing collateral.",
      link: "https://drive.google.com/drive/u/3/folders/1t1Lb46hnu_ZShuSxa8_DAmGXiSoyJPg0"
    },
    {
      type: "design",
      title: "World Democracy Congress organized by PPSRF",
      category: "Graphics Design and Branding",
      role: "Lead Graphic Designer",
      year: "2025",
      description: "Designed every conference material, worked for branding, press releases, digital assets, and high-impact printing collateral.",
      link: "https://drive.google.com/drive/u/3/folders/1t1Lb46hnu_ZShuSxa8_DAmGXiSoyJPg0"
    },
    {
      type: "video",
      title: "ECC Freshers’ Breeze 2025 Promo",
      category: "Video Production",
      role: "Direction, Script & Video Production",
      year: "2025",
      description: "Direction, scriptwriting, and complete video production for the Economics Cultural Club flagship Freshers' Breeze celebration.",
      link: "https://youtu.be/gwYpUs_u058?si=nmTo3FQDXZlKoYbz"
    },
    {
      type: "video",
      title: "6th Bangladesh Economics Summit (BES 2025) EconQuest Economics Olympiad Promo",
      category: "Video Production",
      role: "Scripting, Acting & Full Edit",
      year: "2025",
      description: "Conceptualization, acting, scriptwriting, and editing for the national EconQuest Economics Olympiad promo video.",
      link: "https://youtu.be/R9BU7k6T4Z0?si=aj8ZzO_DnPTXthxL"
    },
    {
      type: "video",
      title: "6th Bangladesh Economics Summit (BES 2025) Official Promo",
      category: "Video Production",
      role: "Cinematography & Editing",
      year: "2025",
      description: "Cinematography and video editing for the Economics Study Center's marquee academic conference promo.",
      link: "https://youtu.be/ffnw9URoQSo?si=LckPwyu-t2NfHotH"
    },
    {
      type: "video",
      title: "ECC Saytajit Ray Birthday Tribute Reel 2026",
      category: "Visual Storytelling",
      role: "Visual Storytelling & Editing",
      year: "2026",
      description: "Creative visual tribute and editorial reel celebrating the legacy of maestro Satyajit Ray.",
      link: "https://www.youtube.com/shorts/bV4knxbPAIw"
    },
    {
      type: "video",
      title: "ECC Nobohorshe Noboborshe 1432 Promo",
      category: "Motion Design",
      role: "Motion Design & Video Production",
      year: "2025",
      description: "Motion design, cultural typography, and video production for Pohela Boishakh celebrations.",
      link: "https://youtu.be/nx6KFFn9GWc?si=TwZhMZe4HVvlxqmy"
    },
    {
      type: "video",
      title: "ECC Freshers’ Breeze 2024 Promo",
      category: "Video Production",
      role: "Cinematography & Editing",
      year: "2024",
      description: "Visual editing and promotional campaign reel for the Economics Cultural Club 2024 fresher reception.",
      link: "https://youtu.be/NkWdXJUUpto?si=i2H-PAfeTbu9e0hM"
    },
    {
      type: "video",
      title: "ECA Orientation Promo 2025",
      category: "Video Production",
      role: "Video Production & Direction",
      year: "2025",
      description: "Official orientation promotional reel for the Economics Career Alliance, University of Dhaka.",
      link: "https://youtu.be/UmKYPnaFNNc?si=rBbYsR0lOpNRkeKv"
    }
  ],

  // -----------------------------------------------------------------------
  // 8. EDUCATIONAL QUALIFICATIONS
  // -----------------------------------------------------------------------
  education: [
    {
      degree: "Bachelor of Social Science (BSS) in Economics",
      institution: "University of Dhaka",
      timeline: "Final Year Undergraduate",
      location: "Dhaka, Bangladesh"
    },
    {
      degree: "Higher Secondary Certificate (HSC) in Humanities",
      institution: "Amrita Lal Dey College, Barishal",
      timeline: "GPA: 5.00 / 5.00",
      location: "Barishal, Bangladesh"
    },
    {
      degree: "Secondary School Certificate (SSC) in Humanities",
      institution: "Kaunia Govt. Secondary School, Barishal",
      timeline: "GPA: 5.00 / 5.00",
      location: "Barishal, Bangladesh"
    }
  ],

  // -----------------------------------------------------------------------
  // 9. TRAINING & CERTIFICATIONS
  // -----------------------------------------------------------------------
  certifications: [
    {
      title: "Students in Energy Security and Just Energy Transition Workshop",
      issuer: "Consumers Association of Bangladesh (CAB)",
      year: "2026"
    },
    {
      title: "Climate and Environmental Policy 101",
      issuer: "ASEAN Youth Organization",
      year: "2026"
    },
    {
      title: "Air Diary Challenge",
      issuer: "Youth4Nature Fellowship Program",
      year: "2026"
    }
  ],

  // -----------------------------------------------------------------------
  // 10. VOLUNTEERING WORKS
  // -----------------------------------------------------------------------
  volunteering: [
    {
      role: "Volunteer (Public Relations)",
      organization: "South Asian Network on Economic Modelling (SANEM)",
      description: "Supported public relations and participant engagement during the 8th SANEM Annual Economists' Conference."
    },
    {
      role: "Volunteer (Logistics)",
      organization: "Economics Study Center",
      description: "Assisted with logistics for the 6th and 7th Bangladesh Economics Summit."
    }
  ],

  // -----------------------------------------------------------------------
  // 11. LANGUAGES
  // -----------------------------------------------------------------------
  languages: [
    { name: "Bangla", proficiency: "Native" },
    { name: "English", proficiency: "Fluent (Duolingo English Test Score: 129)" }
  ]
};

if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
