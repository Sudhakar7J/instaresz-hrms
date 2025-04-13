"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  Avatar,
  ToggleButtonGroup,
  ToggleButton,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// Mock schedule data
interface ScheduleEvent {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  duration: string;
  type: string;
  color: string;
}

const scheduleData: ScheduleEvent[] = [
  {
    id: "1",
    title: "Online Interview with UI Candidate",
    startTime: "08:00",
    endTime: "10:00",
    duration: "2 hours",
    type: "interview",
    color: "#4caf50",
  },
  {
    id: "2",
    title: "Replying email to applicants",
    startTime: "08:30",
    endTime: "10:00",
    duration: "1 hours 30 minutes",
    type: "email",
    color: "#b0bec5",
  },
  {
    id: "3",
    title: "Online Interview with UI Candidate",
    startTime: "10:00",
    endTime: "11:00",
    duration: "1 hours",
    type: "interview",
    color: "#f5a442",
  },
  {
    id: "4",
    title: "Online Interview with UI Candidate",
    startTime: "11:30",
    endTime: "12:00",
    duration: "30 minutes",
    type: "interview",
    color: "#b39ddb",
  },
  {
    id: "5",
    title: "Online Interview with UI Candidate",
    startTime: "13:00",
    endTime: "14:00",
    duration: "1 hours",
    type: "interview",
    color: "#4fc3f7",
  },
];

export default function SchedulePage() {
  const [date, setDate] = useState<string>("Jan 28, 2024");
  const [viewMode, setViewMode] = useState<string>("Today");

  const handleDateChange = (event: SelectChangeEvent) => {
    setDate(event.target.value);
  };

  const handleViewChange = (
    event: React.MouseEvent<HTMLElement>,
    newView: string
  ) => {
    if (newView !== null) {
      setViewMode(newView);
    }
  };

  // Time slots from 7:00 to 14:00
  const timeSlots = [
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
  ];

  // Function to get task position based on time
  const getTaskPosition = (startTime: string, endTime: string) => {
    const [startHour, startMinute] = startTime.split(":").map(Number);
    const [endHour, endMinute] = endTime.split(":").map(Number);

    const startTimeInMinutes = startHour * 60 + startMinute;
    const endTimeInMinutes = endHour * 60 + endMinute;

    // Consider 7:00 (07:00) as the starting point (420 minutes from midnight)
    const baseTime = 7 * 60; // 7:00 in minutes
    const totalTimeRange = 8 * 60; // 8 hours in minutes (7:00 to 15:00)

    const top = ((startTimeInMinutes - baseTime) / totalTimeRange) * 100;
    const height =
      ((endTimeInMinutes - startTimeInMinutes) / totalTimeRange) * 100;

    return { top: `${top}%`, height: `${height}%` };
  };

  // Function to determine overlapping events
  const organizeOverlappingEvents = () => {
    // First sort all events by start time
    const sortedEvents = [...scheduleData].sort((a, b) => {
      const aStartMinutes = getMinutes(a.startTime);
      const bStartMinutes = getMinutes(b.startTime);
      return aStartMinutes - bStartMinutes;
    });

    // Create tracks to place events
    const tracks: ScheduleEvent[][] = [];

    sortedEvents.forEach((event) => {
      // Check if this event conflicts with any event in existing tracks
      let placed = false;

      for (let track of tracks) {
        // Check if this track is free for this event
        const hasOverlap = track.some((existingEvent) => {
          return eventsOverlap(existingEvent, event);
        });

        if (!hasOverlap) {
          // This track is free, add the event
          track.push(event);
          placed = true;
          break;
        }
      }

      if (!placed) {
        // Need a new track
        tracks.push([event]);
      }
    });

    return tracks;
  };

  // Helper function to convert time string to minutes
  const getMinutes = (timeStr: string) => {
    const [hours, minutes] = timeStr.split(":").map(Number);
    return hours * 60 + minutes;
  };

  // Helper function to check if two events overlap
  const eventsOverlap = (a: ScheduleEvent, b: ScheduleEvent) => {
    const aStart = getMinutes(a.startTime);
    const aEnd = getMinutes(a.endTime);
    const bStart = getMinutes(b.startTime);
    const bEnd = getMinutes(b.endTime);

    return aStart < bEnd && aEnd > bStart;
  };

  // Function to render schedule events
  const renderEvents = () => {
    const tracks = organizeOverlappingEvents();
    const numTracks = tracks.length;

    // Flatten all events with their track index
    const allEvents = tracks.flatMap((track, trackIndex) => {
      return track.map((event) => ({
        event,
        trackIndex,
      }));
    });

    return allEvents.map(({ event, trackIndex }) => {
      const { top, height } = getTaskPosition(event.startTime, event.endTime);
      const width = 100 / numTracks;
      const left = trackIndex * width;

      return (
        <Box
          key={event.id}
          sx={{
            position: "absolute",
            left: `${left}%`,
            width: `${width}%`,
            top,
            height,
            padding: "4px 2px",
            zIndex: 2,
          }}
        >
          <Box
            sx={{
              height: "100%",
              backgroundColor: `${event.color}22`,
              borderLeft: `4px solid ${event.color}`,
              borderRadius: "4px",
              padding: "6px 8px",
              margin: "0 2px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
              overflow: "hidden",
              transition: "all 0.2s ease",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.02)",
                boxShadow: "0 3px 10px rgba(0,0,0,0.12)",
                zIndex: 10,
              },
              "& > .MuiTypography-root": {
                color: "#424242",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              },
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, fontSize: "0.8rem" }}
            >
              {event.title}
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "#666", fontSize: "0.7rem" }}
            >
              {event.startTime} - {event.endTime}
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "#666", fontSize: "0.7rem" }}
            >
              {event.duration}
            </Typography>
          </Box>
        </Box>
      );
    });
  };

  // Calculate the current time position for the indicator
  const getCurrentTimePosition = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    // Only show time indicator between 7am and 3pm
    if (hours < 7 || hours >= 15) {
      return null;
    }

    const totalMinutes = hours * 60 + minutes;
    const baseTime = 7 * 60; // 7:00 in minutes
    const totalTimeRange = 8 * 60; // 8 hours in minutes (7:00 to 15:00)

    const position = ((totalMinutes - baseTime) / totalTimeRange) * 100;
    return `${position}%`;
  };

  // Current time for demo purposes
  const mockCurrentTime = () => {
    // Return a position between 8:30 and 9:30 for demo
    const demoHour = 9;
    const demoMinute = 15;

    const totalMinutes = demoHour * 60 + demoMinute;
    const baseTime = 7 * 60; // 7:00 in minutes
    const totalTimeRange = 8 * 60; // 8 hours in minutes (7:00 to 15:00)

    const position = ((totalMinutes - baseTime) / totalTimeRange) * 100;
    return `${position}%`;
  };

  // Get formatted time string for display
  const getFormattedTime = () => {
    const demoHour = 9;
    const demoMinute = 15;
    return `${demoHour.toString().padStart(2, "0")}:${demoMinute
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <Box sx={{ p: { xs: 1, sm: 2 }, height: "100%" }}>
      {/* Header section with icon, title and buttons */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "flex-start", sm: "center" },
          justifyContent: "space-between",
          gap: { xs: 2, sm: 0 },
          mb: 3,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            sx={{
              width: { xs: 32, sm: 40 },
              height: { xs: 32, sm: 40 },
              bgcolor: "#eef2ff",
              color: "#5271ff",
              mr: 2,
            }}
          >
            <CalendarTodayOutlinedIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
          </Avatar>
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                fontSize: { xs: "1.125rem", sm: "1.5rem" },
              }}
            >
              Schedule
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Manage your schedule
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{ display: "flex", gap: 1, width: { xs: "100%", sm: "auto" } }}
        >
          <Button
            variant="outlined"
            startIcon={<FileDownloadOutlinedIcon />}
            sx={{
              color: "text.primary",
              borderColor: "divider",
              textTransform: "none",
              borderRadius: "8px",
              flex: { xs: 1, sm: "none" },
            }}
          >
            Export
          </Button>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              bgcolor: "#5271ff",
              textTransform: "none",
              borderRadius: "8px",
              flex: { xs: 1, sm: "none" },
            }}
          >
            Add Task
          </Button>
        </Box>
      </Box>

      {/* Main content */}
      <Paper
        sx={{
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
          height: "calc(100vh - 180px)",
          minHeight: "500px",
        }}
      >
        {/* Date selector and view controls */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
            pb: 1.5,
            borderBottom: "1px solid rgba(0,0,0,0.04)",
          }}
        >
          <Box>
            <Select
              value={date}
              onChange={handleDateChange}
              displayEmpty
              variant="outlined"
              size="small"
              IconComponent={KeyboardArrowDownIcon}
              sx={{
                fontSize: "0.9rem",
                fontWeight: 500,
                height: "36px",
                minWidth: "160px",
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(0,0,0,0.1)",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(0,0,0,0.2)",
                },
                ".MuiSelect-select": {
                  py: 1,
                },
              }}
            >
              <MenuItem value="Jan 28, 2024">Jan 28, 2024</MenuItem>
              <MenuItem value="Jan 29, 2024">Jan 29, 2024</MenuItem>
              <MenuItem value="Jan 30, 2024">Jan 30, 2024</MenuItem>
            </Select>
          </Box>

          <ToggleButtonGroup
            value={viewMode}
            exclusive
            onChange={handleViewChange}
            aria-label="schedule view"
            size="small"
            sx={{
              ".MuiToggleButtonGroup-grouped": {
                border: "1px solid #e0e0e0",
                color: "#757575",
                "&.Mui-selected": {
                  backgroundColor: "#4051b5",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#3949ab",
                  },
                },
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.04)",
                },
              },
            }}
          >
            <ToggleButton value="Today" aria-label="today view">
              Today
            </ToggleButton>
            <ToggleButton value="Week" aria-label="week view">
              Week
            </ToggleButton>
            <ToggleButton value="Month" aria-label="month view">
              Month
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        {/* Calendar grid */}
        <Box
          sx={{
            display: "flex",
            height: "calc(100% - 60px)",
            overflow: "auto",
          }}
        >
          {/* Time column */}
          <Box
            sx={{
              width: "70px",
              flexShrink: 0,
              borderRight: "1px solid rgba(0,0,0,0.04)",
              backgroundColor: "#fafafa",
            }}
          >
            <Typography
              sx={{
                height: "40px",
                px: 2,
                py: 1,
                fontSize: "0.75rem",
                color: "#616161",
                fontWeight: 500,
                textAlign: "center",
                borderBottom: "1px solid rgba(0,0,0,0.04)",
              }}
            >
              Time
            </Typography>
            {timeSlots.map((time) => (
              <Box
                key={time}
                sx={{
                  height: "80px",
                  px: 2,
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  borderBottom: "1px solid rgba(0,0,0,0.04)",
                  pt: 2,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    fontSize: "0.75rem",
                    color: "#616161",
                    fontWeight: 500,
                  }}
                >
                  {time}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Task column */}
          <Box sx={{ flex: 1, position: "relative" }}>
            <Typography
              sx={{
                height: "40px",
                px: 2,
                py: 1,
                fontSize: "0.75rem",
                color: "#616161",
                fontWeight: 500,
                borderBottom: "1px solid rgba(0,0,0,0.04)",
              }}
            >
              Your Task
            </Typography>

            {/* Background grid rows */}
            {timeSlots.map((time, index) => (
              <Box
                key={`grid-${time}`}
                sx={{
                  height: "80px",
                  borderBottom: "1px solid rgba(0,0,0,0.04)",
                  backgroundColor: index % 2 === 0 ? "#fff" : "#fafafa",
                }}
              />
            ))}

            {/* Schedule events */}
            <Box
              sx={{
                position: "absolute",
                top: "40px",
                left: 0,
                right: 0,
                bottom: 0,
              }}
            >
              {renderEvents()}
            </Box>

            {/* Current time indicator */}
            {viewMode === "Today" && (
              <Box
                sx={{
                  position: "absolute",
                  top: `calc(40px + ${mockCurrentTime()})`,
                  left: 0,
                  right: 0,
                  height: "2px",
                  backgroundColor: "#3f51b5",
                  zIndex: 3,
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    left: "-6px",
                    top: "-5px",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: "#3f51b5",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    left: "10px",
                    top: "-14px",
                    backgroundColor: "#3f51b5",
                    color: "white",
                    fontSize: "0.65rem",
                    padding: "2px 6px",
                    borderRadius: "4px",
                    fontWeight: "bold",
                  }}
                >
                  {getFormattedTime()}
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
