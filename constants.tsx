import React from "react";
import { Faculty, Benefit, NavLink } from "./types";
import {
  BookOpen,
  Users,
  Settings,
  Heart,
  Briefcase,
  GraduationCap,
  Code,
  Palette,
  Search,
  Compass,
} from "lucide-react";

export const NAV_LINKS: NavLink[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Faculties", path: "/faculties" },
  { name: "Our Philosophy", path: "/philosophy" },
  { name: "Life at IUSL", path: "/life" },
  { name: "Benefits", path: "/benefits" },
  { name: "Student Portal", path: "/portal" },
  { name: "Contact Us", path: "/contact" },
];

export const FACULTIES: Faculty[] = [
  {
    id: "engineering",
    name: "Faculty of Engineering",
    description:
      "Dedicated to fostering a culture of engineering excellence through innovation and research.",
    longDescription:
      "-Building Excellence, Inspiring Innovation, and Shaping the Future At the Faculty of Engineering at the IUSL Campus, we are dedicated to fostering a culture of engineering excellence, offering a range of engineering degrees, including civil engineering courses, all of which can be followed both online and in-person. Our faculty is committed to inspiring innovation, providing cutting-edge education, and preparing the next generation of engineers to address global challenges. For those who may require an additional grounding prior to beginning their engineering modules, suitable foundation courses are also offered.",
    courses: [
      "Civil Engineering",
      "Electrical Engineering",
      "Mechanical Engineering",
      "Foundation in Engineering",
    ],
    imageUrl: "engineering.webp",
    icon: "Settings",
  },
  {
    id: "science",
    name: "Faculty of Science",
    description:
      "Excellence in health education, research, and practice for a healthier tomorrow.",
    longDescription:
      "-Empowering Wellness, Advancing Healthcare At the Science faculty of the IUSL, we are committed to excellence in health education, research, and practice. Our faculty offers foundation courses for those who require an initial bridge from their secondary education, to degrees in science and sport as well as courses in the agriculture sector.",
    courses: [
      "Health Science",
      "Sport Science",
      "Agricultural Science",
      "Foundation in Science",
    ],
    imageUrl: "science.webp",
    icon: "Search",
  },
  {
    id: "business",
    name: "Faculty of Business Management",
    description:
      "Nurturing the next generation of visionary business leaders and entrepreneurs.",
    longDescription:
      "-Empowering Leaders, Driving Innovation At the Faculty of Business Management at the IUSL Campus, we are dedicated to nurturing the next generation of business leaders. Our faculty offers a comprehensive business management degree, covering the length and breadth of business management knowledge; along with suitable foundation courses, particularly business management foundation courses to prime all students for this field of study.",
    courses: [
      "Business Management",
      "HR Management",
      "Marketing",
      "Business Foundation",
    ],
    imageUrl: "business.webp",
    icon: "Briefcase",
  },
  {
    id: "computing",
    name: "Faculty of Computing",
    description:
      "Shaping the digital future with industry-leading AI and computer science programs.",
    longDescription:
      "Empowering Innovators, Shaping the Digital Future At the Faculty of Computing at the IUSL Campus, where we are dedicated to nurturing future innovators and technology leaders. Our faculty is geared to catering to the ever-changing needs of the most rapidly evolving field in the world, currently offering one of the best AI courses in Sri Lanka, alongwith its up-to-date computer science degrees and BIT courses.",
    courses: [
      "Computer Science",
      "Artificial Intelligence",
      "BIT (UCSC)",
      "Web Development",
    ],
    imageUrl: "computing.webp",
    icon: "Code",
  },
  {
    id: "arts",
    name: "Faculty of Arts",
    description:
      "Celebrating creativity and the richness of human expression through language and arts.",
    longDescription:
      "Cultivating Creativity, Inspiring Expression The Faculty of Arts at IUSL Campus, celebrates the power of creativity and the richness of human expression. Our faculty’s primary focus is on language courses, and offers a highly sought after Bachelor of Arts degree in Sri Lanka. Furthermore, this faculty carries out a law foundation course which can be leveraged as a stepping stone for further studies in the legal field",
    courses: [
      "Languages",
      "Bachelor of Arts",
      "Law Foundation",
      "Jewellery Design",
    ],
    imageUrl: "arts.webp",
    icon: "Palette",
  },
  {
    id: "buddhist",
    name: "Faculty of Buddhist Studies",
    description:
      "Exploring ancient wisdom and Buddhist philosophy in a modern context.",
    longDescription:
      "Nurturing Wisdom, Cultivating Compassion The Faculty of Buddhist Studies at the IUSL explores and decimates the teachings of the Buddhist philosophy. Certificate courses in Buddhist studies may be followed online, in addition to the foundation courses which embrace the rich legacy of the religion..",
    courses: [
      "Buddhist Philosophy",
      "Certificate in Buddhist Studies",
      "Pali & Sanskrit",
    ],
    imageUrl: "buddhist.webp",
    icon: "Compass",
  },
];

export const BENEFITS: Benefit[] = [
  {
    title: "Personalised Education",
    description:
      "Within our framework, students have the flexibility of selecting major and minor modules based on their preferences.",
    icon: "User",
  },
  {
    title: "Workforce Ready",
    description:
      "All our courses are carefully curated to ensure graduate employment stays at its peak at all times.",
    icon: "Target",
  },
  {
    title: "Early Career Start",
    description:
      "Our foundation courses mean students can get an early start on their careers right after O/Ls.",
    icon: "Rocket",
  },
  {
    title: "Modern Facilities",
    description:
      "Equipped with the knowhow to carry out unique research in modern facilities.",
    icon: "Home",
  },
];
