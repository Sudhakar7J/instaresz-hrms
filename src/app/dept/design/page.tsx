"use client";

import { useCallback } from "react";
import { Box, Typography } from "@mui/material";
import OrgChartComponent from "../../components/OrgChart/OrgChartComponent";
import {
  orgChartData,
  departmentColors,
} from "../../components/OrgChart/mockOrgData";

export default function DesignDeptPage() {
  // Filter the org chart data for Design department only
  const filterDesignDeptData = useCallback(() => {
    const ceoNode = { ...orgChartData };

    // Filter to include only the design department
    ceoNode.children = orgChartData.children?.filter(
      (dept) => dept.department === "Design"
    );

    return ceoNode;
  }, []);

  return (
    <Box>
      <Typography variant="h6" gutterBottom fontWeight={500}>
        Design Department
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Organization chart for the Design department showing team structure.
      </Typography>

      <Box sx={{ mt: 3 }}>
        <OrgChartComponent
          data={filterDesignDeptData()}
          departmentColors={departmentColors}
        />
      </Box>
    </Box>
  );
}
