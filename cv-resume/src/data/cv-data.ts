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
      linkedin: "https://linkedin.com/in/yourprofile",
      github: "https://github.com/yourprofile",
    },
  },
  sections: {
    summary:
      "A versatile software engineer with over three years of experience in software development, data engineering and DevOps. Mastery in Python and its web framework and proficient in CI/CD Pipelines using Docker and Kubernetes. Skilled in optimizing processes and delivering innovative solutions to drive business growth.",
    experience: [
      {
        title: "Software Engineer",
        company: "TM Research & Development",
        date: "May 2023 - Current",
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
        institution: "Multimedia University",
        date: "June 2021",
        cgpa: "CGPA 3.64",
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
    ],
    awards: [
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
