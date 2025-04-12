"use client";

import {
  Box,
  Paper,
  Divider,
  Typography,
  Avatar,
  Tooltip,
  IconButton,
} from "@mui/material";
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

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const pathname = usePathname();

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
      title: "Business and Marketing",
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
      {/* Left sidebar - Only displayed on larger screens */}
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
          height: "calc(100vh - 32px)", // Account for padding
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

      {/* Mobile top header with logo and company name - Only shown on mobile */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          alignItems: "center",
          p: 1.5,
          mb: 1,
        }}
      >
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

      {/* Main content */}
      <Box
        sx={{
          flexGrow: 1,
          width: "100%",
          overflow: "auto",
          pb: { xs: 7, md: 0 }, // Add bottom padding on mobile to account for mobile navigation
        }}
      >
        {children}
      </Box>

      {/* Mobile Bottom Navigation - Only visible on mobile */}
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1100,
          display: { xs: "flex", md: "none" },
          justifyContent: "space-around",
          alignItems: "center",
          py: 1,
          borderRadius: 0,
          boxShadow: "0 -2px 10px rgba(0,0,0,0.05)",
        }}
        elevation={3}
      >
        {mainMenuItems.map((item, index) => (
          <Link
            href={item.path}
            key={index}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                p: 0.5,
                color: item.active ? "#5271ff" : "#757575",
              }}
            >
              <Box
                sx={{
                  color: item.active ? "#5271ff" : "#757575",
                  fontSize: 20,
                }}
              >
                {item.icon}
              </Box>
              <Typography
                variant="caption"
                sx={{
                  fontSize: "0.65rem",
                  mt: 0.3,
                  fontWeight: item.active ? 500 : 400,
                }}
              >
                {item.title}
              </Typography>
            </Box>
          </Link>
        ))}
      </Paper>
    </Box>
  );
}
