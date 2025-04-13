// Mock organization data for org chart
export interface OrgChartMember {
  id: string;
  name: string;
  position: string;
  department?: string;
  children?: OrgChartMember[];
}

// Organization chart data with CEO and departments
export const orgChartData: OrgChartMember = {
  id: "ceo-1",
  name: "Cameron Williamson",
  position: "Founder - CEO",
  children: [
    {
      id: "dept-1",
      name: "Business and Marketing",
      position: "Department",
      department: "Business and Marketing",
      children: [
        {
          id: "emp-1",
          name: "Leslie Alexander",
          position: "Head of Project Manager",
          children: [
            {
              id: "emp-2",
              name: "Cody Firmansyah",
              position: "Senior Project Manager",
              children: [
                {
                  id: "emp-3a",
                  name: "Alex Morgan",
                  position: "Project Coordinator",
                },
                {
                  id: "emp-3b",
                  name: "Maria Santos",
                  position: "Project Coordinator",
                },
              ],
            },
            {
              id: "emp-3",
              name: "Jenni William",
              position: "Project Manager",
              children: [
                {
                  id: "emp-3c",
                  name: "Sam Wilson",
                  position: "Project Assistant",
                },
              ],
            },
            {
              id: "emp-3d",
              name: "Thomas Harris",
              position: "Marketing Director",
              children: [
                {
                  id: "emp-3e",
                  name: "Jessica Lee",
                  position: "Digital Marketing Specialist",
                },
                {
                  id: "emp-3f",
                  name: "Daniel Kim",
                  position: "Content Strategist",
                },
                {
                  id: "emp-3g",
                  name: "Emma Thompson",
                  position: "SEO Manager",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "dept-2",
      name: "Design",
      position: "Department",
      department: "Design",
      children: [
        {
          id: "emp-4",
          name: "Brooklyn Simmons",
          position: "Creative Director",
          children: [
            {
              id: "emp-5",
              name: "Ralph Edwards",
              position: "Senior UIX Designer",
              children: [
                {
                  id: "emp-5a",
                  name: "Olivia Parker",
                  position: "UI Designer",
                },
                {
                  id: "emp-5b",
                  name: "Jacob Martinez",
                  position: "UX Researcher",
                },
              ],
            },
            {
              id: "emp-6",
              name: "Brooklyn Hehe",
              position: "Senior Graphic Design",
              children: [
                {
                  id: "emp-6a",
                  name: "Sophia Chen",
                  position: "Junior Graphic Designer",
                },
              ],
            },
            {
              id: "emp-7",
              name: "Vidi Gutilerezz",
              position: "UIX Designer",
            },
            {
              id: "emp-8",
              name: "Pablo Hive",
              position: "Graphic Design",
            },
            {
              id: "emp-8a",
              name: "Mia Johnson",
              position: "Motion Graphics Designer",
              children: [
                {
                  id: "emp-8b",
                  name: "Luke Peterson",
                  position: "Animation Specialist",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "dept-3",
      name: "Development",
      position: "Department",
      department: "Development",
      children: [
        {
          id: "emp-9",
          name: "Cody Fisher",
          position: "Head of Development",
          children: [
            {
              id: "emp-10",
              name: "Darrell Steward",
              position: "Senior Backend Developer",
              children: [
                {
                  id: "emp-10a",
                  name: "Ryan Garcia",
                  position: "Backend Developer",
                },
                {
                  id: "emp-10b",
                  name: "Priya Sharma",
                  position: "Database Engineer",
                },
                {
                  id: "emp-10c",
                  name: "Michael Brown",
                  position: "DevOps Engineer",
                },
              ],
            },
            {
              id: "emp-11",
              name: "Jenny Wilson",
              position: "Frontend Developer",
              children: [
                {
                  id: "emp-11a",
                  name: "David Rodriguez",
                  position: "React Developer",
                },
                {
                  id: "emp-11b",
                  name: "Laura Wang",
                  position: "UI Developer",
                },
              ],
            },
            {
              id: "emp-11c",
              name: "Nathan Patel",
              position: "Mobile Development Lead",
              children: [
                {
                  id: "emp-11d",
                  name: "Zoe Anderson",
                  position: "iOS Developer",
                },
                {
                  id: "emp-11e",
                  name: "Kevin Wu",
                  position: "Android Developer",
                },
              ],
            },
            {
              id: "emp-11f",
              name: "Esther Park",
              position: "QA Lead",
              children: [
                {
                  id: "emp-11g",
                  name: "Chris Taylor",
                  position: "Test Engineer",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "dept-4",
      name: "Human Resource",
      position: "Department",
      department: "Human Resource",
      children: [
        {
          id: "emp-12",
          name: "Bessie Cooper",
          position: "Head of HR",
          children: [
            {
              id: "emp-13",
              name: "Robert Johnson",
              position: "HR Specialist",
              children: [
                {
                  id: "emp-13a",
                  name: "Nicole Lewis",
                  position: "Recruitment Coordinator",
                },
              ],
            },
            {
              id: "emp-13b",
              name: "Marcus Green",
              position: "Employee Relations Manager",
              children: [
                {
                  id: "emp-13c",
                  name: "Hannah White",
                  position: "Benefits Administrator",
                },
              ],
            },
            {
              id: "emp-13d",
              name: "Sarah Miller",
              position: "Training & Development Manager",
              children: [
                {
                  id: "emp-13e",
                  name: "James Clark",
                  position: "Learning Specialist",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "dept-5",
      name: "Project Manager",
      position: "Department",
      department: "Project Manager",
      children: [
        {
          id: "emp-14",
          name: "Elena Martinez",
          position: "Director of Project Management",
          children: [
            {
              id: "emp-15",
              name: "Andrew Wilson",
              position: "Senior Project Manager",
              children: [
                {
                  id: "emp-15a",
                  name: "Diana Foster",
                  position: "Project Coordinator",
                },
                {
                  id: "emp-15b",
                  name: "Brian Hall",
                  position: "Business Analyst",
                },
              ],
            },
            {
              id: "emp-16",
              name: "Rebecca Turner",
              position: "Agile Coach",
              children: [
                {
                  id: "emp-16a",
                  name: "Justin Moore",
                  position: "Scrum Master",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

// Department colors
export const departmentColors: Record<string, string> = {
  "Business and Marketing": "#5271ff",
  Design: "#00b894",
  Development: "#3498db",
  "Human Resource": "#a29bfe",
  "Project Manager": "#fdcb6e",
};
