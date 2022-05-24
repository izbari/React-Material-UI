import { TextFields } from "@mui/icons-material";
import { styled, TextField, Typography } from "@mui/material";
import { Colors } from "../theme";

export const FooterTitle = styled(Typography)(({ theme }) => ({
    textTransform: "uppercase",
    marginBottom : '1em'
}));

export const SubscribeTf = styled(TextField)(({ theme }) => ({
'.MuiInputLabel-root':{
    color :Colors.secondary
},
'.MuiInput-root::before':{
    borderBottom: `1px solid ${Colors.secondary}`
}
}));