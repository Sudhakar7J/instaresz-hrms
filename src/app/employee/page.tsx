"use client";

import {
  Box,
  Typography,
  Paper,
  Tab,
  Tabs,
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Chip,
  TextField,
  InputAdornment,
  Pagination,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import AddIcon from "@mui/icons-material/Add";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import FilterListIcon from "@mui/icons-material/FilterList";
import { employeeDetails } from "../data/mockData";
import { useState } from "react";
import OrgChartComponent from "../components/OrgChart/OrgChartComponent";
import {
  orgChartData,
  departmentColors,
} from "../components/OrgChart/mockOrgData";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel({ children, value, index, ...other }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`employee-tabpanel-${index}`}
      aria-labelledby={`employee-tab-${index}`}
      {...other}
      style={{ width: "100%" }}
    >
      {value === index && <Box sx={{ py: 2 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `employee-tab-${index}`,
    "aria-controls": `employee-tabpanel-${index}`,
  };
}

// Function to get department color based on department name
const getDeptColor = (dept: string) => {
  switch (dept) {
    case "Design":
      return "#00b894";
    case "Development":
      return "#3498db";
    case "Business & Marketing":
      return "#5271ff";
    case "Human Resource":
      return "#a29bfe";
    case "Project Manager":
      return "#fdcb6e";
    default:
      return "#9e9e9e";
  }
};

// Interface for Leave Requests
interface LeaveRequest {
  id: string;
  employeeId: string;
  leaveType: string;
  leaveFrom: string;
  leaveTo: string;
  days: number;
  status: "Pending" | "Approved" | "Rejected";
}

// Function to get leave type color
const getLeaveTypeColor = (type: string) => {
  switch (type) {
    case "Annual Leave":
      return "#5271ff";
    case "Sick Leave":
      return "#00b894";
    case "Personal Leave":
      return "#fdcb6e";
    case "Maternity Leave":
      return "#e84393";
    case "Paternity Leave":
      return "#0984e3";
    default:
      return "#9e9e9e";
  }
};

// Function to get status color
const getStatusColor = (status: string) => {
  switch (status) {
    case "Approved":
      return { bg: "#e0f7ea", text: "#00b894" };
    case "Pending":
      return { bg: "#ffeaee", text: "#ff6b81" };
    case "Rejected":
      return { bg: "#fff3e0", text: "#ff9800" };
    default:
      return { bg: "#f5f5f5", text: "#9e9e9e" };
  }
};

export default function EmployeePage() {
  const [tabValue, setTabValue] = useState(0);
  const [page, setPage] = useState(1);
  const [leaveRequestPage, setLeaveRequestPage] = useState(1);
  const rowsPerPage = 5; // Number of employees per page

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const handleLeaveRequestPageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setLeaveRequestPage(value);
  };

  // Generate more complete employee data with all required fields
  const enrichedEmployeeData = employeeDetails.map((employee) => ({
    ...employee,
    phone: employee.phone || "(+XX) XXX XXXX XXXX",
    contractType: employee.contractType || "Onsite - Fulltime",
    attendance: employee.attendance || "10h 20m",
  }));

  // Calculate pagination
  const totalEmployees = enrichedEmployeeData.length;
  const totalPages = Math.ceil(totalEmployees / rowsPerPage);
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, totalEmployees);
  const paginatedEmployees = enrichedEmployeeData.slice(startIndex, endIndex);

  // Mock leave requests data
  const leaveRequests: LeaveRequest[] = [
    {
      id: "1",
      employeeId: "1",
      leaveType: "Annual Leave",
      leaveFrom: "Jan 23, 2024",
      leaveTo: "Jan 24, 2024",
      days: 1,
      status: "Pending",
    },
    {
      id: "2",
      employeeId: "3",
      leaveType: "Sick Leave",
      leaveFrom: "Jan 23, 2024",
      leaveTo: "Jan 27, 2024",
      days: 4,
      status: "Pending",
    },
    {
      id: "3",
      employeeId: "5",
      leaveType: "Annual Leave",
      leaveFrom: "Jan 12, 2024",
      leaveTo: "Jan 14, 2024",
      days: 2,
      status: "Approved",
    },
    {
      id: "4",
      employeeId: "2",
      leaveType: "Sick Leave",
      leaveFrom: "Jan 04, 2024",
      leaveTo: "Jan 06, 2024",
      days: 2,
      status: "Approved",
    },
    {
      id: "5",
      employeeId: "4",
      leaveType: "Annual Leave",
      leaveFrom: "Jan 03, 2024",
      leaveTo: "Jan 08, 2024",
      days: 5,
      status: "Approved",
    },
  ];

  // Combine leave requests with employee data
  const enrichedLeaveRequests = leaveRequests.map((request) => {
    const employee = employeeDetails.find(
      (emp) => emp.id === request.employeeId
    );
    return {
      ...request,
      employeeName: employee?.name || "Unknown Employee",
      employeeAvatar: employee?.avatar || "",
      employeeEmail: employee?.email || "",
    };
  });

  // Calculate pagination for leave requests
  const totalLeaveRequests = enrichedLeaveRequests.length;
  const totalLeaveRequestPages = Math.ceil(totalLeaveRequests / rowsPerPage);
  const leaveRequestStartIndex = (leaveRequestPage - 1) * rowsPerPage;
  const leaveRequestEndIndex = Math.min(
    leaveRequestStartIndex + rowsPerPage,
    totalLeaveRequests
  );
  const paginatedLeaveRequests = enrichedLeaveRequests.slice(
    leaveRequestStartIndex,
    leaveRequestEndIndex
  );

  return (
    <Box sx={{ p: { xs: 1, sm: 2 } }}>
      {/* Header section with icon, title and buttons */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "flex-start", sm: "center" },
          justifyContent: "space-between",
          gap: { xs: 2, sm: 0 },
          mb: 3,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            sx={{
              width: { xs: 32, sm: 40 },
              height: { xs: 32, sm: 40 },
              bgcolor: "#eef2ff",
              color: "#5271ff",
              mr: 2,
            }}
          >
            <PeopleOutlineIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
          </Avatar>
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                fontSize: { xs: "1.125rem", sm: "1.5rem" },
              }}
            >
              Employee
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Manage your employees
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{ display: "flex", gap: 1, width: { xs: "100%", sm: "auto" } }}
        >
          <Button
            variant="outlined"
            startIcon={<FileDownloadOutlinedIcon />}
            sx={{
              color: "text.primary",
              borderColor: "divider",
              textTransform: "none",
              borderRadius: "8px",
              flex: { xs: 1, sm: "none" },
            }}
          >
            Export
          </Button>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              bgcolor: "#5271ff",
              textTransform: "none",
              borderRadius: "8px",
              flex: { xs: 1, sm: "none" },
            }}
          >
            Add Employee
          </Button>
        </Box>
      </Box>

      {/* Main content */}
      <Paper
        sx={{
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        }}
      >
        <Box
          sx={{ borderBottom: 1, borderColor: "divider", overflowX: "auto" }}
        >
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="employee tabs"
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              px: { xs: 1, sm: 2 },
              "& .MuiTab-root": {
                textTransform: "none",
                minHeight: "48px",
                fontSize: "0.875rem",
                fontWeight: 500,
                minWidth: { xs: "auto", sm: 160 },
                px: { xs: 1, sm: 2 },
              },
              "& .Mui-selected": {
                color: "#5271ff",
              },
              "& .MuiTabs-indicator": {
                backgroundColor: "#5271ff",
              },
            }}
          >
            <Tab
              label="Manage Employees"
              {...a11yProps(0)}
              sx={{ display: "flex", alignItems: "center" }}
            />
            <Tab
              label="Organization Chart"
              icon={<AccountTreeOutlinedIcon sx={{ fontSize: 18, mr: 1 }} />}
              iconPosition="start"
              {...a11yProps(1)}
            />
            <Tab
              label="Request Time Off"
              icon={<AccessTimeOutlinedIcon sx={{ fontSize: 18, mr: 1 }} />}
              iconPosition="start"
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>

        {/* Tab panels */}
        <TabPanel value={tabValue} index={0}>
          {/* Title, search and filter bar */}
          <Box
            sx={{
              px: { xs: 1, sm: 2 },
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "stretch", sm: "center" },
              gap: { xs: 2, sm: 0 },
              mb: 2,
            }}
          >
            <Typography variant="h6" fontWeight={500}>
              Manage Employees
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                width: { xs: "100%", sm: "auto" },
              }}
            >
              <TextField
                placeholder="Search keyword..."
                size="small"
                sx={{
                  flex: 1,
                  maxWidth: { xs: "100%", sm: 240 },
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon
                        sx={{ color: "text.secondary", fontSize: 20 }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                startIcon={<FilterListIcon />}
                sx={{
                  color: "text.primary",
                  textTransform: "none",
                  borderRadius: "8px",
                  border: "1px solid",
                  borderColor: "divider",
                  whiteSpace: "nowrap",
                }}
              >
                Filter
              </Button>
            </Box>
          </Box>

          {/* Employee table */}
          <Box sx={{ overflowX: "auto" }}>
            <TableContainer>
              <Table sx={{ minWidth: 650 }} size="medium">
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#f9fafb" }}>
                    <TableCell
                      sx={{
                        fontWeight: 500,
                        color: "text.secondary",
                        fontSize: "0.75rem",
                        width: "220px",
                      }}
                    >
                      Employee Name
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: 500,
                        color: "text.secondary",
                        fontSize: "0.75rem",
                        width: "140px",
                      }}
                    >
                      Phone Number
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: 500,
                        color: "text.secondary",
                        fontSize: "0.75rem",
                        width: "150px",
                      }}
                    >
                      Department
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: 500,
                        color: "text.secondary",
                        fontSize: "0.75rem",
                        width: "140px",
                      }}
                    >
                      Job Title
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: 500,
                        color: "text.secondary",
                        fontSize: "0.75rem",
                        width: "140px",
                      }}
                    >
                      Contract Type
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: 500,
                        color: "text.secondary",
                        fontSize: "0.75rem",
                        width: "100px",
                      }}
                    >
                      Attendance
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: 500,
                        color: "text.secondary",
                        fontSize: "0.75rem",
                        width: "160px",
                      }}
                    ></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedEmployees.map((employee) => (
                    <TableRow
                      key={employee.id}
                      hover
                      sx={{
                        "&:hover": {
                          backgroundColor: "#f5f7fa",
                        },
                      }}
                    >
                      <TableCell>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Avatar
                            src={employee.avatar}
                            alt={employee.name}
                            sx={{ width: 36, height: 36, mr: 2 }}
                          />
                          <Box>
                            <Typography variant="body2" fontWeight={500}>
                              {employee.name}
                            </Typography>
                            <Typography
                              variant="caption"
                              color="text.secondary"
                            >
                              {employee.email}
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">
                          {employee.phone}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              <Box
                                sx={{
                                  width: 8,
                                  height: 8,
                                  borderRadius: "50%",
                                  backgroundColor: getDeptColor(
                                    employee.department
                                  ),
                                  mr: 1,
                                }}
                              />
                              {employee.department}
                            </Box>
                          }
                          size="small"
                          sx={{
                            backgroundColor: `${getDeptColor(
                              employee.department
                            )}20`,
                            color: getDeptColor(employee.department),
                            borderRadius: "4px",
                            fontSize: "0.75rem",
                            fontWeight: 500,
                            height: "24px",
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">
                          {employee.jobTitle}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">
                          {employee.contractType}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">
                          {employee.attendance}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Box sx={{ display: "flex", gap: 1 }}>
                          <Button
                            size="small"
                            variant="outlined"
                            sx={{
                              fontSize: "0.75rem",
                              textTransform: "none",
                              color: "#757575",
                              borderColor: "#75757540",
                              backgroundColor: "transparent",
                              borderRadius: "6px",
                              py: 0.5,
                              "&:hover": {
                                backgroundColor: "#7575751a",
                                borderColor: "#75757560",
                              },
                            }}
                          >
                            See Details
                          </Button>
                          <IconButton size="small">
                            <MoreVertIcon fontSize="small" />
                          </IconButton>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          {/* Pagination and info */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "stretch", sm: "center" },
              gap: { xs: 2, sm: 0 },
              px: { xs: 1, sm: 2 },
              mt: 2,
              pb: 1,
            }}
          >
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textAlign: { xs: "center", sm: "left" } }}
            >
              Showing {startIndex + 1} to {endIndex} of {totalEmployees}{" "}
              employees
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", sm: "flex-end" },
                width: "100%",
              }}
            >
              <Button
                variant="text"
                disabled={page === 1}
                onClick={(e) => handleChangePage(e, page - 1)}
                sx={{
                  mr: 1,
                  color: page === 1 ? "text.disabled" : "#5271ff",
                  textTransform: "none",
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: "8px",
                  display: { xs: "none", sm: "inline-flex" },
                }}
              >
                Previous
              </Button>
              <Pagination
                count={totalPages}
                page={page}
                onChange={handleChangePage}
                color="primary"
                size="medium"
                shape="rounded"
                hidePrevButton
                hideNextButton
                sx={{
                  "& .MuiPaginationItem-root": {
                    fontSize: { xs: "0.75rem", sm: "0.875rem" },
                  },
                }}
              />
              <Button
                variant="text"
                disabled={page === totalPages}
                onClick={(e) => handleChangePage(e, page + 1)}
                sx={{
                  ml: 1,
                  color: page === totalPages ? "text.disabled" : "#5271ff",
                  textTransform: "none",
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: "8px",
                  display: { xs: "none", sm: "inline-flex" },
                }}
              >
                Next
              </Button>
            </Box>
          </Box>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <Box sx={{ px: 2 }}>
            <Typography variant="h6" fontWeight={500} gutterBottom>
              Organization Chart
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Complete organizational structure showing departments and
              reporting lines.
            </Typography>
            <Box
              sx={{ mt: 3, height: "calc(100vh - 300px)", minHeight: "500px" }}
            >
              <OrgChartComponent
                data={orgChartData}
                departmentColors={departmentColors}
              />
            </Box>
          </Box>
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          {/* Title, search and filter bar */}
          <Box
            sx={{
              px: { xs: 1, sm: 2 },
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "stretch", sm: "center" },
              gap: { xs: 2, sm: 0 },
              mb: 2,
            }}
          >
            <Typography variant="h6" fontWeight={500}>
              Request Time Off
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                width: { xs: "100%", sm: "auto" },
              }}
            >
              <TextField
                placeholder="Search keyword..."
                size="small"
                sx={{
                  flex: 1,
                  maxWidth: { xs: "100%", sm: 240 },
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon
                        sx={{ color: "text.secondary", fontSize: 20 }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                startIcon={<FilterListIcon />}
                sx={{
                  color: "text.primary",
                  textTransform: "none",
                  borderRadius: "8px",
                  border: "1px solid",
                  borderColor: "divider",
                  whiteSpace: "nowrap",
                }}
              >
                Filter
              </Button>
            </Box>
          </Box>

          {/* Leave Request Table */}
          <Box sx={{ overflowX: "auto" }}>
            <TableContainer>
              <Table sx={{ minWidth: 650 }} size="medium">
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#f9fafb" }}>
                    <TableCell
                      sx={{
                        fontWeight: 500,
                        color: "text.secondary",
                        fontSize: "0.75rem",
                        width: "220px",
                      }}
                    >
                      Employee Name
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: 500,
                        color: "text.secondary",
                        fontSize: "0.75rem",
                        width: "150px",
                      }}
                    >
                      Leave Type
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: 500,
                        color: "text.secondary",
                        fontSize: "0.75rem",
                        width: "110px",
                      }}
                    >
                      Leave From
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: 500,
                        color: "text.secondary",
                        fontSize: "0.75rem",
                        width: "110px",
                      }}
                    >
                      Leave To
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: 500,
                        color: "text.secondary",
                        fontSize: "0.75rem",
                        width: "70px",
                        textAlign: "center",
                      }}
                    >
                      Days
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: 500,
                        color: "text.secondary",
                        fontSize: "0.75rem",
                        width: "100px",
                      }}
                    >
                      Status
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: 500,
                        color: "text.secondary",
                        fontSize: "0.75rem",
                        width: "160px",
                      }}
                    ></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedLeaveRequests.map((request) => {
                    const statusColor = getStatusColor(request.status);
                    return (
                      <TableRow
                        key={request.id}
                        hover
                        sx={{
                          "&:hover": {
                            backgroundColor: "#f5f7fa",
                          },
                        }}
                      >
                        <TableCell>
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Avatar
                              src={request.employeeAvatar}
                              alt={request.employeeName}
                              sx={{ width: 36, height: 36, mr: 2 }}
                            />
                            <Box>
                              <Typography variant="body2" fontWeight={500}>
                                {request.employeeName}
                              </Typography>
                              <Typography
                                variant="caption"
                                color="text.secondary"
                              >
                                {request.employeeEmail}
                              </Typography>
                            </Box>
                            {request.status === "Pending" && (
                              <Box
                                sx={{
                                  width: 8,
                                  height: 8,
                                  borderRadius: "50%",
                                  bgcolor: "#ff6b81",
                                  ml: 1,
                                }}
                              />
                            )}
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={
                              <Box
                                sx={{ display: "flex", alignItems: "center" }}
                              >
                                <Box
                                  sx={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: "50%",
                                    backgroundColor: getLeaveTypeColor(
                                      request.leaveType
                                    ),
                                    mr: 1,
                                  }}
                                />
                                {request.leaveType}
                              </Box>
                            }
                            size="small"
                            sx={{
                              backgroundColor: `${getLeaveTypeColor(
                                request.leaveType
                              )}20`,
                              color: getLeaveTypeColor(request.leaveType),
                              borderRadius: "12px",
                              fontSize: "0.75rem",
                              fontWeight: 500,
                              height: "24px",
                            }}
                          />
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2">
                            {request.leaveFrom}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2">
                            {request.leaveTo}
                          </Typography>
                        </TableCell>
                        <TableCell sx={{ textAlign: "center" }}>
                          <Typography variant="body2">
                            {request.days}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={request.status}
                            size="small"
                            sx={{
                              backgroundColor: statusColor.bg,
                              color: statusColor.text,
                              borderRadius: "12px",
                              fontSize: "0.75rem",
                              fontWeight: 500,
                              height: "24px",
                            }}
                          />
                        </TableCell>
                        <TableCell>
                          <Box sx={{ display: "flex", gap: 1 }}>
                            {request.status === "Pending" ? (
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "flex-end",
                                  width: "100%",
                                  gap: 1,
                                }}
                              >
                                <Button
                                  size="small"
                                  variant="outlined"
                                  sx={{
                                    fontSize: "0.75rem",
                                    textTransform: "none",
                                    color: "#00b894",
                                    borderColor: "#00b89440",
                                    backgroundColor: "transparent",
                                    borderRadius: "6px",
                                    py: 0.5,
                                    minWidth: "60px",
                                    "&:hover": {
                                      backgroundColor: "#00b8941a",
                                      borderColor: "#00b89460",
                                    },
                                  }}
                                >
                                  Approve
                                </Button>
                                <Button
                                  size="small"
                                  variant="outlined"
                                  sx={{
                                    fontSize: "0.75rem",
                                    textTransform: "none",
                                    color: "#ff6b81",
                                    borderColor: "#ff6b8140",
                                    backgroundColor: "transparent",
                                    borderRadius: "6px",
                                    py: 0.5,
                                    minWidth: "60px",
                                    "&:hover": {
                                      backgroundColor: "#ff6b811a",
                                      borderColor: "#ff6b8160",
                                    },
                                  }}
                                >
                                  Reject
                                </Button>
                              </Box>
                            ) : (
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "flex-end",
                                  width: "100%",
                                }}
                              >
                                <Button
                                  size="small"
                                  variant="outlined"
                                  sx={{
                                    fontSize: "0.75rem",
                                    textTransform: "none",
                                    color: "#757575",
                                    borderColor: "#75757540",
                                    backgroundColor: "transparent",
                                    borderRadius: "6px",
                                    py: 0.5,
                                    minWidth: "60px",
                                    "&:hover": {
                                      backgroundColor: "#7575751a",
                                      borderColor: "#75757560",
                                    },
                                  }}
                                >
                                  Edit
                                </Button>
                              </Box>
                            )}
                          </Box>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          {/* Pagination and info */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "stretch", sm: "center" },
              gap: { xs: 2, sm: 0 },
              px: { xs: 1, sm: 2 },
              mt: 2,
              pb: 1,
            }}
          >
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textAlign: { xs: "center", sm: "left" } }}
            >
              Showing {leaveRequestStartIndex + 1} to {leaveRequestEndIndex} of{" "}
              {totalLeaveRequests} leave requests
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", sm: "flex-end" },
                width: "100%",
              }}
            >
              <Button
                variant="text"
                disabled={leaveRequestPage === 1}
                onClick={(e) =>
                  handleLeaveRequestPageChange(e, leaveRequestPage - 1)
                }
                sx={{
                  mr: 1,
                  color: leaveRequestPage === 1 ? "text.disabled" : "#5271ff",
                  textTransform: "none",
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: "8px",
                  display: { xs: "none", sm: "inline-flex" },
                }}
              >
                Previous
              </Button>
              <Pagination
                count={totalLeaveRequestPages}
                page={leaveRequestPage}
                onChange={handleLeaveRequestPageChange}
                color="primary"
                size="medium"
                shape="rounded"
                hidePrevButton
                hideNextButton
                sx={{
                  "& .MuiPaginationItem-root": {
                    fontSize: { xs: "0.75rem", sm: "0.875rem" },
                  },
                }}
              />
              <Button
                variant="text"
                disabled={leaveRequestPage === totalLeaveRequestPages}
                onClick={(e) =>
                  handleLeaveRequestPageChange(e, leaveRequestPage + 1)
                }
                sx={{
                  ml: 1,
                  color:
                    leaveRequestPage === totalLeaveRequestPages
                      ? "text.disabled"
                      : "#5271ff",
                  textTransform: "none",
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: "8px",
                  display: { xs: "none", sm: "inline-flex" },
                }}
              >
                Next
              </Button>
            </Box>
          </Box>
        </TabPanel>
      </Paper>
    </Box>
  );
}
