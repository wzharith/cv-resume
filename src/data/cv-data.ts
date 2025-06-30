export interface CVData {
  header: {
    name: string;
    title: string;
    contact: {
      phone: string;
      email: string;
      location: string;
      linkedin: string;
      github: string;
    };
  };
  sections: {
    summary: string;
    experience: Array<{
      title: string;
      company: string;
      date: string;
      points: string[];
    }>;
    education: Array<{
      degree: string;
      institution: string;
      date: string;
      cgpa: string;
    }>;
    skills: string[];
    certifications: Array<{
      name: string;
      issuer: string;
      date: string;
      verification?: string;
    }>;
    awards: Array<{
      title: string;
      issuer: string;
      date: string;
    }>;
  };
}

export const cvData: CVData = {
  header: {
    name: "Wan Zulmuhammad Harith Bin Wan Zaulkfli",
    title: "Senior Software Engineer",
    contact: {
      phone: "+6017 404 7441",
      email: "wzharith@gmail.com",
      location: "Cyberjaya, Selangor",
      linkedin: "https://linkedin.com/in/wzharith",
      github: "https://github.com/wzharith",
    },
  },
  sections: {
    summary:
      "Versatile software engineer with 4+ years of experience in software development, data engineering, and DevOps. Proficient in Python, Django, Docker, Kubernetes, and CI/CD pipelines, with a proven track record of optimizing deployment processes and improving system performance. Passionate about open-source contributions, emerging technologies, and mentoring junior developers to foster collaborative growth. Skilled in designing scalable microservices, REST APIs, and AI-powered solutions to drive business innovation.",
    experience: [
      {
        title: "Software Engineer",
        company: "SEEK Asia",
        date: "July 2025 - Current",
        points: [
          "Coming soon. To be explored!",
        ],
      },
      {
        title: "Platform Engineer",
        company: "TM Research & Development",
        date: "Feb 2025 - June 2025",
        points: [
          "Designing, deploying, and maintaining scalable and secure platform solutions to support software development and deployment",
          "Managing and troubleshooting Kubernetes clusters, containerized applications, and cloud-native solutions while collaborating with cross-functional teams to enhance platform health and reliability",
          "Implemented monitoring & logging tools (Prometheus, Alloy, Loki) integrated to Grafana, improving debugging efficiency.",
          "Advocate the use of Helm for deploying in Kubernetes",
        ],
      },
      {
        title: "Software Engineer",
        company: "TM Research & Development",
        date: "May 2023 - Feb 2025",
        points: [
          "Led Backend Engineering team & Support Delivery Lead for 2 mission-critical commercial projects",
          "Spearhead DevOps initiatives, streamlining CI/CD pipelines resulting in a 70% reduction in deployment time",
          "Optimize Kubernetes practices, enhancing container orchestration for improved scalability",
          "Developed and deployed over 80+ REST APIs used by multiple projects",
        ],
      },
      {
        title: "Data Scientist",
        company: "TM Research & Development",
        date: "July 2021 - May 2023",
        points: [
          "Led development of AI-powered interactive chatbot enabling personalized user interactions",
          "Automated FTP File Transfer for 30+ directories",
          "Contributed to Mobile Intelligent Network Diagnostic System design",
        ],
      },
    ],
    education: [
      {
        degree: "Bachelor of Computer Science (Honors) in Data Science",
        institution: "Multimedia University (MMU) Cyberjaya",
        date: "June 2021",
        cgpa: "CGPA 3.64",
      },
      {
        degree: "Foundation in IT",
        institution: "Multimedia University(MMU) Cyberjaya",
        date: "June 2018",
        cgpa: "CGPA 3.51",
      },
      {
        degree: "Sijil Pelajaran Malaysia (SPM)",
        institution: "SM Sains Alam Shah (ASiS), Kuala Lumpur",
        date: "Nov 2016",
        cgpa: "7A 2B",
      },
    ],
    skills: [
      "Python",
      "Docker",
      "Kubernetes",
      "OpenShift",
      "GitLab CI/CD",
      "Bash Scripting",
      "Linux",
      "Redis",
      "MySQL",
      "MongoDB",
      "PostgreSQL",
      "ElasticSearch",
    ],
    certifications: [
      {
        name: "Huawei SDN NCE-IP Solution Operation",
        issuer: "Huawei",
        date: "Nov 2023",
      },
      {
        name: "Microsoft Certified: Data Analyst Associate",
        issuer: "Microsoft",
        date: "Oct 2021",
      },
      {
        name: "PCEP - Certified Entry-Level Python Programmer",
        issuer: "Python",
        date: "Sept 2021",
        verification: "https://verify.openedg.org/?id=uhgy.Nbve.4qCw",
      },
      {
        name: "Huawei Certified ICT Associate - Artificial Intelligence",
        issuer: "Huawei",
        date: "August 2021",
        verification:
          "https://e.huawei.com/en/talent/#/cert/certificate-verification/",
      },
    ],
    awards: [
      {
        title: "1st Place Team Excellence GCEO Awards (G-AISHA)",
        issuer: "Group CEO of Telekom Malaysia Berhad, Amar Huzaimi Md Deris",
        date: "29 May 2025",
      },
      {
        title: "TM R&D CEO Spot Reward (G-AISHA)",
        issuer: "CEO of TM R&D, Dr. Sharlene Thiagarajah",
        date: "4 December 2024",
      },
      {
        title: "Digital Transformation of the Year (2024)",
        issuer: "WITSA Global Innovation and Tech Excellence Awards",
        date: "6 October 2024",
      },
      {
        title: "Second Stage of MaGIC University Startup Challenge",
        issuer: "MaGIC",
        date: "2021",
      },
      {
        title: "Dean's List Award",
        issuer: "Multimedia University",
        date: "2019",
      },
    ],
  },
};
