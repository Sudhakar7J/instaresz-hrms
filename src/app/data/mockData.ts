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
  avatar: string;
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
  cardholderName: "Rooks Company Ltd",
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
    avatar: "/avatars/brooklyn.jpg",
    department: "Design",
    jobTitle: "UI Designer",
    status: "Active",
  },
  {
    id: "2",
    name: "Cody Fisher",
    email: "cody.fisher@example.com",
    avatar: "/avatars/cody.jpg",
    department: "Development",
    jobTitle: "Front-End",
    status: "Active",
  },
  {
    id: "3",
    name: "Ralph Edwards",
    email: "ralph.edwards@example.com",
    avatar: "/avatars/ralph.jpg",
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
    avatar: "/avatars/brooklyn.jpg",
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
    avatar: "/avatars/cody.jpg",
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
    avatar: "/avatars/ralph.jpg",
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
    avatar: "/avatars/bessie.jpg",
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
    avatar: "/avatars/leslie.jpg",
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
    avatar: "/avatars/marjorie.jpg",
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
    avatar: "/avatars/james.jpg",
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
    avatar: "/avatars/anna.jpg",
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
