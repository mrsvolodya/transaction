import React from "react";
import { Controller, Control } from "react-hook-form";
import { Transaction } from "../../types/Transaction.ts";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

interface CurrencySelectorProps {
  label: string;
  name: keyof Transaction;
  control: Control<Transaction>;
  options: string[];
  operation?: boolean;
}

export const CurrencySelector: React.FC<CurrencySelectorProps> = ({
  label,
  name,
  control,
  options,
  operation = false,
}) => {
  return (
    <Box
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      {operation && <Typography>{label}</Typography>}
      <FormControl
        fullWidth={!operation}
        sx={{
          flexBasis: operation ? "63%" : "100%",
          backgroundColor: operation ? "primary.dark" : "primary.main",
          position: "relative",
          border: "none",
        }}
        size="small"
      >
        {!operation && (
          <InputLabel
            htmlFor={name}
            sx={{
              position: "absolute",
              top: "-20px",
              left: "50%",
              transform: "translateX(-50%)",
              padding: "0 4px",
            }}
          >
            {label}
          </InputLabel>
        )}

        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              labelId={label}
              id={name}
              sx={{
                border: "none",
              }}
            >
              {options.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          )}
        />
      </FormControl>
    </Box>
  );
};
