"use client";

import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  IconButton,
  Button,
  Tooltip,
  Zoom,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { PaymentMethod as PaymentMethodType } from "../data/mockData";
import { useState } from "react";

interface PaymentMethodProps {
  data: PaymentMethodType;
}

export default function PaymentMethod({ data }: PaymentMethodProps) {
  const [revealedAccount, setRevealedAccount] = useState(false);
  const fullAccountNumber = "4556 7891 2356 6273";
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleReveal = () => {
    setRevealedAccount(!revealedAccount);
  };

  return (
    <Card
      sx={{
        mb: 2,
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        overflow: "visible",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center",
          justifyContent: "space-between",
          p: { xs: 1.5, sm: 2 },
          pb: { xs: 1, sm: 1.5 },
          gap: isMobile ? 1 : 0,
        }}
      >
        <Box display="flex" alignItems="center">
          <Typography variant="subtitle1" fontWeight="500" sx={{ mr: 0.5 }}>
            Payment Method
          </Typography>
          <Tooltip
            title="Payment information for your account"
            arrow
            TransitionComponent={Zoom}
            placement="top"
          >
            <IconButton size="small" sx={{ p: 0 }}>
              <InfoOutlinedIcon sx={{ fontSize: 16 }} color="action" />
            </IconButton>
          </Tooltip>
        </Box>

        <Button
          variant="outlined"
          color="primary"
          size="small"
          sx={{
            textTransform: "none",
            fontSize: "0.75rem",
            borderRadius: "4px",
            fontWeight: "normal",
            py: 0.5,
            px: 1.5,
            height: "28px",
            borderColor: "#e0e0e0",
            color: "#757575",
            width: isMobile ? "100%" : "auto",
          }}
        >
          Change Payment Method
        </Button>
      </Box>

      <CardContent sx={{ pt: 0, pb: "16px !important" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: "0.75rem", mb: 0.5 }}
            >
              Cardholder name
            </Typography>
            <Typography variant="body1" fontWeight="500">
              {data.cardholderName}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: "0.75rem", mb: 0.5 }}
            >
              Account Number
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="body1" fontWeight="500">
                {revealedAccount ? fullAccountNumber : data.accountNumber}
              </Typography>
              <IconButton
                size="small"
                sx={{ p: 0, ml: 0.5, mt: "-2px" }}
                onClick={toggleReveal}
                aria-label={
                  revealedAccount
                    ? "Hide account number"
                    : "Show account number"
                }
              >
                <VisibilityOutlinedIcon sx={{ fontSize: 14 }} color="action" />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={6} sm={6} md={3}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: "0.75rem", mb: 0.5 }}
            >
              Expiration
            </Typography>
            <Typography variant="body1" fontWeight="500">
              {data.expiration}
            </Typography>
          </Grid>

          <Grid item xs={6} sm={6} md={3}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: "0.75rem", mb: 0.5 }}
            >
              Payment Method
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                component="span"
                sx={{
                  mr: 0.75,
                  bgcolor: "#2962ff",
                  color: "white",
                  borderRadius: "4px",
                  fontSize: "10px",
                  fontWeight: "bold",
                  lineHeight: 1,
                  p: "3px 4px",
                  letterSpacing: "0.5px",
                }}
              >
                VISA
              </Box>
              <Typography variant="body1" component="span" fontWeight="500">
                {data.type}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
