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
}

export interface WorkHours {
  date: string;
  hours: number;
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
    title: "Daily",
    time: "09:00",
    type: "Meeting",
  },
  {
    id: "2",
    title: "Weekly meeting",
    time: "13:00",
    type: "",
  },
  {
    id: "3",
    title: "Psychology test",
    time: "17:00",
    type: "",
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
  { date: "Jan 24", hours: 7.4 },
  { date: "Jan 25", hours: 8.1 },
  { date: "Jan 26", hours: 7.8 },
  { date: "Jan 27", hours: 7.9 },
  { date: "Jan 28", hours: 7.5 },
  { date: "Jan 29", hours: 6.0 },
  { date: "Jan 30", hours: 5.0 },
];

// Employee details
export const employeeDetails: Employee[] = [
  {
    id: "1",
    name: "Brooklyn Simmons",
    email: "brooklyn@example.com",
    avatar: "/avatars/brooklyn.jpg",
    department: "Design",
    jobTitle: "Creative Director",
    attendance: "Pending",
  },
  {
    id: "2",
    name: "Ralph Edwards",
    email: "ralph@example.com",
    avatar: "/avatars/ralph.jpg",
    department: "Design",
    jobTitle: "UI Designer",
  },
  {
    id: "3",
    name: "Lisa Harvey",
    email: "lisa.harvey@example.com",
    avatar: "/avatars/lisa.jpg",
    department: "Sales",
    jobTitle: "Sales Manager",
  },
  {
    id: "4",
    name: "Leslie Alexander",
    email: "leslie@example.com",
    avatar: "/avatars/leslie.jpg",
    department: "Marketing",
    jobTitle: "Marketing Specialist",
    attendance: "Leave for 2 days",
  },
  {
    id: "5",
    name: "Brooklyn Simmons",
    email: "brooklyn@example.com",
    avatar: "/avatars/brooklyn.jpg",
    department: "Design",
    jobTitle: "Creative Director",
  },
];
