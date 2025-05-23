"use client";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Avatar,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useRouter } from "next/navigation";

export default function EmployeeDetails() {
  const theme = useTheme();
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Card
        onClick={() => router.push("/employee")}
        sx={{
          mb: 2,
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          cursor: "pointer",
          transition: "transform 0.2s, box-shadow 0.2s",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          },
        }}
      >
        <CardContent sx={{ p: { xs: 2, sm: 3 }, pb: { xs: 1.5, sm: 2 } }}>
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

          <Typography
            variant="h6"
            fontWeight="600"
            sx={{ mb: 1, fontSize: { xs: "1.1rem", sm: "1.25rem" } }}
          >
            Junior Frontend Developer
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            A front-end developer is basically a web developer that has a
            specialization in creating user interfaces for websites.
          </Typography>

          <Box
            display="flex"
            gap={1}
            sx={{
              mb: 2,
              flexWrap: "wrap",
            }}
          >
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
        onClick={() => router.push("/employee")}
        sx={{
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          cursor: "pointer",
          transition: "transform 0.2s, box-shadow 0.2s",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          },
        }}
      >
        <CardContent sx={{ p: { xs: 1.5, sm: 2 } }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
            <Avatar
              src=""
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
                sx={{
                  maxWidth: { xs: "180px", sm: "none" },
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                cody_fisher93@gmail.com
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 1.5 }} />

          <Box
            display="flex"
            flexDirection={isMobile ? "column" : "row"}
            alignItems={isMobile ? "flex-start" : "center"}
            gap={isMobile ? 1 : 2}
          >
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
