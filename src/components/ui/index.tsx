import { Add, Close, Remove } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Colors } from "../../styles/theme";
export const clamp = (v: number, min: number, max: number) =>
  v <= min ? min : v >= max ? max : v;

function IncDec() {
  const [value, setValue] = React.useState<number>(10);

  return (
    <Box display="flex" justifyContent={'center'} alignItems='center' pt={3} >
      <IconButton
        onClick={() => {
          setValue((value) => clamp(value - 1, 1, 10));
        }}
        sx={{ borderRadius: 0, background: Colors.secondary }}
      >
        <Remove />
      </IconButton>
      <Typography
      sx={{pl:2, pr:2, fontSize:20, fontWeight:600, color:Colors.secondary}}
      variant="h4">{value}</Typography>
      <IconButton  onClick={() => {
          setValue((value) => clamp(value + 1, 1, 10));
        }}
        sx={{ borderRadius: 0, background: Colors.secondary }}

        >
          <Add />
      </IconButton>

    </Box>
  );
}

export default IncDec;
