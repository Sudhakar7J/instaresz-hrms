"use client";

import React from "react";
import { Box, Paper, Typography, Tabs, Tab } from "@mui/material";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Interface for layout component props
interface DeptLayoutProps {
  children: React.ReactNode;
}

export default function DeptLayout({ children }: DeptLayoutProps) {
  const pathname = usePathname();
  const currentDept = pathname.split("/").pop();

  // Determine active tab based on the current pathname
  const getTabValue = () => {
    switch (currentDept) {
      case "business":
        return 0;
      case "design":
        return 1;
      case "dev":
        return 2;
      case "hr":
        return 3;
      case "project":
        return 4;
      default:
        return 0;
    }
  };

  return (
    <Box sx={{ p: { xs: 1, sm: 2 } }}>
      {/* Title section */}
      <Box sx={{ mb: 3 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            fontSize: { xs: "1.125rem", sm: "1.5rem" },
          }}
        >
          Department
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Organization Structure
        </Typography>
      </Box>

      {/* Department navigation tabs */}
      <Paper
        sx={{
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
          mb: 3,
        }}
      >
        <Tabs
          value={getTabValue()}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            "& .MuiTab-root": {
              textTransform: "none",
              minWidth: 120,
              fontSize: "0.875rem",
              fontWeight: 500,
            },
          }}
        >
          <Tab
            label="Business & Marketing"
            component={Link}
            href="/dept/business"
            sx={{
              color: currentDept === "business" ? "#5271ff" : "inherit",
              "&.Mui-selected": { color: "#5271ff" },
            }}
          />
          <Tab
            label="Design"
            component={Link}
            href="/dept/design"
            sx={{
              color: currentDept === "design" ? "#00b894" : "inherit",
              "&.Mui-selected": { color: "#00b894" },
            }}
          />
          <Tab
            label="Development"
            component={Link}
            href="/dept/dev"
            sx={{
              color: currentDept === "dev" ? "#3498db" : "inherit",
              "&.Mui-selected": { color: "#3498db" },
            }}
          />
          <Tab
            label="Human Resource"
            component={Link}
            href="/dept/hr"
            sx={{
              color: currentDept === "hr" ? "#a29bfe" : "inherit",
              "&.Mui-selected": { color: "#a29bfe" },
            }}
          />
          <Tab
            label="Project Manager"
            component={Link}
            href="/dept/project"
            sx={{
              color: currentDept === "project" ? "#fdcb6e" : "inherit",
              "&.Mui-selected": { color: "#fdcb6e" },
            }}
          />
        </Tabs>
      </Paper>

      {/* Department content */}
      <Paper
        sx={{
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
          p: 2,
        }}
      >
        {children}
      </Paper>
    </Box>
  );
}
