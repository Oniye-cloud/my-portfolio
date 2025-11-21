import passwordStrengthChecker from "../assets/passwordstrenghtchecker.png";
import cybersecuritydashboard from "../assets/cybersecuritydashboard.png";
import portfolioimage1 from "../assets/portfolioimage1.png";
import ipchecker from "../assets/ipchecker.png";

const projects = [
  {
    id: 1,
    title: "A Cybersecurity Portfolio",
    image: portfolioimage1,
    description:
      "A cybersecurity Portfolio Built with React, Vite, and Tailwind CSS for responsive design.",
    tech: ["React", "Tailwind CSS", "Vite"],
    link: "https://my-portfolio-three-azure-95.vercel.app",
    github: "https://github.com/Oniye-cloud/my-portfolio.git",
  },
  {
    id: 2,
    title: "A Password Strenght Checker System",
    image: passwordStrengthChecker,
    description:
      "A Password Strenght Checker System. Built with React, Vite, and Firestore for real-time updates.",
    tech: ["React", "Tailwind CSS", "Vite"],
    link: "https://passwor-strenght-checker.vercel.app",
    github: "https://github.com/Oniye-cloud/passwor-strenght-checker.git",
  },
  {
    id: 3,
    title: "Ip Checker",
    image: ipchecker,
    description:
      "An IP Checker tool that allows users to look up information about an IP address, including its location, ISP, and other relevant details.",
    tech: ["HTML", "PYTHON", "CSS"],
    link: "https://ip-checker-a2pw.vercel.app/", //change this to urs
    github: "https://github.com/Oniye-cloud/ip-info-finder.git",
  },
  {
    id: 4,
    title: "Cybersecurity Dashboard",
    image: cybersecuritydashboard,
    description:
      "A Cybersecurity Dashboard that list some tools used in cybersecurity with details.",
    tech: ["React", "Vite", "Tailwind CSS", "Lucide Icons"],
    link: "https://ip-checker-a2pw.vercel.app/", //change this to urs
    github: "",
  }
];

export default projects;
