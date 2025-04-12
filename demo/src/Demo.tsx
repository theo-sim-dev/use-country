import React from "react";
import {useCountry} from "../../dist";
import {
  Box,
  Typography,
  CircularProgress,
  Paper,
  Button,
  Divider,
} from "@mui/material";

const Demo = () => {
  const {country, error, loading, getCountryByIP} = useCountry();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        padding: 4,
        backgroundColor: "#f5f5f5",
        boxSizing: "border-box",
      }}
    >
      <Paper elevation={3} sx={{padding: 4, width: 500, textAlign: "center"}}>
        <Typography variant="h5" gutterBottom color="primary">
          useCountry Hook Demo
        </Typography>
        <Divider />
        {loading && <CircularProgress />}
        {error && <Typography color="error">Error: {error.message}</Typography>}
        {!loading && country && (
          <Box sx={{marginTop: 2, textAlign: "left"}}>
            <Typography variant="h6">
              You're currently in: {country.name} {country.flag}
            </Typography>
            <Typography>Country Code: {country.code}</Typography>
            <Typography>Dial Code: {country.dialCode}</Typography>
            <Typography>
              Currency: {country.currency} ({country.currencySymbol}
              {country.currencyCode})
            </Typography>
            <Typography>Local name: {country.localName}</Typography>
            <Box
              sx={{
                marginTop: 2,
                padding: 2,
                backgroundColor: "#e0e0e0",
                borderRadius: 2,
                textAlign: "left",
              }}
            >
              <Typography variant="subtitle1" gutterBottom>
                Country:
              </Typography>
              <Typography
                variant="body2"
                component="pre"
                sx={{whiteSpace: "pre-wrap", wordBreak: "break-word"}}
              >
                {JSON.stringify(
                  {
                    name: country.name,
                    flag: country.flag,
                    code: country.code,
                    dialCode: country.dialCode,
                    currency: country.currency,
                    currencySymbol: country.currencySymbol,
                    currencyCode: country.currencyCode,
                    localName: country.localName,
                  },
                  null,
                  2,
                )}
              </Typography>
            </Box>
          </Box>
        )}
        <Box sx={{marginTop: 4}}>
          <Button
            variant="contained"
            color="primary"
            onClick={getCountryByIP}
            disabled={loading}
            sx={{
              textTransform: "none",
            }}
            fullWidth
          >
            Fetch Your Country Again
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Demo;
