"use client";

import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  Tooltip,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { WorkHours } from "../data/mockData";
import { useState, useMemo } from "react";

interface MemberWorkHoursProps {
  data: WorkHours[];
}

export default function MemberWorkHours({ data }: MemberWorkHoursProps) {
  const [viewOption, setViewOption] = useState<string>("Week");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (option: string) => {
    setViewOption(option);
    handleClose();
  };

  // Get view-specific data
  const viewData = useMemo(() => {
    if (viewOption === "Day") {
      // Show only last 5 days for Day view
      return data.slice(-5);
    } else if (viewOption === "Month") {
      // For Month view, show data with month-specific dates
      return [
        { date: "Jan 5", hours: 8.2, overtime: 1.0 },
        { date: "Jan 10", hours: 7.9, overtime: 0 },
        { date: "Jan 15", hours: 8.5, overtime: 2.0 },
        { date: "Jan 20", hours: 7.8, overtime: 0 },
        { date: "Jan 25", hours: 8.1, overtime: 1.5 },
        { date: "Jan 28", hours: 7.5, overtime: 0 },
        { date: "Jan 30", hours: 6.0, overtime: 0 },
      ];
    }
    // Default Week view - just return the original data
    return data;
  }, [data, viewOption]);

  // Calculate total overtime based on current view
  const totalOvertime = viewData.reduce(
    (total, day) => total + (day.overtime || 0),
    0
  );

  // Calculate total hours for current view
  const viewTotalHours = viewData.reduce((total, day) => total + day.hours, 0);

  // Determine bar width based on the number of bars and view type
  const getBarWidth = () => {
    if (isMobile) return "60%";

    // Adjust width based on number of items
    if (viewData.length <= 5) return "50%";
    if (viewData.length <= 7) return "45%";
    return "40%"; // For month view with many items
  };

  // Get container width based on view type for proper spacing
  const getContainerWidth = () => {
    const baseWidth = isMobile ? 36 : 40;
    return isTablet && viewData.length > 5
      ? `${viewData.length * baseWidth}px`
      : "auto";
  };

  // Get max width for each bar container
  const getMaxBarContainerWidth = () => {
    if (viewData.length <= 5) return { sm: "60px", md: "55px" };
    if (viewData.length <= 7) return { sm: "50px", md: "45px" };
    return { sm: "45px", md: "40px" };
  };

  // Format dates for better display on different views
  const formatDate = (dateStr: string) => {
    if (viewOption === "Month" && viewData.length > 5) {
      // For month view, make date labels more compact when needed
      return dateStr.replace("Jan ", ""); // Just show day number
    }
    return dateStr;
  };

  return (
    <Card
      sx={{
        mb: 2,
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center",
          justifyContent: "space-between",
          p: { xs: 1.5, sm: 2 },
          pb: { xs: 1, sm: 1 },
          gap: isMobile ? 1 : 0,
        }}
      >
        <Box display="flex" alignItems="center">
          <Typography variant="subtitle1" fontWeight="500" sx={{ mr: 0.5 }}>
            Member Work Hours
          </Typography>
          <Tooltip title="Total work hours for the current period" arrow>
            <IconButton size="small" sx={{ p: 0 }}>
              <InfoOutlinedIcon fontSize="small" color="action" />
            </IconButton>
          </Tooltip>
        </Box>

        <Button
          size="small"
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
          variant="outlined"
          sx={{
            textTransform: "none",
            fontSize: "0.75rem",
            height: "28px",
            borderRadius: "6px",
            borderColor: "#e0e0e0",
            color: "#555",
            px: 1,
            width: isMobile ? "100%" : "auto",
            "&:hover": {
              borderColor: "#bdbdbd",
              backgroundColor: "#f5f5f5",
            },
          }}
        >
          View by {viewOption}
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={() => handleMenuItemClick("Day")}>Day</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("Week")}>Week</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("Month")}>
            Month
          </MenuItem>
        </Menu>
      </Box>

      <CardContent
        sx={{
          pt: 0,
          pb: "16px !important",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "center",
            mb: 2,
            gap: isMobile ? 1 : 0,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "baseline" }}>
            <Typography
              variant="h4"
              component="span"
              fontWeight="bold"
              sx={{ fontSize: { xs: "1.75rem", sm: "2rem" }, lineHeight: 1.2 }}
            >
              {Math.floor(viewTotalHours)}
            </Typography>
            <Typography
              variant="h6"
              component="span"
              fontWeight="bold"
              sx={{ fontSize: { xs: "1.1rem", sm: "1.25rem" }, mr: 0.5 }}
            >
              h
            </Typography>
            <Typography
              variant="h6"
              component="span"
              fontWeight="bold"
              sx={{ fontSize: { xs: "1.1rem", sm: "1.25rem" }, mr: 0.5 }}
            >
              {Math.round(totalOvertime * 10)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              m
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  bgcolor: "#4965e0",
                  mr: 0.5,
                }}
              />
              <Typography
                variant="caption"
                sx={{ color: "text.secondary", fontSize: "0.7rem" }}
              >
                Work Time
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  bgcolor: "#ffcdd2",
                  mr: 0.5,
                }}
              />
              <Typography
                variant="caption"
                sx={{ color: "text.secondary", fontSize: "0.7rem" }}
              >
                Overtime
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            height: { xs: 130, sm: 170 },
            mt: 2,
            mb: 4, // Increased for date labels
            position: "relative",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            px: 1,
            overflowX: isTablet && viewData.length > 5 ? "auto" : "visible",
            overflowY: "hidden",
          }}
        >
          {/* Chart container - adds minimum width for scrolling on mobile */}
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              width: "100%",
              height: "100%",
              minWidth: getContainerWidth(),
              position: "relative",
              justifyContent:
                viewData.length <= 5 ? "space-around" : "space-between",
              px: viewData.length <= 5 ? 2 : 0,
              pb: 3, // Added padding at the bottom for date labels
            }}
          >
            {/* Horizontal grid lines */}
            {[...Array(3)].map((_, i) => (
              <Box
                key={i}
                sx={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: `calc(${33.3 * (i + 1)}% + 24px)`, // Adjusted to account for date labels
                  borderBottom: "1px dashed #eee",
                  zIndex: 1,
                }}
              />
            ))}

            {/* Dotted reference line */}
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: "calc(40% + 24px)", // Adjusted to account for date labels
                borderBottom: "1px dotted #000",
                zIndex: 1,
              }}
            />

            {/* Bars */}
            {viewData.map((day, index) => (
              <Box
                key={index}
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                  zIndex: 2,
                  minWidth: isMobile ? "36px" : "6%",
                  maxWidth: getMaxBarContainerWidth(),
                }}
              >
                {day.overtime && day.overtime > 0 ? (
                  <Box
                    sx={{
                      width: getBarWidth(),
                      backgroundColor: "#ffcdd2",
                      height: `${day.overtime * (isMobile ? 10 : 15)}px`,
                      borderRadius: "4px 4px 0 0",
                    }}
                  />
                ) : null}
                <Box
                  sx={{
                    width: getBarWidth(),
                    backgroundColor: "#4965e0",
                    height: `${day.hours * (isMobile ? 10 : 15)}px`,
                    minHeight: 20,
                    borderRadius:
                      day.overtime && day.overtime > 0 ? "0" : "4px 4px 0 0",
                  }}
                />

                {/* Date label - moved outside of the relative positioning flow */}
                <Box
                  sx={{
                    width: "100%",
                    textAlign: "center",
                    mt: 1,
                    position: "absolute",
                    bottom: "-24px",
                  }}
                >
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{
                      fontSize: "0.65rem",
                      display: "inline-block",
                      maxWidth: "100%",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {formatDate(day.date)}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
