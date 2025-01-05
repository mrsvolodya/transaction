import React from "react";
import { colors } from "../../theme/generalStyles/colors.ts";
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
          flexBasis: operation ? "55.5%" : "100%",
          backgroundColor: operation
            ? colors.backgroundBlue
            : colors.primaryOrange,
          position: "relative",
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
              id={name}
              label={label}
              value={field.value || ""}
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
