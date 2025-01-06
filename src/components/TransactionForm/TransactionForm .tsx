import { useForm } from "react-hook-form";
import LabeledInput from "./LabeledInput.tsx";
import { useOnSubmit } from "../../hooks/useOnSubmit.ts";
import { Transaction } from "../../types/Transaction.ts";
import { CurrencySelector } from "./CurrencySelector.tsx";
import { operations } from "../../constants/operations.ts";
import { currencies } from "../../constants/currencies.ts";
import { defaultValues } from "../../constants/defaultValues.ts";
import {
  Box,
  Button,
  TextField,
  Grid2,
  Typography,
  Stack,
} from "@mui/material";

export function TransactionForm() {
  const onSubmit = useOnSubmit();

  const { control, register, handleSubmit, watch } = useForm<Transaction>({
    defaultValues,
  });
  const amount = watch("amount") || 0;
  const rate = watch("rate") || 0;
  const paymentAmount = Number(amount) * Number(rate);
  const amoundFromClient = watch("amountFromClient") || 0;
  const change = Number(amoundFromClient) - paymentAmount;

  return (
    <Box bgcolor="primary.light" padding={3} width={400} borderRadius={1}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid2 container rowSpacing={1} columnSpacing={2} size={{ xs: 12 }}>
          {[1, 2].map((index) => (
            <Grid2 key={index} size={{ xs: 6, sm: 6 }}>
              <CurrencySelector
                label={`Валюта ${index}`}
                name={`currency${index}` as keyof Transaction}
                control={control}
                options={currencies}
              />
              <TextField
                id={`amount${index}`}
                type="number"
                size="small"
                sx={{
                  bgcolor: "primary.main",
                  mt: "10px",
                }}
                {...register(`amount${index}` as keyof Transaction, {
                  required: true,
                })}
              />
            </Grid2>
          ))}

          <Grid2 size={{ xs: 12 }}>
            <CurrencySelector
              label="Операція"
              name="operation"
              control={control}
              options={operations}
              operation
            />
          </Grid2>

          <LabeledInput
            label="Сума"
            id="amount"
            type="number"
            sx={{ bgcolor: "primary.dark" }}
            {...register("amount")}
          />
          <LabeledInput
            label="Курс"
            id="rate"
            sx={{ bgcolor: "primary.dark" }}
            {...register("rate", { required: true })}
          />
          <LabeledInput
            label="Сума від клієнта"
            id="amountFromClient"
            type="number"
            sx={{ bgcolor: "primary.dark" }}
            {...register("amountFromClient")}
          />
          <LabeledInput
            label="Клієнт"
            id="client"
            type="text"
            sx={{ bgcolor: "primary.dark" }}
            {...register("client", { required: true })}
          />
          <LabeledInput
            label="Коментарі"
            id="comments"
            type="text"
            sx={{ bgcolor: "primary.dark" }}
            {...register("comments")}
          />
        </Grid2>
        <Stack spacing={1} my={2}>
          <Typography>Сума до оплати: {paymentAmount}</Typography>
          <Typography>Здача: {change}</Typography>
        </Stack>

        <Button
          type="submit"
          fullWidth
          sx={{
            display: "flex",
            bgcolor: "secondary.light",
            mx: "auto",
            width: "50%",
          }}
        >
          Зберегти
        </Button>
      </form>
    </Box>
  );
}
