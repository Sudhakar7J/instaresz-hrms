"use client";

import { Box, Paper, Divider, Typography, Avatar, Grid } from "@mui/material";
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

export default function Dashboard() {
  // Find employee for leave application by ID
  const leaveEmployee = employeeData.find(
    (emp) => emp.id === leaveApplications[0].employeeId
  );

  // Find employees for other cards
  const lisaEmployee = employeeDetails.find((emp) => emp.id === "3");
  const brooklynEmployee = employeeDetails.find((emp) => emp.id === "5");
  const leslieEmployee = employeeDetails.find((emp) => emp.id === "4");

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
      {/* Left sidebar - placeholder for now */}
      <Paper
        sx={{
          width: { md: 240 },
          borderRadius: 2,
          display: { xs: "none", md: "block" },
          mr: { md: 2 },
          mb: { xs: 2, md: 0 },
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        }}
      >
        {/* Sidebar content will be implemented later */}
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
