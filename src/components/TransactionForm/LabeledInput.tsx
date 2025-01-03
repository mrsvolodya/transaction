import { Grid2, InputLabel, TextField, TextFieldProps } from "@mui/material";
import React from "react";

function LabeledInput(
  {
    label,
    id,
    required,
    ...props
  }: { label: string; id: string } & TextFieldProps,
  ref: React.Ref<HTMLInputElement>
) {
  return (
    <Grid2
      size={{ xs: 12 }}
      sx={{
        display: "flex",

        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <InputLabel htmlFor={id} sx={{ color: "black" }}>
        {label}
      </InputLabel>
      <TextField
        id={id}
        size="small"
        required={required}
        ref={ref}
        {...props}
      />
    </Grid2>
  );
}
export default React.forwardRef(LabeledInput);
