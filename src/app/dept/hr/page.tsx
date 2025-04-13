"use client";

import { useCallback } from "react";
import { Box, Typography } from "@mui/material";
import OrgChartComponent from "../../components/OrgChart/OrgChartComponent";
import {
  orgChartData,
  departmentColors,
} from "../../components/OrgChart/mockOrgData";

export default function HRDeptPage() {
  // Filter the org chart data for Human Resource department only
  const filterHRDeptData = useCallback(() => {
    const ceoNode = { ...orgChartData };

    // Filter to include only the HR department
    ceoNode.children = orgChartData.children?.filter(
      (dept) => dept.department === "Human Resource"
    );

    return ceoNode;
  }, []);

  return (
    <Box>
      <Typography variant="h6" gutterBottom fontWeight={500}>
        Human Resource Department
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Organization chart for the Human Resource department showing team
        structure.
      </Typography>

      <Box sx={{ mt: 3 }}>
        <OrgChartComponent
          data={filterHRDeptData()}
          departmentColors={departmentColors}
        />
      </Box>
    </Box>
  );
}
