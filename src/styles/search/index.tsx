import {styled,Box, TextField} from "@mui/material";
import { Colors } from "../theme";

export const SearchBoxContainer = styled(Box)(({theme})=>({
    position: 'absolute',
    top:0,
    left:0,
    width: '100%',
    height: '100%',
    backgroundColor: Colors.primary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    index:9999,
    opacity:0.9,

}))

export const SearchField = styled(TextField)(({theme})=>({
".MuiInputLabel-root":{
    color:Colors.secondary
},
".MuiInput-root":{
    fontSize: "1rem",
    [theme.breakpoints.up('md')]:{
        fontSize: "2rem"
    },
    color:Colors.secondary
},
".MuiInput-root::before":{
    borderBottom: `1px solid ${Colors.secondary}`
},
padding:"0 0 0 40px"
}))