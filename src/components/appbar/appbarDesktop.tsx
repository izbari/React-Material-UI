import { Search } from "@mui/icons-material";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { ActionIconsContainerDesktop, ActionIconsContainerMobile, AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import Actions from "./actions";
import {useUIContext} from '../../context/ui';
function AppbarDesktop({ matches }: { matches: boolean }) {
  const {setSearchBoxOpen} = useUIContext();
  return (
        <AppbarContainer>
      <AppbarHeader>My bags</AppbarHeader>
      <MyList type="row">
        <ListItemText>Home</ListItemText>
        <ListItemText>Categories</ListItemText>
        <ListItemText>Products</ListItemText>
        <ListItemText>Contact Us</ListItemText>
        <ListItemButton>
          <ListItemIcon onClick={()=>setSearchBoxOpen(true)}>
            <Search />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
      <Actions matches={matches}/>
      
    </AppbarContainer>
    /*
    appbar container
    header
    list
    */
  );
}

export default AppbarDesktop;
