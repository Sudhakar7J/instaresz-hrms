"use client";

import { useParams, useRouter } from "next/navigation";
import {
  Box,
  Typography,
  Paper,
  Tabs,
  Tab,
  Button,
  Divider,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Chip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState, useEffect } from "react";
import {
  jobListings,
  candidates,
  JobListing,
  Candidate,
} from "../../data/mockData";

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
      id={`job-tabpanel-${index}`}
      aria-labelledby={`job-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `job-tab-${index}`,
    "aria-controls": `job-tabpanel-${index}`,
  };
}

export default function JobDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [tabValue, setTabValue] = useState(0);
  const [job, setJob] = useState<JobListing | null>(null);
  const [jobCandidates, setJobCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    // Find the job with the matching ID
    const foundJob = jobListings.find((job) => job.id === params.id);
    if (foundJob) {
      setJob(foundJob);

      // Find candidates for this job
      const foundCandidates = candidates.filter(
        (candidate) => candidate.jobId === params.id
      );
      setJobCandidates(foundCandidates);
    } else {
      // Redirect to the recruitment page if job not found
      router.push("/recruitment");
    }
  }, [params.id, router]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleBack = () => {
    router.push("/recruitment");
  };

  // Get status color based on candidate status
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Sourced":
        return { bg: "#e8f4fd", text: "#0ea5e9" };
      case "In Progress":
        return { bg: "#fff8e6", text: "#f59e0b" };
      case "Interview":
        return { bg: "#e0f7ea", text: "#10b981" };
      case "Hired":
        return { bg: "#dcfce7", text: "#22c55e" };
      case "Rejected":
        return { bg: "#fee2e2", text: "#ef4444" };
      default:
        return { bg: "#f3f4f6", text: "#6b7280" };
    }
  };

  if (!job) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography>Loading...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 2, pb: 4, bgcolor: "#F5F7FA", minHeight: "100vh" }}>
      {/* Back button and Title */}
      <Box sx={{ mb: 2 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={handleBack}
          sx={{
            color: "#5271ff",
            textTransform: "none",
            fontWeight: 500,
            mb: 1.5,
            pl: 0,
            "&:hover": {
              bgcolor: "transparent",
              color: "#3a57e8",
            },
          }}
        >
          Back to Job List
        </Button>
        <Typography variant="h4" fontWeight={600} sx={{ mb: 2 }}>
          {job.title}
        </Typography>
      </Box>

      {/* Main content area */}
      <Paper
        sx={{
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
          bgcolor: "white",
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="job details tabs"
            sx={{
              px: 2,
              "& .MuiTab-root": {
                textTransform: "none",
                fontSize: "0.9rem",
                fontWeight: 500,
                py: 1.5,
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
              icon={
                <Box
                  component="span"
                  sx={{
                    width: 20,
                    height: 20,
                    bgcolor: "#eef2ff",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 1,
                    "& svg": {
                      fontSize: 14,
                      color: "#5271ff",
                    },
                  }}
                >
                  <EditIcon fontSize="inherit" />
                </Box>
              }
              iconPosition="start"
              label="Job Description"
              {...a11yProps(0)}
            />
            <Tab
              icon={
                <Box
                  component="span"
                  sx={{
                    width: 20,
                    height: 20,
                    bgcolor: "#eef2ff",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 1,
                    "& svg": {
                      fontSize: 14,
                      color: "#5271ff",
                    },
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      bgcolor: "#5271ff",
                    }}
                  />
                </Box>
              }
              iconPosition="start"
              label="Candidates"
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>

        {/* Job Description Tab Panel */}
        <TabPanel value={tabValue} index={0}>
          <Box sx={{ display: "flex" }}>
            {/* Main content - 70% */}
            <Box sx={{ width: "70%", px: 3, pb: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Typography variant="h6" fontWeight={600}>
                  Job Description
                </Typography>
                <Button
                  variant="outlined"
                  startIcon={<EditIcon fontSize="small" />}
                  sx={{
                    color: "#6c757d",
                    borderColor: "#ced4da",
                    textTransform: "none",
                    borderRadius: "8px",
                    fontSize: "0.75rem",
                    py: 0.5,
                    px: 1.5,
                    bgcolor: "white",
                    "&:hover": {
                      bgcolor: "#f8f9fa",
                      borderColor: "#adb5bd",
                    },
                  }}
                >
                  Description
                </Button>
              </Box>

              <Divider sx={{ mb: 3 }} />

              {/* About Company */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  About Company
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ lineHeight: 1.7 }}
                >
                  {job.detailedDescription?.aboutCompany ||
                    "No company description available."}
                </Typography>
              </Box>

              {/* What you'll do */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  What you&apos;ll do
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Areas you could work on:
                </Typography>
                {job.detailedDescription?.responsibilities &&
                job.detailedDescription.responsibilities.length > 0 ? (
                  <ul
                    style={{ paddingLeft: 18, marginTop: 8, marginBottom: 8 }}
                  >
                    {job.detailedDescription.responsibilities.map(
                      (responsibility: string, index: number) => (
                        <li
                          key={index}
                          style={{
                            color: "#6c757d",
                            fontSize: "0.875rem",
                            marginBottom: 8,
                            lineHeight: 1.6,
                          }}
                        >
                          {responsibility}
                        </li>
                      )
                    )}
                  </ul>
                ) : (
                  <Typography variant="body2">
                    No responsibilities specified.
                  </Typography>
                )}
              </Box>

              {/* Requirements */}
              <Box>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  Requirements:
                </Typography>
                {job.detailedDescription?.requirements &&
                job.detailedDescription.requirements.length > 0 ? (
                  <ul style={{ paddingLeft: 18, marginTop: 8 }}>
                    {job.detailedDescription.requirements.map(
                      (requirement: string, index: number) => (
                        <li
                          key={index}
                          style={{
                            color: "#6c757d",
                            fontSize: "0.875rem",
                            marginBottom: 8,
                            lineHeight: 1.6,
                          }}
                        >
                          {requirement}
                        </li>
                      )
                    )}
                  </ul>
                ) : (
                  <Typography variant="body2">
                    No requirements specified.
                  </Typography>
                )}
              </Box>
            </Box>

            {/* Right sidebar - 30% */}
            <Box
              sx={{
                width: "25%",
                bgcolor: "#fafafa",
                p: 2,
                borderRadius: "0 0 8px 0",
                height: "fit-content",
              }}
            >
              <Box sx={{ mb: 3 }}>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Active until
                </Typography>
                <Typography variant="body1" fontWeight={600}>
                  {job.activeUntil}
                </Typography>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Box sx={{ mb: 3 }}>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Department Type
                </Typography>
                <Typography variant="body1" fontWeight={600}>
                  {job.department}
                </Typography>
              </Box>

              <Divider sx={{ my: 3 }} />

              <Box sx={{ mb: 3 }}>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Job Type
                </Typography>
                <Typography variant="body1" fontWeight={600}>
                  {job.jobType}
                </Typography>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Box>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Location
                </Typography>
                <Typography variant="body1" fontWeight={600}>
                  {job.location || "Remote"}
                </Typography>
              </Box>
            </Box>
          </Box>
        </TabPanel>

        {/* Candidates Tab Panel */}
        <TabPanel value={tabValue} index={1}>
          <Box sx={{ px: 3, pb: 3 }}>
            {jobCandidates.length > 0 ? (
              <TableContainer>
                <Table sx={{ minWidth: 650 }}>
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{
                          fontWeight: 500,
                          color: "text.secondary",
                          fontSize: "0.75rem",
                        }}
                      >
                        Candidate Name
                      </TableCell>
                      <TableCell
                        sx={{
                          fontWeight: 500,
                          color: "text.secondary",
                          fontSize: "0.75rem",
                        }}
                      >
                        Status
                      </TableCell>
                      <TableCell
                        sx={{
                          fontWeight: 500,
                          color: "text.secondary",
                          fontSize: "0.75rem",
                        }}
                      >
                        Applied Date
                      </TableCell>
                      <TableCell
                        sx={{
                          fontWeight: 500,
                          color: "text.secondary",
                          fontSize: "0.75rem",
                        }}
                      >
                        Resume
                      </TableCell>
                      <TableCell
                        sx={{
                          fontWeight: 500,
                          color: "text.secondary",
                          fontSize: "0.75rem",
                        }}
                      ></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {jobCandidates.map((candidate) => {
                      const statusColor = getStatusColor(candidate.status);
                      return (
                        <TableRow
                          key={candidate.id}
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
                                src={candidate.avatar}
                                alt={candidate.name}
                                sx={{ width: 36, height: 36, mr: 2 }}
                              />
                              <Box>
                                <Typography variant="body2" fontWeight={500}>
                                  {candidate.name}
                                </Typography>
                                <Typography
                                  variant="caption"
                                  color="text.secondary"
                                >
                                  {candidate.email}
                                </Typography>
                              </Box>
                            </Box>
                          </TableCell>
                          <TableCell>
                            <Chip
                              label={candidate.status}
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
                            <Typography variant="body2">
                              {candidate.appliedDate}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            {candidate.resume && (
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <AttachFileIcon
                                  fontSize="small"
                                  sx={{ color: "#5271ff", mr: 0.5 }}
                                />
                                <Typography
                                  variant="body2"
                                  color="#5271ff"
                                  sx={{ cursor: "pointer" }}
                                >
                                  Resume
                                </Typography>
                              </Box>
                            )}
                          </TableCell>
                          <TableCell align="right">
                            <IconButton size="small">
                              <MoreVertIcon fontSize="small" />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              <Typography variant="body1">
                No candidates have applied for this position yet.
              </Typography>
            )}
          </Box>
        </TabPanel>
      </Paper>

      {/* Mobile version of sidebar - only shown on small screens */}
      <Box
        sx={{
          mt: 3,
          display: { xs: "block", md: "none" },
        }}
      >
        <Paper
          sx={{
            p: 3,
            borderRadius: 2,
            boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
            bgcolor: "#fafafa",
          }}
        >
          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Active until
            </Typography>
            <Typography variant="body1" fontWeight={600}>
              {job.activeUntil}
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Department Type
            </Typography>
            <Typography variant="body1" fontWeight={600}>
              {job.department}
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Job Type
            </Typography>
            <Typography variant="body1" fontWeight={600}>
              {job.jobType}
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Location
            </Typography>
            <Typography variant="body1" fontWeight={600}>
              {job.location || "Remote"}
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
