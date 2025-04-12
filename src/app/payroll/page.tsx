"use client";

import { useState, useEffect, ChangeEvent } from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  InputAdornment,
  Chip,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { payrollRecords, PayrollRecord } from "../data/mockData";

type FilterType = "all" | "active" | "paid";

export default function PayrollPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<FilterType>("all");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filteredRecords, setFilteredRecords] = useState<PayrollRecord[]>([]);

  // Add initial load of records
  useEffect(() => {
    setFilteredRecords([...payrollRecords]);
  }, []);

  // Apply filters and search
  useEffect(() => {
    let results = [...payrollRecords];

    // Apply status filter
    if (filterType === "active") {
      // Show active employees (those with Processed or Pending status)
      results = results.filter(
        (record) => record.status === "Processed" || record.status === "Pending"
      );
    } else if (filterType === "paid") {
      // Show only employees with Paid status
      results = results.filter((record) => record.status === "Paid");
    }

    // Apply search filter
    if (searchTerm.trim() !== "") {
      const searchTermLower = searchTerm.toLowerCase();
      results = results.filter(
        (record) =>
          record.employeeName.toLowerCase().includes(searchTermLower) ||
          record.payPeriod.toLowerCase().includes(searchTermLower)
      );
    }

    setFilteredRecords(results);
  }, [searchTerm, filterType]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setPage(0);
  };

  const handleFilterChange = (
    _event: React.MouseEvent<HTMLElement>,
    newFilter: FilterType | null
  ) => {
    if (newFilter !== null) {
      setFilterType(newFilter);
      setPage(0);
    }
  };

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Helper function to format currency
  const formatCurrency = (amount: number) => {
    return `$${amount.toLocaleString()}`;
  };

  // Override status chip props to remove colors
  const getStatusChipProps = () => {
    return {
      bgcolor: "#f3f4f6",
      color: "#6b7280",
    };
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h4" fontWeight={600}>
          Payroll
        </Typography>
        <Button
          variant="contained"
          startIcon={<PlayArrowIcon />}
          sx={{
            bgcolor: "#5271ff",
            fontWeight: 500,
            textTransform: "none",
            borderRadius: 2,
            "&:hover": {
              bgcolor: "#3a57e8",
            },
          }}
        >
          New pay run
        </Button>
      </Box>

      {/* Update filter and search row */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mb: 3,
        }}
      >
        {/* Filter buttons */}
        <ToggleButtonGroup
          value={filterType}
          exclusive
          onChange={handleFilterChange}
          aria-label="employee filter"
          sx={{
            "& .MuiToggleButton-root": {
              textTransform: "none",
              borderColor: "#e5e7eb",
              color: "#6b7280",
              px: 3,
              py: 1,
              "&.Mui-selected": {
                bgcolor: "#f3f4f6",
                color: "#111827",
                fontWeight: 500,
                "&:hover": {
                  bgcolor: "#e5e7eb",
                },
              },
              "&:hover": {
                bgcolor: "#f9fafb",
              },
            },
          }}
        >
          <ToggleButton value="all">All employees</ToggleButton>
          <ToggleButton value="active">Active Employees</ToggleButton>
          <ToggleButton value="paid">Paid Employees</ToggleButton>
        </ToggleButtonGroup>

        {/* Full-width search bar */}
        <TextField
          placeholder="Search employee or pay period..."
          size="small"
          value={searchTerm}
          onChange={handleSearchChange}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#9ca3af" }} />
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
            },
          }}
        />
      </Box>

      {/* Payroll Table */}
      <Paper
        sx={{
          width: "100%",
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        }}
      >
        <TableContainer>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow sx={{ bgcolor: "#f9fafb" }}>
                <TableCell
                  sx={{
                    fontWeight: 500,
                    color: "#4b5563",
                    fontSize: "0.875rem",
                  }}
                >
                  Name
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 500,
                    color: "#4b5563",
                    fontSize: "0.875rem",
                  }}
                >
                  Pay period
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 500,
                    color: "#4b5563",
                    fontSize: "0.875rem",
                  }}
                >
                  Gross pay
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 500,
                    color: "#4b5563",
                    fontSize: "0.875rem",
                  }}
                >
                  Deductions
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 500,
                    color: "#4b5563",
                    fontSize: "0.875rem",
                  }}
                >
                  Net pay
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 500,
                    color: "#4b5563",
                    fontSize: "0.875rem",
                  }}
                >
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRecords
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((record) => {
                  const statusProps = getStatusChipProps();
                  return (
                    <TableRow
                      key={record.id}
                      hover
                      sx={{
                        "&:hover": { bgcolor: "#f9fafb" },
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell sx={{ fontSize: "0.875rem" }}>
                        {record.employeeName}
                      </TableCell>
                      <TableCell sx={{ fontSize: "0.875rem" }}>
                        {record.payPeriod}
                      </TableCell>
                      <TableCell sx={{ fontSize: "0.875rem" }}>
                        {formatCurrency(record.grossPay)}
                      </TableCell>
                      <TableCell sx={{ fontSize: "0.875rem" }}>
                        {formatCurrency(record.deductions)}
                      </TableCell>
                      <TableCell sx={{ fontSize: "0.875rem", fontWeight: 500 }}>
                        {formatCurrency(record.netPay)}
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={record.status}
                          size="small"
                          sx={{
                            bgcolor: statusProps.bgcolor,
                            color: statusProps.color,
                            fontSize: "0.75rem",
                            fontWeight: 500,
                            borderRadius: "12px",
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              {filteredRecords.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} align="center" sx={{ py: 3 }}>
                    <Typography color="text.secondary" variant="body2">
                      No payroll records found
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
            borderTop: "1px solid #e5e7eb",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Button
              disabled={page === 0}
              onClick={() => handleChangePage(null, page - 1)}
              sx={{
                minWidth: "auto",
                p: 1,
                color: page === 0 ? "#d1d5db" : "#6b7280",
                "&:hover": { bgcolor: "transparent" },
              }}
            >
              &lt;
            </Button>

            {[
              ...Array(
                Math.min(5, Math.ceil(filteredRecords.length / rowsPerPage))
              ),
            ].map((_, idx) => (
              <Button
                key={idx}
                onClick={() => handleChangePage(null, idx)}
                sx={{
                  minWidth: "auto",
                  width: 28,
                  height: 28,
                  p: 0,
                  borderRadius: "50%",
                  color: page === idx ? "white" : "#6b7280",
                  bgcolor: page === idx ? "#5271ff" : "transparent",
                  "&:hover": { bgcolor: page === idx ? "#3a57e8" : "#f3f4f6" },
                }}
              >
                {idx + 1}
              </Button>
            ))}

            <Button
              disabled={
                page >= Math.ceil(filteredRecords.length / rowsPerPage) - 1
              }
              onClick={() => handleChangePage(null, page + 1)}
              sx={{
                minWidth: "auto",
                p: 1,
                color:
                  page >= Math.ceil(filteredRecords.length / rowsPerPage) - 1
                    ? "#d1d5db"
                    : "#6b7280",
                "&:hover": { bgcolor: "transparent" },
              }}
            >
              &gt;
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
