"use client";

import { Box, Typography, Paper, Grid } from "@mui/material";
import EmployeeTable from "../components/EmployeeTable";
import EmployeeFullDetail from "../components/EmployeeFullDetail";
import { employeeData, employeeDetails } from "../data/mockData";

export default function EmployeePage() {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
        Employee Management
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 2,
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
              Employee Directory
            </Typography>
            <EmployeeTable employees={employeeData} />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 2,
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
              Featured Employee
            </Typography>
            <EmployeeFullDetail employee={employeeDetails[0]} />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 2,
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              height: "100%",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
              Department Statistics
            </Typography>
            <Box sx={{ p: 2 }}>
              <Typography variant="body1">
                Employee statistics and department information will be displayed
                here.
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
