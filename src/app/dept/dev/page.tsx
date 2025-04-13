"use client";

import { useCallback } from "react";
import { Box, Typography } from "@mui/material";
import OrgChartComponent from "../../components/OrgChart/OrgChartComponent";
import {
  orgChartData,
  departmentColors,
} from "../../components/OrgChart/mockOrgData";

export default function DevDeptPage() {
  // Filter the org chart data for Development department only
  const filterDevDeptData = useCallback(() => {
    const ceoNode = { ...orgChartData };

    // Filter to include only the development department
    ceoNode.children = orgChartData.children?.filter(
      (dept) => dept.department === "Development"
    );

    return ceoNode;
  }, []);

  return (
    <Box>
      <Typography variant="h6" gutterBottom fontWeight={500}>
        Development Department
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Organization chart for the Development department showing team
        structure.
      </Typography>

      <Box sx={{ mt: 3 }}>
        <OrgChartComponent
          data={filterDevDeptData()}
          departmentColors={departmentColors}
        />
      </Box>
    </Box>
  );
}
