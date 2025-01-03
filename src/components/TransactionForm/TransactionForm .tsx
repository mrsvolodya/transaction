import { useForm } from "react-hook-form";
import LabeledInput from "./LabeledInput.tsx";
import { Transaction } from "../../types/Transaction.ts";
import { CurrencySelector } from "./CurrencySelector.tsx";
import { operations } from "../../constants/operations.ts";
import { currencies } from "../../constants/currencies.ts";
import { useOnSubmit } from "../../hooks/useOnSubmit.ts";
import { colors } from "../../theme/generalStyles/colors.ts";
import { defaultValues } from "../../constants/defaultValues.ts";
import {
  Box,
  Button,
  TextField,
  Grid2,
  Typography,
  Stack,
} from "@mui/material";
import { formStyles as styles } from "./TransactionFormStyles/formStyles.ts";

export function TransactionForm() {
  const { control, register, handleSubmit, watch } = useForm<Transaction>({
    defaultValues,
  });

  const amount = watch("amount") || 0;
  const rate = watch("rate") || 0;
  const amoundFromClient = watch("amountFromClient") || 0;
  const paymentAmount = Number(amount) * Number(rate);
  const change = Number(amoundFromClient) - paymentAmount;

  return (
    <Box sx={styles.formContainer}>
      <form onSubmit={handleSubmit(useOnSubmit)}>
        <Grid2 container rowSpacing={2} columnSpacing={1} size={{ xs: 12 }}>
          {[1, 2].map((index) => (
            <Grid2 key={index} size={{ xs: 6, sm: 6 }} spacing={2}>
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
                  backgroundColor: colors.primaryOrange,
                  marginTop: "10px",
                }}
                {...register(`amount${index}` as keyof Transaction, {
                  required: true,
                })}
              />
            </Grid2>
          ))}

          <Grid2 size={{ xs: 12 }} sx={styles.gridItem}>
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
            sx={{ backgroundColor: colors.backgroundBlue }}
            {...register("amount")}
          />
          <LabeledInput
            label="Курс"
            id="rate"
            sx={{ backgroundColor: colors.backgroundBlue }}
            {...register("rate", { required: true })}
          />
          <LabeledInput
            label="Сума від клієнта"
            id="amountFromClient"
            type="number"
            sx={{ backgroundColor: colors.backgroundBlue }}
            {...register("amountFromClient")}
          />
          <LabeledInput
            label="Клієнт"
            id="client"
            type="text"
            sx={{ backgroundColor: colors.backgroundBlue }}
            {...register("client", { required: true })}
          />
          <LabeledInput
            label="Коментарі"
            id="comments"
            type="text"
            sx={{ backgroundColor: colors.backgroundBlue }}
            {...register("comments")}
          />
        </Grid2>
        <Stack spacing={1} my={2}>
          <Typography>Сума до оплати: {paymentAmount}</Typography>
          <Typography>Здача: {change}</Typography>
        </Stack>

        <Button type="submit" fullWidth sx={styles.submitButton}>
          Зберегти
        </Button>
      </form>
    </Box>
  );
}
