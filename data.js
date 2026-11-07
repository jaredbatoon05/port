/**
 * =========================================================================
 * JARED L. BATOON — PORTFOLIO DATA CONFIGURATION
 * =========================================================================
 * All text, links, education history, skills, project items, and certificates
 * are centralized here for easy maintenance and instant updates.
 * =========================================================================
 */

const PORTFOLIO_DATA = {
  personal: {
    fullName: "Jared L. Batoon",
    shortName: "Jared Batoon",
    tagline: "BSCS Student & Aspiring Software Developer",
    welcomeHeading: "Welcome to My Portfolio",
    aboutHeading: "About Me",
    profileImage: "./assets/profile.jpg",
    bio: {
      intro: "Hello! I’m a Bachelor of Science in Computer Science (BSCS) student passionate about technology, programming, and learning new things. I enjoy exploring creative ideas, developing problem-solving skills, and expanding my knowledge across computer science and digital systems.",
      summary: "Currently completing my 4th Year BSCS milestone at Data Center College of the Philippines (2026–2027), with a solid academic foundation from San Quintin National High School. My goal is to become a skilled software developer and leverage modern programming, algorithms, and systems engineering to create meaningful, high-impact digital solutions."
    },
    location: "Vica Labaan, San Quintin, Abra, Philippines",
    statusBadge: "Available for Software Projects & Roles",
    contacts: {
      email: "jaredbatoon05@gmail.com",
      phone: "(0951) 973 2031",
      phoneRaw: "09519732031",
      location: "Vica Labaan, San Quintin, Abra",
      github: "https://github.com/jaredbatoon05",
      facebook: "https://www.facebook.com/not2red",
      messenger: "https://m.me/not2red"
    }
  },

  education: [
    {
      level: "Tertiary Education",
      school: "Data Center College of the Philippines",
      address: "Bangued, Abra, Philippines",
      course: "4th Year BSCS (Bachelor of Science in Computer Science)",
      year: "2026 – 2027",
      isCurrent: true
    },
    {
      level: "Secondary Education",
      school: "San Quintin National High School",
      address: "San Quintin, Abra, Philippines",
      year: "2022 – 2023",
      isCurrent: false
    }
  ],

  skills: [
    {
      title: "Computer Networking Basics",
      description: "Understanding of foundational network topologies, IP addressing, TCP/IP protocols, routers, switches, and local area network configurations.",
      icon: "network",
      tag: "Infrastructure"
    },
    {
      title: "Hardware Diagnostics & PC Maintenance",
      description: "Hands-on capability in diagnosing hardware malfunctions, component assembly, peripheral setup, and preventive system maintenance.",
      icon: "wrench",
      tag: "Hardware Support"
    },
    {
      title: "Web Application Development",
      description: "Building responsive, modern frontend interfaces and web applications using HTML5, CSS3, JavaScript, and user-centric UI frameworks.",
      icon: "code",
      tag: "Software Engineering"
    },
    {
      title: "Database Management & SQL",
      description: "Familiarity with relational database schemas, structured querying (SQL), table relationships, and data integrity management.",
      icon: "database",
      tag: "Data Systems"
    },
    {
      title: "Operating Systems & System Support",
      description: "Proficient in Windows and Linux environment configuration, system installation, troubleshooting software issues, and end-user support.",
      icon: "terminal",
      tag: "IT Operations"
    },
    {
      title: "Office Productivity & Documentation",
      description: "Skilled in Microsoft Office suite, cloud productivity software, technical documentation, and professional project reporting.",
      icon: "file-text",
      tag: "Productivity"
    }
  ],

  projects: [
    {
      id: "project-balai-ti-arjud",
      title: "Balai ti Arjud — Glow & Co. Beauty Lounge (Salon & Spa Web System)",
      category: "SALON & SPA BOOKING SYSTEM",
      badge: "Full-Stack Web App",
      description: "A comprehensive salon, spa, and beauty lounge management web application designed for Balai ti Arjud in Tayum, Abra. Features an interactive online appointment booking workflow across multiple services (hair, nails, lashes, facials, massage), promotional discount packages, user account management, and integrated Google Maps geolocation.",
      thumbnail: "./assets/projects/balai_ti_arjud/6.png",
      gallery: [
        {
          url: "./assets/projects/balai_ti_arjud/6.png",
          caption: "Storefront Hero & Booking Portal: welcoming clients with direct appointment booking and service discovery"
        },
        {
          url: "./assets/projects/balai_ti_arjud/5.png",
          caption: "Interactive Service Catalog: Manicure, Pedicure, Spa, Nail Art, and Brow/Lash extensions with pricing and instant 'Book Now' triggers"
        },
        {
          url: "./assets/projects/balai_ti_arjud/4.png",
          caption: "Promotional Offers & Anniversary Packages: Saturday massage discounts, date validation, and reservation prompts"
        },
        {
          url: "./assets/projects/balai_ti_arjud/1.png",
          caption: "Customer Account Authentication: seamless Login and Registration portal with appointment tracking"
        },
        {
          url: "./assets/projects/balai_ti_arjud/3.png",
          caption: "About Us & Geolocation: salon story, philosophy, and interactive Google Maps & Street View integration in Tayum, Abra"
        },
        {
          url: "./assets/projects/balai_ti_arjud/2.png",
          caption: "Customer Inquiry Desk & Message Center: structured contact form, operational schedule, and contact channels"
        }
      ]
    }
  ],

  certificates: [
    {
      id: "cert-dict-startup",
      title: "Understanding Startups & Getting Your Idea Ready for the Philippine Startup Challenge XI",
      issuer: "Department of Information and Communications Technology (DICT) — CAR",
      date: "September 7, 2026",
      image: "./assets/certs/cert-dict-startup.png",
      certId: "COP-WS11-2026-079",
      description: "Awarded for participating in the specialized DICT webinar providing practical insights on understanding tech startups, refining innovative concepts, and preparing for the Philippine Startup Challenge XI."
    },
    {
      id: "cert-dost-ihub",
      title: "Startup Now Cordillera: Exploring Programs, Funding, and Opportunities for Aspiring Startups",
      issuer: "DOST & iHub Innovation Hub — Cordillera Administrative Region",
      date: "September 2, 2026",
      image: "./assets/certs/cert-dost-ihub.webp",
      certId: "DOST-CAR-IHUB-2026",
      description: "Certificate of Participation for actively engaging in DOST's regional initiative exploring startup incubator programs, venture funding, and technological opportunities."
    },
    {
      id: "cert-dict-netiquette",
      title: "Online Safety Through Netiquette",
      issuer: "Department of Information and Communications Technology (DICT) Region II",
      date: "July 23, 2026",
      image: "./assets/certs/cert-dict-netiquette.webp",
      certId: "DICT-R02-2026-NET",
      description: "Recognized for commitment to responsible, ethical, and secure use of technology and cybersecurity best practices."
    }
  ],

  footer: {
    tagline: "Engineering meaningful software solutions through curiosity and code.",
    copyright: "© 2026 Jared L. Batoon. All rights reserved."
  }
};
