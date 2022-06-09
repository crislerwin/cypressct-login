import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { queryClient } from "../services/query.client";
import { CssBaseline } from "@mui/material";
const theme = createTheme();

export const AppProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
        <CssBaseline />
      </QueryClientProvider>
    </ThemeProvider>
  );
};
