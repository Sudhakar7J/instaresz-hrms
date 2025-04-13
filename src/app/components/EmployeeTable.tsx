"use client";

import {
  Card,
  CardContent,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Avatar,
  Chip,
  Button,
  useMediaQuery,
  useTheme,
  Stack,
} from "@mui/material";
import { Employee } from "../data/mockData";
import { useRouter } from "next/navigation";

interface EmployeeTableProps {
  employees: Employee[];
}

export default function EmployeeTable({ employees }: EmployeeTableProps) {
  const theme = useTheme();
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Function to get department color
  const getDeptColor = (dept: string) => {
    switch (dept) {
      case "Design":
        return "#00796b";
      case "Development":
        return "#1976d2";
      default:
        return "#9e9e9e";
    }
  };

  // Function to get department background color
  const getDeptBgColor = (dept: string) => {
    switch (dept) {
      case "Design":
        return "#e0f7ea";
      case "Development":
        return "#e3f2fd";
      default:
        return "#f5f5f5";
    }
  };

  // Render mobile view as cards
  const renderMobileView = () => (
    <Stack spacing={1.5} sx={{ p: 1 }}>
      {employees.map((employee) => (
        <Box
          key={employee.id}
          sx={{
            p: 1.5,
            bgcolor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
          }}
        >
          <Box display="flex" alignItems="center" mb={1}>
            <Avatar
              src={employee.avatar}
              alt={employee.name}
              sx={{
                width: 36,
                height: 36,
                mr: 1.5,
                bgcolor: "#e0e0e0",
              }}
            >
              {employee.name.charAt(0)}
            </Avatar>
            <Box>
              <Typography
                variant="body2"
                fontWeight="500"
                sx={{ fontSize: "0.8rem" }}
              >
                {employee.name}
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ fontSize: "0.7rem" }}
              >
                {employee.email}
              </Typography>
            </Box>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Chip
              icon={
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: getDeptColor(employee.department),
                    ml: 1,
                  }}
                />
              }
              label={employee.department}
              size="small"
              sx={{
                backgroundColor: getDeptBgColor(employee.department),
                color: getDeptColor(employee.department),
                borderRadius: "4px",
                padding: "4px 8px",
                fontSize: "0.65rem",
                height: "22px",
                "& .MuiChip-icon": {
                  mr: -0.5,
                },
              }}
            />
            <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
              {employee.jobTitle}
            </Typography>
          </Box>
        </Box>
      ))}
    </Stack>
  );

  return (
    <Card
      sx={{
        mb: 2,
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: { xs: 1.5, sm: 2 },
          pb: { xs: 1, sm: 1.5 },
        }}
      >
        <Typography variant="subtitle1" fontWeight="500">
          Employee
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          onClick={() => router.push("/employee")}
          sx={{
            textTransform: "none",
            fontSize: "0.75rem",
            fontWeight: "normal",
            borderRadius: "6px",
            height: "28px",
            px: 1.5,
            py: 0,
            borderColor: "#e0e0e0",
            color: "#555",
            "&:hover": {
              borderColor: "#bdbdbd",
              backgroundColor: "#f5f5f5",
            },
          }}
        >
          See Details
        </Button>
      </Box>

      <CardContent
        sx={{
          pt: 0,
          pb: "16px !important",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflowX: "auto",
        }}
      >
        {isMobile ? (
          renderMobileView()
        ) : (
          <Table size="small" sx={{ minWidth: 350, height: "100%" }}>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f9fafb" }}>
                <TableCell
                  sx={{
                    fontWeight: 500,
                    color: "text.secondary",
                    fontSize: "0.7rem",
                    borderBottom: "1px solid #f0f0f0",
                    pl: 2,
                    pb: 1.5,
                    pt: 1.5,
                  }}
                >
                  Employee Name
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 500,
                    color: "text.secondary",
                    fontSize: "0.7rem",
                    borderBottom: "1px solid #f0f0f0",
                    pb: 1.5,
                    pt: 1.5,
                  }}
                >
                  Department
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 500,
                    color: "text.secondary",
                    fontSize: "0.7rem",
                    borderBottom: "1px solid #f0f0f0",
                    pb: 1.5,
                    pt: 1.5,
                  }}
                >
                  Job Title
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employees.map((employee) => (
                <TableRow
                  key={employee.id}
                  hover
                  sx={{
                    "&:hover": {
                      backgroundColor: "#f5f5f5",
                    },
                    height: "64px",
                  }}
                >
                  <TableCell
                    sx={{
                      borderBottom: "1px solid #f0f0f0",
                      pl: 2,
                      py: 1.5,
                    }}
                  >
                    <Box display="flex" alignItems="center">
                      <Avatar
                        src={employee.avatar}
                        alt={employee.name}
                        sx={{
                          width: 36,
                          height: 36,
                          mr: 1.5,
                          bgcolor: "#e0e0e0",
                        }}
                      >
                        {employee.name.charAt(0)}
                      </Avatar>
                      <Box>
                        <Typography
                          variant="body2"
                          fontWeight="500"
                          sx={{ fontSize: "0.8rem" }}
                        >
                          {employee.name}
                        </Typography>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{ fontSize: "0.7rem" }}
                        >
                          {employee.email}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{ borderBottom: "1px solid #f0f0f0", py: 1.5 }}
                  >
                    <Chip
                      icon={
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            backgroundColor: getDeptColor(employee.department),
                            ml: 1,
                          }}
                        />
                      }
                      label={employee.department}
                      size="small"
                      sx={{
                        backgroundColor: getDeptBgColor(employee.department),
                        color: getDeptColor(employee.department),
                        borderRadius: "4px",
                        padding: "4px 8px",
                        fontSize: "0.65rem",
                        height: "22px",
                        "& .MuiChip-icon": {
                          mr: -0.5,
                        },
                      }}
                    />
                  </TableCell>
                  <TableCell
                    sx={{ borderBottom: "1px solid #f0f0f0", py: 1.5 }}
                  >
                    <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
                      {employee.jobTitle}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
}
