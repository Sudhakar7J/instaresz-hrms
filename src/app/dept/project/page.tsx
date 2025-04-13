"use client";

import { useCallback } from "react";
import { Box, Typography } from "@mui/material";
import OrgChartComponent from "../../components/OrgChart/OrgChartComponent";
import {
  orgChartData,
  departmentColors,
} from "../../components/OrgChart/mockOrgData";

export default function ProjectDeptPage() {
  // Filter the org chart data for Project Manager department only
  const filterProjectDeptData = useCallback(() => {
    const ceoNode = { ...orgChartData };

    // Filter to include only the Project Manager department
    ceoNode.children = orgChartData.children?.filter(
      (dept) => dept.department === "Project Manager"
    );

    // If no Project Manager department exists yet, use Business and Marketing as fallback
    if (!ceoNode.children?.length) {
      ceoNode.children = orgChartData.children?.filter(
        (dept) => dept.department === "Business and Marketing"
      );

      // Update the department name
      if (ceoNode.children?.length) {
        ceoNode.children[0] = {
          ...ceoNode.children[0],
          department: "Project Manager",
          name: "Project Manager",
        };
      }
    }

    return ceoNode;
  }, []);

  return (
    <Box>
      <Typography variant="h6" gutterBottom fontWeight={500}>
        Project Manager Department
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Organization chart for the Project Manager department showing team
        structure.
      </Typography>

      <Box sx={{ mt: 3 }}>
        <OrgChartComponent
          data={filterProjectDeptData()}
          departmentColors={departmentColors}
        />
      </Box>
    </Box>
  );
}
