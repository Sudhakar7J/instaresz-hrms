"use client";

import {
  Box,
  Paper,
  Divider,
  Typography,
  Avatar,
  Grid,
  Tooltip,
  IconButton,
} from "@mui/material";
import PaymentMethod from "./PaymentMethod";
import JanuaryEvents from "./JanuaryEvents";
import TodaySchedule from "./TodaySchedule";
import EmployeeTable from "./EmployeeTable";
import MemberWorkHours from "./MemberWorkHours";
import EmployeeDetails from "./EmployeeDetails";
import EmployeeFullDetail from "./EmployeeFullDetail";
import LeaveApplication from "./LeaveApplication";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import PaymentIcon from "@mui/icons-material/Payment";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  paymentData,
  januaryEvents,
  birthdayEvents,
  todaySchedule,
  employeeData,
  workHoursData,
  employeeDetails,
  leaveApplications,
} from "../data/mockData";

// Menu item interface
interface MenuItem {
  title: string;
  path: string;
  icon: React.ReactNode;
  active?: boolean;
}

// Department item interface
interface DepartmentItem {
  title: string;
  path: string;
  color: string;
  active?: boolean;
}

export default function Dashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const pathname = usePathname();

  // Find employee for leave application by ID
  const leaveEmployee = employeeData.find(
    (emp) => emp.id === leaveApplications[0].employeeId
  );

  // Find employees for other cards
  const lisaEmployee = employeeDetails.find((emp) => emp.id === "3");
  const brooklynEmployee = employeeDetails.find((emp) => emp.id === "5");
  const leslieEmployee = employeeDetails.find((emp) => emp.id === "4");

  // Main menu items with paths
  const mainMenuItems: MenuItem[] = [
    {
      title: "Dashboard",
      path: "/",
      icon: <DashboardIcon sx={{ fontSize: sidebarCollapsed ? 24 : 20 }} />,
      active: pathname === "/",
    },
    {
      title: "Employee",
      path: "/employee",
      icon: <PeopleOutlineIcon sx={{ fontSize: sidebarCollapsed ? 24 : 20 }} />,
      active: pathname?.startsWith("/employee"),
    },
    {
      title: "Recruitment",
      path: "/recruitment",
      icon: <WorkOutlineIcon sx={{ fontSize: sidebarCollapsed ? 24 : 20 }} />,
      active: pathname?.startsWith("/recruitment"),
    },
    {
      title: "Payroll",
      path: "/payroll",
      icon: <PaymentIcon sx={{ fontSize: sidebarCollapsed ? 24 : 20 }} />,
      active: pathname?.startsWith("/payroll"),
    },
    {
      title: "Schedule",
      path: "/schedule",
      icon: <CalendarTodayIcon sx={{ fontSize: sidebarCollapsed ? 24 : 20 }} />,
      active: pathname?.startsWith("/schedule"),
    },
  ];

  // Department items
  const departmentItems: DepartmentItem[] = [
    {
      title: "Bussines and Marketing",
      path: "/dept/business",
      color: "#5271ff",
      active: pathname === "/dept/business",
    },
    {
      title: "Design",
      path: "/dept/design",
      color: "#00b894",
      active: pathname === "/dept/design",
    },
    {
      title: "Project Manager",
      path: "/dept/project",
      color: "#fdcb6e",
      active: pathname === "/dept/project",
    },
    {
      title: "Human Resource",
      path: "/dept/hr",
      color: "#a29bfe",
      active: pathname === "/dept/hr",
    },
    {
      title: "Development",
      path: "/dept/dev",
      color: "#3498db",
      active: pathname === "/dept/dev",
    },
  ];

  // Other menu items
  const otherMenuItems: MenuItem[] = [
    {
      title: "Setting",
      path: "/settings",
      icon: <SettingsIcon sx={{ fontSize: sidebarCollapsed ? 24 : 20 }} />,
      active: pathname?.startsWith("/settings"),
    },
    {
      title: "Help Center",
      path: "/help",
      icon: <HelpOutlineIcon sx={{ fontSize: sidebarCollapsed ? 24 : 20 }} />,
      active: pathname?.startsWith("/help"),
    },
  ];

  // Toggle sidebar collapsed state
  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        bgcolor: "#f5f7fa",
        minHeight: "100vh",
        p: { xs: 1, sm: 2 },
      }}
    >
      {/* Left sidebar */}
      <Paper
        sx={{
          width: { md: sidebarCollapsed ? 80 : 300 },
          borderRadius: 2,
          display: { xs: "none", md: "block" },
          mr: { md: 2 },
          mb: { xs: 2, md: 0 },
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
          p: 2,
          transition: "width 0.3s ease",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Logo and collapse button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 2,
            alignItems: "center",
          }}
        >
          {!sidebarCollapsed && (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar
                sx={{
                  width: 32,
                  height: 32,
                  bgcolor: "#5271ff",
                  borderRadius: "8px",
                  mr: 1.5,
                }}
              >
                <Box
                  component="span"
                  sx={{ fontSize: 18, fontWeight: "bold", color: "white" }}
                >
                  B
                </Box>
              </Avatar>
              <Typography variant="subtitle1" fontWeight="600">
                BordUp
                <Box component="sup" sx={{ fontSize: "0.6rem" }}>
                  TM
                </Box>
              </Typography>
            </Box>
          )}

          {sidebarCollapsed && (
            <Avatar
              sx={{
                width: 36,
                height: 36,
                bgcolor: "#5271ff",
                borderRadius: "8px",
                mx: "auto",
              }}
            >
              <Box
                component="span"
                sx={{ fontSize: 20, fontWeight: "bold", color: "white" }}
              >
                B
              </Box>
            </Avatar>
          )}

          <IconButton
            onClick={toggleSidebar}
            size="small"
            sx={{
              color: "#757575",
              ml: sidebarCollapsed ? "auto" : 0,
              mt: sidebarCollapsed ? 1 : 0,
              transition: "all 0.3s",
              transform: sidebarCollapsed ? "rotate(180deg)" : "none",
            }}
          >
            {sidebarCollapsed ? <MenuOpenIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </Box>

        {/* Company Info */}
        {!sidebarCollapsed && (
          <Paper
            elevation={0}
            sx={{
              p: 1.5,
              bgcolor: "#f5f5f5",
              borderRadius: "8px",
              mb: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  sx={{
                    width: 28,
                    height: 28,
                    bgcolor: "#111",
                    borderRadius: "8px",
                    mr: 1.5,
                    fontSize: "0.9rem",
                  }}
                >
                  R
                </Avatar>
                <Box>
                  <Typography variant="body2" fontWeight="500">
                    Rocks Company
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Team - 20 Members
                  </Typography>
                </Box>
              </Box>
              <KeyboardArrowDownIcon sx={{ color: "#999", fontSize: 20 }} />
            </Box>
          </Paper>
        )}

        {sidebarCollapsed && (
          <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
            <Avatar
              sx={{
                width: 40,
                height: 40,
                bgcolor: "#111",
                borderRadius: "8px",
                fontSize: "1rem",
              }}
            >
              R
            </Avatar>
          </Box>
        )}

        {/* Main Menu */}
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{
            pl: sidebarCollapsed ? 0 : 1,
            mb: 1,
            display: sidebarCollapsed ? "none" : "block",
            letterSpacing: "0.5px",
            textAlign: sidebarCollapsed ? "center" : "left",
          }}
        >
          MAIN MENU
        </Typography>

        <Box sx={{ mb: 3 }}>
          {mainMenuItems.map((item, index) => (
            <Link
              href={item.path}
              key={index}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  p: 1.5,
                  mb: 0.5,
                  justifyContent: sidebarCollapsed ? "center" : "flex-start",
                  borderRadius: "8px",
                  bgcolor: item.active ? "#EEF2FF" : "transparent",
                  color: item.active ? "#5271ff" : "text.primary",
                  "&:hover": {
                    bgcolor: item.active ? "#EEF2FF" : "#f5f5f5",
                    color: item.active ? "#5271ff" : "#333",
                  },
                  transition: "all 0.2s",
                }}
              >
                <Box
                  sx={{
                    mr: sidebarCollapsed ? 0 : 1.5,
                    color: item.active ? "#5271ff" : "#757575",
                  }}
                >
                  {item.icon}
                </Box>
                {!sidebarCollapsed && (
                  <Typography
                    variant="body2"
                    fontWeight={item.active ? "500" : "400"}
                  >
                    {item.title}
                  </Typography>
                )}
              </Box>
            </Link>
          ))}
        </Box>

        <Divider sx={{ my: 1.5 }} />

        {/* Department Section */}
        <Box
          sx={{
            mb: 2,
            display: "flex",
            justifyContent: sidebarCollapsed ? "center" : "space-between",
            alignItems: "center",
          }}
        >
          {!sidebarCollapsed && (
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ pl: 1, letterSpacing: "0.5px" }}
            >
              DEPARTMENT
            </Typography>
          )}

          {!sidebarCollapsed && (
            <AddIcon sx={{ color: "#999", fontSize: 18 }} />
          )}
        </Box>

        <Box sx={{ mb: 3 }}>
          {departmentItems.map((item, index) => (
            <Link
              href={item.path}
              key={index}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  p: 1.5,
                  mb: 0.5,
                  justifyContent: sidebarCollapsed ? "center" : "flex-start",
                  borderRadius: "8px",
                  bgcolor: item.active ? "#f8f8ff" : "transparent",
                  color: item.active ? item.color : "text.primary",
                  "&:hover": {
                    bgcolor: item.active ? "#f8f8ff" : "#f5f5f5",
                    color: item.active ? item.color : "#333",
                  },
                  transition: "all 0.2s",
                }}
              >
                <Tooltip
                  title={sidebarCollapsed ? item.title : ""}
                  placement="right"
                  arrow
                >
                  <FiberManualRecordIcon
                    sx={{
                      mr: sidebarCollapsed ? 0 : 1.5,
                      fontSize: sidebarCollapsed ? 12 : 10,
                      color: item.color,
                    }}
                  />
                </Tooltip>
                {!sidebarCollapsed && (
                  <Typography
                    variant="body2"
                    fontWeight={item.active ? "500" : "400"}
                  >
                    {item.title}
                  </Typography>
                )}
              </Box>
            </Link>
          ))}
        </Box>

        {/* Other Section */}
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{
            pl: sidebarCollapsed ? 0 : 1,
            mb: 1,
            display: sidebarCollapsed ? "none" : "block",
            letterSpacing: "0.5px",
            textAlign: sidebarCollapsed ? "center" : "left",
          }}
        >
          OTHER
        </Typography>

        <Box sx={{ mb: 1 }}>
          {otherMenuItems.map((item, index) => (
            <Link
              href={item.path}
              key={index}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  p: 1.5,
                  mb: 0.5,
                  justifyContent: sidebarCollapsed ? "center" : "flex-start",
                  borderRadius: "8px",
                  bgcolor: item.active ? "#f5f5f5" : "transparent",
                  color: item.active ? "#444" : "text.primary",
                  "&:hover": {
                    bgcolor: "#f5f5f5",
                    color: item.active ? "#333" : "text.primary",
                  },
                  transition: "all 0.2s",
                }}
              >
                <Tooltip
                  title={sidebarCollapsed ? item.title : ""}
                  placement="right"
                  arrow
                >
                  <Box
                    sx={{
                      mr: sidebarCollapsed ? 0 : 1.5,
                      color: item.active ? "#555" : "#757575",
                    }}
                  >
                    {item.icon}
                  </Box>
                </Tooltip>
                {!sidebarCollapsed && (
                  <Typography
                    variant="body2"
                    fontWeight={item.active ? "500" : "400"}
                  >
                    {item.title}
                  </Typography>
                )}
              </Box>
            </Link>
          ))}
        </Box>
      </Paper>

      {/* Main content */}
      <Box sx={{ flexGrow: 1, width: "100%" }}>
        {/* Payment Method Card at the top */}
        <Box sx={{ width: "100%", maxWidth: { xs: "100%", md: "80%" }, mb: 3 }}>
          <PaymentMethod data={paymentData} />
        </Box>

        {/* Grid layout for content below Payment Method */}
        <Grid container spacing={2}>
          {/* January Events card */}
          <Grid item xs={12} sm={6} md={4}>
            <JanuaryEvents
              events={januaryEvents}
              birthdayEvents={birthdayEvents}
            />
          </Grid>

          {/* Today Schedule */}
          <Grid item xs={12} sm={6} md={4}>
            <TodaySchedule events={todaySchedule} date="Jan 28, 2024" />
          </Grid>

          {/* Developer card */}
          <Grid item xs={12} md={4}>
            <EmployeeDetails />
          </Grid>
        </Grid>

        {/* Grid layout for bottom content */}
        <Grid container spacing={2} sx={{ mt: 0.5, mb: 2 }}>
          <Grid item xs={12} md={5}>
            <Box sx={{ height: { md: "350px" } }}>
              <EmployeeTable employees={employeeData} />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box sx={{ height: { md: "350px" } }}>
              <MemberWorkHours data={workHoursData} />
            </Box>
          </Grid>
        </Grid>

        {/* Grid layout for Employee Detail, Leave Application, and new cards */}
        <Grid container spacing={2}>
          {/* Employee Full Detail */}
          <Grid item xs={12} sm={6} lg={3}>
            <EmployeeFullDetail employee={employeeDetails[0]} />
          </Grid>

          {/* Leave Application */}
          <Grid item xs={12} sm={6} lg={3}>
            {leaveEmployee && (
              <LeaveApplication
                leaveApplication={leaveApplications[0]}
                employee={leaveEmployee}
              />
            )}
          </Grid>

          {/* Two vertical cards */}
          <Grid item xs={12} sm={6} lg={3}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {/* First card - Employee with LinkedIn */}
              <Paper
                sx={{
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                  overflow: "hidden",
                }}
              >
                <Box sx={{ p: 2 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <Avatar
                      src={lisaEmployee?.avatar}
                      alt={lisaEmployee?.name}
                      sx={{ width: 36, height: 36, mr: 2 }}
                    />
                    <Box>
                      <Typography variant="subtitle2" fontWeight="500">
                        {lisaEmployee?.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        helo-lisaa@hotmail.com
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Divider />

                <Box
                  sx={{
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <LinkedInIcon
                      sx={{ fontSize: 18, color: "#0077B5", mr: 0.5 }}
                    />
                    <Typography variant="caption">LinkedIn</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <InsertDriveFileOutlinedIcon
                        sx={{ fontSize: 16, color: "text.secondary", mr: 0.5 }}
                      />
                      <Typography variant="caption" color="text.secondary">
                        4
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <ChatBubbleOutlineOutlinedIcon
                        sx={{ fontSize: 16, color: "text.secondary", mr: 0.5 }}
                      />
                      <Typography variant="caption" color="text.secondary">
                        1
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Paper>

              {/* Second card - Employee with job title */}
              <Paper
                sx={{
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                  p: 2,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Avatar
                    src={brooklynEmployee?.avatar}
                    alt={brooklynEmployee?.name}
                    sx={{ width: 36, height: 36, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="subtitle2" fontWeight="500">
                      {brooklynEmployee?.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {brooklynEmployee?.jobTitle}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Grid>

          {/* Another Leave Application */}
          <Grid item xs={12} sm={6} lg={3}>
            {leslieEmployee && (
              <Box
                component={Paper}
                sx={{
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                  p: 3,
                  height: "auto",
                }}
              >
                {/* Header with Leave Type */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 2.5,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "#e3f2fd",
                      color: "#1976d2",
                      borderRadius: "18px",
                      fontSize: "0.75rem",
                      height: "26px",
                      fontWeight: 500,
                      px: 1.5,
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        bgcolor: "#1976d2",
                        mr: 0.75,
                        display: "inline-block",
                      }}
                    />
                    Annual Leave
                  </Box>
                </Box>

                {/* Employee Info */}
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Avatar
                    src={leslieEmployee.avatar}
                    alt={leslieEmployee.name}
                    sx={{ width: 36, height: 36, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="subtitle2" fontWeight="500">
                      {leslieEmployee.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Leave for 2 day(s)
                    </Typography>
                  </Box>
                </Box>

                {/* Date Range */}
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      display="block"
                      mb={0.5}
                    >
                      Leave From:
                    </Typography>
                    <Typography variant="body2" fontWeight="500">
                      Jan 12, 2024
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      display="block"
                      mb={0.5}
                    >
                      Leave To:
                    </Typography>
                    <Typography variant="body2" fontWeight="500">
                      Jan 14, 2024
                    </Typography>
                  </Box>
                </Box>
              </Box>
            )}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
