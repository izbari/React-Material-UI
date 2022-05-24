import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles"
import Mobile from "./appbarMobile";
import Desktop from "./appbarDesktop";
export default function Appbar() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    return(
        <>
        {matches ? <Mobile matches={matches}/> :<Desktop  matches={matches}/>}
        </>
    );

}