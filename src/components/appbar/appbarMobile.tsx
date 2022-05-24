import { Menu, Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useUIContext } from "../../context/ui";
import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import Actions from "./actions";

function AppbarMobile({ matches }: { matches: boolean }) {
  const { setDrawerOpen, setSearchBoxOpen } = useUIContext();
  return (
    <AppbarContainer>
      <IconButton onClick={() => setDrawerOpen(true)}>
        <Menu />
      </IconButton>
      <AppbarHeader textAlign="center" variant="h4">
        My Bags
      </AppbarHeader>
      <IconButton onClick={() => setSearchBoxOpen(true)}>
        <Search />
      </IconButton>
      <Actions matches={matches} />
    </AppbarContainer>
  );
}

export default AppbarMobile;
