"use client";

import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import OrgChartComponent from "../components/OrgChart/OrgChartComponent";
import {
  orgChartData,
  departmentColors,
} from "../components/OrgChart/mockOrgData";
import Link from "next/link";

export default function DeptIndexPage() {
  return (
    <Box>
      <Typography variant="h6" gutterBottom fontWeight={500}>
        Organization Chart
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Complete organization chart showing all departments and team structure.
      </Typography>

      {/* Main org chart with all departments */}
      <Box sx={{ mt: 3, mb: 5 }}>
        <OrgChartComponent
          data={orgChartData}
          departmentColors={departmentColors}
        />
      </Box>

      {/* Department cards */}
      <Typography variant="h6" gutterBottom fontWeight={500} sx={{ mt: 6 }}>
        Departments
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        View organization chart by department.
      </Typography>

      <Grid container spacing={3}>
        {/* Business & Marketing */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              borderRadius: 2,
              boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              transition: "transform 0.2s, box-shadow 0.2s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              },
              cursor: "pointer",
              borderTop: `4px solid ${departmentColors["Business and Marketing"]}`,
            }}
            component={Link}
            href="/dept/business"
          >
            <CardContent>
              <Typography variant="subtitle1" fontWeight={500}>
                Business & Marketing
              </Typography>
              <Typography variant="body2" color="text.secondary">
                View organization chart
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Design */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              borderRadius: 2,
              boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              transition: "transform 0.2s, box-shadow 0.2s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              },
              cursor: "pointer",
              borderTop: `4px solid ${departmentColors["Design"]}`,
            }}
            component={Link}
            href="/dept/design"
          >
            <CardContent>
              <Typography variant="subtitle1" fontWeight={500}>
                Design
              </Typography>
              <Typography variant="body2" color="text.secondary">
                View organization chart
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Development */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              borderRadius: 2,
              boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              transition: "transform 0.2s, box-shadow 0.2s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              },
              cursor: "pointer",
              borderTop: `4px solid ${departmentColors["Development"]}`,
            }}
            component={Link}
            href="/dept/dev"
          >
            <CardContent>
              <Typography variant="subtitle1" fontWeight={500}>
                Development
              </Typography>
              <Typography variant="body2" color="text.secondary">
                View organization chart
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Human Resource */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              borderRadius: 2,
              boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              transition: "transform 0.2s, box-shadow 0.2s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              },
              cursor: "pointer",
              borderTop: `4px solid ${departmentColors["Human Resource"]}`,
            }}
            component={Link}
            href="/dept/hr"
          >
            <CardContent>
              <Typography variant="subtitle1" fontWeight={500}>
                Human Resource
              </Typography>
              <Typography variant="body2" color="text.secondary">
                View organization chart
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Project Manager */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              borderRadius: 2,
              boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              transition: "transform 0.2s, box-shadow 0.2s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              },
              cursor: "pointer",
              borderTop: `4px solid ${departmentColors["Project Manager"]}`,
            }}
            component={Link}
            href="/dept/project"
          >
            <CardContent>
              <Typography variant="subtitle1" fontWeight={500}>
                Project Manager
              </Typography>
              <Typography variant="body2" color="text.secondary">
                View organization chart
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
