"use client";

import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  Button,
  Chip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import {
  Employee,
  LeaveApplication as LeaveApplicationType,
} from "../data/mockData";

interface LeaveApplicationProps {
  leaveApplication: LeaveApplicationType;
  employee: Employee;
}

export default function LeaveApplication({
  leaveApplication,
  employee,
}: LeaveApplicationProps) {
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
        {/* Header with Leave Type and Status */}
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "center",
            mb: 2.5,
            gap: isMobile ? 1 : 0,
          }}
        >
          <Chip
            label={leaveApplication.leaveType}
            size="small"
            icon={
              <Box
                component="span"
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  bgcolor: "#00796b",
                  ml: 1,
                }}
              />
            }
            sx={{
              backgroundColor: "#e0f2f1",
              color: "#00796b",
              borderRadius: "18px",
              fontSize: "0.75rem",
              height: "26px",
              fontWeight: 500,
              pl: 0.5,
              "& .MuiChip-icon": {
                mr: -0.25,
              },
            }}
          />
          <Chip
            label={leaveApplication.status}
            size="small"
            sx={{
              backgroundColor: "#ffebee",
              color: "#d32f2f",
              borderRadius: "18px",
              fontSize: "0.75rem",
              height: "26px",
              fontWeight: 500,
              px: 1.5,
            }}
          />
        </Box>

        {/* Employee Info */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Avatar
            src={employee.avatar}
            alt={employee.name}
            sx={{ width: 36, height: 36, mr: 2 }}
          />
          <Box>
            <Typography variant="subtitle2" fontWeight="500">
              {employee.name}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Leave for {leaveApplication.days} day(s)
            </Typography>
          </Box>
          <Box sx={{ ml: "auto" }}>
            <FiberManualRecordIcon
              sx={{
                color: "#d32f2f",
                fontSize: 12,
              }}
            />
          </Box>
        </Box>

        {/* Action Buttons */}
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: 1,
            mb: 2.5,
          }}
        >
          <Button
            variant="outlined"
            fullWidth
            sx={{
              textTransform: "none",
              borderRadius: "4px",
              borderColor: "#00796b",
              color: "#00796b",
              py: isMobile ? 0.7 : "inherit",
              "&:hover": {
                borderColor: "#00695c",
                backgroundColor: "rgba(0, 121, 107, 0.04)",
              },
            }}
          >
            Approve
          </Button>
          <Button
            variant="outlined"
            fullWidth
            sx={{
              textTransform: "none",
              borderRadius: "4px",
              borderColor: "#d32f2f",
              color: "#d32f2f",
              py: isMobile ? 0.7 : "inherit",
              "&:hover": {
                borderColor: "#c62828",
                backgroundColor: "rgba(211, 47, 47, 0.04)",
              },
            }}
          >
            Reject
          </Button>
        </Box>

        {/* Date Range */}
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            gap: isMobile ? 1.5 : 0,
          }}
        >
          <Box>
            <Typography
              variant="caption"
              color="text.secondary"
              display="block"
            >
              Leave From:
            </Typography>
            <Typography variant="body2" fontWeight="500">
              {leaveApplication.fromDate}
            </Typography>
          </Box>
          <Box sx={{ textAlign: isMobile ? "left" : "right" }}>
            <Typography
              variant="caption"
              color="text.secondary"
              display="block"
            >
              Leave To:
            </Typography>
            <Typography variant="body2" fontWeight="500">
              {leaveApplication.toDate}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
