"use client";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Avatar,
  Divider,
} from "@mui/material";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function EmployeeDetails() {
  return (
    <>
      <Card
        sx={{
          mb: 2,
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        <CardContent sx={{ p: 3, pb: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Chip
              label="Active until: Jan 31, 2024"
              size="small"
              variant="outlined"
              sx={{
                height: "22px",
                borderRadius: "4px",
                fontSize: "0.7rem",
                borderColor: "#e0e0e0",
                bgcolor: "#fafafa",
              }}
            />
          </Box>

          <Typography variant="h6" fontWeight="600" sx={{ mb: 1 }}>
            Junior Frontend Developer
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            A front-end developer is basically a web developer that has a
            specialization in creating user interfaces for websites.
          </Typography>

          <Box display="flex" gap={1} sx={{ mb: 2 }}>
            <Chip
              icon={
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: "#1976d2",
                    ml: 1,
                  }}
                />
              }
              label="Development"
              size="small"
              sx={{
                backgroundColor: "#e3f2fd",
                color: "#1976d2",
                height: "24px",
                borderRadius: "4px",
                fontSize: "0.75rem",
                "& .MuiChip-icon": {
                  mr: -0.5,
                },
              }}
            />
            <Chip
              label="Full Time"
              size="small"
              sx={{
                backgroundColor: "#f5f5f5",
                height: "24px",
                borderRadius: "4px",
                fontSize: "0.75rem",
              }}
            />
            <Chip
              label="Remote"
              size="small"
              sx={{
                backgroundColor: "#f5f5f5",
                height: "24px",
                borderRadius: "4px",
                fontSize: "0.75rem",
              }}
            />
          </Box>
        </CardContent>
      </Card>

      <Card
        sx={{
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        <CardContent sx={{ p: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
            <Avatar
              src="/avatars/cody.jpg"
              alt="Cody Fisher"
              sx={{ width: 40, height: 40, mr: 2 }}
            />
            <Box>
              <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                Cody Fisher
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                display="block"
              >
                cody_fisher93@gmail.com
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 1.5 }} />

          <Box display="flex" alignItems="center" gap={2}>
            <Box display="flex" alignItems="center">
              <PhoneOutlinedIcon
                sx={{
                  fontSize: 14,
                  color: "text.secondary",
                  mr: 0.5,
                }}
              />
              <Typography variant="caption" color="text.secondary">
                (+46) 928 7273 7362
              </Typography>
            </Box>

            <Box display="flex" alignItems="center">
              <AccessTimeIcon
                sx={{
                  fontSize: 14,
                  color: "text.secondary",
                  mr: 0.5,
                }}
              />
              <Typography variant="caption" color="text.secondary">
                120h 32m
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
