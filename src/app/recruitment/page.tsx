"use client";

import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Avatar,
  Chip,
  Select,
  MenuItem,
  FormControl,
  SelectChangeEvent,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { useState } from "react";
import { jobListings } from "../data/mockData";
import { useRouter } from "next/navigation";

// Function to get department color
const getDeptColor = (dept: string) => {
  switch (dept) {
    case "Design":
      return "#00b894";
    case "Development":
      return "#3498db";
    case "Business and Marketing":
      return "#5271ff";
    case "Human Resource":
      return "#a29bfe";
    case "Project Manager":
      return "#fdcb6e";
    default:
      return "#9e9e9e";
  }
};

export default function RecruitmentPage() {
  const [jobFilter, setJobFilter] = useState<string>("Active Jobs");
  const router = useRouter();

  const handleFilterChange = (event: SelectChangeEvent) => {
    setJobFilter(event.target.value);
  };

  // Navigate to job details
  const handleJobClick = (jobId: string) => {
    router.push(`/recruitment/${jobId}`);
  };

  // Filter jobs based on selected filter
  const filteredJobs = jobListings.filter((job) =>
    jobFilter === "Active Jobs"
      ? job.status === "Active"
      : job.status === "Closed"
  );

  return (
    <Box sx={{ p: { xs: 1.5, sm: 2 } }}>
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
            <WorkOutlineIcon sx={{ fontSize: { xs: 18, sm: 24 } }} />
          </Avatar>
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                fontSize: { xs: "1.125rem", sm: "1.5rem" },
              }}
            >
              Recruitment
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Manage recruitment process
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{ display: "flex", gap: 1, width: { xs: "100%", sm: "auto" } }}
        >
          <FormControl
            sx={{ minWidth: { xs: 0, sm: 140 }, flex: { xs: 1, sm: "none" } }}
          >
            <Select
              value={jobFilter}
              onChange={handleFilterChange}
              size="small"
              sx={{
                borderRadius: "8px",
                ".MuiSelect-select": {
                  py: 1,
                  fontSize: "0.875rem",
                },
              }}
            >
              <MenuItem value="Active Jobs">Active Jobs</MenuItem>
              <MenuItem value="Closed Jobs">Closed Jobs</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              bgcolor: "#5271ff",
              textTransform: "none",
              borderRadius: "8px",
              fontWeight: 500,
              flex: { xs: 1, sm: "none" },
            }}
          >
            Create New Job
          </Button>
        </Box>
      </Box>

      {/* Job Listings Grid */}
      <Grid container spacing={{ xs: 2, sm: 2.5 }}>
        {filteredJobs.map((job) => (
          <Grid item xs={12} sm={6} md={4} key={job.id}>
            <Card
              onClick={() => handleJobClick(job.id)}
              sx={{
                height: "100%",
                borderRadius: { xs: "12px", sm: "16px" },
                boxShadow: "0 1px 5px rgba(0,0,0,0.03)",
                transition: "transform 0.2s, box-shadow 0.2s",
                border: "1px solid #f0f0f0",
                bgcolor: "#ffffff",
                opacity: job.status === "Closed" ? 0.8 : 1,
                position: "relative",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
                  cursor: "pointer",
                },
                "&::after":
                  job.status === "Closed"
                    ? {
                        content: "''",
                        position: "absolute",
                        top: 12,
                        right: 12,
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        backgroundColor: "#adb5bd",
                      }
                    : {},
              }}
            >
              <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                <Box
                  sx={{
                    mb: 1.5,
                    display: "inline-block",
                    px: 1.5,
                    py: 0.75,
                    border: "1px solid #f0f0f0",
                    borderRadius: "8px",
                    backgroundColor:
                      job.status === "Closed" ? "#f8f9fa" : "#fcfcfc",
                  }}
                >
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    fontSize="0.75rem"
                  >
                    {job.status === "Active" ? "Active until: " : "Closed on: "}
                    <strong>{job.activeUntil}</strong>
                  </Typography>
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: "1rem", sm: "1.1rem" },
                    mb: 1.2,
                  }}
                >
                  {job.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    mb: 2.5,
                    lineHeight: 1.4,
                    fontSize: { xs: "0.8rem", sm: "0.825rem" },
                  }}
                >
                  {job.description}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 1,
                  }}
                >
                  <Chip
                    icon={
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          backgroundColor: getDeptColor(job.department),
                          ml: 0.5,
                        }}
                      />
                    }
                    label={job.department}
                    size="small"
                    sx={{
                      backgroundColor: `${getDeptColor(job.department)}15`,
                      color: getDeptColor(job.department),
                      borderRadius: "16px",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      height: "28px",
                      "& .MuiChip-icon": {
                        mr: -0.5,
                      },
                    }}
                  />
                  <Chip
                    label={job.jobType}
                    size="small"
                    sx={{
                      backgroundColor: "#f8f9fa",
                      color: "#495057",
                      borderRadius: "16px",
                      fontSize: "0.75rem",
                      fontWeight: 400,
                      height: "28px",
                      border: "1px solid #f0f0f0",
                    }}
                  />
                  <Chip
                    label={job.workMode}
                    size="small"
                    sx={{
                      backgroundColor: "#f8f9fa",
                      color: "#495057",
                      borderRadius: "16px",
                      fontSize: "0.75rem",
                      fontWeight: 400,
                      height: "28px",
                      border: "1px solid #f0f0f0",
                    }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
