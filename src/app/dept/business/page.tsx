"use client";

import { useCallback } from "react";
import { Box, Typography } from "@mui/material";
import OrgChartComponent from "../../components/OrgChart/OrgChartComponent";
import {
  orgChartData,
  departmentColors,
} from "../../components/OrgChart/mockOrgData";

export default function BusinessDeptPage() {
  // Filter the org chart data for Business & Marketing department only
  const filterBusinessDeptData = useCallback(() => {
    const ceoNode = { ...orgChartData };

    // Filter to include only the business department
    ceoNode.children = orgChartData.children?.filter(
      (dept) => dept.department === "Business and Marketing"
    );

    return ceoNode;
  }, []);

  return (
    <Box>
      <Typography variant="h6" gutterBottom fontWeight={500}>
        Business & Marketing Department
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Organization chart for the Business & Marketing department showing team
        structure.
      </Typography>

      <Box sx={{ mt: 3 }}>
        <OrgChartComponent
          data={filterBusinessDeptData()}
          departmentColors={departmentColors}
        />
      </Box>
    </Box>
  );
}
