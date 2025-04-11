"use client";

import {
  Card,
  CardContent,
  Typography,
  Box,
  List,
  Avatar,
  Divider,
} from "@mui/material";
import { Event } from "../data/mockData";
import { useState } from "react";

interface JanuaryEventsProps {
  events: Event[];
  birthdayEvents: Event[];
}

type TabType = "timeOff" | "birthday";

export default function JanuaryEvents({
  events,
  birthdayEvents,
}: JanuaryEventsProps) {
  const [activeTab, setActiveTab] = useState<TabType>("timeOff");

  const displayEvents = activeTab === "timeOff" ? events : birthdayEvents;

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
          p: 2,
          pb: 1.5,
        }}
      >
        <Typography variant="subtitle1" fontWeight="500">
          What&apos;s on in January?
        </Typography>
      </Box>

      <Box sx={{ px: 2, mb: 1 }}>
        <Box
          sx={{
            display: "flex",
            background: "#f5f5f5",
            borderRadius: "4px",
            p: "2px",
            position: "relative",
            border: "1px solid #eeeeee",
          }}
        >
          <Box
            sx={{
              flex: 1,
              textAlign: "center",
              py: 0.5,
              backgroundColor:
                activeTab === "timeOff" ? "white" : "transparent",
              borderRadius: "4px",
              transition: "all 0.2s ease",
              cursor: "pointer",
              position: "relative",
              boxShadow:
                activeTab === "timeOff" ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
            }}
            onClick={() => setActiveTab("timeOff")}
          >
            <Typography
              variant="caption"
              sx={{
                color:
                  activeTab === "timeOff" ? "primary.main" : "text.secondary",
                fontWeight: 500,
              }}
            >
              Time Off
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              textAlign: "center",
              py: 0.5,
              backgroundColor:
                activeTab === "birthday" ? "white" : "transparent",
              borderRadius: "4px",
              transition: "all 0.2s ease",
              cursor: "pointer",
              boxShadow:
                activeTab === "birthday" ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
            }}
            onClick={() => setActiveTab("birthday")}
          >
            <Typography
              variant="caption"
              sx={{
                color:
                  activeTab === "birthday" ? "primary.main" : "text.secondary",
                fontWeight: 500,
              }}
            >
              Birthday
            </Typography>
          </Box>
        </Box>
      </Box>

      <CardContent sx={{ p: 0, "&:last-child": { pb: 1 } }}>
        <List sx={{ width: "100%", p: 0 }}>
          {displayEvents.map((event, index) => (
            <Box key={event.id} sx={{ px: 2, py: 1 }}>
              <Box sx={{ display: "flex", width: "100%" }}>
                <Avatar
                  src={`/avatars/avatar${index + 1}.jpg`}
                  alt={event.title}
                  sx={{ width: 36, height: 36, mr: 1.5 }}
                />
                <Box>
                  <Typography variant="body2" fontWeight="500">
                    {event.title}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {event.time}
                  </Typography>

                  {event.type && (
                    <Box
                      sx={{
                        mt: 0.5,
                        backgroundColor: event.color || "#e0e0e0",
                        color: "white",
                        borderRadius: "4px",
                        fontSize: "0.65rem",
                        py: 0.25,
                        px: 1,
                        display: "inline-block",
                      }}
                    >
                      {event.type}
                    </Box>
                  )}
                </Box>
              </Box>

              {index < displayEvents.length - 1 && <Divider sx={{ mt: 1 }} />}
            </Box>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
