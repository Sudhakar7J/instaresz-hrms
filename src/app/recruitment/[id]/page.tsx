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
  Avatar,
  InputAdornment,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArticleIcon from "@mui/icons-material/Article";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CommentIcon from "@mui/icons-material/Comment";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
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

  // Add a function to group candidates by status
  const groupCandidatesByStatus = (candidates: Candidate[]) => {
    const grouped: Record<string, Candidate[]> = {
      Sourced: [],
      "In Progress": [],
      Interview: [],
      Hired: [],
      Rejected: [],
    };

    candidates.forEach((candidate) => {
      if (grouped[candidate.status]) {
        grouped[candidate.status].push(candidate);
      }
    });

    return grouped;
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
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 1,
                    "& svg": {
                      fontSize: 18,
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
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 1,
                    "& svg": {
                      fontSize: 18,
                      color: "#5271ff",
                    },
                  }}
                >
                  <PeopleOutlineIcon fontSize="inherit" />
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

              {/* What you&apos;ll do */}
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
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 3,
              }}
            >
              <Typography variant="h6" fontWeight={600}>
                Candidates
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                <TextField
                  placeholder="Search name or email here..."
                  size="small"
                  sx={{
                    width: 240,
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      fontSize: "0.875rem",
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon
                          fontSize="small"
                          sx={{ color: "#adb5bd" }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  sx={{
                    backgroundColor: "#5271ff",
                    color: "white",
                    textTransform: "none",
                    borderRadius: "8px",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    "&:hover": {
                      backgroundColor: "#3a57e8",
                    },
                  }}
                >
                  Add Candidate
                </Button>
              </Box>
            </Box>

            {jobCandidates.length > 0 ? (
              <>
                {/* Status labels row - horizontal stripe */}
                <Box sx={{ display: "flex", width: "100%", mb: 3 }}>
                  {Object.entries(groupCandidatesByStatus(jobCandidates)).map(
                    ([status, candidates]) => {
                      const statusColor = getStatusColor(status);
                      return (
                        <Box
                          key={status}
                          sx={{
                            flex: 1,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            py: 0.75,
                            borderRadius: "8px",
                            bgcolor: statusColor.bg,
                            color: statusColor.text,
                            mx: 0.5,
                            position: "relative",
                          }}
                        >
                          <Typography
                            variant="body2"
                            fontWeight={600}
                            sx={{
                              fontSize: "0.8rem",
                              textTransform: "uppercase",
                            }}
                          >
                            {status}
                          </Typography>
                          <Box
                            sx={{
                              position: "absolute",
                              right: 8,
                              bgcolor: "rgba(255,255,255,0.7)",
                              px: 1,
                              py: 0.25,
                              borderRadius: "4px",
                              fontSize: "0.75rem",
                              fontWeight: 600,
                            }}
                          >
                            {candidates.length}
                          </Box>
                        </Box>
                      );
                    }
                  )}
                </Box>

                {/* Content section - full width columns */}
                <Box sx={{ display: "flex", width: "100%", gap: 2 }}>
                  {Object.entries(groupCandidatesByStatus(jobCandidates)).map(
                    ([status, candidates]) => {
                      return (
                        <Box
                          key={status}
                          sx={{
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              gap: 2,
                            }}
                          >
                            {candidates.map((candidate) => (
                              <Paper
                                key={candidate.id}
                                sx={{
                                  p: 2,
                                  borderRadius: "8px",
                                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                                  transition: "all 0.2s",
                                  "&:hover": {
                                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                                  },
                                }}
                              >
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    mb: 1.5,
                                  }}
                                >
                                  <Avatar
                                    src={candidate.avatar}
                                    alt={candidate.name}
                                    sx={{ width: 32, height: 32, mr: 1.5 }}
                                  />
                                  <Box>
                                    <Typography
                                      variant="body2"
                                      fontWeight={500}
                                      noWrap
                                    >
                                      {candidate.name}
                                    </Typography>
                                    <Typography
                                      variant="caption"
                                      color="text.secondary"
                                      noWrap
                                      sx={{ display: "block" }}
                                    >
                                      {candidate.email}
                                    </Typography>
                                  </Box>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    borderTop: "1px solid #eeeeee",
                                    pt: 1.5,
                                  }}
                                >
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      color: "#6c757d",
                                    }}
                                  >
                                    <LinkedInIcon
                                      sx={{ fontSize: 16, mr: 1 }}
                                    />
                                    <Typography variant="caption">
                                      LinkedIn
                                    </Typography>
                                  </Box>

                                  <Box sx={{ display: "flex", gap: 1 }}>
                                    {candidate.resume && (
                                      <Box
                                        sx={{
                                          bgcolor: "#f2f3f5",
                                          borderRadius: "4px",
                                          width: 24,
                                          height: 24,
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          cursor: "pointer",
                                        }}
                                      >
                                        <ArticleIcon
                                          sx={{
                                            fontSize: 14,
                                            color: "#6c757d",
                                          }}
                                        />
                                      </Box>
                                    )}
                                    <Box
                                      sx={{
                                        bgcolor: "#f2f3f5",
                                        borderRadius: "4px",
                                        width: 24,
                                        height: 24,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        cursor: "pointer",
                                      }}
                                    >
                                      <CommentIcon
                                        sx={{ fontSize: 14, color: "#6c757d" }}
                                      />
                                    </Box>
                                  </Box>
                                </Box>
                              </Paper>
                            ))}
                            {candidates.length === 0 && (
                              <Box
                                sx={{
                                  height: 80,
                                  borderRadius: 2,
                                  border: "1px dashed #d1d5db",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  color: "#9ca3af",
                                  fontSize: "0.8rem",
                                }}
                              >
                                No candidates
                              </Box>
                            )}
                          </Box>
                        </Box>
                      );
                    }
                  )}
                </Box>
              </>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 300,
                  bgcolor: "#f9fafb",
                  borderRadius: 2,
                  p: 4,
                  textAlign: "center",
                }}
              >
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  No candidates yet
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 3, maxWidth: 400 }}
                >
                  Start adding candidates to this job listing by clicking the
                  &quot;Add Candidate&quot; button.
                </Typography>
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  sx={{
                    backgroundColor: "#5271ff",
                    color: "white",
                    textTransform: "none",
                    borderRadius: "8px",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    "&:hover": {
                      backgroundColor: "#3a57e8",
                    },
                  }}
                >
                  Add Candidate
                </Button>
              </Box>
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
