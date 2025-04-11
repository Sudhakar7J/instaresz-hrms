"use client";

import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Employee } from "../data/mockData";

interface EmployeeFullDetailProps {
  employee: Employee;
}

export default function EmployeeFullDetail({
  employee,
}: EmployeeFullDetailProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card
      sx={{
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        mb: 2,
        height: "100%",
      }}
    >
      <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
        {/* Header section with employee details */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              src={employee.avatar}
              alt={employee.name}
              sx={{ width: 40, height: 40, mr: 2 }}
            />
            <Box>
              <Typography variant="subtitle1" fontWeight="500">
                {employee.name}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {employee.email}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton
              size="small"
              sx={{
                p: 0.5,
                bgcolor: theme.palette.background.default,
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: "6px",
                width: 30,
                height: 30,
                "&:hover": {
                  bgcolor: theme.palette.action.hover,
                },
              }}
            >
              <KeyboardArrowUpIcon
                sx={{ fontSize: 20, color: theme.palette.text.secondary }}
              />
            </IconButton>
            <IconButton
              size="small"
              sx={{
                p: 0.5,
                bgcolor: theme.palette.background.default,
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: "6px",
                width: 30,
                height: 30,
                "&:hover": {
                  bgcolor: theme.palette.action.hover,
                },
              }}
            >
              <MoreVertIcon
                sx={{ fontSize: 20, color: theme.palette.text.secondary }}
              />
            </IconButton>
          </Box>
        </Box>

        {/* Contact information with icons */}
        <Box
          display="flex"
          flexDirection={isMobile ? "column" : "row"}
          alignItems={isMobile ? "flex-start" : "center"}
          gap={isMobile ? 1 : 2}
          mb={3}
        >
          <Box display="flex" alignItems="center">
            <PhoneOutlinedIcon
              sx={{
                fontSize: 14,
                color: "text.secondary",
                mr: 0.5,
              }}
            />
            <Typography variant="caption" color="text.secondary">
              {employee.phone}
            </Typography>
          </Box>

          <Box display="flex" alignItems="center">
            <AccessTimeIcon
              sx={{
                fontSize: 14,
                color: "text.secondary",
                mr: 0.5,
              }}
            />
            <Typography variant="caption" color="text.secondary">
              {employee.workHours}
            </Typography>
          </Box>
        </Box>

        {/* Department and Job Title Section - Now on the same line */}
        <Box sx={{ mb: 2 }}>
          <Box
            sx={{
              display: "flex",
              mb: 0.5,
            }}
          >
            <Typography
              variant="caption"
              sx={{ color: "text.secondary", mr: 2 }}
            >
              Department:
            </Typography>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              Job Title:
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              mb: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mr: 2,
                flexGrow: 1,
              }}
            >
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "#e0f7ea",
                  color: "#00796b",
                  py: 0.5,
                  px: 1.5,
                  borderRadius: "50px",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  height: "24px",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    bgcolor: "#00796b",
                    mr: 0.75,
                    display: "inline-block",
                  }}
                />
                {employee.department || "Design"}
              </Box>
            </Box>

            <Typography variant="body2" sx={{ fontWeight: 500, flexGrow: 1 }}>
              {employee.jobTitle}
            </Typography>
          </Box>

          {/* Contract Type Section - Now label and answer stacked */}
          <Box sx={{ mb: 0.5 }}>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              Contract Type:
            </Typography>
          </Box>
          <Box sx={{ mb: 1 }}>
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              {employee.contractType}
            </Typography>
          </Box>

          {/* Leave To Section - Added with proper positioning */}
          {employee.attendance && employee.attendance.includes("Leave") && (
            <Box>
              <Typography
                variant="caption"
                sx={{ color: "text.secondary", mb: 0.5, display: "block" }}
              >
                Leave To:
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                {employee.attendance.replace("Leave for ", "")}
              </Typography>
            </Box>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}
