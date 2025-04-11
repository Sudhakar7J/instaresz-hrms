"use client";

import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Chip,
  Select,
  MenuItem,
  SelectChangeEvent,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Event,
  jan28Schedule,
  jan29Schedule,
  jan30Schedule,
} from "../data/mockData";
import { useState, useMemo } from "react";

interface TodayScheduleProps {
  events: Event[];
  date: string;
}

export default function TodaySchedule({ date }: TodayScheduleProps) {
  const [selectedDate, setSelectedDate] = useState(date);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const handleDateChange = (event: SelectChangeEvent<string>) => {
    setSelectedDate(event.target.value);
  };

  // Get events based on selected date
  const dayEvents = useMemo(() => {
    switch (selectedDate) {
      case "Jan 28, 2024":
        return jan28Schedule;
      case "Jan 29, 2024":
        return jan29Schedule;
      case "Jan 30, 2024":
        return jan30Schedule;
      default:
        return jan28Schedule;
    }
  }, [selectedDate]);

  // Hours to display in the timeline
  const hours = ["08:00", "09:00", "10:00", "11:00"];

  // Calculate horizontal position for each event based on time
  const getEventPosition = (time: string): number => {
    const [hours, minutes] = time.split(":").map(Number);
    const totalMinutes = hours * 60 + minutes;
    const startMinutes = 8 * 60; // 8:00 AM in minutes
    const endMinutes = 11 * 60 + 59; // 11:59 AM in minutes
    const timelineWidth = 100; // Width percentage of the timeline

    return (
      ((totalMinutes - startMinutes) / (endMinutes - startMinutes)) *
      timelineWidth
    );
  };

  // Get event style based on its type
  const getEventStyle = (event: Event) => {
    const left = `${getEventPosition(event.time)}%`;

    // Determine height and vertical position based on event type
    let top = "20%";
    const height = "30px";
    let width = isMobile ? "90px" : "120px";

    if (event.type === "meeting") {
      top = "55%";
    } else if (event.type === "test") {
      top = "75%";
      width = isMobile ? "80px" : "100px";
    } else if (event.type === "email") {
      top = "35%";
      width = isMobile ? "150px" : "180px";
    }

    // Colors based on type
    let bgColor = "#e3f2fd";
    let borderColor = "#bbdefb";

    if (event.color) {
      bgColor = `${event.color}22`; // Add transparency
      borderColor = event.color;
    }

    return {
      position: "absolute" as const,
      left,
      top,
      height,
      width,
      transform: "translateX(-50%)",
      padding: "6px 8px",
      backgroundColor: bgColor,
      borderLeft: `3px solid ${borderColor}`,
      borderRadius: "4px",
      zIndex: 2,
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    };
  };

  // Get current time indicator position based on selected date
  const getCurrentTimePosition = () => {
    if (selectedDate === "Jan 28, 2024") return "09:35";
    if (selectedDate === "Jan 29, 2024") return "08:30";
    return "09:00";
  };

  const currentTimeIndicator = {
    position: "absolute" as const,
    left: `${getEventPosition(getCurrentTimePosition())}%`,
    top: 0,
    bottom: 0,
    width: "2px",
    backgroundColor: "#3f51b5",
    zIndex: 1,
    transform: "translateX(-50%)",
  };

  const timeMarker = {
    position: "absolute" as const,
    bottom: "-3px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    backgroundColor: "#3f51b5",
    zIndex: 2,
  };

  return (
    <Card
      sx={{
        mb: 2,
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        height: "100%",
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
        <Typography variant="subtitle1" fontWeight="500">
          Today Schedule
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: isMobile ? "100%" : "auto",
            justifyContent: isMobile ? "space-between" : "flex-start",
          }}
        >
          <Select
            value={selectedDate}
            onChange={handleDateChange}
            displayEmpty
            variant="outlined"
            size="small"
            IconComponent={KeyboardArrowDownIcon}
            sx={{
              fontSize: "0.75rem",
              height: "28px",
              mr: 1,
              borderRadius: "4px",
              width: isMobile ? "70%" : "auto",
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: "#e0e0e0",
                borderRadius: "4px",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#e0e0e0",
              },
              ".MuiSvgIcon-root": {
                fontSize: "1rem",
              },
              ".MuiSelect-select": {
                py: 0.5,
                pr: 2,
              },
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  borderRadius: "8px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                },
              },
            }}
          >
            <MenuItem value="Jan 28, 2024">Jan 28, 2024</MenuItem>
            <MenuItem value="Jan 29, 2024">Jan 29, 2024</MenuItem>
            <MenuItem value="Jan 30, 2024">Jan 30, 2024</MenuItem>
          </Select>

          <Button
            size="small"
            variant="outlined"
            startIcon={<AddIcon sx={{ fontSize: 16 }} />}
            sx={{
              textTransform: "none",
              borderRadius: "8px",
              fontSize: "0.75rem",
              height: "28px",
              py: 0,
              borderColor: "#2196f3",
              color: "#2196f3",
              fontWeight: "normal",
              "&:hover": {
                borderColor: "#1976d2",
                backgroundColor: "rgba(33, 150, 243, 0.04)",
              },
            }}
          >
            {isMobile ? "Add" : "Add Task"}
          </Button>
        </Box>
      </Box>

      <CardContent
        sx={{
          p: 0,
          pt: 0,
          "&:last-child": { pb: 0 },
          overflowX: isTablet ? "auto" : "visible",
        }}
      >
        <Box
          sx={{
            position: "relative",
            height: { xs: 190, sm: 220 },
            p: { xs: 1, sm: 2 },
            pt: 1,
            pb: 2,
            minWidth: isMobile ? 400 : "auto",
          }}
        >
          {/* Time indicators at top */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: "2%",
              right: "2%",
              display: "flex",
              justifyContent: "space-between",
              paddingBottom: "5px",
            }}
          >
            {hours.map((hour) => (
              <Typography
                key={hour}
                variant="caption"
                sx={{ fontSize: "0.65rem", color: "#9e9e9e" }}
              >
                {hour}
              </Typography>
            ))}
          </Box>

          {/* Timeline area */}
          <Box
            sx={{
              position: "relative",
              height: "calc(100% - 20px)",
              marginTop: "20px",
              borderTop: "1px dashed #e0e0e0",
            }}
          >
            {/* Vertical time dividers */}
            {hours.map((hour, index) => (
              <Box
                key={hour}
                sx={{
                  position: "absolute",
                  bottom: 0,
                  top: 0,
                  left: `${(index / (hours.length - 1)) * 100}%`,
                  borderLeft: index === 0 ? "none" : "1px dashed #e0e0e0",
                  zIndex: 0,
                }}
              />
            ))}

            {/* Current time indicator */}
            <Box sx={currentTimeIndicator}>
              <Box sx={timeMarker} />
              <Chip
                label={getCurrentTimePosition()}
                size="small"
                sx={{
                  position: "absolute",
                  top: "-20px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  height: "20px",
                  borderRadius: "4px",
                  fontSize: "0.65rem",
                  backgroundColor: "#3f51b5",
                  color: "white",
                }}
              />
            </Box>

            {/* Events */}
            {dayEvents.map((event) => (
              <Box key={event.id} sx={getEventStyle(event)}>
                <Typography
                  variant="caption"
                  sx={{
                    fontSize: { xs: "0.65rem", sm: "0.7rem" },
                    fontWeight: 500,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {event.title}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
