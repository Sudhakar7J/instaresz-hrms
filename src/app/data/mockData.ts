export interface PaymentMethod {
  cardholderName: string;
  accountNumber: string;
  expiration: string;
  type: string;
}

export interface Event {
  id: string;
  title: string;
  time: string;
  type: string;
  color?: string;
}

export interface Employee {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  department: string;
  jobTitle: string;
  designation?: string;
  status?: string;
  attendance?: string;
  phone?: string;
  workHours?: string;
  contractType?: string;
}

export interface WorkHours {
  date: string;
  hours: number;
  overtime?: number;
}

export interface LeaveApplication {
  id: string;
  employeeId: string;
  leaveType: string;
  status: string;
  days: number;
  fromDate: string;
  toDate: string;
}

// Payment method data
export const paymentData: PaymentMethod = {
  cardholderName: "Rocks Company Ltd",
  accountNumber: "•••• •••• •••• 6273",
  expiration: "12/28",
  type: "Debit Card",
};

// January events data
export const januaryEvents: Event[] = [
  {
    id: "1",
    title: "Elanore Maggie",
    time: "UI UX Designer • Sick Leave",
    type: "",
    color: "",
  },
  {
    id: "2",
    title: "Kevin Malona",
    time: "UI UX Designer • Annual Leave",
    type: "",
    color: "",
  },
  {
    id: "3",
    title: "Jeremy Gemoy",
    time: "Graphic Design • Work From Home",
    type: "",
    color: "",
  },
];

// January events data - Birthdays
export const birthdayEvents: Event[] = [
  {
    id: "1",
    title: "Anna Johnson",
    time: "UI UX Designer • Jan 15",
    type: "",
    color: "",
  },
  {
    id: "2",
    title: "Robert Williams",
    time: "Frontend Developer • Jan 22",
    type: "",
    color: "",
  },
  {
    id: "3",
    title: "Sarah Thompson",
    time: "Project Manager • Jan 28",
    type: "",
    color: "",
  },
];

// Today's schedule
export const todaySchedule: Event[] = [
  {
    id: "1",
    title: "Online Interview with UI Candidate",
    time: "09:35",
    type: "interview",
    color: "#4caf50",
  },
  {
    id: "2",
    title: "Weekly meeting",
    time: "13:00",
    type: "meeting",
    color: "#ffb74d",
  },
  {
    id: "3",
    title: "Psychology test",
    time: "17:00",
    type: "test",
    color: "#ce93d8",
  },
  {
    id: "4",
    title: "Replying email to applicants",
    time: "15:00",
    type: "email",
    color: "#b0bec5",
  },
];

// Employee data
export const employeeData: Employee[] = [
  {
    id: "1",
    name: "Brooklyn Simmons",
    email: "brook.simmons@example.com",
    department: "Design",
    jobTitle: "UI Designer",
    status: "Active",
  },
  {
    id: "2",
    name: "Cody Fisher",
    email: "cody.fisher@example.com",
    department: "Development",
    jobTitle: "Front-End",
    status: "Active",
  },
  {
    id: "3",
    name: "Ralph Edwards",
    email: "ralph.edwards@example.com",
    department: "Design",
    jobTitle: "UX Designer",
    status: "Active",
  },
];

// Member work hours data
export const workHoursData: WorkHours[] = [
  { date: "Jan 24", hours: 7.4, overtime: 1.2 },
  { date: "Jan 25", hours: 8.1, overtime: 0 },
  { date: "Jan 26", hours: 7.8, overtime: 2.5 },
  { date: "Jan 27", hours: 7.9, overtime: 0 },
  { date: "Jan 28", hours: 7.5, overtime: 1.4 },
  { date: "Jan 29", hours: 5.0, overtime: 0 },
  { date: "Jan 30", hours: 4.0, overtime: 0 },
];

// Employee details
export const employeeDetails: Employee[] = [
  {
    id: "1",
    name: "Brooklyn Simmons",
    email: "brook-simms@gmail.com",
    department: "Design",
    jobTitle: "Creative Director",
    attendance: "10h 30m",
    phone: "(+62) 928 7273 7262",
    workHours: "120h 32m",
    contractType: "Onsite - Fulltime",
  },
  {
    id: "2",
    name: "Cody Fisher",
    email: "cody.fisher@example.com",
    department: "Development",
    jobTitle: "Head of Development",
    attendance: "12h 15m",
    phone: "(+62) 928 7273 7262",
    workHours: "135h 20m",
    contractType: "Onsite - Fulltime",
  },
  {
    id: "3",
    name: "Ralph Edwards",
    email: "ralph.edwards@example.com",
    department: "Design",
    jobTitle: "Sr. UX Designer",
    attendance: "9h 45m",
    phone: "(+62) 928 7273 7262",
    workHours: "115h 15m",
    contractType: "Onsite - Fulltime",
  },
  {
    id: "4",
    name: "Bessie Cooper",
    email: "bessie.cooper@example.com",
    department: "Human Resource",
    jobTitle: "Sr. HR",
    attendance: "8h 20m",
    phone: "(+62) 928 7273 7262",
    workHours: "110h 50m",
    contractType: "Onsite - Fulltime",
  },
  {
    id: "5",
    name: "Leslie Alexander",
    email: "leslie.alexander@example.com",

    department: "Human Resource",
    jobTitle: "Head of HR",
    attendance: "11h 05m",
    phone: "(+62) 928 7273 7262",
    workHours: "125h 45m",
    contractType: "Onsite - Fulltime",
  },
  {
    id: "6",
    name: "Marjorie Jade",
    email: "marjorie.jade@example.com",

    department: "Project Manager",
    jobTitle: "Sr. Project Manager",
    attendance: "9h 35m",
    phone: "(+62) 928 7273 7262",
    workHours: "118h 25m",
    contractType: "Onsite - Fulltime",
  },
  {
    id: "7",
    name: "James Wilson",
    email: "james_wil@example.com",

    department: "Development",
    jobTitle: "QA Engineering",
    attendance: "10h 10m",
    phone: "(+62) 928 7273 7262",
    workHours: "122h 30m",
    contractType: "Onsite - Fulltime",
  },
  {
    id: "8",
    name: "Anna Kimble",
    email: "anna_kim@example.com",

    department: "Business & Marketing",
    jobTitle: "Business Development",
    attendance: "8h 55m",
    phone: "(+62) 928 7273 7262",
    workHours: "114h 15m",
    contractType: "Onsite - Fulltime",
  },
];

// Different schedule data for each day
export const jan28Schedule: Event[] = [
  {
    id: "1",
    title: "Online Interview with UI Candidate",
    time: "09:35",
    type: "interview",
    color: "#4caf50",
  },
  {
    id: "2",
    title: "Weekly meeting",
    time: "13:00",
    type: "meeting",
    color: "#ffb74d",
  },
  {
    id: "3",
    title: "Psychology test",
    time: "17:00",
    type: "test",
    color: "#ce93d8",
  },
  {
    id: "4",
    title: "Replying email to applicants",
    time: "15:00",
    type: "email",
    color: "#b0bec5",
  },
];

export const jan29Schedule: Event[] = [
  {
    id: "1",
    title: "Team standup",
    time: "08:30",
    type: "meeting",
    color: "#ffb74d",
  },
  {
    id: "2",
    title: "Code review session",
    time: "10:00",
    type: "meeting",
    color: "#4caf50",
  },
  {
    id: "3",
    title: "Project planning",
    time: "14:30",
    type: "meeting",
    color: "#90caf9",
  },
];

export const jan30Schedule: Event[] = [
  {
    id: "1",
    title: "Design review",
    time: "09:00",
    type: "meeting",
    color: "#ffb74d",
  },
  {
    id: "2",
    title: "Client presentation",
    time: "11:00",
    type: "meeting",
    color: "#f44336",
  },
];

// Leave applications
export const leaveApplications: LeaveApplication[] = [
  {
    id: "1",
    employeeId: "2", // Ralph Edwards
    leaveType: "Sick Leave",
    status: "Pending",
    days: 4,
    fromDate: "Jan 23, 2024",
    toDate: "Jan 27, 2024",
  },
  {
    id: "2",
    employeeId: "1", // Brooklyn Simmons
    leaveType: "Annual Leave",
    status: "Approved",
    days: 7,
    fromDate: "Feb 15, 2024",
    toDate: "Feb 22, 2024",
  },
];

// Job Listing interface
export interface JobListing {
  id: string;
  title: string;
  description: string;
  department: string;
  jobType: "Full Time" | "Part Time";
  workMode: "Remote" | "Onsite" | "Hybrid";
  activeUntil: string;
  status: "Active" | "Closed";
  location?: string;
  detailedDescription?: {
    aboutCompany?: string;
    responsibilities?: string[];
    requirements?: string[];
  };
}

// Job listings data
export const jobListings: JobListing[] = [
  {
    id: "1",
    title: "UI/UX Designer",
    description:
      "Gathering and evaluating user requirements, in collaboration with product managers and engineers",
    department: "Design",
    jobType: "Full Time",
    workMode: "Onsite",
    activeUntil: "Jan 31, 2024",
    status: "Active",
    location: "Onsite Indonesia, Jakarta",
    detailedDescription: {
      aboutCompany:
        "We craft digital products for business and user goals. Help find solutions with UI / UX designs that are intuitive and in accordance with client business goals. We provide a high-quality service in UI/ UX Design & Development. We craft digital products for businesses in achieving user goals by providing intuitive solutions. We have worked with a vast number clients who have different backgrounds such as construction, insurance, health, marketing, cryptocurrency, stocks, games, startup, real estate and many others.",
      responsibilities: [
        "Work as a User Interface Designer for our B2B SaaS product along with stakeholders",
        "Translate client briefs into a clear, user-friendly interface design and interactions. Develop both low and high-fidelity mockups.",
        "Testing out design assumptions and usability level of your design. Validate your design decisions through user feedback, iterate your designs based on that feedback, and meticulously document the process.",
        "Work closely with a team of project managers, client stakeholders, researchers, and content designers.",
        "Conduct user research and evaluate user feedback",
      ],
      requirements: [
        "A mid level product designer with min. 3 years of experience.",
        "A designer with a strong UX and UI portfolio that demonstrates problem-solving skills, design methods, and craftsmanship.",
        "An organized designer that always documents their works, Figma files, and research reports.",
        "Comfortable with fast-paced work environments, context switching, and excited to drive the projects forwards.",
        "Able to explain your design process, outcome, and decisions that you've made.",
      ],
    },
  },
  {
    id: "2",
    title: "Junior Frontend Developer",
    description:
      "Assist in developing and maintaining web applications. Must have a basic understanding in creating user interfaces for applications.",
    department: "Development",
    jobType: "Full Time",
    workMode: "Remote",
    activeUntil: "Jan 31, 2024",
    status: "Active",
    detailedDescription: {
      aboutCompany:
        "Join our dynamic development team building cutting-edge web applications. We foster a collaborative environment where learning and growth are encouraged.",
      responsibilities: [
        "Assist senior developers in building and testing user interfaces.",
        "Write clean, maintainable HTML, CSS, and JavaScript.",
        "Collaborate with designers to implement UI designs.",
        "Debug and troubleshoot frontend issues.",
        "Learn and apply new web technologies.",
      ],
      requirements: [
        "Basic understanding of HTML, CSS, and JavaScript.",
        "Familiarity with a frontend framework (React, Vue, Angular) is a plus.",
        "Eagerness to learn and grow in a fast-paced environment.",
        "Good communication and teamwork skills.",
        "Portfolio showcasing personal projects or coursework.",
      ],
    },
  },
  {
    id: "3",
    title: "Motion Graphic Designer",
    description:
      "We are looking for a Motion Graphic Designer to animate static designs and create visual effects that will work nicely with the marketing team, video production.",
    department: "Design",
    jobType: "Full Time",
    workMode: "Onsite",
    activeUntil: "Jan 31, 2024",
    status: "Active",
    detailedDescription: {
      aboutCompany:
        "We are a creative agency specializing in compelling visual storytelling. Our team produces high-quality animations and videos for a diverse range of clients.",
      responsibilities: [
        "Create engaging motion graphics for marketing campaigns, social media, and video productions.",
        "Animate static designs and illustrations.",
        "Collaborate with the creative team to develop visual concepts.",
        "Ensure brand consistency across all animated content.",
        "Stay updated on motion design trends and software.",
      ],
      requirements: [
        "Proven experience as a Motion Graphic Designer.",
        "Proficiency in Adobe After Effects, Premiere Pro, and Illustrator.",
        "Strong portfolio showcasing animation skills.",
        "Understanding of design principles, typography, and color theory.",
        "Ability to work independently and meet deadlines.",
      ],
    },
  },
  {
    id: "4",
    title: "SEO Specialist",
    description:
      "Looking for an SEO specialist to optimize our website to ensure the site is accessible and easy to follow and for increased marketing reach.",
    department: "Business and Marketing",
    jobType: "Full Time",
    workMode: "Onsite",
    activeUntil: "Jan 31, 2024",
    status: "Active",
    detailedDescription: {
      aboutCompany:
        "A leading digital marketing agency focused on driving organic growth for our clients through strategic SEO practices.",
      responsibilities: [
        "Conduct keyword research and analysis.",
        "Optimize website content, landing pages, and paid search copy.",
        "Develop and implement link building strategies.",
        "Monitor and analyze SEO performance using tools like Google Analytics and SEMrush.",
        "Stay up-to-date with SEO and digital marketing trends.",
      ],
      requirements: [
        "Proven SEO experience.",
        "In-depth knowledge of keyword research, SEO copywriting, and the behaviors of search engines.",
        "Experience with website analytics tools (e.g., Google Analytics, NetInsight, Omniture, WebTrends).",
        "Familiarity with HTML, CSS, and JavaScript from an SEO perspective.",
        "Strong analytical and problem-solving skills.",
      ],
    },
  },
  {
    id: "5",
    title: "Project Assistant Manager",
    description:
      "Ensure that the project complies with the schedule, rules and regulations. Manage and coordinate with the entire team.",
    department: "Project Manager",
    jobType: "Full Time",
    workMode: "Remote",
    activeUntil: "Jan 31, 2024",
    status: "Active",
    detailedDescription: {
      aboutCompany:
        "We manage complex projects across various industries, ensuring timely delivery and client satisfaction. Join our organized and efficient project management team.",
      responsibilities: [
        "Assist the Project Manager in planning, executing, and monitoring projects.",
        "Coordinate project activities and resource allocation.",
        "Track project progress and report on milestones and deliverables.",
        "Facilitate communication between team members and stakeholders.",
        "Help manage project documentation and risks.",
      ],
      requirements: [
        "Proven experience in project coordination or assistant project management.",
        "Strong organizational and multitasking skills.",
        "Excellent communication and interpersonal abilities.",
        "Proficiency in project management software (e.g., Jira, Asana, Trello).",
        "Understanding of project management methodologies.",
      ],
    },
  },
  {
    id: "6",
    title: "Intern Graphic Design",
    description:
      "Design illustrations, logos or other designs using software or by hand. Work with copywriters and creative director using the company brand assets.",
    department: "Design",
    jobType: "Full Time",
    workMode: "Onsite",
    activeUntil: "Jan 31, 2024",
    status: "Active",
    detailedDescription: {
      aboutCompany:
        "A vibrant design studio seeking a creative intern to support our design team on various projects. Gain hands-on experience in a professional setting.",
      responsibilities: [
        "Assist senior designers with design tasks for print and digital media.",
        "Create illustrations, logos, and layouts based on briefs.",
        "Prepare files for print and web production.",
        "Learn and apply brand guidelines.",
        "Participate in team brainstorming sessions.",
      ],
      requirements: [
        "Currently pursuing or recently completed a degree in Graphic Design or a related field.",
        "Basic knowledge of Adobe Creative Suite (Photoshop, Illustrator, InDesign).",
        "A portfolio demonstrating design skills and creativity.",
        "Eagerness to learn and take direction.",
        "Good communication skills.",
      ],
    },
  },
  {
    id: "7",
    title: "3D Animation (Junior-Middle)",
    description:
      "Using 3D modeling, texturing, mapping, and other techniques to create graphics, visual effect and animation.",
    department: "Design",
    jobType: "Full Time",
    workMode: "Onsite",
    activeUntil: "Jan 31, 2024",
    status: "Active",
    detailedDescription: {
      aboutCompany:
        "An innovative animation studio creating stunning 3D visuals for games, films, and advertising. We push the boundaries of digital art.",
      responsibilities: [
        "Create high-quality 3D models, textures, and animations.",
        "Work from concept art and storyboards.",
        "Collaborate with the art director and other animators.",
        "Optimize assets for real-time rendering or pre-rendered sequences.",
        "Rig and skin characters and objects.",
      ],
      requirements: [
        "1-3 years of experience in 3D modeling and animation.",
        "Proficiency in 3D software (e.g., Maya, Blender, 3ds Max).",
        "Strong portfolio showcasing 3D work.",
        "Understanding of animation principles, timing, and weight.",
        "Ability to take feedback and iterate on work.",
      ],
    },
  },
  {
    id: "8",
    title: "Senior Web Developer",
    description:
      "Able to communicate well and collaborate with other dev teams. Have strong skills in problem solving and debugging.",
    department: "Development",
    jobType: "Full Time",
    workMode: "Remote",
    activeUntil: "Jan 31, 2024",
    status: "Active",
    detailedDescription: {
      aboutCompany:
        "A technology company building scalable and robust web applications for enterprise clients. We value clean code, collaboration, and continuous improvement.",
      responsibilities: [
        "Lead the design and development of complex web applications.",
        "Mentor junior developers and conduct code reviews.",
        "Collaborate with product managers and designers to define requirements.",
        "Architect scalable backend systems and APIs.",
        "Ensure code quality, performance, and security.",
      ],
      requirements: [
        "5+ years of experience in web development (frontend and/or backend).",
        "Expertise in relevant technologies (e.g., Node.js, Python, Java, React, SQL/NoSQL databases).",
        "Strong understanding of software architecture and design patterns.",
        "Experience with cloud platforms (AWS, Azure, GCP).",
        "Excellent problem-solving and communication skills.",
      ],
    },
  },
  {
    id: "9",
    title: "Marketing Specialist",
    description:
      "Develop marketing campaigns, create content for various channels, and analyze marketing metrics to optimize campaign performance.",
    department: "Business and Marketing",
    jobType: "Full Time",
    workMode: "Hybrid",
    activeUntil: "Dec 15, 2023",
    status: "Closed",
    detailedDescription: {
      aboutCompany:
        "A fast-growing company looking for a versatile Marketing Specialist to drive brand awareness and lead generation across multiple channels.",
      responsibilities: [
        "Develop and execute integrated marketing campaigns.",
        "Create engaging content for blogs, social media, email, and website.",
        "Manage social media presence and community engagement.",
        "Analyze marketing data and report on campaign performance.",
        "Collaborate with sales and product teams.",
      ],
      requirements: [
        "Proven experience as a Marketing Specialist or similar role.",
        "Solid understanding of digital marketing channels (SEO, SEM, social media, email marketing).",
        "Experience with marketing automation and CRM tools.",
        "Excellent writing and communication skills.",
        "Strong analytical skills and data-driven thinking.",
      ],
    },
  },
  {
    id: "10",
    title: "Backend Developer",
    description:
      "Design and implement server-side applications using Node.js and Express. Experience with MongoDB and REST API development required.",
    department: "Development",
    jobType: "Full Time",
    workMode: "Remote",
    activeUntil: "Dec 20, 2023",
    status: "Closed",
    detailedDescription: {
      aboutCompany:
        "We are building the next generation of backend services powering innovative applications. Join our team of experienced engineers.",
      responsibilities: [
        "Design, develop, and maintain scalable backend APIs and services.",
        "Work with databases (SQL and NoSQL) to store and retrieve data efficiently.",
        "Implement security best practices.",
        "Write unit and integration tests.",
        "Collaborate with frontend developers and DevOps.",
      ],
      requirements: [
        "Proven experience as a Backend Developer.",
        "Proficiency in backend languages (e.g., Node.js, Python, Go, Java).",
        "Experience with RESTful API design and implementation.",
        "Strong understanding of database concepts.",
        "Familiarity with containerization (Docker) and CI/CD pipelines.",
      ],
    },
  },
  {
    id: "11",
    title: "Product Manager",
    description:
      "Lead product development from conception to launch. Collaborate with design, engineering, and marketing teams to create user-centered products.",
    department: "Project Manager",
    jobType: "Full Time",
    workMode: "Onsite",
    activeUntil: "Dec 31, 2023",
    status: "Closed",
    detailedDescription: {
      aboutCompany:
        "A product-led organization focused on creating exceptional user experiences. We empower our Product Managers to own their products from strategy to execution.",
      responsibilities: [
        "Define product vision, strategy, and roadmap.",
        "Gather and prioritize product requirements from users, stakeholders, and market research.",
        "Work closely with engineering, design, and marketing teams.",
        "Launch new products and features.",
        "Analyze product performance and iterate based on data.",
      ],
      requirements: [
        "Proven experience as a Product Manager in a tech company.",
        "Strong understanding of the product development lifecycle.",
        "Excellent communication, presentation, and leadership skills.",
        "Ability to analyze data and make informed decisions.",
        "Technical background or strong understanding of technology is a plus.",
      ],
    },
  },
  {
    id: "12",
    title: "Data Analyst",
    description:
      "Analyze large datasets to extract meaningful insights. Create reports and visualizations to communicate findings to stakeholders.",
    department: "Business and Marketing",
    jobType: "Part Time",
    workMode: "Remote",
    activeUntil: "Jan 05, 2024",
    status: "Closed",
    detailedDescription: {
      aboutCompany:
        "Leveraging data to drive business decisions. Our analytics team works across departments to uncover insights and optimize performance.",
      responsibilities: [
        "Collect, clean, and analyze data from various sources.",
        "Identify trends, patterns, and insights in data.",
        "Create reports, dashboards, and visualizations to communicate findings.",
        "Support business units with ad-hoc data requests.",
        "Develop and maintain data models.",
      ],
      requirements: [
        "Proven experience as a Data Analyst.",
        "Proficiency in SQL and data analysis tools (e.g., Python/R, Excel, Tableau/Power BI).",
        "Strong analytical and problem-solving skills.",
        "Excellent attention to detail.",
        "Ability to communicate complex findings clearly.",
      ],
    },
  },
];

// Candidate interface
export interface Candidate {
  id: string;
  jobId: string;
  name: string;
  email: string;
  avatar?: string;
  status: "Sourced" | "In Progress" | "Interview" | "Hired" | "Rejected";
  appliedDate: string;
  resume?: string;
  coverLetter?: string;
}

// Candidates data
export const candidates: Candidate[] = [
  {
    id: "1",
    jobId: "1", // UI/UX Designer
    name: "Emily Johnson",
    email: "emily.johnson@example.com",

    status: "Interview",
    appliedDate: "Jan 15, 2024",
    resume: "Resume-Emily-Johnson.pdf",
  },
  {
    id: "2",
    jobId: "1", // UI/UX Designer
    name: "Michael Chen",
    email: "michael.chen@example.com",

    status: "In Progress",
    appliedDate: "Jan 17, 2024",
    resume: "Resume-Michael-Chen.pdf",
    coverLetter: "Cover-Letter-Michael-Chen.pdf",
  },
  {
    id: "3",
    jobId: "1", // UI/UX Designer
    name: "Sophia Rodriguez",
    email: "sophia.r@example.com",
    status: "Sourced",
    appliedDate: "Jan 20, 2024",
  },
  {
    id: "4",
    jobId: "2", // Junior Frontend Developer
    name: "David Kim",
    email: "david.kim@example.com",

    status: "In Progress",
    appliedDate: "Jan 18, 2024",
    resume: "Resume-David-Kim.pdf",
  },
  {
    id: "5",
    jobId: "2", // Junior Frontend Developer
    name: "Emma Wilson",
    email: "emma.w@example.com",
    status: "Hired",
    appliedDate: "Jan 10, 2024",
    resume: "Resume-Emma-Wilson.pdf",
    coverLetter: "Cover-Letter-Emma-Wilson.pdf",
  },
  {
    id: "6",
    jobId: "3", // Motion Graphic Designer
    name: "Olivia Martinez",
    email: "olivia.m@example.com",
    status: "Sourced",
    appliedDate: "Jan 21, 2024",
  },
  {
    id: "7",
    jobId: "4", // SEO Specialist
    name: "William Garcia",
    email: "will.garcia@example.com",
    status: "Interview",
    appliedDate: "Jan 19, 2024",
    resume: "Resume-William-Garcia.pdf",
  },
  {
    id: "8",
    jobId: "5", // Project Assistant Manager
    name: "Ava Brown",
    email: "ava.b@example.com",
    status: "In Progress",
    appliedDate: "Jan 22, 2024",
    resume: "Resume-Ava-Brown.pdf",
    coverLetter: "Cover-Letter-Ava-Brown.pdf",
  },
  {
    id: "9",
    jobId: "6", // Intern Graphic Design
    name: "Noah Davis",
    email: "noah.davis@example.com",
    status: "Hired",
    appliedDate: "Jan 12, 2024",
  },
  {
    id: "10",
    jobId: "7", // 3D Animation
    name: "Isabella Miller",
    email: "isabella.m@example.com",
    status: "Sourced",
    appliedDate: "Jan 23, 2024",
  },
  {
    id: "11",
    jobId: "8", // Senior Web Developer
    name: "James Rodriguez",
    email: "james.r@example.com",
    status: "Interview",
    appliedDate: "Jan 16, 2024",
    resume: "Resume-James-Rodriguez.pdf",
  },
  {
    id: "12",
    jobId: "9", // Marketing Specialist
    name: "Charlotte Wilson",
    email: "charlotte.w@example.com",
    status: "Rejected",
    appliedDate: "Dec 10, 2023",
    resume: "Resume-Charlotte-Wilson.pdf",
  },
  {
    id: "13",
    jobId: "10", // Backend Developer
    name: "Liam Anderson",
    email: "liam.a@example.com",
    status: "Hired",
    appliedDate: "Dec 18, 2023",
    resume: "Resume-Liam-Anderson.pdf",
  },
  {
    id: "14",
    jobId: "11", // Product Manager
    name: "Mia Thomas",
    email: "mia.thomas@example.com",
    status: "In Progress",
    appliedDate: "Dec 28, 2023",
    resume: "Resume-Mia-Thomas.pdf",
    coverLetter: "Cover-Letter-Mia-Thomas.pdf",
  },
  {
    id: "15",
    jobId: "12", // Data Analyst
    name: "Benjamin Jackson",
    email: "ben.jackson@example.com",
    status: "Sourced",
    appliedDate: "Jan 02, 2024",
  },
];

// Add payroll interfaces and mock data
// Payroll interfaces
export interface PayrollRecord {
  id: string;
  employeeName: string;
  employeeId: string;
  payPeriod: "Bi-weekly" | "Monthly";
  grossPay: number;
  deductions: number;
  netPay: number;
  status: "Processed" | "Pending" | "Paid";
  payDate?: string;
  details?: {
    taxes: number;
    insurance: number;
    retirement: number;
    other: number;
  };
}

// Mock payroll data
export const payrollRecords: PayrollRecord[] = [
  {
    id: "pay001",
    employeeName: "Allison Kessler",
    employeeId: "emp001",
    payPeriod: "Bi-weekly",
    grossPay: 2800,
    deductions: 500,
    netPay: 2300,
    status: "Processed",
    payDate: "2023-09-15",
    details: {
      taxes: 350,
      insurance: 100,
      retirement: 50,
      other: 0,
    },
  },
  {
    id: "pay002",
    employeeName: "Michael Farrell",
    employeeId: "emp002",
    payPeriod: "Bi-weekly",
    grossPay: 3200,
    deductions: 600,
    netPay: 2600,
    status: "Pending",
    details: {
      taxes: 420,
      insurance: 120,
      retirement: 60,
      other: 0,
    },
  },
  {
    id: "pay003",
    employeeName: "Samantha Lewis",
    employeeId: "emp003",
    payPeriod: "Monthly",
    grossPay: 4000,
    deductions: 700,
    netPay: 3300,
    status: "Paid",
    payDate: "2023-09-01",
    details: {
      taxes: 500,
      insurance: 150,
      retirement: 50,
      other: 0,
    },
  },
  {
    id: "pay004",
    employeeName: "Robert Johnson",
    employeeId: "emp004",
    payPeriod: "Monthly",
    grossPay: 3500,
    deductions: 600,
    netPay: 2900,
    status: "Processed",
    payDate: "2023-09-01",
    details: {
      taxes: 450,
      insurance: 100,
      retirement: 50,
      other: 0,
    },
  },
  {
    id: "pay005",
    employeeName: "Emily Phillips",
    employeeId: "emp005",
    payPeriod: "Bi-weekly",
    grossPay: 2600,
    deductions: 500,
    netPay: 2100,
    status: "Pending",
    details: {
      taxes: 350,
      insurance: 100,
      retirement: 50,
      other: 0,
    },
  },
  {
    id: "pay006",
    employeeName: "David Nguyen",
    employeeId: "emp006",
    payPeriod: "Bi-weekly",
    grossPay: 2900,
    deductions: 550,
    netPay: 2350,
    status: "Paid",
    payDate: "2023-09-15",
    details: {
      taxes: 380,
      insurance: 120,
      retirement: 50,
      other: 0,
    },
  },
  {
    id: "pay007",
    employeeName: "Jennifer Brown",
    employeeId: "emp007",
    payPeriod: "Monthly",
    grossPay: 3800,
    deductions: 650,
    netPay: 3150,
    status: "Processed",
    payDate: "2023-09-01",
    details: {
      taxes: 480,
      insurance: 120,
      retirement: 50,
      other: 0,
    },
  },
  {
    id: "pay008",
    employeeName: "Christopher Wilson",
    employeeId: "emp008",
    payPeriod: "Monthly",
    grossPay: 3300,
    deductions: 600,
    netPay: 2700,
    status: "Pending",
    details: {
      taxes: 420,
      insurance: 130,
      retirement: 50,
      other: 0,
    },
  },
  {
    id: "pay009",
    employeeName: "Amanda Martinez",
    employeeId: "emp009",
    payPeriod: "Bi-weekly",
    grossPay: 2700,
    deductions: 500,
    netPay: 2200,
    status: "Paid",
    payDate: "2023-09-15",
    details: {
      taxes: 360,
      insurance: 90,
      retirement: 50,
      other: 0,
    },
  },
  {
    id: "pay010",
    employeeName: "Daniel Taylor",
    employeeId: "emp010",
    payPeriod: "Bi-weekly",
    grossPay: 2750,
    deductions: 525,
    netPay: 2225,
    status: "Processed",
    payDate: "2023-09-15",
    details: {
      taxes: 370,
      insurance: 105,
      retirement: 50,
      other: 0,
    },
  },
  {
    id: "pay011",
    employeeName: "Jessica Rivera",
    employeeId: "emp011",
    payPeriod: "Monthly",
    grossPay: 3900,
    deductions: 680,
    netPay: 3220,
    status: "Paid",
    payDate: "2023-09-01",
    details: {
      taxes: 500,
      insurance: 130,
      retirement: 50,
      other: 0,
    },
  },
  {
    id: "pay012",
    employeeName: "Brian Turner",
    employeeId: "emp012",
    payPeriod: "Bi-weekly",
    grossPay: 2850,
    deductions: 540,
    netPay: 2310,
    status: "Pending",
    details: {
      taxes: 380,
      insurance: 110,
      retirement: 50,
      other: 0,
    },
  },
];
